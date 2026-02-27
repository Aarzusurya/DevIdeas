import React, { useEffect, useState, useRef } from "react";
import "./StatsSection.css";

function StatsSection() {
  const stats = [
    { title: "App Developed", value: 200 },
    { title: "Website Designed", value: 50 },
    { title: "Happy Clients", value: 70 },
    { title: "Team Strength", value: 25 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  // Count animation
  useEffect(() => {
    if (!startCount) return;
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((num, idx) => {
          if (num < stats[idx].value) return num + 1;
          return num;
        })
      );
    }, 20); // adjust speed
    return () => clearInterval(interval);
  }, [startCount, stats]);

  // Scroll trigger using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container stats-container">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-item">
            <h3 className="stat-number">{counts[idx]}+</h3>
            <p className="stat-title">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;