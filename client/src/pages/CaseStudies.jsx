import { Link } from "react-router-dom";
import "./CaseStudies.css";

import fitag from "../assets/caseStudies/fitag.jpg";
import selfhealth from "../assets/caseStudies/selfhealth.jpg";
import lifeix from "../assets/caseStudies/body-care.png";
import periodtracker from "../assets/caseStudies/period-app.png";
import sikhworld from "../assets/caseStudies/ran-fleet.jpg";
import notepad from "../assets/caseStudies/web13.jpg";
import appzcreative from "../assets/caseStudies/web15.jpg";

function CaseStudies() {
  return (
    <div className="caseStudiesPage">

      <h1 className="caseTitle">Case Studies</h1>

      <div className="caseGrid">

        {/* CARD 1 */}
        <div className="caseCard">
          <img src={fitag} alt="FitAg" />

          <h3>FitAg</h3>

          <p>
            FitAg is dedicated to delivering a seamless and customized fitness
            experience through advanced training tools and smart workout
            tracking solutions.
          </p>

          <Link to="/fitag">
            <button className="readBtn">Read More</button>
          </Link>
        </div>


        {/* CARD 2 */}
        <div className="caseCard">
          <img src={selfhealth} alt="Self Health Care" />

          <h3>Self Health Care</h3>

          <p>
            Self-health care is a comprehensive health monitoring tool that
            measures and tracks important health indicators to help users stay
            fit and healthy.
          </p>

          <Link to="/self-health-care">
            <button className="readBtn">Read More</button>
          </Link>
        </div>


        {/* CARD 3 */}
        <div className="caseCard">
          <img src={lifeix} alt="LifeIX" />

          <h3>LifeIX</h3>

          <p>
            LifeIX is a cutting-edge technology that monitors medical,
            emergency, and health data to ensure faster response and
            life-saving support.
          </p>

          <Link to="/lifeix">
            <button className="readBtn">Read More</button>
          </Link>
        </div>


        {/* CARD 4 */}
        <div className="caseCard">
          <img src={periodtracker} alt="My Period Tracker" />

          <h3>My Period Tracker</h3>

          <p>
            My Period Tracker is an ingenious and easy-to-use application that
            helps women track menstrual cycles and health patterns.
          </p>

          <Link to="/periods">
            <button className="readBtn">Read More</button>
          </Link>
        </div>


        {/* CARD 5 */}
        <div className="caseCard">
          <img src={sikhworld} alt="Sikh World App" />

          <h3>Sikh World App</h3>

          <p>
            Sikh World - Nitnem & Gurbani app is one of the most popular apps
            that allows users to read and listen to Gurbani anytime.
          </p>

          <Link to="/sikh-world">
            <button className="readBtn">Read More</button>
          </Link>
        </div>


        {/* CARD 6 */}
        <div className="caseCard">
          <img src={notepad} alt="Ultimate Notepad" />

          <h3>Ultimate Notepad App</h3>

          <p>
            Ultimate Notepad revolutionises note-taking and task management
            with its user-friendly interface and powerful productivity tools.
          </p>

          <Link to="/ultimate-notepad">
            <button className="readBtn">Read More</button>
          </Link>
        </div>


        {/* CARD 7 */}
        <div className="caseCard">
          <img src={appzcreative} alt="AppzCreative" />

          <h3>AppzCreative</h3>

          <p>
            AppzCreative is a leading global IT solutions provider,
            specialising in developing innovative digital solutions for
            businesses worldwide.
          </p>

          <Link to="/appzcreative">
            <button className="readBtn">Read More</button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default CaseStudies;