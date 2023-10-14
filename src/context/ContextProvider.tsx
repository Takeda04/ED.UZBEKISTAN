import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface IStateContext {
  currentMode: string;
  setCurrentMode: Dispatch<SetStateAction<string>>
}

interface IContextProvider {
  children: React.JSX.Element;
}

const StateContext = createContext<IStateContext>(null!);

const ContextProvider: React.FC<IContextProvider> = ({ children }) => {
  const [currentMode, setCurrentMode] = useState<string>("Light");

  return (
    <StateContext.Provider value={{ currentMode, setCurrentMode }}>
      {children}
    </StateContext.Provider>
  );
};

export const StateProvider = ContextProvider;
export const useStateContext = () => useContext(StateContext);
