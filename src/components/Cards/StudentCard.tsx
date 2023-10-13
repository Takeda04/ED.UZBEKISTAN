import { Avatar, Badge, Box, Card, IconButton } from "@mui/material";
import { Description, Section, Title } from "../../static/tags";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const StudentCard: React.FC<{ id: number }> = ({ id }) => {



  return (
    <Link to={`/student/${id}`}>
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
              Bahtibek Anvarov
              <BsPatchCheckFill className="text-[.8em] text-green-500" />
            </Title>
          </div>
          <Description className="text-[.8em] text-gray-500">
            11<sup>a</sup>sinf o'quvchisi
          </Description>
        </Section>
      </Box>
      <Box className="w-full my-2">
        <Description>
        Bahtibek Anvarov maktabning eng oldi o'quchilaridan biri. Hozirgi paytda o'zining mahorati bilan tengdoshlari orasida ajralib turibdi
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
      </Box>
    </Card>
    </Link>
  );
};

export default StudentCard;
