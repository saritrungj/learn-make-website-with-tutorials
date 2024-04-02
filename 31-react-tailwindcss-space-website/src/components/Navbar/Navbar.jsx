import React from 'react'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div
      // animation with AOS
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex text-white items-center font-bold gap-4 text-2xl">
            <img
              className="w-10"
              src={Logo}
              alt="logo"
            />
            <span>TCJ-SPACE</span>
          </div>
          <div className="text-white hidden sm:block">
            <ul className="flex items-center gap-6 text-xl py-4 ">
              <li><a href="#">About</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Galaxy</a></li>
              <li><a href="#">Satelite</a></li>
            </ul>
          </div>
          <div>
            <button className="text-white border-2 border-white px-3 py-1 rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar