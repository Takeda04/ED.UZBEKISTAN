import React from "react";
import SidebarCard from "../Cards/SidebarCard";

const Sidebar = () => {
  const sidebar_list = [
    {
      title: "Message",
    },
    {
      title: "Message",
    },
    {
      title: "Message",
    },
    {
      title: "Message",
    },
    {
      title: "Message",
    },
    {
      title: "Message",
    },{
      title: "Message",
    }
  ];

  return (
    <main className="w-[350px] h-screen flex flex-col items-center gap-y-2 bg-blue-200 overflow-y-scroll">
      {sidebar_list?.map(({title}) => (
        <SidebarCard title={title}/>
      ))}
    </main>
  );
};

export default Sidebar;
