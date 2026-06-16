import { LoginUser } from "../api/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HabitContext } from "../context/HabitDataProvider";

const Login = () => {


  const navigateto = useNavigate();
  const {username,setpassword,setusername,password} = useContext(HabitContext)
  const handleform = async (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
    };
    
    try {
      await LoginUser(data);
        
      localStorage.setItem("username",username)
      

      navigateto("/");
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="min-h-screen w-full bg-[#3e404a] flex items-center justify-center p-4">
      <div className="bg-[#2b3137] w-full max-w-md p-10 rounded-2xl shadow-2xl flex flex-col">
        <h1 className="text-4xl font-extrabold text-amber-50 text-center mb-8 tracking-wide">
          Login Account
        </h1>

        <form className="flex flex-col gap-6" onSubmit={handleform}>
          {/* Username Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-[#a5aab0] font-bold text-sm tracking-wide"
            >
              Enter name
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="username"
              className="bg-[#202125] text-amber-50 h-12 w-full rounded-lg border border-gray-600 px-4 placeholder:text-[#a5aab0] placeholder:opacity-40 focus:outline-none focus:border-[#87919f] focus:ring-1 focus:ring-[#87919f] transition-all duration-200"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-[#a5aab0] font-bold text-sm tracking-wide"
            >
              Enter password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="password"
              className="bg-[#202125] text-amber-50 h-12 w-full rounded-lg border border-gray-600 px-4 placeholder:text-[#a5aab0] placeholder:opacity-40 focus:outline-none focus:border-[#87919f] focus:ring-1 focus:ring-[#87919f] transition-all duration-200"
            />
          </div>
          <button
            className="text-start h-1 text-gray-400 hover:text-amber-50"
            onClick={()=>{
                navigateto('/register')
            }}
          >
            create account
          </button>
          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-[#626e7e] text-amber-50 font-bold h-12 w-full rounded-lg text-lg hover:bg-[#87919f] focus:ring-2 focus:ring-[#a5aab0] focus:ring-offset-2 focus:ring-offset-[#2b3137] focus:outline-none active:scale-[0.98] transition-all duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
