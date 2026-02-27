import React from "react";
import "./Footer.css";
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
          <ul>
            <li>Mobile Application Development</li>
            <li>Website Development</li>
            <li>Woocommerce Development</li>
            <li>Shopify Development</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Hire Dedicated Developers</h3>
          <ul>
            <li>Hire iOS Developers</li>
            <li>Hire PHP Developers</li>
            <li>Hire Android Developers</li>
            <li>Hire Website Designers</li>
            <li>Hire WordPress Developers</li>
            <li>Hire React Native Developers</li>
            <li>Hire Laravel Developers</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Have Questions?</h3>

          <div className="contact-block">
            <h4>Sales</h4>
            <p>sales@appaspect.com</p>
          </div>

          <div className="contact-block">
            <h4>Business</h4>
            <p>info@appaspect.com</p>
          </div>

          <div className="contact-block">
            <h4>Phone</h4>
            <p>India: +91 96876 90810</p>
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
        © 2026 TechVertex. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;