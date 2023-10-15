import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface IHomeCard {
    to: string;
    level: string;
    description: string;
    url: string;
}

const HomeCard: React.FC<IHomeCard> = ({ to, level, description, url }) => {



    return (
        <Grid item xs={2} sm={4} md={4}>
            <Link to={to}>
                <Box className="shadow-lg transition-shadow duration-300 rounded-lg hover:shadow-blue-400">
                    <Box>
                        <Box
                            className="rounded-t-lg"
                            src={url}
                            component="img"
                            sx={{
                                height: 180,
                                objectFit: "cover",
                            }}
                            alt="Subject image"
                        />
                    </Box>
                    <Box className="p-4">
                        <Box className="font-medium mt-2">
                            Subject: 
                            <span className="font-normal ml-1">{ level }</span>
                        </Box>
                        <Box
                            className="mt-2 text-sm"
                            component="p"
                        >
                            {description}
                        </Box>
                    </Box>
                </Box>
            </Link>
        </Grid>
    )
}

export default HomeCard;