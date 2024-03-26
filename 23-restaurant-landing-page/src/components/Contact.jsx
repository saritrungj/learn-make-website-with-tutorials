import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="section container">
        <div className="contact-container">
          <div className="contact-title">
            <h1>
              Have Question In Mind? <br />
              Let Us Help You
            </h1>
          </div>
          <div className="contact-form">
            <label htmlFor="">
              <input type="text" placeholder="yourmail@gmail.com" />
              <button className="submit-button">Submit</button>
            </label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact