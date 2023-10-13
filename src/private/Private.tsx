import React from "react";
import { Navigate } from "react-router-dom";

const Private: React.FC<{ children: React.JSX.Element }> = ({ children }) => {
  return children;
};

export default Private;
