import React from "react";
import { Section } from "../static/tags";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";

const Layout: React.FC<{children: React.JSX.Element}> = ({ children }) => {
  return (
    <Section>
      <Header />
      <Section className="w-full flex flex-col items-center justify-start">
        <Box className="flex items-center justify-center">
          {children}
        </Box>
      </Section>
    </Section>
  );
};

export default Layout;
