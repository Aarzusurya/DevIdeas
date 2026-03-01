import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">

        {/* Logo */}
        <Link to="/" className="logo" onClick={handleCloseMenu}>
          <span style={{ fontSize: "32px" }}>D</span>ev
          <span style={{ fontSize: "32px" }}>I</span>deas
        </Link>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
           <li>
    <Link to="/" onClick={handleCloseMenu}>Company</Link>
  </li>
  <li>
    <Link to="/" onClick={handleCloseMenu}>Services</Link>
  </li>
  <li>
    <Link to="/" onClick={handleCloseMenu}>Portfolio</Link>
  </li>
  <li>
    <Link to="/" onClick={handleCloseMenu}>Case Studies</Link>
  </li>
  <li>
    <Link to="/" onClick={handleCloseMenu}>Blog</Link>
  </li>

          {/* Mobile Button */}
          <li className="mobile-btn" onClick={handleCloseMenu}>
            <Link to="/quote" className="btn">Get in Touch</Link>
          </li>
        </ul>

        
        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
