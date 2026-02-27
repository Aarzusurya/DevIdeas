import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";
import "../components/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        {/* Hero Text */}
        <div className="hero-text">
          <h1>
            Best Mobile App Development
            <br />
            and Web Solutions in Ahmedabad
          </h1>

          <p>
            Guiding businesses with the ideal combination of modern
            technology solutions that makes you stand out from the
            competitors and generates a solid return on investment.
          </p>

          {/*  Corrected Button */}
          <Link to="/quote" className="btn">
            Get a Quote
          </Link>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img src={heroImg} alt="hero" />
        </div>

      </div>
    </section>
  );
}

export default Hero;