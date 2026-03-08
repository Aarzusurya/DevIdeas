import React from "react";
import { Link } from "react-router-dom";
import "./AndroidAppDevelopment.css";


function AndroidAppDevelopment() {
  return (
    <div className="android-page">

      {/* HERO SECTION */}
      <section className="android-hero">
        <div className="android-container">

          <img
            src="/images/android-hero.png"
            alt="Android Development"
            className="hero-image"
          />

          <h1>
            Top Android App Development <br />
            Company in Ahmedabad, India
          </h1>

          <p>
            Android has become the leading operating system across the globe,
            including India. We deliver advanced Android app development
            services designed to enhance your business visibility and boost sales.
          </p>

        </div>
      </section>


      {/* ABOUT SECTION */}
      <section className="android-about">
        <div className="android-container">

          <h2>
            AppAspect: A Premier Android App Development Company in Ahmedabad
          </h2>

          <p>
            Did you know? Over 2 billion smart devices worldwide operate on Android.
            This platform offers businesses an expansive market, enabling them to connect
            with users in every corner of the world.
          </p>

          <p>
            AppAspect is your trusted partner for building robust,
            user-friendly applications that cater to your business’s unique needs.
          </p>

        </div>
      </section>


      {/* CALL SECTION */}
      <section className="android-cta">
        <div className="android-container cta-wrapper">

          <div className="cta-left">
            <h2>Call us now!</h2>
            <p>Boost your digital presence with our expert.</p>
          </div>

          <div className="cta-right">
            <div className="phone-icon">📞</div>
            <span className="phone-number">+91 96876 90810</span>
            <button className="cta-btn">Contact Us</button>
          </div>

        </div>
      </section>


      {/* SERVICES */}
      <section className="android-solid">
        <div className="android-container">

          <h2 className="solid-heading">
            Our Custom Android App Development Services
          </h2>

          <div className="solid-grid">

            <div className="solid-card">
              <h3>Custom Android App Development</h3>
              <p>
                We develop feature-rich Android apps tailored to
                your business requirements.
              </p>
            </div>

            <div className="solid-card">
              <h3>Android Web Apps</h3>
              <p>
                Seamless web-based Android applications with
                smooth user experience.
              </p>
            </div>

            <div className="solid-card">
              <h3>Android E-Commerce Apps</h3>
              <p>
                Advanced ecommerce apps with payment integration
                and modern UI.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* PORTFOLIO */}
      <section className="android-portfolio">
        <div className="android-container">

          <h2 className="portfolio-heading">Our Android Portfolio:</h2>

          <div className="portfolio-grid">

            {/* CARD 1 */}
            <div className="portfolio-card">

              <img
                src="/images/period-app.png"
                alt="My Period Tracker"
                className="portfolio-image"
              />

              <div className="portfolio-content">

                <h3>
                  <Link to="/periods">
                    My Period Tracker
                  </Link>
                </h3>

                <p>
                  An easy-to-use application that helps women track cycles,
                  ovulation and fertility.
                </p>

              </div>
            </div>


            {/* CARD 2 */}
            <div className="portfolio-card">

              <img
                src="/images/body-care.png"
                alt="Body Care Love"
                className="portfolio-image"
              />

              <div className="portfolio-content">

                <h3>
                  <Link to="/body-care-love">
                    Body Care Love
                  </Link>
                </h3>

                <p>
                  A lifestyle app combining sport, health and beauty
                  with personal development features.
                </p>

              </div>
            </div>


            {/* CARD 3 */}
            <div className="portfolio-card">

              <img
                src="/images/ran-fleet.png"
                alt="RAN Fleet"
                className="portfolio-image"
              />

              <div className="portfolio-content">

                <h3>
                  <Link to="/ranfleet">
                    RAN Fleet
                  </Link>
                </h3>

                <p>
                  Fleet management solution enabling businesses
                  to track vehicles and optimize operations.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default AndroidAppDevelopment;