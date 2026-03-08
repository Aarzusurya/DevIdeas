import React from "react";
import { useNavigate } from "react-router-dom";
import "./NullcomPage.css";

function NullcomPage() {

  const navigate = useNavigate();

  // Image path from public folder
  const nullcomImg = "/images/nullcom-app.png"; // public/images folder me rakho

  return (
    <div className="null-wrapper">

      {/* ================= HERO SECTION ================= */}
      <section className="null-rap">
        <div className="null-rap-content">

          <div className="null-image">
            <img src={nullcomImg} alt="Nullcom App" loading="lazy" />
          </div>

          <div className="null-text">
            <h1>Nullcom</h1>

            <p>
              Nullcom anonymous communication app can be a great way to stay in touch 
              with friends and family while keeping your identity hidden.
            </p>

            <p>
              Nullcom is a new, free communication tool; you stay completely anonymous 
              and it collects no user data.
            </p>

            <p>
              Nullcom App provides a safe space for people to express themselves 
              without fear of judgment or repercussions.
            </p>

          </div>

        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="null-features">
        <h2>Features</h2>
        <p className="null-sub">
          Below are some of the major features inside the app
        </p>

        <div className="null-grid">

          <div className="null-card">
            <h3>Video and Audio</h3>
            <p>
              Send videos and audio to any phone number or email within the USA.
            </p>
          </div>

          <div className="null-card">
            <h3>Easy To Set Time</h3>
            <p>
              Set a self-destruct timer. Once viewed, the message deletes automatically.
            </p>
          </div>

          <div className="null-card">
            <h3>Record Message</h3>
            <p>
              Record your message easily by pressing the record button.
            </p>
          </div>

          <div className="null-card">
            <h3>Reset Fields</h3>
            <p>
              Clear or reset fields anytime and record another message instantly.
            </p>
          </div>

        </div>
      </section>

      {/* ================= NAVIGATION ================= */}
      <div className="page-navigation">

        <button
          className="navp-btn secondary"
          onClick={() => navigate("/tommy")}
        >
          ← Previous
        </button>

        <button
          className="navp-btn"
          onClick={() => navigate("/hisably")}
        >
          Next → 
        </button>

      </div>

    </div>
  );
}

export default NullcomPage;