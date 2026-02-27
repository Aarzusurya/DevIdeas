import React from "react";
import "./CTASection.css";
import { FaPhoneAlt } from "react-icons/fa";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">

        {/* Left Content */}
        <div className="cta-text">
          <h2>Call us now!</h2>
          <p>Boost your digital presence with our expert.</p>
        </div>

        {/* Right Content */}
        <div className="cta-contact">

          <div className="phone-box">
            <div className="phone-icon">
              <FaPhoneAlt />
            </div>
            <span className="phone-number">+91 96876 90810</span>
          </div>

          <button className="cta-btn">Contact Us</button>

        </div>

      </div>
    </section>
  );
}

export default CTASection;