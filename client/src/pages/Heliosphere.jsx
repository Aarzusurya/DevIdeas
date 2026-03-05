import React from "react";
import { useNavigate } from "react-router-dom";
import "./Heliosphere.css";

function Heliosphere() {
  const navigate = useNavigate();

  return (
    <div className="helio-wrapper">

      {/* HERO SECTION */}
      <section className="helio-phere">
        <div className="helio-content">

          {/* Image */}
          <div className="helio-image">
            <img
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
              alt="Solar Energy"
            />
          </div>

          {/* Text */}
          <div className="helio-text">
            <h1>Heliosphere</h1>

            <p>
              As a Complete Solar affiliate, you can get paid just for taking a
              picture of your customer's utility bill. It's easy to turn your
              service calls into an extra paycheck.
            </p>

            <p>
              Just log in, input the customer's information, snap a picture of
              your client's utility bill, and hit submit. You don't need to know
              anything about solar to benefit from the solar revolution.
            </p>

            <p>
              Just let your customer know that you're looking into
              money-saving programs for them, and they'll be happy to hand over
              their bill. That means more money in your pocket.
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="helio-features">
        <h2>Features</h2>
        <p className="helio-sub">
          Below are some of the major features inside the app
        </p>

        <div className="helio-grid">

          <div className="helio-card">
            <h3>Get Paid</h3>
            <p>
              Log in, enter customer info, upload the utility bill photo,
              and submit to earn commission easily.
            </p>
          </div>

          <div className="helio-card">
            <h3>Easy To Register</h3>
            <p>
              Register quickly with just your name, email address and password.
            </p>
          </div>

          <div className="helio-card">
            <h3>Money Saving App</h3>
            <p>
              Help customers discover money-saving solar programs while
              increasing your income.
            </p>
          </div>

          <div className="helio-card">
            <h3>Complete Dashboard</h3>
            <p>
              Access full customer details, submitted bills, and performance
              tracking inside a powerful dashboard.
            </p>
          </div>

        </div>
      </section>

      {/* NAVIGATION */}
      <div className="page-navigation">

        <button
          className="navs-btn secondary"
          onClick={() => navigate("/hisably")}
        >
          ← Previous
        </button>

      </div>

    </div>
  );
}

export default Heliosphere;