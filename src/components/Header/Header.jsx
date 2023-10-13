import React, { useState } from "react";

//Import Styled Component

import { Description, HtmlHeader, Section } from "../../static/tags";

//Import MUI components

import {
  Box,
  Paper,
  Menu,
  Badge,
  Avatar,
  MenuItem,
  IconButton,
  ListItemIcon,
  
} from "@mui/material";

//Import Assests
import { MdOutlineClass, MdSettings } from "react-icons/md";
import {  BiLogOut, BiUser } from "react-icons/bi";
import { PiStudentBold, PiNewspaperClippingBold} from "react-icons/pi"
import {ImStatsBars} from "react-icons/im"
import { FaChalkboardTeacher} from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom";

import { news_list } from "../../pages/News";

const Header = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(null);
  const open = Boolean(menu);
  const noma = true
  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(null);
  };

  return (
    <Paper
      sx={{ backgroundImage: "none" }}
      className="bg-transparent shadow-none w-full rounded-none border-b-2 bg-white px-[10em]"
    >
      <HtmlHeader className="justify-between">
        <Link to={"/"} className="inline-flex items-center gap-1">
          <h1 className={`text-[1.8em] text-black font-bold`}>
            Ed<span className="text-blue-500">Uzbekistan</span>
          </h1>
        </Link>
        <Section className="flex items-center gap-5">
          <Box
            className="flex items-center cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/classes")}
          >
            <IconButton color="inherit">
              <MdOutlineClass className="text-[1.4rem]" />
            </IconButton>
            <Description>Sinflar</Description>
          </Box>
          <Box
            className="flex items-center cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/students")}
          >
            <IconButton color="inherit">
              <PiStudentBold className="text-[1.4rem]" />
            </IconButton>
            <Description>O'quvchilar</Description>
          </Box>
          <Box
            className="flex items-center cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/teachers")}
          >
            <IconButton color="inherit">
              <FaChalkboardTeacher className="text-[1.4rem]" />
            </IconButton>
            <Description>Ustozlar</Description>
          </Box>
          <Box
            className="flex items-center cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/news")}
          >
            <IconButton color="inherit">
              <Badge badgeContent={news_list ? news_list?.length : 0} color='primary'>
                <PiNewspaperClippingBold className="text-[1.4rem]" />
              </Badge>
            </IconButton>
            <Description>Yangiliklar</Description>
          </Box>
          <Box
            className="flex items-center cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/statistics")}
          >
            <IconButton color="inherit">
              <ImStatsBars/>
            </IconButton>
            <Description>Statistika</Description>
          </Box>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
            sx={{
              width: 60,
              height: 60
            }}
              alt="Ava"
              src="../../assets/images/me.jpeg"
              className="border-2"
            />
          </IconButton>
          <Menu
            anchorEl={menu}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/profile">
                <ListItemIcon>
                  <BiUser />
                </ListItemIcon>
                Profilim
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
             <Link to="/settings">
             <ListItemIcon>
                <MdSettings />
              </ListItemIcon>
              Sozlamalar
             </Link>
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              <ListItemIcon>
                <BiLogOut />
              </ListItemIcon>
              Chiqish
            </MenuItem>
          </Menu>
        </Section>
      </HtmlHeader>
    </Paper>
  );
};

export default Header;
