import React from "react";

export const ActivityCard = ({ activities = [] }) => {
  return (
    <div className="bg-[#1c1f28] border border-[#2a2d36] rounded-2xl p-6 shadow-sm w-full h-full">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-white">
          Recent Activity
        </h2>

        <a
          href="#"
          className="text-[#65f19d] text-xs font-bold uppercase tracking-widest hover:underline"
        >
          View All
        </a>
      </div>

      <div className="relative border-l border-[#2a2d36] ml-3 space-y-8 pb-2">
        {activities.map((item, idx) => (
          <div key={idx} className="relative pl-6">

            <div
              className={`absolute `` top-1 w-6 h-6 rounded-full flex items-center justify-center ${item.iconBg} ${item.iconColor} border-4 border-[#1c1f28]`}
            >
              {item.icon}
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-[#a0a4b8] text-xs mt-1">
                {item.time}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCard;