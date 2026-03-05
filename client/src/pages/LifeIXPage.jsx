import React from "react";
import "./LifeIXPage.css";

const LifeIXPage = () => {
  return (
    <div className="life-container">

      <h1 className="life-title">LifeIX</h1>

      {/* OVERVIEW */}

      <section className="life-section">

        <h2>OVERVIEW</h2>

        <p>
          LifeIX is a cutting-edge technology that monitors the medical,
          emergency and personal data of elderly people. The fundamental
          premise is to allow patients to submit essential information
          into a secure account that is available to a responsive call
          centre.
        </p>

        <p>
          This innovative approach aims to solve the essential issue of
          providing support to older people who may be alone during
          emergencies.
        </p>

      </section>


      {/* IMAGE GALLERY */}

      <section className="life-gallery">

        <div className="life-scroll">

          <img src="https://images.unsplash.com/photo-1584515933487-779824d29309"/>
          <img src="https://images.unsplash.com/photo-1576765608866-5b51046452be"/>
          <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b"/>
          <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"/>

        </div>

      </section>


      {/* PROBLEM */}

      <section className="life-section">

        <h2>THE PROBLEM</h2>

        <p>
          LifeIX addresses a critical concern related to the vulnerability
          of elderly individuals when they are alone at home. The core
          issue lies in the potential threat to their well-being in case
          of an emergency, where the absence of immediate assistance
          becomes a significant risk.
        </p>

        <p>
          To tackle this issue, LifeIX seeks to implement a system that
          empowers patients to proactively share essential health data
          and emergency contact information. This proactive approach
          enhances safety and enables a faster response during emergencies.
        </p>

      </section>


      {/* PROCESS */}

      <section className="life-section">

        <h2>THE PROCESS</h2>

        <ul className="life-list">

          <li><strong>Define Objectives:</strong> Clearly define the goals and objectives of the LifeIX system.</li>

          <li>Identify important features like health data input, emergency contacts and alert systems.</li>

          <li><strong>Technology Stack:</strong> Choose appropriate technologies to build a secure system.</li>

          <li><strong>User Authentication:</strong> Implement secure login and registration systems.</li>

          <li><strong>User Profile:</strong> Create a profile section where users can add health information.</li>

          <li><strong>Emergency Alert System:</strong> Develop a feature that allows users to trigger alerts instantly.</li>

          <li><strong>Health Data Monitoring:</strong> Analyse and track health data trends.</li>

          <li>Integrate wearable devices or APIs for real-time monitoring.</li>

          <li><strong>Responsive Design:</strong> Ensure the system works smoothly on all devices.</li>

          <li><strong>Testing & Deployment:</strong> Perform testing and deploy the website on a reliable server.</li>

          <li><strong>Documentation:</strong> Maintain documentation for future updates.</li>

        </ul>

      </section>


      {/* RESULTS */}

      <section className="life-section">

        <h2>THE RESULTS</h2>

        <p>
          LifeIX successfully addresses the vulnerability of elderly
          individuals living independently by introducing a proactive
          monitoring system.
        </p>

        <p>
          The platform enables health data sharing, emergency contact
          storage and quick alert notifications to family members and
          authorities during emergencies.
        </p>

        <p>
          With a user-friendly interface and strong focus on security
          and privacy, LifeIX empowers elderly individuals and ensures
          prompt responses when emergencies occur.
        </p>

      </section>


      {/* TECHNOLOGY STACK */}

      <section className="life-stack">

        <h2>Technologies Used</h2>

        <div className="life-icons">

          <div className="life-card">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919830.png"/>
            <p>Laravel</p>
          </div>

          <div className="life-card">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919830.png"/>
            <p>PHP</p>
          </div>

          <div className="life-card">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png"/>
            <p>HTML</p>
          </div>

          <div className="life-card">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png"/>
            <p>CSS</p>
          </div>

          <div className="life-card">
            <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png"/>
            <p>Google Ads</p>
          </div>

          <div className="life-card">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png"/>
            <p>MySQL</p>
          </div>

          <div className="life-card">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"/>
            <p>JavaScript</p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default LifeIXPage;