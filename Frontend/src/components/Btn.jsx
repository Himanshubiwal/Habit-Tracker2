import { useNavigate } from "react-router-dom";

const Btn = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-3 text-[#bccaad] items-center mt-2 pl-3 hover:scale-120  rounded-md hover:bg-[#1d4064] cursor-pointer transition-all duration-200 text-sm">
      {props.icon}
      <span onClick={()=>{
        
        navigate(props.path)
      }}>{props.name}</span>
    </div>
  );
};

export default Btn;
