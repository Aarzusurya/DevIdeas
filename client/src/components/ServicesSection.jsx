import React, { useState, useEffect } from "react";
import "./ServicesSection.css";
import { useNavigate } from "react-router-dom";

function ServicesSection() {

  const services = [
    {
      title: "Android App Development",
      slug: "android-app-development",
      desc: "We develop creative, valuable ideas and focus on providing an excellent user experience.",
      images: [
        "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3",
        "https://images.unsplash.com/photo-1581090700227-4c4f50a2c64e"
      ]
    },
    {
      title: "iOS App Development",
      slug: "ios-app-development",
      desc: "Our team is capable of creating iOS compatible and efficient iOS apps.",
      images: [
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35c7",
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        "https://images.unsplash.com/photo-1512499617640-c2f999098c01"
      ]
    },
    {
      title: "Flutter App Development",
      slug: "flutter-app-development",
      desc: "Flutter is a popular tool for building high-quality cross-platform mobile apps.",
      images: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        "https://images.unsplash.com/photo-1537432376769-00a4c8b9c9cc",
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd"
      ]
    },
   
  ];

  return (
    <section className="srv-section">
      <div className="srv-wrapper">

        <h2 className="srv-heading">
          Custom Web Development Services in India
        </h2>

        <p className="srv-subtext">
          At AppIdeas, we deliver custom web development services 
          aligned with your business goals.
        </p>

        <div className="srv-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* Card Component */
function ServiceCard({ service }) {

  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === service.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [service.images.length]);

  const handleReadMore = () => {
    navigate(`/${service.slug}`);
  };

  return (
    <div className="srv-card">

      <div className="srv-image">
        <img src={service.images[current]} alt={service.title} />
      </div>

      <h3 className="srv-title">{service.title}</h3>
      <p className="srv-desc">{service.desc}</p>

      <button className="srv-btn" onClick={handleReadMore}>
        Read More
      </button>

    </div>
  );
}

export default ServicesSection;
