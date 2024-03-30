import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin, FaArrowDown } from "react-icons/fa";
import avatarImage from '../assets/avatar.png'

const Hero = () => {

  const socials = [
    {
      id: 1,
      link: "https://twitter.com",
      icon: <FaTwitter />
    },
    {
      id: 1,
      link: "https://facebook.com",
      icon: <FaFacebook />
    },
    {
      id: 1,
      link: "https://linkedin.com",
      icon: <FaLinkedin />
    },
  ]

  window.addEventListener('scroll', function () {
    const downArrow = document.querySelector('.down-arrow')
    this.scrollY >= 90 
    ? downArrow.classList.add("hide-down-arrow")
    : downArrow.classList.remove("hide-down-arrow")
  })

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-rose-600 uppercase font-bold">Tony Stark</h2>
      <h3 className="py-3 text-2xl">Software Engineer</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span>, welcome to my site. I am a freelance software engineer. I love to weok on Web dev, Mobile dev & automation projects.
      </p>

      {/* map social icons */}
      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {socials.map(({ id, link, icon }) => (
          <a
            className="flex flex-row cursor-pointer duration-300 hover:text-rose-600"
            target="_blank"
            rel='noopener noreferrer'
            href={link}
            key={id}
          >
            {icon}
          </a>
        ))}
      </div>
      {/* avatar and resume */}
      <div>
        <img
          className="w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl pt-5"
          src={avatarImage}
          alt="avatar-image"
        />
        <a
          className="flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg"
          href="../assets/yash-resume.pdf"
          download={true}
        >
          Resume
        </a>
      </div>
      {/* arrow down animation */}
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-xl text-gray-400 animate-bounce"/>
      </div>
    </section>
  )
}

export default Hero