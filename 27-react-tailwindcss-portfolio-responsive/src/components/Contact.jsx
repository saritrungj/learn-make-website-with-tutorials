import React from 'react'
import { AiFillMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center" id="contact">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
              <h1 className="text-4xl sm:text-5xl text-white">
                Contact <span>Me</span>
              </h1>
              <p className="text-normal text-lg text-gray-400 mt-2">
                Let's connect on LinkedIn <br /> or send me an Email
              </p>

              <div className="flex items-center my-2 text-gray-400">
                <div className="text-md tracking-wide font-semibold w-40">
                  <p className="flex items-center gap-4"><AiFillMail /> John Doe</p>
                </div>
              </div>
            </div>
            <form className="p-6 flex flex-col justify-center max-w-[700px] gap-4">
              <div className="flex flex-col">
                <input className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white" type="text" placeholder="Full Name" />
              </div>
              <div className="flex flex-col">
                <input className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white" type="email" placeholder="Email@email.com" />
              </div>
              <div className="flex flex-col">
                <textarea className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white" type="text" placeholder="Your Message" />
              </div>
              <button className="md:w-32 bg-primary-color text-white py-3 px-6 rounded-lg mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact