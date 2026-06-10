import React from "react";
import {
  CalendarDays,
  LayoutDashboard,
  ShieldUser,
  FolderClosed,
  ShoppingCart,
} from "lucide-react";

const Btn = (props) => {
  
  return (
    <div className="flex gap-3 items-center mt-2 pl-3 hover:scale-105 hover:bg-[#606c7a] rounded-md cursor-pointer transition-all duration-200 text-sm">
      {props.icon}
      <span>{props.name}</span>
    </div>
  );
};

export default Btn;
