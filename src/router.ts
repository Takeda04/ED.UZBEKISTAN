import  { lazy } from "react";

const Main = lazy(() => import("./pages/Main"));
const Classes = lazy(() => import("./pages/Classes"));
const News = lazy(() => import("./pages/News"));
const Profile = lazy(() => import("./pages/Profile"));
const Statistics = lazy(() => import("./pages/Statistic"));
const Students = lazy(() => import("./pages/Students"));
const Teachers = lazy(() => import("./pages/Teachers"));
const Settings = lazy(() => import("./pages/Settings"));
const ClassComponent = lazy(() => import("./pages/Class"))

export const routes = [
  {
    path: "/",
    Component: Main,
  },
  {
    path: "/classes",
    Component: Classes,
  },
  {
    path: "/class/:id", 
    Component: ClassComponent,
  },
  {
    path: "/news",
    Component: News,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/statistics",
    Component: Statistics,
  },
  {
    path: '/students',
    Component: Students,
  },
  {
    path: "/teachers",
    Component: Teachers,
  },
  {
    path: "/settings",
    Component: Settings
  }
];
