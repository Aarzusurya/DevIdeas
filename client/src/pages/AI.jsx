import React, { useEffect, useState } from "react";
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
  const services = [
    { image: service1, title: "AI Automation Consultation", desc: "Before jumping into tools and models, you need clarity. What to automate, why, and how it fits into your workflow. That’s where our AI automation consultation comes in. At AppAspect, we help you map automation opportunities with a practical lens. We chalk out a roadmap that perfectly aligns with your business goals." },
    { image: service2, title: "AI Process Automation", desc: "Our AI process automation services streamline operations. From data entry to task routing, document processing, chatbots, and approvals—all managed by systems that learn and adapt. We help you reduce turnaround times, improve consistency, and free up human talent for high-value work." },
    { image: service3, title: "AI Integration", desc: "Already using tools like ERPs, CRMs, or third-party APIs? Automation experts at AppAspect help integrate AI seamlessly into your existing tech ecosystem without any disruptions. From connecting language models to automating backend logic and ensuring optimized AI-driven workflows, we do it all for you!" },
    { image: service4, title: "CRM Automation", desc: "With AppAspect’s CRM automation, your customer journeys get smarter—automated follow-ups, predictive lead scoring, personalized interactions, backed by intelligent logic. A fine-tuned CRM that serves as a strategic assistant." },
    { image: service5, title: "AI Agent Development", desc: "We create autonomous AI agents capable of handling customer interactions, managing workflows, and executing complex tasks with accuracy. These intelligent virtual assistants provide actionable insights and reduce manual effort." },
    { image: service6, title: "AI-Powered Product Development", desc: "Building a product with AI at its core? We work from planning, prototyping, testing, and deploying intelligent features that give your software a competitive edge. Recommendation engines, document summarization, and more." }
  ];

  const growthAreas = [
    { image: growth1, title: "Machine Learning", desc: "Our AI automation services involve the use of machine learning and data science to build predictive models, uncover trends, and automate decisions. All to help you make data-backed choices faster and with greater accuracy across a variety of operations. We turn raw data into meaningful, measurable actions." },
    { image: growth2, title: "Deep Learning", desc: "From image recognition to pattern detection, our agency’s deep learning solutions help automate complex tasks and improve system performance by mimicking human-like thinking—only quicker and far more scalable. Perfect for businesses that rely on high-volume data and real-time outcomes." },
    { image: growth3, title: "Natural Language Processing (NLP)", desc: "Our AI automation agency Ahmedabad develops NLP models that understand and interpret human language. Whether it's powering smart chatbots, voice assistants, or text analysis, we make your systems truly conversational and context-aware. It's how machines start making sense of your customers." },
    { image: growth4, title: "Robotic Process Automation (RPA)", desc: "Our RPA solutions handle repetitive, rules-based tasks with utmost ease. It frees up your team for strategic work while improving agility, accuracy, operational costs, and efficiency across various departments. Ideal for streamlining workflows and scaling operations without added overhead." }
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
              AppAspect is a trusted AI automation company in India, helping businesses streamline operations and improve efficiency through a full-suite of intelligent and highly intuitive automation services. We focus on building practical, scalable solutions that drive measurable outcomes.
            </p>
            <div className="ai-buttons">
              <button className="btn contact-btn">Contact Us</button>
              <button className="btn call-btn">Schedule a Call</button>
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
        <h2 className="section-heading">Drive Business Growth with Our Extensive AI Automation Expertise</h2>
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