import React, { useState } from "react";

const Grid = (props) => {
  const colors = [
    "bg-[#2e3339]",
    "bg-[#3b7753]",
    "bg-[#45a065]",
    "bg-[#51c779]",
  ];
  const [box, setbox] = useState(Array(props.days).fill(0));

  const handle = (index) => {
    const newbox = [...box];
    newbox[index] = (newbox[index] + 1) % colors.length;

    setbox(newbox);
  };

  return (
    <div className="flex-1 flex flex-col gap-0.5">
      <div className="pl-3 text-white">{props.month}</div>

      <div className="grid grid-rows-7  grid-flow-col gap-1 p-0.5">
        {box.map((value, index) => (
          <div
            key={index}
            onClick={() => {
              handle(index);
            }}
            className={`h-5 w-5 ${colors[value]} rounded-sm   border-green-900`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
