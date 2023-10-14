import React from 'react';
import { Section } from '../static/tags';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { Box } from '@mui/material';

const Layout: React.FC<{ children: React.JSX.Element }> = ({ children }) => {
  return (
    <Section>
      <Box className="flex">
        <Sidebar />
        <main className='ml-[200px]'>
          <Section>{children}</Section>
        </main>
      </Box>
    </Section>
  );
};

export default Layout;
