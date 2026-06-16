import React from 'react';

export const ProgressionCard = ({ level, currentXp, targetXp, progressPercent }) => {
  return (
    <div className="bg-[#1c1f28] border border-[#2a2d36] rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-end mb-4">
        <div className="flex items-center gap-2 text-[#a0a4b8] font-bold text-sm tracking-widest uppercase">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#65f19d" stroke="#65f19d" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          Current Progression
        </div>
        <div className="text-right">
          <div className="text-[#65f19d] font-bold text-lg leading-tight">Level {level}</div>
          <div className="text-[#a0a4b8] text-xs">{currentXp} / {targetXp} XP to Level {level + 1}</div>
        </div>
      </div>
      <div className="h-3 w-full bg-[#2a2d36] rounded-full overflow-hidden">
        <div className="h-full bg-[#65f19d] rounded-full" style={{ width: `${progressPercent}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressionCard