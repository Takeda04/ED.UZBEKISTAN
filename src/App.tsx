import { Suspense, lazy, useContext, useEffect, useState } from "react";
import { useStateContext } from "./context/ContextProvider";
import { Backdrop, CircularProgress } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { routes } from "./router";
import { v4 } from "uuid";
import Private from "./private/Private";
import { AppContext } from "./context/AppContextProvider";
import { toastError } from "./toast/toast";
import $host from "./http";
import { IUserResponse } from "./http/types";
import { deleteTokens } from "./components/helpers/userHelper";

const Layout = lazy(() => import("./layouts/Layout"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

function App() {
  // const { setCurrentMode, currentMode } = useStateContext();
  const { appState, setAppState } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if(!accessToken){
      setLoading(false);
      return;
    }
    try {
      const user = await $host.get<IUserResponse>("/users/me/");
      setAppState({ user: user.data.data, isAuth: true });
    } catch (error) {
      if(error instanceof Error) {
        toastError(error.message);
      }
      deleteTokens();
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if(loading) {
    return null;
  }

  return (
    <Suspense
      fallback={
        <Backdrop
          sx={{
            backgroundColor: "#fff",
            color: "blue",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      }
    >
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {routes?.map(({ path, Component }) => (
          <Route
            path={path}
            key={v4()}
            element={
              <Private>
                <Layout>
                  <Component />
                </Layout>
              </Private>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
