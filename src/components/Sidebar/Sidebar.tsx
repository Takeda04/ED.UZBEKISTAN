import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {


  type ISidebarMenu = {
    icon: any;
    title: string;
    path: string;
  }


  const SidebarMenu: ISidebarMenu[] = [
    {
      icon: <BookmarkBorderIcon/>,
      title: "Training",
      path: 'training',
    },
    {
      icon: <HelpOutlineIcon/>,
      title: "Testing",
      path: 'quizes',
    },
    {
      icon: <SignalCellularAltIcon/>,
      title: "Accuracy",
      path: 'accuracy',
    },
    {
      icon: <NotificationsNoneIcon/>,
      title: "Notifications",
      path: 'notification',
    },
    {
      icon: <QuestionAnswerIcon/>,
      title: "Conversation",
      path: 'conversation',
    }
  ];

  return (
    <Box className="fixed top-0 flex flex-col h-full w-[200px] shadow-xl bg-white">
      
      <Box className="flex mt-10 justify-center ">
        <Link to="/" className={`text-[1.8em] text-black font-bold`}>
            EDU<span className='text-blue-500'>ZONE</span>
        </Link>
      </Box>

      <Box className="flex flex-col mt-8 h-full ">
        {SidebarMenu.map((item) => (
          <NavLink key={item.title}  className="flex py-4 px-8 hover:bg-blue-300" to={item.path}> 
            {item.icon} <span className="ml-2 font-medium">{item.title}</span>
          </NavLink>
        ))}

          <Link className="flex py-4 px-8 hover:bg-blue-300 mt-auto" to={"/"}>
            <LogoutIcon/> <span className="ml-2 font-medium">Back</span>
          </Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
