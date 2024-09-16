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
            <h2>About</h2>
            <p>Check out our company story and work process</p>
            <p>
            Xecutables is a company dedicated to create business solutions that are practical,
             scalable and reliable. We have created a unique platform to integrate numerous 
             critical services at one place. With Artificial Intelligence (AI) as a critical 
             layer, business-specific solutions are created and deployed. They help in improving
              the efficiency of the processes that are critical to the business.
            </p>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p> */}
            <button className="about-us-button" onClick={handleNavigation}>
            Explore More
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
