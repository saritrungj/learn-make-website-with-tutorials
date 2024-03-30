import React from 'react'
import Section from './common/Section'
import contact from '../assets/mobile.png'
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Contact = () => {

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

  return (
    <Section
      title="Contact 📞"
      subtitle="These are the wats you can get in touch with me. Hope to hear from you soon :)"
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div>
          <img
            className="w-32 h-32"
            src={contact}
            alt="contact" />
        </div>
        <div>
          <p className="max-w-xs md:max-w-lg font-extralight">
            I am open to talk regrading freelancing or full-time opportunities. Feel free to contact me using you preferred medium.
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl">
          {socials.map(({ id, link, icon }) => (
            <a
              className="duration-200 ease-in-out hover:text-rose-600"
              target="_blank"
              rel="noopener norefferrer"
              href={link}
              key={id}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* bottom form */}
        <div className="p-8 text-left w-full flex items-center justify-center">
          <form action="" method="POST">
            <div className="w-full">
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">Name</label>
                <input className="border-2 rounded-lg py-3 px-10 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white" type="text" name="name" />
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">Phone</label>
                <input className="border-2 rounded-lg py-3 px-10 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white" type="text" name="phone" />
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">Email</label>
                <input className="border-2 rounded-lg py-3 px-10 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white" type="text" name="email" />
              </div>
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">Message</label>
                <textarea className="border-2 rounded-lg py-3 px-10 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none" type="text" name="Message" rows="10" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  )
}

export default Contact