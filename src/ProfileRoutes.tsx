import React from "react";
import { Routes, Route } from "react-router-dom";
import { profileRouteList } from "./profileRoute";
import Profile from "./pages/Profile";
import ProfileLayout from "./layouts/ProfileLayout";


const ProfileRoutes = () => {


    return (
        <Routes>
                <Route element={<ProfileLayout/>}>
                    {profileRouteList.map((route) => (
                        <Route 
                            key={route.path}
                            index={route.index} 
                            path={route.path} 
                            element={route.component} 
                        />
                    ))}
                </Route>
        </Routes>
    );
}

export default ProfileRoutes;