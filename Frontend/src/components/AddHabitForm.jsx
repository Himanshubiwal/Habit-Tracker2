import { useContext, useState } from "react";
import { HabitContext } from "../context/HabitDataProvider";

const AddHabitForm = () => {
  const { AddNewHabit, setOpenHabitForm } = useContext(HabitContext);

  const [active, setActive] = useState("daily");

  function handleSubmit(e) {
    e.preventDefault();

    const newOpenForm = false;
    setOpenHabitForm(newOpenForm);

    const formdata = new FormData(e.target);

    const data = Object.fromEntries(formdata);
    console.log(data);
    AddNewHabit(data);
  }

  function CloseForm() {
    console.log("clicked");
    const newOpenForm = false;
    setOpenHabitForm(newOpenForm);
  }

  return (
    <div className="fixed h-screen w-screen z-10  backdrop-blur-xs flex justify-center items-center ">
      <div className=" overflow-hidden bg-[#181820] text-[#cac7d3] h-110 w-84 rounded-xl `border-1` border-[#3d4a3e]  ">
        <div className="h-12  flex justify-between p-2 items-center pl-3 border-[#3d4a3e] `border-b-1` bg-[#1f1f28] font-bold">
          <h1>Add New Habit</h1>
          <h1
            onClick={CloseForm}
            className="text-2xl mb-2 cursor-pointer bg-[#1f1f28] w-7 flex justify-center items-center rounded-full hover:bg-[#343443] "
          >
            x
          </h1>
        </div>
        <form
          id="MyForm"
          className="flex flex-col gap-1 p-3 "
          onSubmit={handleSubmit}
        >
          <label>Title</label>
          <input
            required
            name="title"
            className="border-[#3d4a3e] border bg-[#1f1f28] rounded-sm p-2 focus:border-[#4ba36b] outline-none "
            type="text"
            placeholder="e.g, Daily Run"
          />
          <label>Description</label>
          <input
            required
            name="description"
            className="border-[#3d4a3e] bg-[#1f1f28] border rounded-sm p-2 focus:border-[#4ba36b] outline-none "
            type="text"
            placeholder="e.g,Morning job in the to clear my head"
          />
          <label>Category</label>
          <select
            required
            name="category"
            className="border-[#3d4a3e] bg-[#1f1f28] border rounded-sm p-2 focus:border-[#4ba36b] outline-none "
          >
            <option>select a category</option>
            <option>Study</option>
            <option>Coding</option>
            <option>Fitness</option>
            <option>Productivity</option>
            <option>Personal Growth</option>
          </select>

          <label>Frequency</label>
          <input
            required
            readOnly
            name="frequency"
            value="daily"
            checked={active === "daily"}
            className=" hidden border-[#3d4a3e] border rounded-sm p-2 "
            type="radio"
          />
          <input
            required
            readOnly
            name="frequency"
            value="weekly"
            checked={active === "weekly"}
            className=" hidden border-[#3d4a3e] border rounded-sm p-2 "
            type="radio"
          />
          <div className="flex flex-row gap-2">
            {/* Button 1 */}
            <div
              className={`border rounded-sm h-14 flex-1 cursor-pointer flex justify-center items-center
        
        ${
          active === "daily"
            ? "bg-[#202f2d] border-[#4ba36b]"
            : "bg-[#1f1f28] border-[#3d4a3e]"
        }
      `}
              onClick={() => setActive("daily")}
            >
              Daily
            </div>

            {/* Button 2 */}
            <div
              className={`border rounded-sm h-14 flex-1 cursor-pointer flex justify-center items-center
        
        ${
          active === "weekly"
            ? "bg-[#202f2d] border-[#4ba36b]"
            : "bg-[#1f1f28] border-[#3d4a3e]"
        }
      `}
              onClick={() => setActive("weekly")}
            >
              Weekly
            </div>
          </div>
        </form>
        <div className="bg-[#1f1f28] h-14 mt-2 `border-t-1` border-[#3d4a3e] flex flex-row-reverse gap-2 items-center p-2">
          <button
            className="bg-[#36b761] w-27 font-bold text-[#00210c] h-10 border-[#3d4a3e] `border-1` rounded-sm hover:bg-[#6ccb8b] "
            type="submit"
            form="MyForm"
          >
            Create Habit
          </button>
          <button className="bg-[#181820] w-20 h-10 border-[#3d4a3e] `border-1` rounded-sm ">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHabitForm;
