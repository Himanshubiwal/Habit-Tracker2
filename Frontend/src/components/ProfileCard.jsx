import React from 'react';

const ProfileCard = () => {
  return (
    // Card Container
    <div className="bg-[#191b22] border border-[#2a2d36] rounded-2xl p-6 flex items-center gap-6  w-full font-sans shadow-lg">
      
      {/* Avatar Section */}
      <div className="shrink-0 w-36 h-36 rounded-xl border-4 border-[#65f19d] overflow-hidden relative">
        <img 
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
          alt="Alex Rivera" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1">
        
        {/* Header Row */}
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-white text-3xl font-bold tracking-wide">Alex Rivera</h1>
          <span className="bg-[#65f19d] text-[#0e2a1b] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mt-1">
            Elite Tracker
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-[#a0a4b8] text-base mb-5">
          Consistency is the key to mastery.
        </p>

        {/* Buttons Row */}
        <div className="flex items-center gap-4">
          
          {/* Edit Profile Button */}
          <button className="bg-[#65f19d] hover:bg-[#52d686] text-[#0e2a1b] px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            Edit Profile
          </button>

          {/* Share Progress Button */}
          <button className="bg-transparent hover:bg-gray-800 border border-[#2a2d36] text-white px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-300">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            Share Progress
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;