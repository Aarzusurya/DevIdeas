import React from "react";
import "./SikhWorldAppPage.css";

const SikhWorldAppPage = () => {
  return (
    <div className="sikh-container">

      <h1 className="sikh-title">Sikh World App</h1>

      {/* OVERVIEW */}
      <section className="sikh-section">

        <h2>OVERVIEW</h2>

        <p>
          Sikh World - Nitnem & Gurbani app is one of the best for Gurbani radio
          stations streaming online 24/7. Play world-class radio stations and
          listen live to Kirtan, Katha and Gurbani anytime, anywhere.
        </p>

        <p>
          Listen to your favourite Gurbani radio stations live and enjoy the
          best music online. Get all the Gurbanis in one place in a single app
          now with a nearby Gurudwara finder feature.
        </p>

      </section>


      {/* IMAGE SCROLL */}
      <section className="sikh-gallery">

        <div className="sikh-scroll">

          <img src="https://images.unsplash.com/photo-1564769625905-50e93615e769"/>
          <img src="https://images.unsplash.com/photo-1625047509168-a7026f36de04"/>

        </div>

      </section>


      {/* PROBLEM */}
      <section className="sikh-section">

        <h2>THE PROBLEM</h2>

        <p>
          The ability to check the daily Hukamnama, read Gurbani and listen
          to live Kirtan on a mobile device anytime and anywhere is a
          significant convenience for Sikh individuals.
        </p>

        <p>
          This allows them to stay connected with their faith and spiritual
          practices effortlessly.
        </p>

      </section>


      {/* PROCESS */}
      <section className="sikh-section">

        <h2>THE PROCESS</h2>

        <ul className="sikh-list">

          <li>
            Live Kirtan Stations API integrated to stream Gurbani
            radio stations from around the world.
          </li>

          <li>
            Built an audio player for users to listen to
            Gurbani radio stations easily.
          </li>

          <li>
            Created a Gurbani library organised by language:
            Punjabi, Hindi, and English.
          </li>

          <li>
            Added the full text of Gurbani and Nitnem in
            Gurmukhi, English, and Hindi.
          </li>

          <li>
            Included Sakhis of Sikh Gurus and historical
            Sikh warriors like Baba Deep Singh Ji and
            Banda Singh Bahadur.
          </li>

          <li>
            Developed a Gurudwara Finder feature allowing
            users to find nearby Gurudwaras.
          </li>

          <li>
            Sikh WallPost feature where users can share
            prayers and wishes with the community.
          </li>

          <li>
            All posts are moderated by the AppAspect
            team to ensure high-quality content.
          </li>

        </ul>

      </section>


      {/* RESULTS */}
      <section className="sikh-section">

        <h2>THE RESULTS</h2>

        <p>
          After development on Android and iOS, Sikh World
          has achieved more than 2 million downloads
          worldwide and maintains a 4.7 star rating.
        </p>

        <p>
          User feedback from the Apple Store and Google
          Play Store is continuously reviewed to improve
          the application.
        </p>

        <p>
          Overall, Sikh World is a comprehensive and
          informative app that provides valuable
          resources for Sikhs and anyone interested
          in learning about Sikhism.
        </p>

        <p className="note">
          NOTE: Sikh World is not linked with any political
          or religious organisation. It is a non-commercial
          app produced and maintained by the AppAspect team.
        </p>

      </section>


      {/* TECHNOLOGY STACK */}
      <section className="sikh-stack">

        <h2>Technologies Used</h2>

        <div className="sikh-icons">

          <div className="sikh-card">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226770.png"/>
            <p>Android</p>
          </div>

          <div className="sikh-card">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png"/>
            <p>Kotlin</p>
          </div>

          <div className="sikh-card">
            <img src="https://cdn-icons-png.flaticon.com/512/731/731985.png"/>
            <p>iOS</p>
          </div>

          <div className="sikh-card">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919852.png"/>
            <p>Swift</p>
          </div>

          <div className="sikh-card">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"/>
            <p>Firebase</p>
          </div>

          <div className="sikh-card">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"/>
            <p>Google AdMob</p>
          </div>

          <div className="sikh-card">
            <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png"/>
            <p>Google Ads</p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default SikhWorldAppPage;