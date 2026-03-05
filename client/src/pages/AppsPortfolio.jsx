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

              {/* Updated Navigation Logic */}
              {index === 0 ? (
                <Link to="/multi-social"><button>Read More</button></Link>
              ) : index === 1 ? (
                <Link to="/periods"><button>Read More</button></Link>
              ) : index === 2 ? (
                <Link to="/play-diary"><button>Read More</button></Link>
              ) : index === 3 ? (
                <Link to="/body-care-love"><button>Read More</button></Link>
              ) : index === 4 ? (
                <Link to="/ran-fleet"><button>Read More</button></Link>
              ) : index === 5 ? (
                <Link to="/tommy"><button>Read More</button></Link>
              ) : index === 6 ? (
                <Link to="/nullcom"><button>Read More</button></Link>
              ) : index === 7 ? (
                <Link to="/hisably"><button>Read More</button></Link>
              ) : index === 8 ? (
                <Link to="/heliosphere"><button>Read More</button></Link>
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