import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center">
          <img
            className="w-[500px] mx-auto my-4"
            src={Laptop} alt="Laptop" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00fd9a] font-bold uppercase">
              Data analytics dashboard
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manage Data Analytics Centrally
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus beatae, labore iusto ab numquam libero doloribus architecto deleniti saepe amet. Ut minima voluptatibus voluptatem laudantium a odio molestiae suscipit nam.
            </p>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Analytics