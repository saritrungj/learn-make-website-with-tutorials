import React from 'react'
import aboutImg from '../assets/about4.jpeg'

const About = () => {
  return (
    <div className="bg-[#232325]">
      <div className="py-10 text-white max-w-[1200px] mx-auto h-auto" id="about">
        <div className="flex  sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="w-[400px] h-full">
              <img
                className="object-cover rounded-xl h-[300px] filter grayscale brightness-50"
                src={aboutImg}
                alt="about-image" />
            </div>
          </div>
          <div>
            <div className="p-2">
              <div className="text-gray-300 my-3">
                <h3 className="text-4xl font-semibold mb-5 ml-5">
                  About <span className="primary-text">me</span>
                </h3>
                <p className="text-justify leading-7 w-11/12 mx-auto">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae libero sint error quidem id aperiam, fuga numquam, nihil, ipsam beatae recusandae necessitatibus ab. Ut nisi in nesciunt corrupti consectetur sunt recusandae facere iure, quasi repudiandae!
                </p>
              </div>
            </div>
            <div className="flex mt-10 ml-10 items-center gap-7">
              <div className="bg-[#333333]/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  11 <span> + </span>
                </h3>
                <p><span className="md:text-base text-xs">Projects</span></p>
              </div>
              <div className="bg-[#333333]/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  5 <span> + </span>
                </h3>
                <p><span className="md:text-base text-xs">years experience</span></p>
              </div>
              <div className="bg-[#333333]/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  30 <span> + </span>
                </h3>
                <p><span className="md:text-base text-xs">happy cilents</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About