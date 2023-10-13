import { Avatar, Badge, Box, Card, IconButton } from "@mui/material";
import { Description, Section, Title } from "../../static/tags";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const TeacherCard = ({id}) => {
  const [{ like, dislike }, setActions] = useState({
    like: false,
    dislike: false,
  });


  return (
    <Link to={`/teacher/${id}`}>
    <Card className="border w-full min-h-[11.5em] h-auto flex flex-col gap-2 items-between rounded-lg p-5 relative">
      <Box className="flex items-center gap-2">
        <IconButton size="small" className="">
          <Badge
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            color="primary"
            variant="dot"
          >
            <Avatar
            sx={{
              width: 70,
              height: 70
            }}
              alt="Ava"
              src="https://trolologuy.github.io/me.png"
              className="border-2"
            />
          </Badge>
        </IconButton>
        <Section>
          <div className="flex items-center gap-5">
            <Title className="text-[1.2em] flex items-center gap-1">
              Olimjon Nishanaliyev
              <BsPatchCheckFill className="text-[.8em] text-green-500" />
            </Title>
          </div>
          <Description className="text-[.8em] text-gray-500">
            Frontend React Dasturchisi
          </Description>
        </Section>
      </Box>
      <Box className="w-full my-2">
        <Description>
          Olimjon Nishanaliyev 1.5 yildan ortiq tajribaga ega va yangi
          texnologiyalarni o'rganish va tajribasini yaxshilashga intilayotgan
          tajribali va etuk frontend dasturchisi.
        </Description>
      </Box>
      <Box className="w-full h-[15%] flex items-center">
        <Section className="w-full h-full flex items-center gap-3">
          <Description>
            Yuklandi: <span className="text-slate-400">1.10.2023</span>
          </Description>
         
          <Description className="flex items-center gap-1 text-blue-500">
            <MdLocationOn /> Uzbekistan
          </Description>
        </Section>
        {/* <Section className="flex items-center gap-2">
          <Box className="flex items-center">
            <IconButton
              color="primary"
              onClick={() =>
                setActions((prev) => ({
                  ...prev,
                  like: !like,
                  dislike: dislike ? !dislike : dislike,
                }))
              }
            >
              {like ? <AiFillLike /> : <AiOutlineLike />}
            </IconButton>
            <Description className="text-[.8em] text-blue-500">42k</Description>
          </Box>
          <Box className="flex items-center">
            <IconButton
              color="error"
              onClick={() =>
                setActions((prev) => ({
                  ...prev,
                  like: like ? !like : like,
                  dislike: !dislike,
                }))
              }
            >
              {dislike ? <AiFillDislike /> : <AiOutlineDislike />}
            </IconButton>
            <Description className="text-[.8em] text-red-500">12k</Description>
          </Box>
           <Box className="flex items-center">
            <IconButton color="warning">
              <BsFillBasket2Fill />
            </IconButton>
          </Box> 
        </Section> */}
      </Box>
    </Card>
    </Link>
  );
};

export default TeacherCard;
