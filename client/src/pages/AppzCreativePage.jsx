import React from "react";
import "./AppzCreativePage.css";

const AppzCreativePage = () => {
  return (
    <div className="appz-container">

      <h1 className="appz-title">AppzCreative</h1>

      {/* OVERVIEW */}

      <section className="appz-section">

        <h2>OVERVIEW</h2>

        <p>
          AppzCreative is a leading global IT solutions provider
          specialising in developing innovative mobile applications
          and websites. With a strong client-centric approach,
          AppzCreative focuses on solving unique business challenges
          by using modern technologies that drive growth and innovation.
        </p>

        <p>
          Our expert team ensures that every project is delivered with
          high quality, efficiency and reliability. The company believes
          in providing top-quality services while maintaining strict
          timelines and performance standards.
        </p>

      </section>


      {/* IMAGE SCROLL */}

      <section className="appz-gallery">

        <div className="appz-scroll">

          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692"/>
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"/>
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"/>
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"/>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978"/>

        </div>

      </section>


      {/* PROBLEM */}

      <section className="appz-section">

        <h2>THE PROBLEM</h2>

        <p>
          AppzCreative faced significant challenges in managing and
          organising internal project management processes. The existing
          system lacked integration which resulted in scattered data
          storage and inefficient communication between teams.
        </p>

        <p>
          Without a centralised platform, managing projects,
          coordinating teams and sharing information became difficult.
          Therefore, the company needed a unified IT solution that could
          streamline operations and enhance service delivery.
        </p>

      </section>


      {/* PROCESS */}

      <section className="appz-section">

        <h2>THE PROCESS</h2>

        <ul className="appz-list">

          <li>
            <strong>Needs Analysis & Requirement Gathering:</strong>
            Initial meetings were conducted with clients to understand
            business requirements and technical needs.
          </li>

          <li>
            Daily brainstorming sessions were organised internally
            to design a cost-effective and scalable solution.
          </li>

          <li>
            <strong>Solution Design & Development:</strong>
            A structured development approach was followed to create
            a unified IT platform that integrates multiple tools and
            processes.
          </li>

          <li>
            <strong>Centralised Project Management Dashboard:</strong>
            Built a dashboard where project managers could track
            project progress, allocate resources and manage timelines.
          </li>

          <li>
            <strong>Real-time Communication Hub:</strong>
            Implemented a real-time communication system enabling
            smooth collaboration between teams and clients.
          </li>

          <li>
            <strong>Task & Resource Allocation:</strong>
            Added functionality to assign tasks based on skillsets
            and project requirements.
          </li>

          <li>
            <strong>Document Repository:</strong>
            Created a central document storage system ensuring
            organised and accessible project data.
          </li>

        </ul>

      </section>


      {/* RESULTS */}

      <section className="appz-section">

        <h2>THE RESULTS</h2>

        <p>
          <strong>Improved Operational Efficiency:</strong>
          The integrated system streamlined project management,
          reducing delivery time and improving operational efficiency
          by nearly 30%.
        </p>

        <p>
          <strong>Enhanced Communication:</strong>
          Real-time collaboration between teams improved coordination
          and increased productivity by 25%.
        </p>

        <p>
          <strong>Cost Savings:</strong>
          The centralised solution removed redundant systems,
          saving around 20% in maintenance and operational costs.
        </p>

        <p>
          <strong>Satisfied Clients:</strong>
          Faster project delivery and improved productivity resulted
          in better client satisfaction and a stronger market reputation.
        </p>

      </section>


      {/* TECHNOLOGIES */}

      <section className="appz-stack">

        <h2>Technologies Used</h2>

        <div className="appz-icons">

          <div className="appz-card">
            <img src="https://cdn-icons-png.flaticon.com/512/731/731985.png"/>
            <p>iOS</p>
          </div>

          <div className="appz-card">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226770.png"/>
            <p>Android</p>
          </div>

          <div className="appz-card">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png"/>
            <p>React Native</p>
          </div>

          <div className="appz-card">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png"/>
            <p>Kotlin</p>
          </div>

          <div className="appz-card">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919852.png"/>
            <p>Swift</p>
          </div>

          <div className="appz-card">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png"/>
            <p>Java</p>
          </div>

          <div className="appz-card">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png"/>
            <p>Objective-C</p>
          </div>

          <div className="appz-card">
            <img src="https://cdn-icons-png.flaticon.com/512/888/888879.png"/>
            <p>WordPress</p>
          </div>

          <div className="appz-card">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919830.png"/>
            <p>Laravel</p>
          </div>

          <div className="appz-card">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919830.png"/>
            <p>PHP</p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default AppzCreativePage;