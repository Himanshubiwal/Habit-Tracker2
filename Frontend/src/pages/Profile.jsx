import Sidebar from "../components/Sidebar";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import StreakCard from "../components/StreakCard/StreakCard";
import ProfileCard from "../components/ProfileCard";
import ProgressionCard from "../components/ProgressionCard";
import AchievementsCard from "../components/AchievementsCard";
import ActivityCard from "../components/ActivityCard";
import StatCard from "../components/StatCard";
import { Sun, Award, Medal, Shield } from 'lucide-react';
import { Check, Plus, AlertCircle } from 'lucide-react';


const Profile = () => {
  const [Open, setOpen] = useState(true);
  function change() {
    const newOpen = !Open;
    setOpen(newOpen);
  }


  const stats = [
    { value: '12', label: 'Habits\nTracked' },
    { value: '156', label: 'Days Streak', valueColor: 'text-[#65f19d]' },
    { value: '94%', label: 'Consistency' },
    { value: '4,850', label: 'Total Points', valueColor: 'text-[#f5a623]' },
  ];

  const achievements = [
{
      icon: <Sun size={20} strokeWidth={2} />,
      color: 'text-[#65f19d]',
      bg: 'bg-[#15271d]',
      title: 'Early Riser',
      desc: '10 Days 5AM'
    },
    {
      icon: <Award size={20} strokeWidth={2} />,
      color: 'text-[#f5a623]',
      bg: 'bg-[#2a2015]',
      title: 'Streak Master',
      desc: '100 Day Streak'
    },
    {
      icon: <Medal size={20} strokeWidth={2} />,
      color: 'text-[#a277ff]',
      bg: 'bg-[#211a2e]',
      title: 'Century Club',
      desc: '100 Tasks Done'
    },
    {
      icon: <Shield size={20} strokeWidth={2} />,
      color: 'text-[#65f19d]',
      bg: 'bg-[#15271d]',
      title: 'Consistency King',
      desc: '30 Day Perfect'
    }
  ];
  const activities = [
    {
      icon: <Check size={14} strokeWidth={3} />,
      iconBg: 'bg-[#65f19d]',
      iconColor: 'text-[#0e2a1b]',
      title: 'Completed Gym Streak (Day 24)',
      time: '2 hours ago • Health & Fitness'
    },
    {
      icon: <Plus size={14} strokeWidth={3} />,
      iconBg: 'bg-[#2a2d36]',
      iconColor: 'text-[#65f19d]',
      title: 'Started New Habit: Reading',
      time: 'Yesterday at 9:00 PM • Mental Growth'
    },
    {
      icon: <AlertCircle size={14} strokeWidth={2.5} />,
      iconBg: 'bg-[#f5a623]',
      iconColor: 'text-[#191100]',
      title: 'Reached Level 15',
      time: 'Oct 14, 2023 • Milestone Achieved'
    }
  ];

  return (
    <div className="bg-[#13131c] flex flex-row  gap-2">
      <Sidebar open={Open} />
      <div className="h-screen flex-1 mr-2 gap-2 flex flex-col ">
        <Navbar fnc={change} name="Profile" />
        <div className="h-screen overflow-y-auto flex flex-col gap-4">
          <ProfileCard />
          <ProgressionCard />
          <div className="flex flex-row gap-4 ">
            <div className="flex-1 flex gap-4 flex-col">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <StatCard key={i} {...stat} />
                ))}
              </div>
              <ActivityCard activities={activities} />
            </div>
            <AchievementsCard achievements={achievements} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
