import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Category from "./components/Category/Category"
import Category2 from "./components/Category/Category2"
import Services from "./components/Services/Services"
import Banner from "./components/Banner/Banner"
import Product from "./components/Product/Product"
import Blogs from "./components/Blogs/Blogs"
import Partners from "./components/Partners/Partners"
import Footer from "./components/Footer/Footer"

// import image to BannerData
import headphone from "./assets/hero/headphone.png"
import watch from "./assets/hero/smartwatch2-removebg-preview.png"


const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat sed praesentium cumque enim ipsum quis veritatis facere.",
  bgColor: "#f42c37"
}

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: watch,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat sed praesentium cumque enim ipsum quis veritatis facere.",
  bgColor: "#2dcc6f"
}

function App() {

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white
       duration-200 overflow-hidden">
        <Navbar />
        <Hero />
        <Category />
        <Category2 />
        <Services />
        <Banner data={BannerData}/>
        <Product />
        <Banner data={BannerData2}/>
        <Blogs />
        <Partners />
        <Footer />
      </div>
    </>
  )
}

export default App
