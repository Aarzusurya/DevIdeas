import React from "react";
import "./Tommy.css";
import { Link } from "react-router-dom";

function Tommy() {

  // Image from public folder
  const tommyImg = "/images/tommy-app.png"; // public/images folder me rakho

  return (
    <div className="tommy-wrapper">

      {/* ================= HERO SECTION ================= */}
      <section className="tommy-tasty">
        <div className="tommy-tasty-content">

          <div className="tommy-image">
            <img src={tommyImg} alt="Original Tommy's App" loading="lazy" />
          </div>

          <div className="tommy-text">
            <h1>Original Tommy's</h1>

            <p>
              The official ORIGINAL TOMMY'S app gives you access to exclusive 
              mobile discounts. Explore our menu, find your nearest Original 
              Tommy's location, shop for Original Tommy's apparel & gear, and much more!
            </p>

            <p>
              The Original Tommy's App is the best way to find our 
              World-Famous Chili & menu across California & Nevada.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="tommy-features">
        <h2>Features</h2>
        <p className="tommy-sub">
          Below are some of the major features inside the app
        </p>

        <div className="tommy-grid">

          <div className="tommy-card">
            <div className="tommy-icon">📱</div>
            <h3>Mobile Order</h3>
            <p>
              Order delivery directly from the mobile app. Exclusive specials 
              and discounts are available only through the app.
            </p>
          </div>

          <div className="tommy-card">
            <div className="tommy-icon">📋</div>
            <h3>Menu</h3>
            <p>
              Explore the full menu, view available items by location, 
              and check calorie information for each menu item.
            </p>
          </div>

          <div className="tommy-card">
            <div className="tommy-icon">📍</div>
            <h3>Locations</h3>
            <p>
              Browse all 34 locations across Southern California & Nevada. 
              View store photos and contact details.
            </p>
          </div>

          <div className="tommy-card">
            <div className="tommy-icon">🚚</div>
            <h3>Food Truck</h3>
            <p>
              Book our "Shack On Wheels" for birthdays, corporate events, 
              retirement parties, and more. We bring food & supplies to you.
            </p>
          </div>

        </div>
      </section>

      {/* ================= NAVIGATION ================= */}
      <div className="page-navigation">
        <Link to="/ranfleet">
          <button className="navi-btn secondary">← Previous</button>
        </Link>

        <Link to="/nullcom">
          <button className="navi-btn">Next →</button>
        </Link>
      </div>
    </div>
  );
}

export default Tommy;