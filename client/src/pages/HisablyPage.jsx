import React from "react";
import { useNavigate } from "react-router-dom";
import "./HisablyPage.css";

function HisablyPage() {
  const navigate = useNavigate();

  return (
    <div className="his-wrapper">

      {/* HERO SECTION */}
      <section className="his-able">
        <div className="his-able-content">

          {/* Image */}
          <div className="his-image">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
              alt="Hisably Management App"
            />
          </div>

          {/* Text */}
          <div className="his-text">
            <h1>Hisably</h1>

            <p>
              Hisably makes managing convenience stores simple, fast and efficient.
              It provides a modern digital solution to streamline daily operations.
            </p>

            <p>
              The platform offers real-time monitoring, smart analytics, and
              an intuitive dashboard for better business control.
              Built for productivity and growth, Hisably ensures smooth
              performance and secure data handling.
            </p>

          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="his-features">
        <h2>Features</h2>
        <p className="his-sub">
          Below are some of the major features inside the app
        </p>

        <div className="his-grid">

          <div className="his-card">
            <h3>All-in-One Accounting</h3>
            <p>
              Track stock levels and manage products efficiently with real-time updates.
            </p>
          </div>

          <div className="his-card">
            <h3>Lottery Scanning Technology</h3>
            <p>
              Monitor daily performance and generate smart business insights.
            </p>
          </div>

          <div className="his-card">
            <h3>Daily Cash Flow Reports</h3>
            <p>
              Advanced protection to keep your business and customer data safe.
            </p>
          </div>

          <div className="his-card">
            <h3>Manage Employees</h3>
            <p>
              Generate reports quickly for better decision making.
            </p>
          </div>

        </div>
      </section>

      {/* NAVIGATION */}
      <div className="page-navigation">

        <button
          className="navt-btn secondary"
          onClick={() => navigate("/nullcom")}
        >
          ← Previous
        </button>

        <button
          className="navt-btn"
          onClick={() => navigate("/heliosphere")}
        >
          Next →
        </button>

      </div>

    </div>
  );
}

export default HisablyPage;