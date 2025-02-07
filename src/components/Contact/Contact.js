import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Feel free to reach out using the contact information below.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Chaitany Layout, JP Nagar, Bengaluru, KA, 560076</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="info">
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>matheeq56@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="info">
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 6300985201</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 