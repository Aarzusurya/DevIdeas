import React from "react";
import devImg from "../assets/dev.png";
import growthImg from "../assets/growth.png";
import "../components/AboutSection.css";

function AboutSection() {
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
              to meet your business needs. With years of experience, a talented team, and a 
              customer-first approach, we stand out as the best choice for businesses looking for 
              custom web and mobile app development services in Ahmedabad and across India.
            </p>
            <button className="btn">Hire Top Development Agency in Ahmedabad Now</button>
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
              we transform your ideas into revenue-generating solutions. Our expert team has 
              successfully delivered a wide range of applications, including interactive shopping apps, 
              gaming apps, educational tools, lifestyle platforms, B2B e-commerce solutions, and 
              on-demand travel applications. We also specialize in creating dynamic and visually 
              engaging websites that align perfectly with your business goals, helping you establish 
              a strong digital presence.
            </p>
            <p>
              Over the past decade, we have consistently addressed our clients' unique requirements, 
              earning a reputation as one of the most trusted names in mobile app and web development 
              in Ahmedabad and India. Let AppAspect be your partner in turning your vision into 
              impactful, revenue-driven applications.
            </p>
            <button className="btn">Hire AppAspect Now</button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;