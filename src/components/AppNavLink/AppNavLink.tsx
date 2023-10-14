import React from "react";
import { NavLink } from "react-router-dom";

interface IAppNavLink {
    children: React.JSX.Element[] | React.JSX.Element;
    className?: string;
    to: string;    
    isActiveClass: string;
}

const AppNavLink: React.FC<IAppNavLink> = ({ children, to, className, isActiveClass }) => {

    return (
        <NavLink to={to} className={({ isActive, isPending }) =>
            `${isPending ? "pending" : isActive ? isActiveClass : ""} ${className}`
        }
        >{ children }</NavLink>
    );
}

export default AppNavLink;