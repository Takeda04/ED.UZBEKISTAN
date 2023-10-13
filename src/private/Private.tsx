import React from "react";
import { Navigate } from "react-router-dom";

const Private: React.FC<{ children: React.JSX.Element }> = ({ children }) => {
  const ACCESS_TOKEN: string | null = localStorage.getItem("accessToken");
  const userRole = localStorage.getItem("userRole");
  if (ACCESS_TOKEN && ACCESS_TOKEN?.length > 900) {
    // if(userRole === 'student'){
    //   return 
    // }
      return children;
  }

  // If there's no access token, navigate to the login page
  return <Navigate to="/login" replace />;
};

export default Private;
