import React, { useEffect } from 'react'
import bgVideo from './assets/earth-bg.mp4'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HeroCard from './components/HeroCard/HeroCard'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Footer from './components/Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    AOS.init({
      dutation: 1200,
      easing: "ease-in-out",
    })
  })
  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            src={bgVideo}
            autoPlay
            loop
            muted
            className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          />
          <Navbar />
          <Hero />
        </div>
        <HeroCard />
        <Banner />
        <Banner2 />
        <Footer />
      </div>
    </>
  )
}

export default App