import React from 'react'

const Testimonial = () => {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Testimonials
          </h2>
          <div className="flex flex-wrap justify-center mt-8">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full mb-4"
                  src="https://images.unsplash.com/photo-1609866975749-2238afebfa27?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9obiUyMGRvZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="user" />
                <p className="text-gray-600">"Amazing service! I'm very satisfied with thier work."</p>
                <p className="text-gray-800 font-semibold mt-4">Jone Doe</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full mb-4"
                  src="https://images.unsplash.com/photo-1525138257806-dd63710e891b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFuZSUyMHNtaXRofGVufDB8fDB8fHww"
                  alt="user" />
                <p className="text-gray-600">"Great experience! Highly rrecommend thier services."</p>
                <p className="text-gray-800 font-semibold mt-4">Jane Smith</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full mb-4"
                  src="https://images.unsplash.com/photo-1635684639556-4451ce86fc54?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FtJTIwam9obnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="user" />
                <p className="text-gray-600">"They exceed my expectations. Top-notch quality"</p>
                <p className="text-gray-800 font-semibold mt-4">Sam Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial