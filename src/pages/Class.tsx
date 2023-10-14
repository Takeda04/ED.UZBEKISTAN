import { useParams } from "react-router-dom";
import { classes } from "../static/data";
import ClassCard from "../components/Cards/ClassCard";
import { Box } from "@mui/material";
import SinfCard from "../components/Cards/SinfCard";

const ClassComponent = () => {
  const { num } = useParams();
  const sinf = classes.find((item) => {
    if (!num) return false;
    return item.id === +num;
  });

  return (
    <main className="flex flex-wrap items-center justify-center mt-2">
      <Box className="grid grid-cols-1 sm:grid-cols-2 w-[900]:grid-cols-3 xl:grid-cols-3 gap-4 my-1">
        {sinf?.categories?.((item) => (
          <SinfCard item={item} sinf_raqam={sinf.class_num} />
        ))}
      </Box>
    </main>
  );
};

export default ClassComponent;
