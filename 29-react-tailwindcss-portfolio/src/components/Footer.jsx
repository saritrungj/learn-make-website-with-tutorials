import React from 'react'

const Footer = () => {
  return (
    <footer className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center">
      <p className="max-w-xl font-light text-gray-500">&copy; {new Date().getFullYear()} JARVIS Enterprises LLC. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer