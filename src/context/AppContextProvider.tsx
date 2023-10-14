import React from "react";

export interface IUser {
    first_name: string;
    last_name: string;
    email: string;
    phone: string | null;
    image: string | null;
    region: string | null;
    district: string | null;
    address: string | null;
}

interface IState {
    user?: IUser
    isAuth: boolean;
}

interface IAppContext {
    appState: IState;
    setAppState: React.Dispatch<React.SetStateAction<IState>>;
}

export const AppContext = React.createContext<IAppContext>(null!);

interface IAppContextProvider {
    children: React.JSX.Element;
}

const AppContextProvider: React.FC<IAppContextProvider> = ({ children }) => {
    const [state, setState] = React.useState<IState>({ isAuth: false });
    
    return (
        <AppContext.Provider value={{ appState: state, setAppState: setState }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;