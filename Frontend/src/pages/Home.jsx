import Sidebar from "../components/Sidebar";
import  { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StreakCard from "../components/StreakCard/StreakCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddHabit from "../components/AddHabit";
import AddHabitForm from "../components/AddHabitForm";
import { HabitContext } from "../context/HabitDataProvider";

const Home = () => {
  const navigate = useNavigate();

  const [loading, setloading] = useState(true);
  const [Open, setOpen] = useState(true);
  
const {Habits,OpenHabitForm,setOpenHabitForm } = useContext(HabitContext);


  useEffect(() => {

  async function verifyUser() {

    try {

      const response = await axios.get(
        "http://localhost:3000/api/auth/home",
        {
          withCredentials: true,
        }
      );
      setloading(false);
      

    } catch (error) {

      navigate("/login");
      console.log(error.response.data)
    }
  }

  verifyUser();

} , );

if(loading){
  return <div className="bg-[#2B2D38] h-screen w-screen">
    <h1>loading</h1>
  </div>
}


  function change() {
    const newOpen = !Open;
    setOpen(newOpen);
  }

  

  return (
    <>
    {
      OpenHabitForm && <AddHabitForm/>
    }
        
        <div className="bg-[#13131c] flex flex-row  gap-2">
      <Sidebar open={Open} />
      <div className="h-screen flex-1 gap-2 flex flex-col ">
        <Navbar fnc={change} name="Dashboard" />
        <div className="flex-1 flex flex-row gap-2 flex-wrap p-2 overflow-scroll">
          {
          Habits.map((Habit,index)=>{
            return <StreakCard key={index} habit={Habit.title} />
          })
          }
          
          
          {/* <StreakCard habit="Gym" />
          <StreakCard />
          <StreakCard />
          <StreakCard />
          <StreakCard />
          <StreakCard />
          <StreakCard /> */}
          <AddHabit/>
        </div>
        
        
      </div>
    </div>
    </>

  );
};

export default Home;
