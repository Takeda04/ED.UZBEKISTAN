import React from 'react';
import { Section } from '../static/tags';
import Header from '../components/Header/Header';

const Layout: React.FC<{ children: React.JSX.Element }> = ({ children }) => {
  return (
    <Section>
      <Header />
      <Section>{children}</Section>
    </Section>
  );
};

export default Layout;
