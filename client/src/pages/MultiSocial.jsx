import React from "react";
import { Link } from "react-router-dom";
import "./MultiSocial.css";

function MultiSocial() {
  return (
    <div className="multi-wrapper">

      {/* HERO SECTION */}
      <section className="multi-smart">
        <div className="multi-hero-content">

          <div className="multi-smart-text">
            <h1>Dual Accounts - Multi Social</h1>
            <p>
              Manage multiple accounts from the same social media. Moreover,
              the Dual Accounts app helps to manage and use private and public
              accounts of different social media.
            </p>
          </div>

          <div className="multi-smart-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Dual Accounts App"
            />
          </div>

        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="multi-description">

        <p>
          Are you really struggling to use your Dual Social accounts in your
          iPhone? Don’t worry we are here to listen you and we are providing you
          world’s best Dual accounts app which helps you to use Multiple accounts
          from same social media. Moreover, Dual Accounts app helps to manage
          and use private and public accounts of different social media.
          Now you can use your one device to use and manage one or more social account.
        </p>

        <p>
          Are you struggling with memory issue in your iPhone device? Don’t worry!
          We are very conscious about user’s device space, so we are providing you
          Dual account app with just only 3MB.
        </p>

        <p>
          However, sometimes you can’t restrict yourself from social media addiction,
          that’s why we have provided Time Usage and Manage Time feature to track
          the time you are spending on social media.
        </p>

        <p>
          We are very conscious about user’s privacy. Now it’s easy to secure your
          social media and private notes by using Setup Passcode feature from App’s
          setting page.
          We are providing in app Private browser to keep secure your private web history.
        </p>

        <p>
          If you have any suggestion except what we are providing, feel free to give
          your valuable suggestion from App List screen.
        </p>

      </section>

      {/* FEATURES SECTION */}
      <section className="multi-features">

        <h2>Features</h2>
        <p className="feature-intro">
          Below are some of the major features inside the app, check it out for more information.
        </p>

        <div className="features-grid">

          <div className="feature-card">
            <h3>30+ Apps Support</h3>
            <p>
              Support over 30+ apps including Facebook, Instagram, Twitter,
              Snapchat, Messenger, Skype, WhatsApp, Viber, Gmail, Telegram,
              WeChat, LinkedIn etc.
            </p>
          </div>

          <div className="feature-card">
            <h3>Private Web Browser & Private Notes</h3>
            <p>
              Secure your browsing experience and protect your private notes
              inside the app.
            </p>
          </div>

          <div className="feature-card">
            <h3>Time Usage & Limit</h3>
            <p>
              Time usage and Time limit feature to track and manage the time
              you spend on social media.
            </p>
          </div>

          <div className="feature-card">
            <h3>App Security with Passcode</h3>
            <p>
              Secure your app with Passcode and protect your accounts
              from unauthorized access.
            </p>
          </div>

        </div>

      </section>

      {/* PAGE NAVIGATION */}
      <div className="page-navigation">
        <Link to="/periods">
          <button className="pro-btn">Next App →</button>
        </Link>
      </div>

    </div>
  );
}

export default MultiSocial;