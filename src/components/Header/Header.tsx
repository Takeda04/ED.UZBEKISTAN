import React, { useState } from 'react';

//Import Styled Component

import { Container, Description, HtmlHeader, Section } from '../../static/tags';

//Import MUI components

import { Box, Paper, Menu, Badge, Avatar, MenuItem, IconButton, ListItemIcon } from '@mui/material';

//Import Assests
import { MdOutlineClass, MdSettings } from 'react-icons/md';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { PiStudentBold, PiNewspaperClippingBold } from 'react-icons/pi';
import { ImStatsBars } from 'react-icons/im';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { news_list } from '../../pages/News';
import { deleteTokens } from '../helpers/userHelper';

const Header = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState<null | HTMLElement>(null);
  const open = Boolean(menu);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(null);
  };

  const logout = () => {
    handleClose();
    deleteTokens();
    navigate('/login');
  }

  return (
    <Paper
      sx={{ backgroundImage: 'none' }}
      className={`bg-transparent shadow-none w-full rounded-none border-b-2 bg-white sticky top-0 z-[999]`}
    >
      <Container>
        <HtmlHeader className='!px-0 justify-between' >
          <Link to={'/'} className='inline-flex items-center gap-1'>
            <h1 className={`text-[1.8em] text-black font-bold`}>
              EDU<span className='text-blue-500'>ZONE</span>
            </h1>
          </Link>
          <Section className='flex items-center gap-5'>
            <Box className='flex items-center cursor-pointer hover:text-blue-500' onClick={() => navigate('/classes')}>
              <IconButton color='inherit'>
                <MdOutlineClass className='text-[1.4rem]' />
              </IconButton>
              <Description>Sinflar</Description>
            </Box>
            <Box className='flex items-center cursor-pointer hover:text-blue-500' onClick={() => navigate('/students')}>
              <IconButton color='inherit'>
                <PiStudentBold className='text-[1.4rem]' />
              </IconButton>
              <Description>O'quvchilar</Description>
            </Box>
            <Box className='flex items-center cursor-pointer hover:text-blue-500' onClick={() => navigate('/teachers')}>
              <IconButton color='inherit'>
                <FaChalkboardTeacher className='text-[1.4rem]' />
              </IconButton>
              <Description>Ustozlar</Description>
            </Box>
            <Box className='flex items-center cursor-pointer hover:text-blue-500' onClick={() => navigate('/news')}>
              <IconButton color='inherit'>
                <Badge badgeContent={news_list ? news_list?.length : 0} color='primary'>
                  <PiNewspaperClippingBold className='text-[1.4rem]' />
                </Badge>
              </IconButton>
              <Description>Yangiliklar</Description>
            </Box>
            <Box className='flex items-center cursor-pointer hover:text-blue-500' onClick={() => navigate('/statistics')}>
              <IconButton color='inherit'>
                <ImStatsBars />
              </IconButton>
              <Description>Statistika</Description>
            </Box>
            <IconButton
              onClick={handleClick}
              size='small'
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar
                sx={{
                  width: 45,
                  height: 45,
                }}
                alt='Ava'
                src='../../assets/images/me.jpeg'
                className='border-2'
              />
            </IconButton>
            <Menu
              id='basic-menu'
              anchorEl={menu}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link to='/profile'>
                  <ListItemIcon>
                    <BiUser />
                  </ListItemIcon>
                  Profilim
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to='/settings'>
                  <ListItemIcon>
                    <MdSettings />
                  </ListItemIcon>
                  Sozlamalar
                </Link>
              </MenuItem>
              <MenuItem onClick={logout}>
                <ListItemIcon>
                  <BiLogOut />
                </ListItemIcon>
                Chiqish
              </MenuItem>
            </Menu>
          </Section>
        </HtmlHeader>
      </Container>
    </Paper>
  );
};

export default Header;
