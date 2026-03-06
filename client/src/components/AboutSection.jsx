import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import devImg from "../assets/dev.png";
import growthImg from "../assets/growth.png";
import "./AboutSection.css";

function AboutSection() {

  const navigate = useNavigate();

  // 🔥 Image Preload (mobile + desktop fast)
  useEffect(() => {
    const images = [devImg, growthImg];
    images.forEach((img) => {
      const image = new Image();
      image.src = img;
    });
  }, []);

  const handleCTA = () => {
    navigate("/quote");
  };

  return (
    <section className="flop-section">

      <div className="container flop-content">

        {/* TOP SECTION */}

        <div className="flop-top">

          <div className="flop-text">

            <span className="mini-title">AppAspect Development</span>

            <h2>Website and Mobile App Development In India</h2>

            <p>
              Are you searching for a reliable mobile app development company in Ahmedabad?
              At AppAspect, we specialize in creating innovative mobile and web solutions
              tailored to meet your business needs.
            </p>

            <ul className="feature-list">
              <li>✔ Custom Web & Mobile Applications</li>
              <li>✔ AI Powered Business Automation</li>
              <li>✔ Fast & Secure Scalable Platforms</li>
            </ul>

            <button className="btn" onClick={handleCTA}>
              Hire Top Development Agency Now
            </button>

          </div>

          <div className="flop-image">

            <img
              src={devImg}
              alt="Development"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />

          </div>

        </div>


        {/* BIG SPACE DIVIDER */}

        <div className="section-divider"></div>


        {/* BOTTOM SECTION */}

        <div className="flop-bottom">

          <div className="flop-image">

            <img
              src={growthImg}
              alt="Growth"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />

          </div>

          <div className="flop-text">

            <span className="mini-title">Growth Focused Solutions</span>

            <h2>We Develop, Design, Grow, and Prosper</h2>

            <p>
              At AppAspect, a leading mobile app and web development company in Ahmedabad,
              we transform your ideas into powerful digital products that help your
              business scale faster.
            </p>

            <ul className="feature-list">
              <li>✔ Revenue Focused Digital Products</li>
              <li>✔ Modern UI/UX Experience</li>
              <li>✔ Long-Term Technology Support</li>
            </ul>

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