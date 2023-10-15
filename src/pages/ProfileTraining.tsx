import { Box, Grid } from "@mui/material";
import React from "react";
import { Title } from "../static/tags";
import HomeCard from "../components/Cards/HomeCard";


const ProfileTraining = () => {
    const wrongAnswers = JSON.parse(localStorage.getItem('WrongAnswers')!);
    console.log(wrongAnswers)

    return (
        <Box className="mx-6">
            <Title className='border-b border-black mt-4'>
                My courses
            </Title>

            {!wrongAnswers ? (
                <Box component="h3">
                    You haven't passed any tests yet
                </Box>
            ) : (
                <Grid className="!mt-2"  container spacing={2}>
                    {wrongAnswers.map((item: any, idx: number) => (
                        <HomeCard to={String(idx)} level="Math" description={item.description} url={"https://fs.getcourse.ru/fileservice/file/download/a/564257/sc/307/h/899975eccd05dce8ab1d8f1f010e87d6.png"}/>
                    ))}
                </Grid>
            )}

            
            
        </Box>
    );
}

export default ProfileTraining;