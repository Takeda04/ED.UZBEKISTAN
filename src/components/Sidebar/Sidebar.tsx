import SidebarCard from "../Cards/SidebarCard"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Sidebar = () => {


  type menu = {
    icon: any;
    title: string;
  }[]


  const sidebar_list: menu = [
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
    <main className="flex flex-col items-center gap-y-2 bg-blue-200">
      {sidebar_list?.map(({title, icon}) => (
        <SidebarCard title={title} icon={icon} />
      ))}
    </main>
  );
};

export default Sidebar;
