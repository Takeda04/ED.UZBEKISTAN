import { SvgIconProps } from "@mui/material";
import SidebarCard from "../Cards/SidebarCard"
import QuizIcon from '@mui/icons-material/Quiz';
const Sidebar = () => {


  type menu = {
    icon: any;
    title: string;
  }[]


  const sidebar_list: menu = [
    {
      icon: <QuizIcon/>,
      title: "Training",
    },
    {
      icon: <QuizIcon/>,
      title: "Quizes"
    },
    {
      icon: <QuizIcon/>,
      title: "Accuracy",
    },
    {
      icon: <QuizIcon/>,
      title: "Message",
    }
  ];

  return (
    <main className="flex flex-col items-center gap-y-2 bg-blue-200">
      {sidebar_list?.map(({title, icon}) => (
        <SidebarCard title={title} icon={icon} />
      ))}
    </main>
  );
};

export default Sidebar;
