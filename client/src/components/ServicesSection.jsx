import React, { useEffect, useMemo } from "react";
import "./ServicesSection.css";
import { useNavigate } from "react-router-dom";

import androidImg from "../assets/android.png";
import iosImg from "../assets/ios.png";
import flutterImg from "../assets/flutters.png";

function ServicesSection() {

  const navigate = useNavigate();

  /* Services Data */

  const services = useMemo(() => [
    {
      title: "Android App Development",
      slug: "android-app-development",
      desc: "We develop powerful Android applications with modern UI, high performance and excellent user experience.",
      image: androidImg
    },
    {
      title: "iOS App Development",
      slug: "ios-app-development",
      desc: "Our team builds high quality iOS apps for iPhone and iPad using the latest technologies and frameworks.",
      image: iosImg
    },
    {
      title: "Flutter App Development",
      slug: "flutter-app-development",
      desc: "Flutter helps us build fast and beautiful cross-platform apps with a single codebase.",
      image: flutterImg
    }
  ], []);

  /* 🚀 Image Preload BEFORE render */

  useEffect(() => {

    const preloadImages = () => {
      services.forEach((service) => {
        const img = new Image();
        img.src = service.image;
      });
    };

    preloadImages();

  }, [services]);

  const handleReadMore = (slug) => {
    navigate(`/${slug}`);
  };

  return (
    <section className="srv-section">

      <div className="srv-wrapper">

        <h2 className="srv-heading">
          Custom Web & Mobile Development Services
        </h2>

        <p className="srv-subtext">
          At AppIdeas we provide powerful digital solutions that help
          businesses grow faster with modern technology and innovation.
        </p>

        <div className="srv-grid">

          {services.map((service, index) => (

            <div key={index} className="srv-card">

              <div className="srv-image">

                <img
                  src={service.image}
                  alt={service.title}
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                  width="100%"
                  height="220"
                />

              </div>

              <h3 className="srv-title">
                {service.title}
              </h3>

              <p className="srv-desc">
                {service.desc}
              </p>

              <button
                className="srv-btn"
                onClick={() => handleReadMore(service.slug)}
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

export default ServicesSection;
