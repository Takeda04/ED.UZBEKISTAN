import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const ContextProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState("Light");

  return (
    <StateContext.Provider value={{ currentMode, setCurrentMode }}>
      {children}
    </StateContext.Provider>
  );
};

export const StateProvider = ContextProvider;
export const useStateContext = () => useContext(StateContext);
