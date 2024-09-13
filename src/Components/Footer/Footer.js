// src/Footer.js

// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer>
//       <div className="footer-content">
//         <div className="about">
//           <h3>About</h3>
//           <p>
//             We are committed to providing the best service and products to our customers. Our goal is to exceed your expectations with quality and professionalism.
//           </p>
//         </div>
//         <div className="contact-us">
//           <h3>Contact Us</h3>
//           <p>Email: support@mywebsite.com</p>
//           <p>Phone: +1 (123) 456-7890</p>
//           <p>Address: 1234 Street Name, City, State, 56789</p>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; 2024 MyWebsite. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column logo-column">
          <img src="/xecutable.png" alt="Logo" className="footer-logo" />
          <p>
            We are committed to providing the best service and products to our customers. Our goal is to exceed your expectations with quality and professionalism.
          </p>
        </div>
        <div className="footer-column quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column subscribe">
          <h3>Subscribe Newsletter</h3>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email..." />
            <button type="submit"><i className="fa fa-arrow-right"></i></button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 All Rights Reserved by xecutables.com</p>
        <p className="designed-by">Designed and developed by <a href="https://prodigit.com">Prodigit</a></p>
      </div>
    </footer>
  );
};

export default Footer;
