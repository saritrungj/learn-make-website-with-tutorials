import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleNavigation = () => {
    setOpenNavigation(!openNavigation)
  }

  return (
    <div className="text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 tex-1">
      <h1 className="text-3xl font-bold primary-color ml-4">J. Doe</h1>
      <ul className="hidden md:flex">
        <li className="p-2 text-2xl">Home</li>
        <li className="p-2 text-2xl">Company</li>
        <li className="p-2 text-2xl">Resources</li>
        <li className="p-2 text-2xl">About</li>
        <li className="p-2 text-2xl">Contact</li>
      </ul>
      <div className="block md:hidden" onClick={handleNavigation}>
        {openNavigation ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={openNavigation 
        ? "z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500" 
        : "fixed left-[-100%]"}>
        <h1 className="text-3xl font-bold primary-color m-4">J. Doe</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">Home</li>
          <li className="p-2">Company</li>
          <li className="p-2">Resources</li>
          <li className="p-2">About</li>
          <li className="p-2">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar