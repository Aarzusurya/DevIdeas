import React, { useEffect, useState } from "react";
import "./AppsPortfolio.css";
import { Link } from "react-router-dom";
import {
  FaMobileAlt,
  FaRocket,
  FaHeart,
  FaMapMarkerAlt,
  FaGift,
  FaGamepad,
  FaSun,
  FaStore,
  FaMoneyBillWave,
} from "react-icons/fa";

function AppsPortfolio() {
  const icons = [
    <FaMobileAlt />,
    <FaRocket />,
    <FaHeart />,
    <FaMapMarkerAlt />,
    <FaGift />,
    <FaGamepad />,
    <FaSun />,
    <FaStore />,
    <FaMoneyBillWave />,
  ];

  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % icons.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    { title: "Dual Accounts – Multi Social", desc: "Dual Accounts app helps to manage and use private and public…" },
    { title: "My Period Tracker", desc: "My Period Tracker is an ingenious and easy-to-use application that helps…" },
    { title: "Just Play Diary", desc: "Just play diary is the app that will become your best…" },
    { title: "Body Care Love", desc: "Body Care Love - The only app that combines sport, health,…" },
    { title: "RAN Fleet", desc: "The RAN Wireless Fleet Management app will allow a business owner…" },
    { title: "Original Tommy’s", desc: "The official ORIGINAL TOMMY'S app gives you access to exclusive mobile…" },
    { title: "Nullcom", desc: "Nullcom anonymous communication app can be a great way to stay…" },
    { title: "Hisably", desc: "Hisably makes managing convenience stores simple, fast and efficient." },
    { title: "Heliosphere", desc: "As a Complete Solar affiliate, you can get paid just for…" },
    { title: "EPT", desc: "EPT - MRUT's Electroplating Process Timer helps you optimize your daily…" },
    { title: "Flow Invoice", desc: "Flow (the online invoice) is eNet’s online invoice management tool that…" },
    { title: "GPS Speedometer", desc: "How fast are you going? With GPS Speedometer you can track…" },
    { title: "Burning Boredom", desc: "Let's start the entertainment for burning your boredom! Inside the…" },
    { title: "The Perfect Gift App", desc: "This is the perfect app when you need to send gifts…" },
    { title: "Swipe Me App", desc: "Swipe right (like) or left (dislike) through thousands of new faces…" },
    { title: "The Status App", desc: "The best videos may be downloaded from THE Status Video App…" },
    { title: "Roses Now", desc: "Don't wait! Reduce regret and ignite impact in someone's life effortlessly…" },
    { title: "FABULESSLY FRUGAL", desc: "Save money like never before! Discover Amazon discounts, trending online deals…" },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="apps-smart">
        <div className="smart-content">

          <div className="smart-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              alt="Rocket"
            />
          </div>

          <h1>Our Apps Portfolio</h1>
          <p>Our portfolio has a wide variety of products that can suit your needs.</p>
          <p>We take pride in our work and are always looking to improve.</p>

        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="portfolio-section">
        <div className="portfolio-grid">
          {cards.map((card, index) => (
            <div className="portfolio-card" key={index}>
              <div className="card-icon">
                {icons[(iconIndex + index) % icons.length]}
              </div>

              <h3>{card.title}</h3>
              <p>{card.desc}</p>

              {/* Navigation Logic */}
              {index === 0 ? (
                <Link to="/multi-social"><button>Read More</button></Link>
              ) : index === 1 ? (
                <Link to="/periods"><button>Read More</button></Link>
              ) : index === 2 ? (
                <Link to="/play-diary"><button>Read More</button></Link>
              ) : index === 3 ? (
                <Link to="/body-care-love"><button>Read More</button></Link>
              ) : (
                <button>Read More</button>
              )}

            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AppsPortfolio;