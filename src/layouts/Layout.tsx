import React from "react";
import { Section } from "../static/tags";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Sidebar from "../components/Siderbar/Sidebar";

const Layout = ({ children }) => {
  return (
    <Section className="flex justify-center">
      <Section className="w-full h-screen flex flex-col items-center justify-start">
        <Header />
        <Box className="w-full h-screen gap-x-2 flex items-center justify-between pr-[2em] bg-blue-100">
          <Sidebar className="h-screen" />
          <Box className="w-full">
            <Box className="h-screen flex items-center justify-center">
              {children}
            </Box>
          </Box>
        </Box>
      </Section>
    </Section>
  );
};

export default Layout;
