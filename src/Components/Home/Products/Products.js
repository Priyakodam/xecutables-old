import React from 'react';
import { Fade } from 'react-reveal';
import { useNavigate } from 'react-router-dom'; 
import img from "../Images/img3.jpeg";
import './Products.css'; // Import the CSS file

function Products() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/about');  // Navigate to /about route
  };

  return (
    <div className="container">
      <Fade right>
      <div className="image-container">
        <img
          src={img}
          alt="Account Opening in Financial Services"
          className="responsive-image"
        />
      </div>
      </Fade>
      <Fade left>
      <div className="text-container">
        <h1>Product</h1>
        <p>
          Liminal’s Link™ Index profiles 32 leading vendors looking at momentum, 
          market strength, stability, product scope, and leadership — finding only 
          21.3% of vendors meet buyer demands. Download the full report to get a 
          complete view of the market challenges facing buyers, key purchasing decisions, 
          and product demand criteria — and learn why Onfido is ranked as a global Market Leader, 
          and a specific Regional Leader in Europe.
        </p>
       
        <button className="product-button" onClick={handleNavigation}>
              More About Us
            </button>
      </div>
      </Fade>
    </div>
  );
}

export default Products;
