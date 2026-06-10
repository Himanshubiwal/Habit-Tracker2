import React from "react";
import Navbar from "./components/Navbar";
import StreakCard from "./components/StreakCard/StreakCard";
import Sidebar from "./components/Sidebar";
import { useState } from "react";



const App = () => {


const [Open, setOpen] = useState(true);
function change(){
  const newOpen = !Open;
  setOpen(newOpen);
  console.log("clicked")
}
  return (
    <div className="bg-[#2b2d38] flex flex-row p-4 gap-2">
      <Sidebar open={Open} />
      <div className="h-screen flex-1 gap-2 flex flex-col ">
        <Navbar fnc={change}  />
        <StreakCard />
      </div>
    </div>
  );
};

export default App;
