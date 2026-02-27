import React from "react";
import Footer from "../components/Footer";
import "./QuotePage.css";
import contactImg from "../assets/hero.png";

function QuotePage() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
  };

  return (
    <>
      <section className="quote-section">
        <div className="quote-container">

          {/* ===== HEADER ===== */}
          <div className="quote-header">
            <h1 className="quote-title">Get in Touch</h1>
            <h2 className="quote-subtitle">Have Any Questions?</h2>
            <p className="quote-description">
              Innovation is the key to smart success. We provide modern technology 
              solutions and creative strategies that help businesses grow faster and smarter.
            </p>
            <p className="quote-highlight">
              Fill out the form below and our team will contact you as soon as possible.
            </p>
          </div>

          {/* ================= TOP ROW ================= */}
          <div className="quote-top">

            {/* FORM */}
            <div className="quote-form-wrapper">
              <form onSubmit={handleSubmit} className="quote-form">

                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" required />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email address" required />
                </div>

                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" placeholder="Enter your company name" />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="form-group">
                  <label>Your Message</label>
                  <textarea rows="5" placeholder="Write your message here..." required></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>

              </form>
            </div>

            {/* OFFICE INFO */}
            <div className="office-info">
              <h3>India Office</h3>
              <p><strong>Phone:</strong> +91 96876 90810</p>
              <p><strong>Contact Person:</strong> Gurupritsingh Saini</p>
              <p><strong>Email:</strong> info@appaspect.com</p>
              <p className="address">
                A/8 Shakti Vijay Society, Near Vijay Park BRTS Bus Stand,  
                N.H. 8, Krishnanagar, Ahmedabad - 382345
              </p>
            </div>

          </div>

          {/* ================= BOTTOM ROW ================= */}
          <div className="quote-bottom">

            {/* IMAGE */}
            <div className="image-box">
              <img src={contactImg} alt="Contact Illustration" />
            </div>

            {/* SLIPS */}
            <div className="features-box">

              <div className="feature-item">
                <h3>Fast Response</h3>
                <p>We reply within 24 hours with proper consultation and guidance.</p>
              </div>

              <div className="feature-item">
                <h3>Experienced Team</h3>
                <p>Professional developers & designers with 5+ years of experience.</p>
              </div>

              <div className="feature-item">
                <h3>Affordable Pricing</h3>
                <p>Transparent pricing with no hidden charges and flexible plans.</p>
              </div>

              <div className="feature-item">
                <h3>24/7 Support</h3>
                <p>Our support team is always ready to help you anytime.</p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default QuotePage;