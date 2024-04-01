import React from 'react'
import { FaCar, FaCheckCircle, FaHeadphonesAlt, FaWallet } from 'react-icons/fa'

const ServiceData = [
  {
    id: 1,
    icon: <FaCar className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order"
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Best Quality",
    description: "Best gadget quality and warranty"
  },
  {
    id: 3,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Many Gadget",
    description: "Have too many brand and types"
  },
  {
    id: 4,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment Secure"
  },
]

const Services = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data) => (
            <div key={data.id} className="flex flex-col items-start sm:flex-row gap-4">
              {data.icon}
              <div>
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services