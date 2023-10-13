import { Suspense, lazy } from "react";
import { useStateContext } from "./context/ContextProvider";
import { Backdrop, CircularProgress } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { routes } from "./router";
import { v4 } from "uuid";
const Layout = lazy(() => import("./layouts/Layout"));
const Private = lazy(() => import("./private/Private"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

function App() {
  const { setCurrentMode, currentMode } = useStateContext();
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
        {/* Routes */}
        {routes?.map(({ path, Component }) => (
          <Route
            path={path}
            element={
              <Private>
                <Layout>
                  <Component />
                </Layout>
              </Private>
            }
            key={v4()}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
