import React from 'react'
import userImage from '../images/john-doe-image.png'

const Testimonial = () => {
  return (
    <>
      <section className="section container">
        <div className="test-container">
          <div className="test-intro">
            <h5>Testimonial</h5>
            <h1>What They Are Saying</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quae maxime recusandae blanditiis, reiciendis voluptatibus sapiente rerum molestiae quos eius.
            </p>
          </div>
          <div className="test-card">
            <div className="card">
              <div className="card-image">
                <img src={userImage} alt="user-image" />
              </div>
              <div className="card-comment">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, fugit doloremque autem debitis libero laborum.
                </p>
              </div>
              <div className="card-user">
                <div className="rating">
                  <p>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </p>

                </div>
                <div className="username">
                  <span>John Doe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial