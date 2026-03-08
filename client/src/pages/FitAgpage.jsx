import React from "react";
import "./FitAgpage.css";


const FitAgPage = () => {
  return (
    <div className="fitag-container">

      <h1 className="fitag-title">FitAg</h1>

      {/* OVERVIEW */}
      <section className="fitag-section">
        <h2>OVERVIEW</h2>

        <p>
          FitAg is dedicated to delivering a seamless and customised fitness
          experience for users. The application prioritises the integration
          of BMI data to craft personalised workout regimens, enabling users
          to effectively reach their fitness objectives with precision and ease.
        </p>
      </section>


      {/* IMAGE SCROLL */}
      <section className="fitag-gallery">

        <div className="gallery-scroll">

          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438" />
          <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f" />
          <img src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1" />
          <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f" />
          <img src="https://images.unsplash.com/photo-1517964603305-11c0f6f66012" />

        </div>

      </section>


      {/* PROBLEM */}
      <section className="fitag-section">

        <h2>THE PROBLEM</h2>

        <p>
          Within the dynamic evolution of the fitness industry, a discernible
          surge has emerged in the demand for personalised workout plans and
          streamlined exercise management. This trend reflects a growing
          recognition among fitness enthusiasts that a one-size-fits-all
          approach may not be optimal for achieving diverse health and
          wellness goals.
        </p>

        <p>
          As individuals seek more tailored and efficient solutions,
          there is an increasing need for platforms that can adapt to
          the unique requirements of each user.
        </p>

      </section>


      {/* PROCESS */}
      <section className="fitag-section">

        <h2>THE PROCESS</h2>

        <ul className="process-list">

          <li>
            <strong>BMI Integration:</strong> Users input their height,
            weight, and other relevant details to calculate their BMI.
            FitAg's algorithm interprets BMI data to categorise users
            into specific fitness levels.
          </li>

          <li>
            <strong>Personalised Training Plans:</strong> FitAg generates
            personalised workout plans based on the user's BMI,
            fitness goals, and preferences.
          </li>

          <li>
            Plans include a mix of cardio, strength training,
            flexibility exercises, and rest days.
          </li>

          <li>
            <strong>Exercise Database:</strong> A vast database of
            exercises categorised by muscle groups, difficulty levels,
            and equipment requirements.
          </li>

          <li>
            Users can select exercises for their workout plans and
            customise sets and repetitions.
          </li>

          <li>
            <strong>Workout Scheduler:</strong> A user-friendly
            calendar interface for scheduling workouts and tracking progress.
          </li>

          <li>
            Reminders and notifications ensure users stay on track
            with their fitness routines.
          </li>

          <li>
            <strong>Real-time Tracking:</strong> FitAg allows users
            to track workouts in real-time, recording sets,
            repetitions, and weights used.
          </li>

          <li>
            Progress graphs and statistics provide visual
            representations of fitness achievements.
          </li>

        </ul>

      </section>


      {/* RESULT */}
      <section className="fitag-section">

        <h2>THE RESULTS</h2>

        <p>
          FitAg's innovative approach to personalised fitness has
          positioned it as a leading workout application. By
          integrating BMI data, providing tailored training plans,
          and focusing on user engagement, FitAg has successfully
          addressed the demand for a comprehensive and user-friendly
          fitness solution.
        </p>

        <p>
          The app continues to evolve, driven by user feedback and
          advancements in fitness technology, making it an
          indispensable tool for individuals seeking a personalised
          and effective approach to their fitness journey.
        </p>

      </section>


      {/* TECHNOLOGY STACK */}
      <section className="tech-stack">

        <h2>Technologies Used</h2>

        <div className="tech-icons">

          <div className="tech-card">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226770.png" alt="Android"/>
            <p>Android</p>
          </div>

          <div className="tech-card">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java"/>
            <p>Java</p>
          </div>

          <div className="tech-card">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png" alt="Firebase"/>
            <p>Firebase</p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default FitAgPage;
