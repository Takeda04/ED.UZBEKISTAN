import { Box } from "@mui/material";
import InputSelect from "../components/Cards/InputSelect";
import { quizes } from "../static/data";
import { Container } from "../static/tags";

const Quizes = () => {
  return (
    <Container>
      <Box className="flex flex-col gap-y-5">
        {quizes?.map(({ question, options, correctAnswer }) => (
          <Box className="border-b border-black py-3">
            <InputSelect
              key={correctAnswer}
              question={question}
              options={options}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Quizes;
