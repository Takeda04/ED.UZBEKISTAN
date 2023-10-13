import { Box } from "@mui/material";
import  Sidebar  from "../components/Sidebar/Sidebar";

const Profile:React.FC<{children: JSX.Element}> = ({children}) => {
  return (
    <main className="flex items-center justify-between">
      <Sidebar />
      <Box>
        {children}
      </Box>
    </main>
  );
};

export default Profile;
