import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

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
      `${API_BASE_URL}/api/auth/register`,
      data,
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}

async function LoginUser(data) {
  try {
    if (!data.username) {
      throw new Error("username is required");
    }

    if (!data.password) {
      throw new Error("password is required");
    }

    const response = await axios.post(`${API_BASE_URL}/api/auth/login`, data, {
      withCredentials: true,
    });

    localStorage.setItem("email", response.data.user.email);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}

export { LoginUser, RegisterUser };
