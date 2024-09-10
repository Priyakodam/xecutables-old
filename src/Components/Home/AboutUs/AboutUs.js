import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Fade } from 'react-reveal';
import img from "../Images/img1.jpeg"; // Replace this with your image import
import './AboutUs.css'; // CSS for styling

function AboutUs() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/about');  // Navigate to /about route
  };

  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <Fade left>
          <div className="about-us-content">
            <h2>Our Agency Story</h2>
            <p>Check out our company story and work process</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <button className="about-us-button" onClick={handleNavigation}>
              More About Us
            </button>
          </div>
        </Fade>
        <Fade right>
          <div className="about-us-image">
            <img src={img} alt="Agency Story" />
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default AboutUs;
