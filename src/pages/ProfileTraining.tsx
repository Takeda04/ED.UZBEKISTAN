import { Box, Grid } from "@mui/material";
import React from "react";
import { Title } from "../static/tags";
import HomeCard from "../components/Cards/HomeCard";


const ProfileTraining = () => {

    return (
        <Box className="mx-6">
            <Title className='border-b border-black mt-4'>
                My courses
            </Title>

            <Grid className="!mt-2"  container spacing={2}>
                <HomeCard to="10"/>
                <HomeCard to="20"/>
                <HomeCard to="30"/>
                <HomeCard to="40"/>
            </Grid>
            
        </Box>
    );
}

export default ProfileTraining;