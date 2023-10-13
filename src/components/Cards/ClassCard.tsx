import { Link } from "react-router-dom";

const ClassCard: React.FC<{ class_num: number }> = ({ class_num }) => {
  return (
    <Link to={"/class"}>
      <main className="max-w-6xl w-80 max-h-48 h-40 flex items-center justify-center bg-white rounded-xl text-5xl shadow-lg hover:text-6xl hover:shadow-blue-300 ">
        <p className="">{class_num}</p>
      </main>
    </Link>
  );
};

export default ClassCard;
