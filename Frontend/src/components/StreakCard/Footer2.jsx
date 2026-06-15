import React from "react";

const Footer2 = () => {
  return (
    <div className="flex flex-row justify-between w-full ">
      <div className="flex gap-2">
        <div className="text-bold text-[#abb9c6] ">
          <button className="border pl-2 pr-2 border-b-gray-500 rounded-md bg-[#2e3339]">
            Type 1
          </button>
        </div>
        <div className="text-bold text-[#abb9c6] ">
          <button className="border pl-2 pr-2 border-b-gray-500 rounded-md bg-[#2e3339]">
            Type 2
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-3 text-[#abb9c6] text-bold items-center">
        <p>Less</p>
        <div className="bg-[#305041] h-5 w-5 rounded-sm "></div>
        <div className="bg-[#3b7753] h-5 w-5 rounded-sm "></div>
        <div className="bg-[#45a065] h-5 w-5 rounded-sm "></div>
        <div className="bg-[#51c779] h-5 w-5 rounded-sm "></div>
        <p>More</p>
      </div>
    </div>
  );
};

export default Footer2;
