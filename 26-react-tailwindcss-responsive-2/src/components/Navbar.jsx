import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false)
  const handleNavigation = () => {
    setOpenNavigation(!openNavigation)
  }
  return (
    <>
      <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] ">REACT.</h1>
        <ul className="hidden md:flex">
          <li className="p-4"><a href="#">Home</a></li>
          <li className="p-4"><a href="#">Company</a></li>
          <li className="p-4"><a href="#">Resource</a></li>
          <li className="p-4"><a href="#">About</a></li>
          <li className="p-4"><a href="#">Contact</a></li>
        </ul>
        <div onClick={handleNavigation} className="block md:hidden">
          {openNavigation ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div className={openNavigation ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000] ease-in-out duration-500" : "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000] ease-in-out duration-500"}>
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b broder-b-gray-600">
              <a href="#">Home</a>
            </li>
            <li className="p-4 border-b broder-b-gray-600">
              <a href="#">Company</a>
            </li>
            <li className="p-4 border-b broder-b-gray-600">
              <a href="#">Resource</a>
            </li>
            <li className="p-4 border-b broder-b-gray-600">
              <a href="#">About</a>
            </li>
            <li className="p-4">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar