import React from "react";
import { Link } from "react-router-dom";
import "./PlayPage.css";
import { FaFutbol, FaChartLine, FaClipboardList, FaHistory, FaCalendarAlt } from "react-icons/fa";

function PlayPage() {
  return (
    <div className="play-wrapper">

      {/* HERO SECTION */}
      <section className="play-game">
        <div className="play-game-content">

          <div className="play-text">
            <h1>Just Play Diary</h1>
            <h3>JUST PLAY DIARY IS THE APP THAT WILL BECOME YOUR BEST FOOTBALL FRIEND.</h3>
            <p>
              The app has been developed for the soccer player and for the coach.
              Who are you in your everyday football life?
            </p>
          </div>

          <div className="play-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/53/53283.png"
              alt="Football App"
            />
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="play-features">

        <h2>Features</h2>
        <p className="feature-sub">
          Below are some of the major features inside the app, check it out for more information.
        </p>

        <div className="play-feature-grid">

          <div className="play-card">
            <FaChartLine className="play-icon" />
            <h3>Statistics</h3>
            <p>
              Keep statistics on training, matches, goals, etc. Comment and reflect
              on training and matches. Get simple feedback from the trainer.
            </p>
          </div>

          <div className="play-card">
            <FaClipboardList className="play-icon" />
            <h3>Planning and Training</h3>
            <p>
              Simple planning of training sessions, personal training, and matches
              along with tips and advice.
            </p>
          </div>

          <div className="play-card">
            <FaHistory className="play-icon" />
            <h3>Background</h3>
            <p>
              As young footballers, we were concerned with keeping a training diary,
              planning sessions/matches and setting goals.
            </p>
          </div>

          <div className="play-card">
            <FaCalendarAlt className="play-icon" />
            <h3>Calendar Overview</h3>
            <p>
              The calendar view inside the app is very user-friendly and updates
              for players' daily training routine.
            </p>
          </div>

        </div>

      </section>

      {/* PAGE NAVIGATION */}
      <div className="page-navigation">

        <Link to="/periods">
          <button className="navio-btn secondary">← Previous</button>
        </Link>

    <Link to="/body-care-love">
          <button className="navio-btn">Next →</button>
        </Link>

      </div>

    </div>
  );
}

export default PlayPage;