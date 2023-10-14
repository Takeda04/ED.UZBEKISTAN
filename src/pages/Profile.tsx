import React, { useState, useEffect, useContext } from "react";
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import  Sidebar  from "../components/Sidebar/Sidebar";
import { Container, Title } from "../static/tags";
import { DatePicker } from "@mui/x-date-pickers";
import Textarea from '@mui/joy/Textarea';
import { toastError, toastLoading, toastSuccess } from "../toast/toast";
import $host from "../http";
import { AppContext, IUser } from "../context/AppContextProvider";

interface IProfile {

}

interface IRegionsResponse {
  success: boolean;
  errors: {}[];
  data: { guid: string; name: string }[];
}

const Profile: React.FC<IProfile> = () => {
  const [regions, setRegions] = useState<IRegionsResponse['data']>([]);
  const [districts, setDistricts] = useState<IRegionsResponse['data']>([]);
  const { appState } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [valueInputs, setValueInputs] = useState({
    firstName: appState.user?.first_name,
    lastName: appState.user?.last_name,
    email: appState.user?.email,
    phone: appState.user?.phone || '',
    address: appState.user?.address || '',
    imgSrc: appState.user?.image || '',
  });
  const { firstName, lastName, email, phone, address, imgSrc } = valueInputs;
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [saveLoading, setSaveLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
 
  const fetchRegionsAndDistricts = async () => {
    let toastId = toastLoading("Waiting...");
    try {
      const regionsResponse = await $host.get<IRegionsResponse>("/common/districts/");
      const districtsReponse = await $host.get<IRegionsResponse>("/common/regions/");
      setRegions(regionsResponse.data.data);
      setDistricts(districtsReponse.data.data);
    } catch (error) {
      if(error instanceof Error) {
        toastError(error.message, toastId);
      }
    } finally {
      setLoading(false);
      toastSuccess("Success", toastId);
    }
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setValueInputs(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) {
      setImage(null);
      return;
    }
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
        setValueInputs(prev => ({
          ...prev,
          imgSrc: reader.result as string,
        }))
    }
    reader.readAsDataURL(file);
    setImage(file);
  }
    
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const toastId = toastLoading("Saving data...");
    if(!firstName || !lastName || !email || !phone) {
      return toastError("Please fill in all fields!");
    }
    setSaveLoading(true);
    try {
      const formData = new FormData();
      formData.append('first_name', firstName);
      formData.append('last_name', lastName);
      formData.append('phone', phone);
      formData.append('address', address);
      if(image) {
        formData.append('image', image);
      }
      const user = await $host.patch<IUser>("/users/me/", formData);
      console.log(user)
      toastSuccess("Saved data", toastId);
    } catch (error) {
      if(error instanceof Error) {
        toastError(error.message, toastId);
      }
      setSaveLoading(false);
    }
  }

  const handleChangeRegion = (e: SelectChangeEvent) => {
    setSelectedRegion(e.target.value);
  }

  const handleChangeDistrict = (e: SelectChangeEvent) => {
    setSelectedDistrict(e.target.value);
  }

  useEffect(() => {
    fetchRegionsAndDistricts();
  }, []);

  if(loading) {
    return null;
  }

  return (
    <Box className="px-4">
      <Title className="mt-10">My profile</Title>
      {/* <Box className="mt-2">
        <span className="font-bold ">E-mail: </span>
        <span>bakhtibekanvarov@gmail.com</span>
      </Box> */}
      <Box component="form" onSubmit={handleSubmit} action="" method="post">
        <Box className="mt-4 flex flex-wrap">
          <Box className="flex-1 mr-4">
            <TextField 
              className="w-full"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              id="outlined-basic" 
              label="First name" 
              variant="outlined" 
            />
            <TextField 
              className="w-full !mt-4"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              id="outlined-basic" 
              label="Last name" 
              variant="outlined" 
            />
            <TextField 
              className="w-full !mt-4"
              name="email"
              value={email}
              onChange={handleChange}
              id="outlined-basic" 
              label="Email" 
              variant="outlined" 
            />
          </Box>
          <Box className="flex-1">
            <TextField 
              className="w-full"
              name="phone"
              value={phone}
              onChange={handleChange}
              id="outlined-basic" 
              label="Phone" 
              variant="outlined" 
              type="number"
            />
            <FormControl className="!mt-4" fullWidth>
              <InputLabel id="region">Region</InputLabel>
              <Select onChange={handleChangeRegion} value={selectedRegion} labelId="region" id="region" fullWidth label="Region">
                {regions.map((region) => (
                  <MenuItem value={region.guid} key={region.guid}>
                    {region.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className="!mt-4" fullWidth>
              <InputLabel id="district">District</InputLabel>
              <Select onChange={handleChangeDistrict} value={selectedDistrict} labelId="district" id="district" fullWidth label="District">
                {districts.map((district) => (
                  <MenuItem value={district.guid} key={district.guid}>
                    {district.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box className="mt-4 flex w-2/4 justify-between">
          <Box className="border border-rounded rounded-lg">
            <Box
              component="img"
              className="rounded-lg"
              src={imgSrc}
              alt="profile image"
              sx={{
                height: 300,
                width: 300,
                objectFit: "cover"
              }}
            />
          </Box>
          <input 
            className="mb-auto border border-black p-4 rounded"
            accept="image/*"
            type="file"
            onChange={handleChangeFile}
          />
        </Box>
        <Box className="mt-4">
          <Textarea
            id="about-me"
            className="!bg-transparent"
            name="address"
            value={address}
            onChange={handleChange}
            minRows={2}
            placeholder="Address"
            variant="outlined"
            size="lg"
          />
        </Box>

        <Box className="mt-4">
          <Button type="submit" variant="contained" color="success">
            Success
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
