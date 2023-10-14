import SidebarCard from "../Cards/SidebarCard"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {


  type ISidebarMenu = {
    icon: any;
    title: string;
  }


  const SidebarMenu: ISidebarMenu[] = [
    {
      icon: <BookmarkBorderIcon/>,
      title: "Training",
    },
    {
      icon: <HelpOutlineIcon/>,
      title: "Quizes"
    },
    {
      icon: <SignalCellularAltIcon/>,
      title: "Accuracy",
    },
    {
      icon: <NotificationsNoneIcon/>,
      title: "Notifications",
    }
  ];

  return (
    <Box className="fixed h-full w-[200px] border-r border-black">
      
      <Box className="flex mt-10 justify-center">
        <h1 className={`text-[1.8em] text-black font-bold`}>
            EDU<span className='text-blue-500'>ZONE</span>
        </h1>
      </Box>

      <Box className="flex flex-col mt-8 h-full">
        {SidebarMenu.map((item) => (
          <Link className="flex py-4 px-8 hover:bg-blue-300" to={item.title}>
            {item.icon} <span className="ml-2 font-medium">{item.title}</span>
          </Link>
        ))}

          <Link className="flex py-4 px-8 hover:bg-blue-300 mt-auto" to={"/"}>
            <LogoutIcon/> <span className="ml-2 font-medium">Logout</span>
          </Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
