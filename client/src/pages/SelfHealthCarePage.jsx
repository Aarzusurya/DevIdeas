import React from "react";
import "./SelfHealthCarePage.css";

const SelfHealthCarePage = () => {
  return (
    <div className="health-container">

      <h1 className="health-title">Self Health Care</h1>

      {/* OVERVIEW */}
      <section className="health-section">

        <h2>OVERVIEW</h2>

        <p>
          Self-health care is a comprehensive health monitoring tool that
          measures and analyses critical health data. It connects to
          external sensors that track heart rate, saturation partial
          pressure, and sleep patterns using Bluetooth Low Energy (BLE)
          technology.
        </p>

      </section>


      {/* IMAGE SCROLL */}
      <section className="health-gallery">

        <div className="health-scroll">

          <img src="https://images.unsplash.com/photo-1584515933487-779824d29309"/>
          <img src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe"/>
          <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"/>
          <img src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2"/>

        </div>

      </section>


      {/* PROBLEM */}
      <section className="health-section">

        <h2>THE PROBLEM</h2>

        <p>
          The healthcare ecosystem faced issues due to the lack of a
          uniform platform to connect patients with their healthcare
          providers and the timely monitoring of patients' vital signs.
        </p>

        <p>
          Patients had difficulty communicating appropriate health
          information, and clinicians frequently received partial or
          delayed updates. This communication breakdown hampered
          proactive healthcare management.
        </p>

      </section>


      {/* PROCESS */}
      <section className="health-section">

        <h2>THE PROCESS</h2>

        <ul className="Health-list">

          <li>
            <strong>Assessment:</strong> Identify the specific
            communication gaps and challenges in the current healthcare
            ecosystem.
          </li>

          <li>
            Understand the requirements of both patients and healthcare
            providers for effective communication and monitoring.
          </li>

          <li>
            <strong>Wireframing and Design:</strong> Crafting wireframes
            for UI/UX simplicity to create a user-friendly experience.
          </li>

          <li>
            Designers collaborate to produce an intuitive interface
            that prioritises ease of navigation.
          </li>

          <li>
            <strong>Backend Infrastructure Development:</strong>
            Establishing a secure system to store and manage health data.
          </li>

          <li>
            Implementation of advanced encryption protocols to ensure
            privacy of sensitive health information.
          </li>

          <li>
            <strong>BLE Device Integration:</strong> Creating a
            standardised protocol for BLE communication.
          </li>

          <li>
            Seamless connection between the application and BLE health
            monitoring devices.
          </li>

          <li>
            <strong>User-Doctor Pairing:</strong> Patients can schedule
            appointments and connect easily with doctors.
          </li>

          <li>
            <strong>Doctor Dashboard:</strong> Doctors can monitor
            patient data and analyse health trends.
          </li>

        </ul>

      </section>


      {/* RESULT */}
      <section className="health-section">

        <h2>THE RESULTS</h2>

        <p>
          Self Health Care has successfully resolved communication
          challenges in healthcare by establishing a secure and
          efficient platform.
        </p>

        <p>
          This innovative solution enables the seamless transmission
          of real-time health data directly from patients to their
          designated doctors, enhancing healthcare monitoring and
          decision-making.
        </p>

      </section>


      {/* TECHNOLOGY STACK */}
      <section className="health-stack">

        <h2>Technologies Used</h2>

        <div className="health-icons">

          <div className="health-card">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png"/>
            <p>Kotlin</p>
          </div>

          <div className="health-card">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226770.png"/>
            <p>Android</p>
          </div>

          <div className="health-card">
            <img src="https://cdn-icons-png.flaticon.com/512/731/731985.png"/>
            <p>iOS</p>
          </div>

          <div className="health-card">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919852.png"/>
            <p>Swift</p>
          </div>

          <div className="health-card">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"/>
            <p>Firebase</p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default SelfHealthCarePage;