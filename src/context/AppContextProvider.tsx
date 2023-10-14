import React from "react";

interface IUser {

}

interface IAppContext {

}

const AppContext = React.createContext<IAppContext>(null!);

interface IAppContextProvider {
    children: React.JSX.Element;
}


const AppContextProvider: React.FC<IAppContextProvider> = ({ children }) => {
    const [state, setState] = React.useState<IAppContext>({});
    
    return (
        <AppContext.Provider value={{ appState: state, setAppState: setState }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;