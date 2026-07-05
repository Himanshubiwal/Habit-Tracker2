import axios from "axios";
import { useContext } from "react";
import { HabitContext } from "../context/HabitDataProvider";

async function RegisterUser(data) {
  try {
    if (!data.username) {
      throw new Error("username is required");
    }
    if (!data.email) {
      throw new Error("email is required");
    }
    if (!data.password) {
      throw new Error("password is required");
    }

    const response = await axios.post(
      "http://localhost:3000/api/auth/register",
      data,
      {
        withCredentials: true,
      },
    );
    console.log(response.data);
    return true;
  } catch (error) {
    throw error.response.data;
  }
}

async function LoginUser(data) {
  try {
    if (!data.username && !data.username) {
      throw new Error("username is required");
    }

    if (!data.password) {
      throw new Error("password is required");
    }

    const response = await axios.post(
      "https://habit-tracker2-1.onrender.com/api/auth/login",
      data,
      {
        withCredentials: true,
      },
    );

    localStorage.setItem("email", response.data.user.email);
    console.log(response.data);
  } catch (error) {
    throw error.response.data;
  }
}

export { LoginUser, RegisterUser };
