import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


interface IHomeCardSubject {
    subject: string;
    url: string;
}

const HomeCardSubject: React.FC<IHomeCardSubject> = ({ subject, url }) => {

    return (
        <Grid item xs={2} sm={4} md={4}>
            <Link to="/profile/quizes">
                <Box className="bg-white shadow-lg transition-shadow duration-300 rounded-lg hover:shadow-blue-400 p-6">
                    
                    <Box component="h2" className="text-center text-2xl font-bold">
                        {subject}
                    </Box>

                </Box>
            </Link>
        </Grid>
    );
}


export default HomeCardSubject;