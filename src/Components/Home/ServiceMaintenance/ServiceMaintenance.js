import React from 'react'
import img from "../Images/img2.jpeg";
import './ServiceMaintenance.css';

function ServiceMaintenance() {
  return (
    <div className="homecontainer mt-5">
      <div className="background-homecontainer">
        <img src={img} alt="Laptop" className="product-image" />
        <div
          className="text-content bg-white p-5 "
          style={{ textAlign: "justify" }}
        >

          <h2 className="text-center subheading">service</h2>
          <p>
            To innovate solutions that go above and beyond the clients’
            expectations and to provide them with end-to-end solutions.
            We strive to shape dreams into reality. The process of developing
            the solutions is like composing a song or narrating a story. The
            sole aim is to create value and be able to bring a smile to our clients.
          </p>

          <a href="/products" style={{ textDecoration: 'none' }}>
            <div className="button-homecontainer">
              <button className="btn btn-primary narrow-button" style={{ background: "linear-gradient(to bottom right, #007bff, #ff073a)", color: "white" }}>Explore More</button>
            </div>
          </a>


        </div>
      </div>
    </div>
  )
}

export default ServiceMaintenance
