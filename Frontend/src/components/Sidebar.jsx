import React from "react";
import Btn from "./Btn";
import {
  CalendarDays,
  LayoutDashboard,
  Settings,
  ShieldUser,
  FolderClosed,
  ShoppingCart,
} from "lucide-react";

const Sidebar = (props) => {
  return (
    <div
      className={`h-screen   bg-[#1f1f28]  text-[#abb9c6] overflow-hidden  transition-all duration-[500ms] ${props.open ? "w-40 p-2" : "w-0 p-0"} `}
    >
      <div className="font-extrabold h-15 border-b-2 border-gray-500 flex justify-center items-center">
        <h1 className="text-2xl">TRACKER</h1>
      </div>
      <div className="flex flex-col gap-3">
        <Btn name="DashBoard" icon={<LayoutDashboard />} path={"/"} />
        <Btn name="Project" icon={<ShieldUser />} path="/projects" />
        <Btn name="Calender" icon={<CalendarDays />} path="/calender" />
        <Btn name="Document" icon={<FolderClosed />} path="/documents" />
        <Btn name="Store" icon={<ShoppingCart />} path="/store" />
      </div>
      <div className="h-45"></div>
      <div>
        <span className="text-xs">ACCOUNT</span>
        <Btn name="Settings" icon={<Settings size={16} strokeWidth={1.5} />} />
      </div>
      <div className="flex flex-row pl-2 h-30 relative right-2 mt-5  box-border pt-4 pb-5 w-40 bg-[#313441]">
        <img
          className="w-10 h-10 rounded-full object-fit"
          src="https://i.pinimg.com/1200x/77/cc/e9/77cce96f74894305f6d038bf6ddc5cb5.jpg"
          alt="jai ho"
        ></img>
        <span>
          {" "}
          <div className="whitespace-nowrap">Andrew</div>
          <div className="text-xs">andrew@gmail.com</div>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
