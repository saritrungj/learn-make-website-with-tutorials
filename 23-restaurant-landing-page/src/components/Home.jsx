import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import BannerBackground from '../images/home-banner-background.png'
import BannerImage from '../images/home-banner-image.png'

const Home = () => {
  return (
    <>
      <section className="section container">
        <div className="banner-background">
          <img src={BannerBackground} alt="banner-background" />
        </div>
        <div className="home-container">
          <div className="home-box">
            <h1>
              Your Favourite Food <br />
              Delivered Hot & <br />
              Fresh
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque laudantium quibusdam esse quae nisi maiores eaque pariatur reiciendis quod incidunt nemo, quaerat error aliquid officia dolores consectetur voluptate? Provident!
            </p>
            <button className="order-button">
              Order Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="home-image">
            <img src={BannerImage} alt="banner-image" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home