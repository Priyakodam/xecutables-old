import React from 'react';
import { Fade } from 'react-reveal';
import './ProfessionalServices.css'; // Assuming you are using a separate CSS file

function ProfessionalServices() {
  return (
    <div className="services-container">
      {/* <h2 className="services-header">
        Global verification. <br />
        <span>Powerful automation.</span>
      </h2> */}
      <Fade bottom>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon-placeholder">📈</div>
            <h3>Increase acquisition</h3>
            <p>Drive conversion by deploying the right verification for every customer.</p>
            <a href="#" className="cta-link">Drive growth &rarr;</a>
          </div>

          <div className="service-card">
            <div className="icon-placeholder">🔍</div>
            <h3>Navigate compliance</h3>
            <p>Navigate global KYC/AML regulations with a global verification suite.</p>
            <a href="#" className="cta-link">Meet compliance &rarr;</a>
          </div>

          <div className="service-card">
            <div className="icon-placeholder">🛡️</div>
            <h3>Fight fraud</h3>
            <p>Let customers in and keep fraud out with AI-powered automation.</p>
            <a href="#" className="cta-link">Prevent fraud &rarr;</a>
          </div>

          <div className="service-card">
            <div className="icon-placeholder">💰</div>
            <h3>Reduce costs</h3>
            <p>Increase operational efficiency by orchestrating global workflows.</p>
            <a href="#" className="cta-link">Lower costs &rarr;</a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ProfessionalServices;
