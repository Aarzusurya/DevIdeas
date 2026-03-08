import React, { useState } from "react";
import "./DevelopmentProcess.css";



const steps = [
  {
    title: "Visualizing Ideas",
    content: (
      <div>
        <h3>Visualizing Ideas</h3>
        <p>
          As you, the client, express your needs to us, our strategists review
          your entire request in a considerate and step-by-step fashion.
          AppAspect fully believes in projecting ideas that follow through
          according to multiple levels of specialization. It is the start of
          our immersion into the project.
        </p>

        <ul>
          <li>Contact for Project</li>
          <li>Putting Ideas into Actual Concepts</li>
          <li>Considerate Research and Planning</li>
          <li>Consolidation of Requirements & Estimates</li>
        </ul>
      </div>
    ),
  },

  {
    title: "Analyzing & Prototyping",
    content: (
      <div>
        <h3>Analyzing & Prototyping</h3>
        <p>
          Once the project gets approved, it’s essential for the pre-engineering
          stage where the analysis takes place in earnest.
        </p>

        <ul>
          <li>Comprehensive and Holistic Analysis</li>
          <li>Prototyping through Wireframes & Storyboards</li>
          <li>Resource Plan Formulation</li>
          <li>Platform & Structures Selection</li>
        </ul>
      </div>
    ),
  },

  {
    title: "UI / UX Designing",
    content: (
      <div>
        <h3>UI / UX Designing</h3>

        <ul>
          <li>Case Studies & Demographic Information</li>
          <li>Knowledge of latest UI/UX trends</li>
          <li>Actual Designing with multiple elements</li>
          <li>Personalization through UX</li>
          <li>Evaluation via Metrics</li>
        </ul>
      </div>
    ),
  },

  {
    title: "Development Stage",
    content: (
      <div>
        <h3>Development Stage</h3>

        <ul>
          <li>Understanding the full plan</li>
          <li>Time-bound Coding</li>
          <li>Full Stack Development</li>
          <li>Code Review & Routine Updates</li>
        </ul>
      </div>
    ),
  },

  {
    title: "Beta Testing & Code Correction",
    content: (
      <div>
        <h3>Beta Testing & Code Correction</h3>

        <ul>
          <li>Manual & Automated Testing</li>
          <li>Bug Fixes & Optimization</li>
          <li>User Feedback</li>
          <li>Test Report Reviews</li>
        </ul>
      </div>
    ),
  },

  {
    title: "Deployment & Delivery",
    content: (
      <div>
        <h3>Deployment & Delivery</h3>

        <ul>
          <li>Final Product Launch</li>
          <li>Documentation & Training</li>
          <li>Ongoing Support & Maintenance</li>
          <li>Project Completion</li>
        </ul>
      </div>
    ),
  },
];

function DevelopmentProcess() {
  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (index) => {
    setOpenStep((prev) => (prev === index ? null : index));
  };

  return (
    <div className="processing-page">

      {/* HERO SECTION */}

      <div className="processing-hat">

        <div className="processing-text">

          <h1>Our Development Process</h1>

          <h2>
            A Walkthrough our Integrated and Holistic Development Process
          </h2>

          <p>
          AppAspect relates to the entire case of development as a beast that needs to be handled based upon research and understanding.
           We prioritize flexibility and agility, since there are so many domains of development that actually exist.
            For this reason, our development capabilities have an abstract process that is central to our business objectives. 
            This is our Development Process at large, and as you can see below, it follows through multiple stages wherein essential aspects of the entire process gets realized. 
            The main reason for this page is for your effective understanding, as well as for the fact that conveying what will happen to your cause is essential.
          </p>

        </div>

        <div className="processing-image">

          <img
            src="/images/time-image.png"
            alt="Development Process"
          />

        </div>

      </div>

      {/* PROCESS SECTION */}

      <h2 className="processing-heading">Our Development Process</h2>

      <div className="timeline">

        {steps.map((step, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >

            <div className="timeline-content">

              <h3>
                <span className="step-number">0{index + 1}.</span>{" "}
                {step.title}
              </h3>

              <button
                type="button"
                className="read-btn10"
                onClick={() => toggleStep(index)}
              >
                {openStep === index ? "Close" : "Read More"}
              </button>

              {openStep === index && (
                <div className="step-details">
                  {step.content}
                </div>
              )}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default DevelopmentProcess;