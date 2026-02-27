import React, { useState } from "react";
import "./WhyChoose.css";

function WhyChoose() {
  const features = [
    {
      title: "Feature-Rich Solutions",
      description:
        "Our distinguishing factor lies in providing feature-rich solutions that make your clients choose you repeatedly.",
    },
    {
      title: "Scalability",
      description:
        "We understand your product and vision like no other. That's why we're the perfect guides for scaling up and reaching your ambitious goals.",
    },
    {
      title: "Latest Industry Knowledge",
      description:
        "We employ top talent and consistently upskill with the latest trends to ensure your solution is top-notch.",
    },
    {
      title: "Effective Communication",
      description:
        "We break down all technical aspects into easy-to-understand language, keeping you fully aware of every detail.",
    },
    {
      title: "Your Success Never Sleeps",
      description:
        "We offer continuous updates and steadfast support, fueling your solution's ascent day and night.",
    },
    {
      title: "Endless Possibilities",
      description:
        "Unlock endless possibilities with AppAspect, your trusted custom mobile & web development company in India.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFeature = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="why-choose-section">
      <div className="container">
        <h2 className="section-heading">
          Why Choose AppAspect for Mobile App & Web Development in Ahmedabad
        </h2>
        <p className="section-subtitle">
          As the leading mobile app development company in Ahmedabad, AppAspect offers end-to-end solutions for businesses of all sizes. Whether you need a user-friendly mobile application or a scalable web platform, our services are designed to help your business thrive in today's competitive market.
        </p>

        <div className="features-list">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFeature(index)}
            >
              <h3>{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;