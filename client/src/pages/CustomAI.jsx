import React, { useEffect, useState } from "react";
import "./CustomAI.css";
import customAIImage from "../assets/custom-ai.png"; // Hero image

// Services images
import service7 from "../assets/service7.png";
import service8 from "../assets/service8.png";
import service9 from "../assets/service9.png";
import service10 from "../assets/service10.png";
import service11 from "../assets/service11.png";
import service12 from "../assets/service12.png";

// Growth images
import growth5 from "../assets/growth5.png";
import growth6 from "../assets/growth6.png";
import growth7 from "../assets/growth7.png";
import growth8 from "../assets/growth8.png";

function CustomAI() {
  const services = [
    { image: service7, title: "Task Automation", desc: "AI agents take over repeat-heavy work like data entry, responses, and follow-ups. The result? Consistency, speed, and fewer sighs from your team. They seamlessly integrate with your existing systems to keep operations running smoothly." },
    { image: service8, title: "Continuous Learning", desc: "They don’t stay static. With every interaction, agents learn and adjust—fine-tuning how they respond and what they prioritize.This means your AI agents grow more effective without constant reprogramming." },
    { image: service9, title: "Cost Efficiency", desc: "Fewer manual hours, less operational drag. With custom AI agent development services, you save more than just time.The reduced overhead and improved accuracy lead to long-term business gains." },
    { image: service10, title: "Real-Time Decisions", desc: "No delays. AI agents evaluate situations as they unfold and act instantly - based on logic, not guesswork. This ensures faster resolutions and proactive problem-solving in high-stakes moments." },
    { image: service11, title: "24/7 Operation", desc: "Agents don’t log off. They keep systems running, customers supported, and tasks moving, even while you sleep.Your business stays responsive and productive around the clock." },
    { image: service12, title: "Smarter Insights", desc: "They don’t just gather data, but also digest it. Spotting trends and exceptions without anyone scrolling through endless reports.This helps teams make data-backed decisions faster and with more confidence." }

  ];

  const growthAreas = [
    { image: growth5, title: "Self-Learning Development", desc: "AI agents evolve through ongoing self-learning, reducing the load on developers. This development advantage means less manual intervention and faster improvement over time." },
    { image: growth6, title: "Smarter Interactions", desc: "By analyzing user data and using natural language processing, AI agents create highly personalized responses. This intelligent integration leads to better user engagement and satisfaction." },
    { image: growth7, title: "Flawless Integration", desc: "AI agents help automate repetitive tasks with precision. Their clean integration into workflows reduces human errors, saves time, and lowers operational costs." },
    { image: growth8, title: "Consulting-Led Integration", desc: "With the right consulting, integration becomes smoother and more effective. It helps AI agents blend seamlessly into existing systems, streamlining workflows and unlocking greater efficiency."}
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
    handleScroll(); // Initial check so first view cards visible
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="customai-page">
      <div className="container customai-container">

        {/* HERO SECTION */}
        <div className="customai-hero">
          <div className="customai-image">
            <img src={customAIImage} alt="Custom AI" />
          </div>
          <div className="customai-content">
            <h1>Custom AI Agent Development Company in India</h1>
            <p>Custom AI agent development and consulting by AppAspect - built to make your business faster, simpler, and ready for what’s next.</p>
            <div className="customai-buttons">
              <button className="btn contact-btn">Get in touch</button>
              <button className="btn demo-btn">Schedule a demo</button>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <h2 className="section-heading">
How AI Agents Work and Why They’re Valuable for Your Business</h2>
        <div className="services-grid">
          {services.map((s, idx) => (
            <div key={idx} className={`service-card reveal-card ${visibleCards.includes(idx) ? "visible" : ""}`} style={{opacity: 1, transform: 'translateY(0)'}}>
              <img src={s.image} alt={s.title} />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* GROWTH AREAS */}
        <h2 className="section-heading">Benefits Of AI Agent Development
</h2>
        <div className="growth-grid">
          {growthAreas.map((g, idx) => (
            <div key={idx} className={`growth-card reveal-card ${visibleCards.includes(idx + services.length) ? "visible" : ""}`} style={{opacity: 1, transform: 'translateY(0)'}}>
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

export default CustomAI;