import { Container, Title } from "../static/tags";
import HomeCard from "../components/Cards/HomeCard";
import { Grid } from "@mui/material";
import { v4 } from "uuid";

const Main = () => {

  const data = [
    {
      level: "Intermediate",
      description:
        "At this level, the student will be able to understand and communicate in familiar situations, use a range of tenses and complex sentence structures, comprehend spoken and written English, and express themselves with a degree of fluency and accuracy.",
      url: "https://fs.getcourse.ru/fileservice/file/download/a/564257/sc/307/h/899975eccd05dce8ab1d8f1f010e87d6.png",
    },
    {
      level: "Intermediate",
      description:
        "At this level, the student will be able to understand and communicate in familiar situations, use a range of tenses and complex sentence structures, comprehend spoken and written English, and express themselves with a degree of fluency and accuracy.",
      url: "https://fs.getcourse.ru/fileservice/file/download/a/564257/sc/307/h/899975eccd05dce8ab1d8f1f010e87d6.png",
    },
    {
      level: "Intermediate",
      description:
        "At this level, the student will be able to understand and communicate in familiar situations, use a range of tenses and complex sentence structures, comprehend spoken and written English, and express themselves with a degree of fluency and accuracy.",
      url: "https://fs.getcourse.ru/fileservice/file/download/a/564257/sc/307/h/899975eccd05dce8ab1d8f1f010e87d6.png",
    },
    {
      level: "Intermediate",
      description:
        "At this level, the student will be able to understand and communicate in familiar situations, use a range of tenses and complex sentence structures, comprehend spoken and written English, and express themselves with a degree of fluency and accuracy.",
      url: "https://fs.getcourse.ru/fileservice/file/download/a/564257/sc/307/h/899975eccd05dce8ab1d8f1f010e87d6.png",
    },
  ];
  return (
    <Container>
      <Title className="border-b border-black mt-4">My courses</Title>

      <Grid className="!mt-2" container spacing={2}>
        {data?.map(({url, level, description}) => (
        <HomeCard key={v4()} url={url} level={level} description={description} />
        ))}
      </Grid>
    </Container>
  );
};

export default Main;
