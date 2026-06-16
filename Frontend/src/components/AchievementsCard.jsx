import React from 'react';

export const AchievementsCard = ({ achievements=[] }) => {
  return (
    <div className="bg-[#1c1f28] border border-[#2a2d36] rounded-2xl w-125 p-6 shadow-sm h-150 ">
      <h2 className="text-lg font-bold text-white mb-6">Achievements</h2>
      <div className="grid grid-cols-2 gap-3">
        {achievements.map((ach, idx) => (
          <div key={idx} className="bg-[#15171e] border border-[#2a2d36] rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${ach.bg} ${ach.color}`}>
              {ach.icon}
            </div>
            <h3 className="text-xs font-bold text-white mb-1 leading-tight">{ach.title}</h3>
            <p className="text-[#a0a4b8] text-[10px]">{ach.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsCard