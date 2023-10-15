import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import InputSelect from '../components/Cards/InputSelect';
import { Container } from '../static/tags';
import { AI } from '../static/AI';

// Define a type for the AI questions
type Question = {
  question: string;
  options: { [key: string]: string };
  true_answer: string;
  description: string;
  video: string;
};

const Quizes = () => {
  // Explicitly define the type for randomQuestions
  const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // AI dan tasodifiy 25 ta savolni tanlash
    const shuffledAI = AI.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffledAI.slice(0, 25);

    setRandomQuestions(selectedQuestions);
  }, []);

  return (
    <Container>
      <Box className="flex flex-col gap-y-5">
        {randomQuestions.map(({ question, options, true_answer }) => (
          <Box className="border-b border-black py-3" key={true_answer}>
            <InputSelect question={question} options={options} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Quizes;
