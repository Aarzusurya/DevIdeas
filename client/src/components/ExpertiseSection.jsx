import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ExpertiseSection.css";

import ai from "../assets/Ai.png";
import ai1 from "../assets/Ai1.png";
import ai2 from "../assets/Ai2.png";

import agent from "../assets/agent.png";
import agent1 from "../assets/agent1.png";
import agent2 from "../assets/agent2.png";

// Image arrays
const aiImages = [ai, ai1, ai2];
const agentImages = [agent, agent1, agent2];

function ExpertiseSection() {
  const [aiIdx, setAiIdx] = useState(0);
  const [agentIdx, setAgentIdx] = useState(0);

  const navigate = useNavigate();

  // Auto image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setAiIdx((prev) => (prev + 1) % aiImages.length);
      setAgentIdx((prev) => (prev + 1) % agentImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Read More Button
  const handleReadMore = (route) => {
    navigate(route);
  };

  const expertiseData = [
    {
      img: aiImages[aiIdx],
      title: "AI Automation",
      desc: "AppAspect is a trusted AI automation company in India, helping businesses streamline operations and improve efficiency through intelligent automation.",
      route: "/ai",
    },
    {
      img: agentImages[agentIdx],
      title: "Custom AI Agent Development",
      desc: "Custom AI agent development transforms business operations with intelligent, automated solutions that adapt to your workflow.",
      route: "/customai",
    },
  ];

  return (
    <section className="expertise-section">
      <div className="container">
        <h2 className="section-title">Our Expertise</h2>

        <div className="expertise-cards">
          {expertiseData.map((item, index) => (
            <div key={index} className="expertise-card">
              <div className="card-img">
                <img src={item.img} alt={item.title} />
              </div>

              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>

              <button
                className="btn read-more"
                onClick={() => handleReadMore(item.route)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;