import React from 'react';

export const StatCard = ({ value, label, valueColor = "text-white" }) => {
  return (
    <div className="bg-[#1c1f28] border border-[#2a2d36] rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm w-full">
      <div className={`text-3xl font-bold mb-1 ${valueColor}`}>{value}</div>
      <div className="text-[#a0a4b8] text-[10px] font-bold uppercase tracking-widest whitespace-pre-line">
        {label}
      </div>
    </div>
  );
};

export default StatCard