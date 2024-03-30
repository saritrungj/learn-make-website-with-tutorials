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
        <li className="p-2 text-2xl"><a href="#home">Home</a></li>
        <li className="p-2 text-2xl"><a href="#about">About</a></li>
        <li className="p-2 text-2xl"><a href="#work">Projects</a></li>
        <li className="p-2 text-2xl"><a href="#experience">Experiences</a></li>
        <li className="p-2 text-2xl"><a href="#contact">Contact</a></li>
      </ul>
      <div className="block md:hidden" onClick={handleNavigation}>
        {openNavigation ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={openNavigation
        ? "z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500"
        : "fixed left-[-100%]"}>
        <h1 className="text-3xl font-bold primary-color m-4">J. Doe</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2"><a href="#home">Home</a></li>
          <li className="p-2"><a href="#about">About</a></li>
          <li className="p-2"><a href="#work">Projects</a></li>
          <li className="p-2"><a href="#experience">Experiences</a></li>
          <li className="p-2"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar