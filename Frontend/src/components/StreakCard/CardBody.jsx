import Grid from "./Grid";
import React, { useState } from "react";
import { useRef } from "react";
const CardBody = (props) => {
 

  return (
    <div className=" h-360 w-full  flex flex-row gap-0.5  text-[#abb9c6]">
      <div className="flex-3 flex  flex-col">
        <button className="h-7 pl-3" onClick={()=>{
          
        }}></button>
        <div className="h-6 pl-3">Mon</div>
        <div className="h-6 pl-3">Tue</div>
        <div className="h-6 pl-3">Wed</div>
        <div className="h-6 pl-3">Thu</div>
        <div className="h-6 pl-3">Fri</div>
        <div className="h-6 pl-3">Sat</div>
        <div className="h-6 pl-3">Sun</div>
      </div>
      <div  className="flex flex-row gap-0.5 overflow-x-scroll ">
        <Grid month="Jan" days={31} />
        <Grid month="Feb" days={28} />
        <Grid month="Mar" days={31} />
        <Grid month="Apr" days={30} />
        <Grid month="May" days={31} />
        <Grid month="Jun" days={30} />
        <Grid month="Jul" days={31} />
        <Grid month="Aug" days={31} />
        <Grid month="Sep" days={30} />
        <Grid month="Oct" days={31} />
        <Grid month="Nov" days={30} />
        <Grid month="Dec" days={31} />
      </div>
    </div>
  );
};

export default CardBody;
