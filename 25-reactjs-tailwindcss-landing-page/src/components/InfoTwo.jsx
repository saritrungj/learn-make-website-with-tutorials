import React from 'react'

const InfoTwo = () => {
  return (
    <>
      <div className="container mx-auto flex items-center py-16">
        <div className="w-1/2 px-6 ml-4">
          <h2 className="text-3xl font-semibold">
            Welcome to Our Website
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus iste deserunt quibusdam suscipit sint dolor reiciendis ab nesciunt fuga blanditiis.
          </p>
        </div>
        <div className="w-1/2">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" alt="Developer" />
        </div>
      </div>
    </>
  )
}

export default InfoTwo