import React, { createContext, useState } from 'react'
import axios from 'axios';
export const HabitContext = createContext()


const HabitDataProvider = ({children}) => {



    const [password, setpassword] = useState("");
  const [username, setusername] = useState("");

const [Habits, setHabits] = useState([
  {
    category: "Fitness",
    description: "I will go for running every morning",
    frequency: "daily",
    title: "Morning Running"
  },

  {
    category: "Study",
    description: "Revise DSA problems for interviews",
    frequency: "daily",
    title: "DSA Practice"
  },

  {
    category: "Coding",
    description: "Build React projects consistently",
    frequency: "daily",
    title: "React Development"
  },

  {
    category: "Productivity",
    description: "Plan tasks for the next day",
    frequency: "daily",
    title: "Daily Planning"
  },

  {
    category: "Personal Growth",
    description: "Read self improvement books",
    frequency: "daily",
    title: "Book Reading"
  },

  {
    category: "Fitness",
    description: "Complete evening gym workout",
    frequency: "weekly",
    title: "Gym Training"
  }
]);
const [OpenHabitForm, setOpenHabitForm] = useState(false);


async function AddNewHabit(data) {
    console.log(data)
    try{
    const response = await axios.post(
        "http://localhost:3000/api/habits/createhabit",
        data,
        {
            withCredentials : true
        }
    )
    console.log(response.data)
    }
    catch(error){
        console.log(error.message)
    }

    setHabits([...Habits,data])

} 

  return (
    <HabitContext.Provider value={{OpenHabitForm ,username,password,setpassword,setusername,setOpenHabitForm  ,Habits,setHabits,AddNewHabit}} >
      {children}
    </HabitContext.Provider>
  )
}

export default HabitDataProvider
