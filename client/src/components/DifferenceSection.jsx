import React from "react";
import { useNavigate } from "react-router-dom";
import "./DifferenceSection.css";

function DifferenceSection() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/quote");   // 👈 QuotePage ka route
  };

  return (
    <section className="difference-section">
      <div className="difference-container">

        <h2 className="difference-heading">
          How AppAspect Differs from Other Mobile App Development Companies
        </h2>

        <p className="difference-text">
          TechVertex aims to rise to the top and become the best web design and mobile app development company based in Ahmedabad, India. 
          We prioritize our client’s demands and consumer’s needs and provide efficient, attractive, and valuable cross-platform app development 
          compatible with all systems and platforms. We guarantee the credibility of our work through the satisfaction achieved by our previous clients.
        </p>

        <button 
          className="difference-btn"
          onClick={handleClick}
        >
          Learn more about us
        </button>

      </div>
    </section>
  );
}

export default DifferenceSection;