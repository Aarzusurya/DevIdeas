import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaPinterestP, 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter 
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <ul className="footer-links">
            <li>
              <Link to="/mobile-app-development">
                Mobile Application Development
              </Link>
            </li>

            <li>
              <Link to="/website-development">
                Website Development
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Hire Dedicated Developers</h3>

          <ul className="footer-links">

            <li>
              <Link to="/ios-app-development">
                Hire iOS App Developers
              </Link>
            </li>

            <li>
              <Link to="/android-app-development">
                Hire Android Developers
              </Link>
            </li>

            <li>
              <Link to="/flutter-app-development">
                Hire Flutter Developers
              </Link>
            </li>


          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Have Questions?</h3>

          <div className="contact-block">
            <h4>Sales</h4>
            <p>devideastudio@gmail.com</p>
          </div>

          <div className="contact-block">
            <h4>Business</h4>
            <p>devideastudio@gmail.com</p>
          </div>
        </div>

      </div>

      {/* Social Icons */}
      <div className="footer-social">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaPinterestP /></a>
        <a href="#"><FaGithub /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaTwitter /></a>
      </div>

      <div className="footer-bottom">
        © 2026 appAspect. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;