import React from "react";
import { ArrowLeft, Settings, ArrowRight, Dumbbell } from "lucide-react";

const Navbar2 = () => {
  return (
    <div className="text-[#abb9c6] font-extrabold flex flex-row h-15 justify-between  items-center pb-5">
      <div className="flex flex-row relative">
        <p className=" text-3xl flex flex-row gap-2 items-center">
          <Dumbbell size={30} strokeWidth={0.5} />
          Gym Streak
        </p>
      </div>

      <div className="flex flex-row gap-3  justify-between">
        <button className="border pl-2 box-border  pr-2 border-b-gray-300 rounded-xl bg-[#2e3339]">
          <ArrowLeft size={20} strokeWidth={5} />
        </button>

        <div className="">
          <select className=" p-2 rounded text-xl">
            <option>2026</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
        </div>
        <button>
          <Settings strokeWidth={3} />
        </button>
        <button className="border pl-2 pr-2 border-b-gray-300 rounded-xl bg-[#2e3339]">
          <ArrowRight size={20} strokeWidth={5} />
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
