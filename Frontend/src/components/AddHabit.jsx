import React, { useContext } from "react";
import { HabitContext } from "../context/HabitDataProvider";
const AddHabit = () => {
  const { OpenHabitForm, setOpenHabitForm } = useContext(HabitContext);

  function OpenForm() {
    const newValue = true;
    setOpenHabitForm(newValue);
  }

  return (
    <button
      onClick={() => {
        OpenForm();
      }}
      className="w-full h-30 hover:bg-[#44444c]   bg-[#1f1f28] rounded-xl border-[#2d3532] border-dashed border-2 "
    >
      <div className="flex justify-center flex-col items-center">
        <h1  className="text-4xl text-amber-100 hover:bg-[#699886] pb-2 bg-[#34343e] w-10 rounded-xl ">
          +
        </h1>
        <h1 className="text-mist-300 text-2xl font-[Hanken Grotesk]">
          Add New Habit
        </h1>
      </div>
    </button>
  );
};

export default AddHabit;
