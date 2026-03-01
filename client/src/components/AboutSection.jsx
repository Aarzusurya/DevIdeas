import React from "react";
import { useNavigate } from "react-router-dom";
import devImg from "../assets/dev.png";
import growthImg from "../assets/growth.png";
import "../components/AboutSection.css";

function AboutSection() {

  const navigate = useNavigate();

  const handleCTA = () => {
    navigate("/quote"); // 👈 QuotePage route
  };

  return (
    <section className="about-section">
      <div className="container about-content">

        {/* Top Section */}
        <div className="about-top">
          <div className="about-text">
            <h2>Website and Mobile App Development In India</h2>
            <p>
              Are you searching for a reliable mobile app development company in Ahmedabad? 
              At AppAspect, we specialize in creating innovative mobile and web solutions tailored 
              to meet your business needs.
            </p>
            <button className="btn" onClick={handleCTA}>
              Hire Top Development Agency in Ahmedabad Now
            </button>
          </div>
          <div className="about-image">
            <img src={devImg} alt="Development" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="about-bottom">
          <div className="about-image">
            <img src={growthImg} alt="Growth" />
          </div>
          <div className="about-text">
            <h2>We Develop, Design, Grow, and Prosper</h2>
            <p>
              At AppAspect, a leading mobile app and web development company in Ahmedabad, 
              we transform your ideas into revenue-generating solutions.
            </p>
            <button className="btn" onClick={handleCTA}>
              Hire AppAspect Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;