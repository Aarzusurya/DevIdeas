import React from "react";
import { useNavigate } from "react-router-dom";
import "./CTASection.css";
import { FaPhoneAlt } from "react-icons/fa";

function CTASection() {

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/quote");   // 👈 QuotePage ka route
  };

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

          <button 
            className="cta-btn"
            onClick={handleContactClick}
          >
            Contact Us
          </button>

        </div>

      </div>
    </section>
  );
}

export default CTASection;