import React from 'react'
import { Fade } from 'react-reveal';

function AboutUs() {
  return (
    <section id="about-us" className="py-5">
      <div className="container">
        <Fade left>
          <h2 className="text-center mb-4">About Us</h2>
          <p className="text-center">
            We are a leading provider of business solutions. Our team of experts works tirelessly to deliver top-notch services.
          </p>
        </Fade>
      </div>
    </section>
  )
}

export default AboutUs
