import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faYoutube, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <>
      <footer className="footer container">
        <div className="footer-container">
          <div className="footer-boxes">
            <div className="company">
              <div className="company-logo">
                <a href="#">FOODIE</a>
              </div>
              <div className="company-links">
                <ul>
                  <li className="link">
                    <a href="#">
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                  </li>
                  <li className="link">
                    <a href="#">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li className="link">
                    <a href="#">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>
                  <li className="link">
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-boxes">
            <div className="faq-link">
              <ul>
                <li><a href="#">Quality</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Share</a></li>
                <li><a href="#">Carrers</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Testimonial</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-boxes">
            <div className="contact-link">
              <ul>
                <li><a href="#">244-5333-7783</a></li>
                <li><a href="#">hello@food.com</a></li>
                <li><a href="#">press@food.com</a></li>
                <li><a href="#">contact@food.com</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-boxes">
            <div className="policy-link">
              <ul>
                <li><a href="#">Term & Conditions</a></li>
                <li><a href="#">Privact Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">Copyrights © {new Date().getFullYear()}. Foodie Web Site. All Rights Reserved.</div>
    </>
  )
}

export default Footer