import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import React, { useState } from "react";

const Calender = () => {
  const [Open, setOpen] = useState(true);
  function change() {
    const newOpen = !Open;
    setOpen(newOpen);
  }
  return (
    <div className="bg-[#2b2d38] flex flex-row p-4 gap-2">
      <Sidebar open={Open} />
      <div className="h-screen flex-1 gap-2 flex flex-col ">
        <Navbar fnc={change} name="Calender" />
      </div>
    </div>
  );
};
export default Calender;
