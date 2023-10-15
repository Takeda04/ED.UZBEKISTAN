import { Container, Title } from "../../static/tags";
import HomeCard from "../../components/Cards/HomeCard";
import { Grid } from "@mui/material";
import { v4 } from "uuid";
import HomeCardSubject from "../../components/Home/HomeCardSubject";

const Main = () => {

  const data = [
    {
      subject: "Math",
      url: "https://fs.getcourse.ru/fileservice/file/download/a/564257/sc/307/h/899975eccd05dce8ab1d8f1f010e87d6.png",
    },
    {
      subject: "English",
      url: "https://fs.getcourse.ru/fileservice/file/download/a/564257/sc/307/h/899975eccd05dce8ab1d8f1f010e87d6.png",
    },
    {
      subject: "Physics",
      url: "https://fs.getcourse.ru/fileservice/file/download/a/564257/sc/307/h/899975eccd05dce8ab1d8f1f010e87d6.png",
    },
  ];


  return (
    <Container>    
      <Title className="border-b border-black mt-4">My courses</Title>

      <Grid className="!mt-2" container spacing={2}>
        {data.map(({subject, url}) => (
          <HomeCardSubject subject={subject} url={url}/>
        ))}
      </Grid>
    </Container>
  );
};

export default Main;
