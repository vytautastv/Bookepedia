import React from 'react';
import '../styles/Footer.css';
import fb from '../assets/fling.png'
import linkedin from '../assets/liimg.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section_padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>For Business</h4>
            <a href="/cooperation">
              <p>Cooperation</p>
            </a>
            <a href="/careers">
              <p>Careers</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Resources Center</h4>
            <a href="/Resources">
              <p>Resources</p>
            </a>
            <a href="/sitemap">
              <p>Sitemap</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Partners</h4>
            <a href='/tech'>
              <p>Tech</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Company</h4>
            <a href="/contact">
              <p>Contact</p>
            </a>
            <a href="/termsandconditions">
              <p>Terms and conditions</p>
            </a>
            <a href="/privacy">
              <p>Privacy Policy</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p><img src={fb} alt=""/></p>
              <p><img src={linkedin} alt=""/></p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='sb__footer-below'>
        <div className='sb__footer-copyright'>
          <p>
            @{new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
