import  { useState } from "react";

import { registerUser } from "../api/auth.js";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const navigateto = useNavigate();

  const handleform = async (e) => {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
    };
    
try {

  await registerUser(data);

  navigateto("/");

} catch(error){
  console.log(error.name)
  console.log(error.message);

}



  };

  return (
    <div className="bg-[#3e404a] w-screen h-screen flex items-center justify-center ">
      <div className="bg-[#2b3137] w-120 h-130 rounded-xl flex flex-col justify-center items-center  ">
        <h1 className="pb-15 text-5xl text-amber-50">Create Account</h1>
        <form className=" text-[#a5aab0]  flex flex-col justify-center gap-2  items-start font-bold" onSubmit={ handleform }>
          <label>Enter name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
            placeholder="username"
            className="bg-[#202125] focus:outline-none h-13 rounded-sm border-gray-500 border-2 pl-4 placeholder:text-[#a5aab0] placeholder:opacity-25 w-60"
          />
          <label>Enter email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="example@12gmail.com"
            className="bg-[#202125] focus:outline-none h-13 rounded-sm border-gray-500 border-2 pl-4 placeholder:opacity-25 placeholder:text-[#a5aab0] w-60"
          />
          <label>Enter password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="password"
            className="bg-[#202125] focus:outline-none h-13  rounded-sm border-gray-500 border-2 pl-4 placeholder:opacity-25 placeholder:text-[#a5aab0] w-60"
          />
          <button
            type="submit"
            
            className="bg-[#626e7e] h-13 w-60 rounded-sm text-2xl hover:bg-[#87919f] "
            
          >register</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
