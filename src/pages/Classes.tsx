import { v4 } from "uuid";
import ClassCard from "../components/Cards/ClassCard";
import { classes } from "../static/data";

const Classes = () => {

  return (
    <main className="flex flex-wrap items-center justify-center mt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-[900]:grid-cols-3 xl:grid-cols-3 gap-4 my-1">
        {classes?.map(({ class_num, id, categories }) => (
          <ClassCard class_num={class_num} id={id} categories={categories} key={v4()} />
        ))}
      </div>
    </main>
  );
};

export default Classes;
