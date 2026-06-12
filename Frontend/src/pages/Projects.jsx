import Sidebar from "../components/Sidebar";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import StreakCard from "../components/StreakCard/StreakCard";

const Project = () => {
  const [Open, setOpen] = useState(true);
  function change() {
    const newOpen = !Open;
    setOpen(newOpen);
  }
  return (
    <div className="bg-[#2b2d38] flex flex-row p-4 gap-2">
      <Sidebar open={Open} />
      <div className="h-screen flex-1 gap-2 flex flex-col ">
        <Navbar fnc={change} name="Projects" />
        
      </div>
    </div>
  );
};

export default Project;
