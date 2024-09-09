import React from "react"
import { Fade } from 'react-reveal';

const Hero = () => {
  return (
    <div className="hero-section">
    <div className="overlay">
      <div className="hero-content text-center">
        <Fade top>
          <h1>Welcome to Our Business</h1>
          <p>Providing Excellence in Every Service</p>
          <div className="hero-buttons mt-4">
            <a href="#about-us" className="btn btn-primary mx-2">About Us</a>
            <a href="#products" className="btn btn-secondary mx-2">Products</a>
            <a href="#engineering-services" className="btn btn-primary mx-2">Engineering Services</a>
            <a href="#professional-services" className="btn btn-secondary mx-2">Professional Services</a>
            <a href="#service-maintenance" className="btn btn-primary mx-2">Service & Maintenance</a>
          </div>
        </Fade>
      </div>
    </div>
  </div>
  )
}

export default Hero