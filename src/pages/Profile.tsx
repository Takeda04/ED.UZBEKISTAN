import React, { useState, useEffect } from "react";
import { Box, TextField, Button, FormControl, InputLabel } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import  Sidebar  from "../components/Sidebar/Sidebar";
import { Container, Title } from "../static/tags";
import { DatePicker } from "@mui/x-date-pickers";
import Textarea from '@mui/joy/Textarea';
import { toastError } from "../toast/toast";

interface IProfile {

}

const Profile: React.FC<IProfile> = () => {
  const [regions, setRegions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchRegionsAndDistricts = async () => {
    try {
      
    } catch (error) {
      if(error instanceof Error) {
        toastError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }
  
    
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    
  }

  useEffect(() => {
    fetchRegionsAndDistricts();
  }, []);


  return (
    <Box className="px-4">
      <Title className="mt-4">My profile</Title>
      <Box className="mt-2">
        <span className="font-bold ">E-mail: </span>
        <span>bakhtibekanvarov@gmail.com</span>
      </Box>
      <FormControl onSubmit={handleSubmit}>
        <Box className="mt-4 flex flex-wrap">
          <Box className="flex-1 mr-4">
            <TextField className="w-full" id="outlined-basic" label="First name" variant="outlined" />
            <TextField className="w-full !mt-4" id="outlined-basic" label="Last name" variant="outlined" />
            <TextField className="w-full !mt-4" id="outlined-basic" label="Email" variant="outlined" />
          </Box>
          <Box className="flex-1">
            <TextField className="w-full" id="outlined-basic" label="Phone" variant="outlined" type="number"/>
            <TextField className="w-full !mt-4" id="outlined-basic" label="Country" variant="outlined" />
            <TextField className="w-full !mt-4" id="outlined-basic" label="City" variant="outlined" />
          </Box>
        </Box>
        <Box className="mt-4">
          <Textarea
            id="about-me"
            className="!bg-transparent"
            minRows={2}
            placeholder="About me"
            variant="outlined"
            size="lg"
          />
        </Box>

        <Box className="mt-4">
          <Button type="submit" variant="contained" color="success">
            Success
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default Profile;
