import React from 'react';
import { Section } from '../static/tags';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { Box } from '@mui/material';
import { useLocation, useRoutes } from 'react-router-dom';

const Layout: React.FC<{ children: React.JSX.Element }> = ({ children }) => {
  const route = useLocation();

  console.log(route)

  return (
    <Section >
      {route.pathname.split('/')[1] !== 'profile' && (
        <Header/>
      )}
      <Section>{children}</Section>
    </Section>
  );
};

export default Layout;
