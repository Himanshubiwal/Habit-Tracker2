import React from "react";
import { Bell, Moon, Search, Star, Tally3 } from "lucide-react";

const Navbar = (props) => {
  return (
    <div className="p-0.5 flex">
      <div className="bg-[#1e1f24]  text-amber-50  h-15 p-4 rounded-xl w-full flex flex-row justify-between items-center">
        <div className="flex gap-5 items-center">
          <button
            onClick={() => {
              props.fnc();
            }}
          >
            <Tally3
              size={35}
              strokeWidth={2}
              className="rotate-90 flex items-center"
            />
          </button>
          <h1 className="text-3xl text-[#b7b8bd] pb-2">{props.name}</h1>
        </div>

        <div className="flex gap-5  justify-center items-center">
          <div className="relative">
            <Search className=" absolute top-2.5 left-2.5 " />
            <input
              type="text"
              placeholder="Type to search.."
              className=" bg-[#282c38] h-10 pl-13 rounded-sm border-2 border-blue-950"
            ></input>
          </div>

          <div className="flex gap-5 border-l-2 border-r-2 border-blue-950 h-8   p-2.5">
            <Bell />
            <Moon />
          </div>
          <div className="flex flex-row justify-center gap-3 items-center">
            <Star color="#ffed24" />
            <p className=" text-amber-300">PREMIUM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
