import React from 'react'
import { ShoppingCart} from "lucide-react";
import Navbar2 from './Navbar2';
import Footer2 from './Footer2';
import CardBody from './CardBody';
const StreakCard = () => {
  return (
    <div className='w-228 h-90 bg-[#1e1f24] rounded-2xl relative  p-3 flex flex-col justify-between'>
      <Navbar2/>
      <CardBody/>
      <Footer2 />
    </div>
  )
}

export default StreakCard
