import React from "react";
import { Link } from "react-router-dom";
import "./periodsPage.css";
import { FaCalendarAlt, FaHeartbeat, FaBaby, FaNotesMedical } from "react-icons/fa";

function PeriodsPage() {
  return (
    <div className="period-wrapper">

      {/* HERO SECTION */}
      <section className="period-pain">
        <div className="period-pain-content">

          <div className="period-text">
            <h1>My Period Tracker</h1>
            <p>
              My Period Tracker is an ingenious and easy-to-use application that
              helps women keep track of periods, cycles, ovulation, and fertile
              days whether you have irregular periods or regular periods.
            </p>
          </div>

          <div className="period-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
              alt="Calendar App"
            />
          </div>

        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="period-description">
        <p>
          It can track your chance of pregnancy every day. You can also record
          your sexual activity, weight, temperature, symptoms, or moods.
          You can use it as your personal period diary.
        </p>

        <p>
          With our app, you can enter daily notes and track symptoms, moods,
          intercourse, period flow, results of an ovulation test,
          and a pregnancy test.
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section className="period-features">

        <h2>Features</h2>
        <p className="feature-sub">
          Below are some of the major features inside the app, check it out for more information.
        </p>

        <div className="feature-grid">

          <div className="feature-card">
            <FaCalendarAlt className="feature-icon" />
            <h3>Period Tracker</h3>
            <p>
              Perfect for tracking your period and predicting when your next one
              will be with the period calendar.
            </p>
          </div>

          <div className="feature-card">
            <FaHeartbeat className="feature-icon" />
            <h3>Ovulation Calendar</h3>
            <p>
              The ovulation calendar feature helps you keep track of your
              ovulation cycle easily and accurately.
            </p>
          </div>

          <div className="feature-card">
            <FaNotesMedical className="feature-icon" />
            <h3>Period Calendar</h3>
            <p>
              Track your menstrual cycles, ovulation, and the chance of conception
              in a simple and organized way.
            </p>
          </div>

          <div className="feature-card">
            <FaBaby className="feature-icon" />
            <h3>Track Pregnancy</h3>
            <p>
              Input your due date and track your pregnancy journey with detailed
              insights and updates.
            </p>
          </div>

        </div>

      </section>

      {/* PAGE NAVIGATION */}
      <div className="page-navigation">

        <Link to="/multi-social">
          <button className="navu-btn secondary">← Previous</button>
        </Link>

        <Link to="/play-diary">
          <button className="navu-btn">Next →</button>
        </Link>

      </div>

    </div>
  );
}

export default PeriodsPage;
