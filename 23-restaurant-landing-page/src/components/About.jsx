import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import AboutImage from '../images/about-background-image.png'
import AboutBackground from '../images/about-background.png'

const About = () => {
  return (
    <>
      <section className="section container">
        <div className="about-background">
          <img src={AboutBackground} alt="about-background" />
        </div>
        <div className="about-container">
          <div className="about-image">
            <img src={AboutImage} alt="about-image" />
          </div>
          <div className="about-box">
            <h5>About</h5>
            <h1>
              Food Is An Important <br />
              Part Of A Balanced <br />
              Diet
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus distinctio quisquam officiis est animi eos eius deserunt obcaecati voluptatibus amet aut consequatur adipisci, et optio sunt, voluptates aspernatur provident aperiam.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente hic in vitae enim labore. Exercitationem a ducimus earum dicta dolorem!
            </p>
            <div className="buttons">
              <button className="learn-more-button">Learn More</button>
              <a href="#">
                <span className="icon-play">
                  <FontAwesomeIcon icon={faPlay} />
                </span>
                <span>
                  Watch Video
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About