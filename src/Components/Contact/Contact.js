import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
<>
      <div className="form-container">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="send-message">Send Message</button>
        </form>
      </div>
      <div className="map-container">
        <iframe 
          title="Google Map" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.92146527344!2d-74.0059413!3d40.7127761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zMzLCsDQyJzQ2LjAiTiA3NMKwMDAnMDIuMCJX!5e0!3m2!1sen!2sus!4v1619711353319!5m2!1sen!2sus" 
          width="100%" 
          height="550" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"></iframe>
      </div>
      </>
      <>
      <div className="contact-info">
        <div className="info-item">
          <span className="icon">📍</span>
          <p>Level 17, 9 Castlereagh Street, Sydney-2000, NSW , Australia</p>
        </div>
        <div className="info-item">
          <span className="icon">📞</span>
          <p>+61470556686</p>
        </div>
        <div className="info-item">
          <span className="icon">📧</span>
          <p>info@executables.com</p>
        </div>
        <div className="info-item">
          <span className="icon">🌐</span>
          <p>Website: <a href="https://yoursite.com">yoursite.com</a></p>
        </div>
      </div>
      </>
    </div>
  );
}

export default Contact;
