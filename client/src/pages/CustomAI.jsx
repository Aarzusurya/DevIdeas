import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomAI.css";
import customAIImage from "../assets/custom-ai.png"; 

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

  const navigate = useNavigate();

  const services = [
    { image: service7, title: "Task Automation", desc: "AI agents take over repeat-heavy work like data entry, responses, and follow-ups. The result? Consistency, speed, and fewer sighs from your team." },
    { image: service8, title: "Continuous Learning", desc: "With every interaction, agents learn and adjust—fine-tuning how they respond and what they prioritize." },
    { image: service9, title: "Cost Efficiency", desc: "Fewer manual hours, less operational drag. Custom AI agents help reduce overhead and improve long-term business gains." },
    { image: service10, title: "Real-Time Decisions", desc: "AI agents evaluate situations instantly and act based on logic instead of guesswork." },
    { image: service11, title: "24/7 Operation", desc: "Agents keep systems running and customers supported even while your team is offline." },
    { image: service12, title: "Smarter Insights", desc: "They analyze data trends and help teams make smarter business decisions." }
  ];

  const growthAreas = [
    { image: growth5, title: "Self-Learning Development", desc: "AI agents evolve through ongoing self-learning, reducing the load on developers." },
    { image: growth6, title: "Smarter Interactions", desc: "AI agents analyze user data and create highly personalized responses." },
    { image: growth7, title: "Flawless Integration", desc: "Agents integrate seamlessly into workflows to reduce errors and improve efficiency." },
    { image: growth8, title: "Consulting-Led Integration", desc: "With proper consulting, AI agents integrate smoothly with existing systems." }
  ];

  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".reveal-card");

      elements.forEach((el, idx) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
          setVisibleCards(prev =>
            !prev.includes(idx) ? [...prev, idx] : prev
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

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

            <p>
              Custom AI agent development and consulting by AppAspect - built
              to make your business faster, simpler, and ready for what’s next.
            </p>

            <div className="customai-buttons">

              <button
                className="btn contact-btn"
                onClick={() => navigate("/quote")}
              >
                Get in touch
              </button>

              <button
                className="btn demo-btn"
                onClick={() => navigate("/quote")}
              >
                Schedule a demo
              </button>

            </div>
          </div>
        </div>

        {/* SERVICES */}
        <h2 className="section-heading">
          How AI Agents Work and Why They’re Valuable for Your Business
        </h2>

        <div className="services-grid">
          {services.map((s, idx) => (
            <div
              key={idx}
              className={`service-card reveal-card ${
                visibleCards.includes(idx) ? "visible" : ""
              }`}
            >
              <img src={s.image} alt={s.title} />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* GROWTH AREAS */}
        <h2 className="section-heading">
          Benefits Of AI Agent Development
        </h2>

        <div className="growth-grid">
          {growthAreas.map((g, idx) => (
            <div
              key={idx}
              className={`growth-card reveal-card ${
                visibleCards.includes(idx + services.length) ? "visible" : ""
              }`}
            >
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