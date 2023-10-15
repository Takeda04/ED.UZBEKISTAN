import React from "react";
import Profile from "./pages/Profile";
import Quizes from "./pages/Quizes";


export const profileRouteList = [
    {
        path: "",
        index: true,
        component: <Profile/>
    },
    {
        path: "/quizes",
        index: false,
        component: <Quizes/>,
    },
]