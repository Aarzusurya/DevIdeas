import React from "react";
import "./RANFleet.css";
import { useNavigate } from "react-router-dom";

function RANFleet() {

  const navigate = useNavigate();

  // Image from public folder
  const fleetImg = "/images/fleet-app.png"; // public/images me rakho

  return (
    <div className="ran-wop">

      {/* ================= HERO SECTION ================= */}
      <section className="ran-car">
        <div className="ran-car-content">

          <div className="ran-text">
            <h1>RAN Fleet</h1>

            <p>
              The RAN Wireless Fleet Management app will allow a business owner
              or manager to access all of your data that is on the RAN Wireless
              Unified Management Platform whenever you need it from your mobile device.
            </p>

            <p>
              Your service vehicles must be tracked even if you are away from your
              office computer. The RAN Fleet mobile app allows you to access data
              about your service vehicles.
            </p>

            <p>
              This access to real-time metrics gives you the ability to stay in
              touch with each service vehicle’s performance, receive alerts and
              determine the status of all of your drivers.
            </p>
          </div>

          <div className="ran-image">
            <img src={fleetImg} alt="RAN Fleet App" loading="lazy" />
          </div>

        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="ran-features">
        <h2>Features</h2>
        <p className="ran-sub">
          Below are some of the major features inside the app
        </p>

        <div className="ran-grid">

          <div className="ran-card">
            <div className="ran-icon">📊</div>
            <h3>Real-Time Data</h3>
            <p>
              Access real-time vehicle performance, compare benchmarks,
              receive alerts, and stay updated with live tracking metrics.
            </p>
          </div>

          <div className="ran-card">
            <div className="ran-icon">🏢</div>
            <h3>Multiple Target Clients</h3>
            <p>
              Designed for internal company use, single target clients,
              or multiple client companies with centralized management.
            </p>
          </div>

          <div className="ran-card">
            <div className="ran-icon">🚗</div>
            <h3>Manage Vehicle</h3>
            <p>
              Manage and monitor vehicles from your mobile device,
              whether you're in the field, meeting, or traveling.
            </p>
          </div>

          <div className="ran-card">
            <div className="ran-icon">📁</div>
            <h3>Access Data</h3>
            <p>
              Access all data stored on the RAN Wireless Unified
              Management Platform anytime, anywhere.
            </p>
          </div>

        </div>
      </section>

      {/* ================= PAGE NAVIGATION ================= */}
      <div className="page-navigation">

        <button
          className="navo-btn secondary"
          onClick={() => navigate("/body-care-love")}
        >
          ← Previous
        </button>

        <button
          className="navo-btn"
          onClick={() => navigate("/tommy")}
        >
          Next → 
        </button>

      </div>

    </div>
  );
}

export default RANFleet;