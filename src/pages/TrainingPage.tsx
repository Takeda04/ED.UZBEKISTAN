import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import { Title } from "../static/tags";

const TrainingPage = () => {
    const { id } = useParams();

    return (
        <Box>
            <Title>Training</Title>
        </Box>
    );
}

export default TrainingPage;