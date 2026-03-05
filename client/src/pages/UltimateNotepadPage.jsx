import React from "react";
import "./UltimateNotepadPage.css";

const UltimateNotepadPage = () => {
  return (
    <div className="note-container">

      <h1 className="note-title">Ultimate Notepad App</h1>

      {/* OVERVIEW */}

      <section className="note-section">

        <h2>OVERVIEW</h2>

        <p>
          Ultimate Notepad revolutionises note-taking and task management.
          Its user-friendly interface combined with powerful features such
          as note prioritisation, colour coding and seamless cloud
          synchronisation makes it an essential productivity tool.
        </p>

        <p>
          Users can enjoy instant access to their notes and tasks across
          all devices, securely backed up in the cloud. With Ultimate
          Notepad, ideas and to-dos are always organised and available
          whenever needed.
        </p>

      </section>


      {/* IMAGE SCROLL */}

      <section className="note-gallery">

        <div className="note-scroll">

          <img src="https://images.unsplash.com/photo-1517842645767-c639042777db"/>
          <img src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"/>
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"/>
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"/>
          <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b"/>

        </div>

      </section>


      {/* PROBLEM */}

      <section className="note-section">

        <h2>THE PROBLEM</h2>

        <p>
          Pixatel Systems encountered a major issue related to note
          synchronisation in their application. Users reported cases
          where notes were getting lost during cloud synchronisation
          and others experienced duplicate notes appearing.
        </p>

        <p>
          These issues were traced back to the existing note ID system,
          which used simple integer-based IDs. This caused conflicts
          during synchronisation, leading to data loss and duplication.
        </p>

      </section>


      {/* PROCESS */}

      <section className="note-section">

        <h2>THE PROCESS</h2>

        <ul className="note-list">

          <li>
            <strong>Needs Analysis:</strong> Analysed user feedback and
            internal system reports to identify note synchronisation
            problems.
          </li>

          <li>
            <strong>Understanding the Existing System:</strong> Identified
            that integer-based note IDs were causing conflicts during
            cloud synchronisation.
          </li>

          <li>
            <strong>Solution Design:</strong> Planned improvements to
            eliminate duplication and data loss.
          </li>

          <li>
            <strong>Unique Document IDs:</strong> Replaced the integer ID
            system with unique document IDs to prevent synchronisation
            conflicts.
          </li>

          <li>
            <strong>Removal of Deletion Code:</strong> Removed problematic
            deletion logic that caused notes to disappear during sync.
          </li>

          <li>
            These improvements ensured notes were properly synchronised
            and safely stored in the cloud.
          </li>

        </ul>

      </section>


      {/* RESULTS */}

      <section className="note-section">

        <h2>THE RESULTS</h2>

        <p>
          The introduction of unique document IDs and the removal of
          faulty deletion code successfully eliminated note duplication
          and data loss issues.
        </p>

        <p>
          Users experienced a significantly smoother note synchronisation
          process, improving the overall usability of the application.
        </p>

        <p>
          Positive feedback from users highlighted the improved
          reliability and stability of the application.
        </p>

        <p>
          These enhancements strengthened user trust and reinforced
          Pixatel Systems as a reliable software provider.
        </p>

      </section>


      {/* TECHNOLOGY STACK */}

      <section className="note-stack">

        <h2>Technologies Used</h2>

        <div className="note-icons">

          <div className="note-card">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png"/>
            <p>Java</p>
          </div>

          <div className="note-card">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226770.png"/>
            <p>Android</p>
          </div>

          <div className="note-card">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"/>
            <p>Firebase</p>
          </div>

          <div className="note-card">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"/>
            <p>Google AdMob</p>
          </div>

          <div className="note-card">
            <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png"/>
            <p>Google Ads</p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default UltimateNotepadPage;