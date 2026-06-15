import React, { useRef, useState } from "react";
import { ShoppingCart } from "lucide-react";
import Navbar2 from "./Navbar2";
import Footer2 from "./Footer2";
import CardBody from "./CardBody";



const StreakCard = ({habit}) => {
  const refer = useRef(null);

const left_scroll = () => {
  refer.current.scrollBy({
    left: -300,
    behavior: "smooth",
  });
};

const right_scroll = () => {
  refer.current.scrollBy({
    left: 300,
    behavior: "smooth",
  });
};
  return (
    
          <div className="w-146 h-90 bg-[#1f1f28] border-[#2d3532] border-2 rounded-2xl relative  p-3 flex flex-col justify-between">
      <Navbar2
        habit={habit}
        left_scroll={left_scroll}
        right_scroll={right_scroll}
      />
      <CardBody refer={refer} />
      <Footer2 />
    </div>

  );
};

export default StreakCard;
