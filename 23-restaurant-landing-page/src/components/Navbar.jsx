import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <>
      <nav className="nav container">
        <div className="nav-container">
          <div className="logo">
            <a href="#">FOODIE</a>
          </div>
          <div className="nav-links">
            <ul>
              <li className="link"><a href="#">Home</a></li>
              <li className="link"><a href="#">About</a></li>
              <li className="link"><a href="#">Testimonials</a></li>
              <li className="link"><a href="#">Contact</a></li>
              <li className="link cart-icon"><a href="#"><FontAwesomeIcon icon={faCartShopping} /></a></li>
              <li className="link"><a href="#"><button>Booking Now</button></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar