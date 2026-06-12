import Sidebar from "../components/Sidebar";
import  { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StreakCard from "../components/StreakCard/StreakCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [loading, setloading] = useState(true);
  const [Open, setOpen] = useState(true);




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
      console.log(response.data);

    } catch (error) {

      navigate("/register");
      console.log(error.response.data)
    }
  }

  verifyUser();

} , );

if(loading){
  return <div>
    <h1>loading</h1>
  </div>
}


  function change() {
    const newOpen = !Open;
    setOpen(newOpen);
  }

  return (
    <div className="bg-[#2b2d38] flex flex-row p-4 gap-2">
      <Sidebar open={Open} />
      <div className="h-screen flex-1 gap-2 flex flex-col ">
        <Navbar fnc={change} name="Dashboard" />
        <StreakCard />
      </div>
    </div>
  );
};

export default Home;
