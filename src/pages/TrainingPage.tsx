import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Title } from "../static/tags";
import Youtube from "react-youtube";
import InputSelect from "../components/Cards/InputSelect";
import { quizes } from "../static/data";

const TrainingPage = () => {
    const { id } = useParams();
    const [step, setStep] = useState<1 | 2>(1);
    const wrongAnswers = JSON.parse(localStorage.getItem("WrongAnswers")!)[+id!];


    function youtube_parser(url: string){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    return (
        <Box className="mx-4 mt-10">
            <Title className="bg-gray-700 text-white rounded-lg px-4 py-2">{ wrongAnswers.question }</Title>

            <Box className="mt-8 bg-white rounded-lg shadow-lg p-4">
                <Box className="border border-black rounded-lg flex">
                    <Button 
                        className="flex-1 !border-r-none" 
                        variant="outlined"
                        disabled={step === 1}
                        onClick={() => setStep(1)}
                    >Subject</Button>
                    <Button 
                        className="flex-1" 
                        variant="outlined"
                        disabled={step === 2}
                        onClick={() => setStep(2)}
                    >Additional resources</Button>
                </Box>
                <Box className="mt-8">
                    {step === 1 && (
                        <>
                            <Title className="mb-4">
                                Subject
                            </Title>
                            <Box className="p">
                                {wrongAnswers.description}
                            </Box>

                            <Box className="mt-10">
                                <Title className="">
                                    Tests
                                </Title>
                                {quizes?.slice(0, 6).map(({ question, options, correctAnswer }, idx) => (
                                    <Box className="border-b border-black py-3" key={idx}>
                                        <InputSelect
                                            key={correctAnswer}
                                            question={question}
                                            options={options}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <Title className="mb-4">
                                Videos
                            </Title>
                            <Youtube  
                                videoId={youtube_parser(wrongAnswers.video)}
                                className="!mb-4"
                                opts={opts}
                            />

                        </>
                    )}
                    
                </Box>
            </Box>

        </Box>
    );
}

export default TrainingPage;