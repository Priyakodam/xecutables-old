import React from 'react';
import './ServiceAndMaintenance.css'; // Importing a separate CSS file for styling
import { Fade } from 'react-reveal';


const ServiceAndMaintenance = () => {
  return (
    <div>
    <div className="service-maintenance-banner">
    {/* <p className="ser-banner-text">Service And Maintenance</p> */}
      <h1 className="ser-banner-text">Service And Maintenance</h1>
      </div>
      {/* <div className="cards-container">
        <div className="card silver">
          <h2>Silver Plan</h2>
          <p>Basic maintenance services including monthly check-ups and emergency support.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="card gold">
          <h2>Gold Plan</h2>
          <p>Advanced maintenance with priority support and quarterly performance reviews.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="card platinum">
          <h2>Platinum Plan</h2>
          <p>Complete premium support with round-the-clock service, including customized reports.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div> */}

<div className="service-maintenance-container">
      <h1 className="service-heading">Choose Your Plan</h1>
     
      <div className="plans-container">
      <Fade left>
        <div className="plan silver">
          <h2>Silver</h2>
          <p>Optimized account and links to raise support ticket for bugs and service requests.</p>
          <ul style={{marginBottom:'110px'}}>
            <li>Hotfixes and Product fixes</li>
            <li>Custom upgrades as per contracts</li>
          </ul>
          <button style={{borderRadius:'50px'}} className="buy-btn silver-btn">Buy Now</button>
        </div>
        </Fade >
        <Fade bottom>

        <div className="plan gold recommended">
          <p><span className="recommended-badge">Recommended</span></p>
          <h2>Gold </h2>
          <p>Priority support and extended office-time services with contractual SLAs.</p>
          <ul>
            <li>Hotfixes and Product fixes</li>
            <li>Office-time support and live consults</li>
            <li>Data fixes and service requests</li>
            <li>Status tracking and deployment support</li>
          </ul>
          <button style={{borderRadius:'50px'}} className="buy-btn gold-btn">Buy Now</button>
        </div>
        </Fade >
        <Fade right>

        <div className="plan platinum">
          <h2>Platinum</h2>
          <p>Premium support with dedicated individual assistance and hotline services.</p>
          <ul>
            <li>Hotfixes and Product fixes</li>
            <li>Office-time support and live consults</li>
            <li>Data fixes with contractual SLAs</li>
            <li>Status tracking and deployment support</li>
            <li>Free upgrades up to 1 year</li>
          </ul>
          <button style={{borderRadius:'50px'}} className="buy-btn platinum-btn">Buy Now</button>
        </div>
        </Fade >

      </div>
    </div>
    </div>

  );
};

export default ServiceAndMaintenance;
