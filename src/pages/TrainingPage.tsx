import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Title } from "../static/tags";
import Youtube from "react-youtube";
import InputSelect from "../components/Cards/InputSelect";
import { toastError, toastSuccess } from "../toast/toast";
import { quizes } from "../static/data";

const TrainingPage = () => {
    const { id } = useParams();
    const [step, setStep] = useState<1 | 2>(1);
    const navigate = useNavigate();
    const wrongAnswers = JSON.parse(localStorage.getItem("WrongAnswers")!)[+id!];
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(new Array(quizes.slice(0, 6).length).fill(''));
    const [wrongAnswer, setWrongAnswer] = useState<boolean[]>(new Array(quizes.slice(0, 6).length).fill(false));

    function youtube_parser(url: string): string | undefined {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : undefined;
    }

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[idx] = event.target.value;
        setSelectedAnswers(updatedAnswers);
    };


    const handleSubmit = () => {
        let flag = false;
    
        selectedAnswers.forEach((item, idx) => {
          if(item.length === 0) {
            toastError(`${idx + 1} not choosen!`);
            flag = true;
          }
        });
        if(flag) {
          return;
        }

        const updatedAnswer = [...wrongAnswer];

        quizes.slice(0, 6).forEach((item, idx) => {
            if(item.correctAnswer !== selectedAnswers[idx]) {
                updatedAnswer[idx] = true;
                return;
            }
            updatedAnswer[idx] = false;
        })

        setWrongAnswer(updatedAnswer);
        


        // localStorage.setItem("", JSON.stringify(wrongAnswers));
        // toastSuccess("Test succesfully submited!");
        // navigate("/profile/training");
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
                                            value={selectedAnswers[idx]}
                                            onChange={(event) => handleAnswerChange(event, idx)}
                                            isWrong={wrongAnswer[idx]}
                                        />
                                    </Box>
                                ))}
                            </Box>

                            <Button className="!my-6" onClick={handleSubmit} variant="contained">
                                Submit
                            </Button>
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