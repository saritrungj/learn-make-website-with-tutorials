import React from 'react'
import Button from '../Shared/Button'

const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl" style={{ backgroundColor: data.bgColor }}>
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p 
            // animation with AOS
            data-aos="slide-right"
            className="text-sm">{data.discount}</p>
            <h1 
            // animation with AOS
            data-aos="zoom-out"
            className="uppercase text-4xl lg:text-7xl font-bold">{data.title}</h1>
            <p 
            // animation with AOS
            data-aos="fade-up"
            className="text-sm">{data.date}</p>
          </div>
          {/* second col */}
          <div 
          // animation with AOS
          data-aos="zoom-in"
          className="h-full flex items-center">
            <img
              className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover"
              src={data.image}
              alt="headphone"
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p 
            // animation with AOS
            data-aos="zoom-out"
            className="font-bold text-xl">{data.title2}</p>
            <p 
            // animation with AOS
            data-aos="fade-up"
            className="text-3xl sm:text-5xl font-bold">{data.title3}</p>
            <p 
            // animation with AOS
            data-aos="fade-up"
            className="text-sm tracking-wide leading-5">{data.title4}</p>
            <div
            // animation with AOS
            data-aos="fade-up"
            data-aos-offset="0"
            >
              <button className="bg-white py-2 px-4 rounded-full hover:scale-105 duration-200" style={{ color: data.bgColor }}>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner