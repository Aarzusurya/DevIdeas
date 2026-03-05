import React from "react";
import { Link } from "react-router-dom";
import "./BodyPage.css";
import { FaDumbbell, FaSpa, FaAppleAlt, FaUtensils } from "react-icons/fa";

function BodyPage() {
  return (
    <div className="body-wrapper">

      {/* HERO SECTION */}
      <section className="body-health">
        <div className="body-health-content">

          <div className="body-text">
            <h1>BodyCareLove</h1>
            <p>
              Body Care Love - The only app that combines sport, health,
              and beauty with personal development. Your community for
              growth in every area of life.
            </p>
            <p>
              Together instead of alone is our attitude. The goal is to help
              1 million people become a better version of themselves.
              Do you join? We look forward to your BCL team!
            </p>
          </div>

          <div className="body-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
              alt="Fitness App"
            />
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="body-features">

        <h2>Features</h2>
        <p className="feature-sub">
          Below are some of the major features inside the app, check it out for more information.
        </p>

        <div className="body-feature-grid">

          <div className="body-card">
            <FaDumbbell className="body-icon" />
            <h3>Workout Database</h3>
            <p>
              Database of 150 different workouts for all fitness levels —
              from beginner to expert to stay fit and healthy.
            </p>
          </div>

          <div className="body-card">
            <FaSpa className="body-icon" />
            <h3>Daily Beauty Tips</h3>
            <p>
              Get daily beauty tips and advice. The app features a wide
              range of beauty suggestions you must check out.
            </p>
          </div>

          <div className="body-card">
            <FaAppleAlt className="body-icon" />
            <h3>Nutrition Plans</h3>
            <p>
              Provides training and nutrition plans to help users reach
              their fitness goals with progress tracking.
            </p>
          </div>

          <div className="body-card">
            <FaUtensils className="body-icon" />
            <h3>Healthy Recipes</h3>
            <p>
              Health-conscious and easy-to-follow recipes that are affordable
              and use common ingredients.
            </p>
          </div>

        </div>

      </section>

      {/* PAGE NAVIGATION */}
      <div className="page-navigation">

        <Link to="/play-diary">
          <button className="navy-btn secondary">← Previous</button>
        </Link>

        <Link to="/ranfleet">
          <button className="navy-btn">Next →</button>
        </Link>

      </div>

    </div>
  );
}

export default BodyPage;