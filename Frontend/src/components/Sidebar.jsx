import React, { useContext } from "react";
import Btn from "./Btn";
import {
  CalendarDays,
  LayoutDashboard,
  Settings,
  ShieldUser,
  FolderClosed,
  ShoppingCart,
} from "lucide-react";
import { HabitContext } from "../context/HabitDataProvider";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {

const navigate = useNavigate();
const profileName = localStorage.getItem("username");
const profileEmail = localStorage.getItem("email");


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
      <div onClick={()=>{
        console.log("clicked")
        navigate('/profile')
      }

      } className="flex flex-col justify-center items-center pl-1 h-25 w-30 ml-5 relative right-2 mt-5 rounded-xl hover:bg-[#4c4c61]  box-border pt-4 pb-5  bg-[#13131c]">
        <img
          className="w-10 h-10 rounded-full object-fit"
          src="https://i.pinimg.com/1200x/77/cc/e9/77cce96f74894305f6d038bf6ddc5cb5.jpg"
          alt="jai ho"
        ></img>
        <div className="h-10">
          
          <div className="whitespace-wrap">{profileName}</div>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
