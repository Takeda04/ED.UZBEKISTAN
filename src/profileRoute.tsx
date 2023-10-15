import React from "react";
import Profile from "./pages/Profile";
import Quizes from "./pages/Quizes";
import ProfileTraining from "./pages/ProfileTraining";
import TrainingPage from "./pages/TrainingPage";
import Accuracy from "./pages/Accuracy";


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
    {
        path: "/training",
        index: false,
        component: <ProfileTraining/>,
    },
    {
        path: "/training/:id",
        index: false,
        component: <TrainingPage/>,
    }, 
    {
        path: "/accuracy",
        index: false,
        component: <Accuracy/>,
    },
]