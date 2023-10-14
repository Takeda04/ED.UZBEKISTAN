import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {

    return (
        <Box>
            <Sidebar/>
            <main className="ml-[200px]">
                <Outlet/>
            </main>
        </Box>
    );
}

export default ProfileLayout;