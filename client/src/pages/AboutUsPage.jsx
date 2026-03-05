import React from "react";
import "./AboutUsPage.css";

function AboutUsPage() {
  return (
    <div className="about-container">

      {/* HERO SECTION */}

      <section className="about-lop">

        <img
          className="about-image"
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          alt="team"
        />

        <div className="about-text">
          <h1>About Us</h1>

          <p>
            <strong>About AppAspect Technologies</strong><br /><br />

            At AppAspect Technologies Pvt. Ltd., we help businesses simplify lives and scale their operations through innovative mobile app development, web solutions and AI-powered technologies.
            <br /><br />

            Since 2011, we’ve been a trusted partner for startups, enterprises and entrepreneurs worldwide. With a focus on cutting-edge technologies like Artificial Intelligence (AI), AI Agents and Vibe Coding, we deliver smarter, more intuitive solutions that keep our clients ahead in today’s fast-changing digital world.
            <br /><br />

            Our expertise spans Native iOS (Swift), Native Android (Kotlin), Flutter, React Native, Laravel, WordPress, WooCommerce and emerging AI frameworks.
            <br /><br />

            With millions of app downloads on the App Store and Google Play, our product division continues to innovate and deliver apps that users love.
            <br /><br />

            We are more than a software company—we are a team of passionate innovators committed to empowering businesses, nurturing talent and delivering excellence in every project.
          </p>
        </div>

      </section>


      {/* VISION MISSION */}

      <section className="vision-section">

        <div className="vision-card">
          <h3>Our Vision</h3>
          <p>
            To simplify lives and scale businesses through innovative digital solutions.
          </p>
        </div>

        <div className="vision-card">
          <h3>Our Mission</h3>
          <p>
            To empower businesses and nurture talent to deliver excellence.
          </p>
        </div>

      </section>


      {/* VALUES */}

      <section className="values-section">

        <h2>Our Values</h2>

        <div className="values-grid">

          <div className="value-card">
            <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png"/>
            <h4>Innovation</h4>
            <p>We embrace creativity, AI-powered solutions and emerging technologies to inspire progress.</p>
          </div>

          <div className="value-card">
            <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png"/>
            <h4>Integrity</h4>
            <p>We act with honesty, fairness and transparency in all we do.</p>
          </div>

          <div className="value-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"/>
            <h4>Excellence</h4>
            <p>We strive for the highest quality and set benchmarks in every project.</p>
          </div>

          <div className="value-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"/>
            <h4>Client-Centricity</h4>
            <p>We put customer success at the heart of every solution.</p>
          </div>

          <div className="value-card">
            <img src="https://cdn-icons-png.flaticon.com/512/906/906334.png"/>
            <h4>Teamwork</h4>
            <p>Collaboration and mutual respect drive our success.</p>
          </div>

          <div className="value-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991108.png"/>
            <h4>Continuous Learning</h4>
            <p>We stay ahead by exploring AI, Vibe Coding and next-generation tech trends.</p>
          </div>

          <div className="value-card">
            <img src="https://cdn-icons-png.flaticon.com/512/942/942799.png"/>
            <h4>Impact</h4>
            <p>Our solutions create a positive difference for clients, teams and society.</p>
          </div>

        </div>

      </section>


      {/* WHY CHOOSE */}

      <section className="choose-section">

        <h2>Why Choose AppAspect?</h2>

        <div className="choose-grid">

          <div className="choose-card">
            <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"/>
            <h4>AI-Powered Innovation</h4>
            <p>Smarter solutions for a competitive edge</p>
          </div>

          <div className="choose-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>
            <h4>Trusted Expertise</h4>
            <p>14+ years in mobile and web development</p>
          </div>

          <div className="choose-card">
            <img src="https://cdn-icons-png.flaticon.com/512/4149/4149676.png"/>
            <h4>Future-Ready Technologies</h4>
            <p>Embracing AI Agents and automation</p>
          </div>

          <div className="choose-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1534/1534959.png"/>
            <h4>Client Success Focus</h4>
            <p>Long-term partnerships that deliver results</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default AboutUsPage;