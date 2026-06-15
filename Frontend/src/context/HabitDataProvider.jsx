import React, { createContext, useState } from 'react'
import axios from 'axios';
export const HabitContext = createContext()


const HabitDataProvider = ({children}) => {

const [Habits, setHabits] = useState([]);
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
    <HabitContext.Provider value={{OpenHabitForm,setOpenHabitForm ,Habits,setHabits,AddNewHabit}} >
      {children}
    </HabitContext.Provider>
  )
}

export default HabitDataProvider
