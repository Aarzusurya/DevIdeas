import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AI.css";
import aiImage from "../assets/ai-automation.png";

// Services images
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";

// Growth images
import growth1 from "../assets/growth1.png";
import growth2 from "../assets/growth2.png";
import growth3 from "../assets/growth3.png";
import growth4 from "../assets/growth4.png";

function AI() {

  const navigate = useNavigate();

  const services = [
    { image: service1, title: "AI Automation Consultation", desc: "Before jumping into tools and models, you need clarity. What to automate, why, and how it fits into your workflow. That’s where our AI automation consultation comes in. At AppAspect, we help you map automation opportunities with a practical lens. We chalk out a roadmap that perfectly aligns with your business goals." },
    { image: service2, title: "AI Process Automation", desc: "Our AI process automation services streamline operations. From data entry to task routing, document processing, chatbots, and approvals—all managed by systems that learn and adapt. We help you reduce turnaround times, improve consistency, and free up human talent for high-value work." },
    { image: service3, title: "AI Integration", desc: "Already using tools like ERPs, CRMs, or third-party APIs? Automation experts at AppAspect help integrate AI seamlessly into your existing tech ecosystem without any disruptions." },
    { image: service4, title: "CRM Automation", desc: "With AppAspect’s CRM automation, your customer journeys get smarter—automated follow-ups, predictive lead scoring, personalized interactions." },
    { image: service5, title: "AI Agent Development", desc: "We create autonomous AI agents capable of handling customer interactions, managing workflows, and executing complex tasks with accuracy." },
    { image: service6, title: "AI-Powered Product Development", desc: "Building a product with AI at its core? We help plan, prototype, test, and deploy intelligent features." }
  ];

  const growthAreas = [
    { image: growth1, title: "Machine Learning", desc: "We use machine learning and data science to build predictive models and automate decisions." },
    { image: growth2, title: "Deep Learning", desc: "Deep learning solutions automate complex tasks and improve system performance." },
    { image: growth3, title: "Natural Language Processing (NLP)", desc: "We build NLP models that understand and interpret human language." },
    { image: growth4, title: "Robotic Process Automation (RPA)", desc: "Our RPA solutions automate repetitive tasks and improve efficiency." }
  ];

  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".reveal-card");
      elements.forEach((el, idx) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
          setVisibleCards(prev => (!prev.includes(idx) ? [...prev, idx] : prev));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="ai-page">
      <div className="container ai-container">

        {/* HERO */}
        <div className="ai-hero">

          <div className="ai-image">
            <img src={aiImage} alt="AI Automation" />
          </div>

          <div className="ai-content">
            <h1>AI Automation Company in India</h1>

            <p>
              AppAspect is a trusted AI automation company in India, helping businesses streamline operations and improve efficiency through intelligent automation services.
            </p>

            <div className="ai-buttons">
              <button 
                className="btn contact-btn"
                onClick={() => navigate("/quote")}
              >
                Contact Us
              </button>

              <button 
                className="btn call-btn"
                onClick={() => navigate("/quote")}
              >
                Schedule a Call
              </button>
            </div>

          </div>
        </div>

        {/* SERVICES */}
        <h2 className="section-heading">AI Automation Services We Offer</h2>

        <div className="services-grid">
          {services.map((s, idx) => (
            <div key={idx} className={`service-card reveal-card ${visibleCards.includes(idx) ? "visible" : ""}`}>
              <img src={s.image} alt={s.title} />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* GROWTH AREAS */}
        <h2 className="section-heading">
          Drive Business Growth with Our Extensive AI Automation Expertise
        </h2>

        <div className="growth-grid">
          {growthAreas.map((g, idx) => (
            <div key={idx} className={`growth-card reveal-card ${visibleCards.includes(idx + services.length) ? "visible" : ""}`}>
              <img src={g.image} alt={g.title} />
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AI;