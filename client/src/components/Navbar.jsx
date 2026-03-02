import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const location = useLocation();

  const handleCloseMenu = () => {
    setMenuOpen(false);
    setPortfolioOpen(false);
  };

  // 🔥 Services active logic
  const isServicesActive =
    location.pathname === "/services" ||
    location.pathname === "/ai" ||
    location.pathname === "/customai";

  // 🔥 Portfolio active logic
  const isPortfolioActive =
    location.pathname.startsWith("/portfolio");

  return (
    <nav className="navbar">
      <div className="container nav-content">

        {/* Logo */}
        <NavLink to="/" className="logo" onClick={handleCloseMenu}>
          <span style={{ fontSize: "32px" }}>D</span>ev
          <span style={{ fontSize: "32px" }}>I</span>deas
        </NavLink>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <NavLink
              to="/"
              onClick={handleCloseMenu}
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              Company
            </NavLink>
          </li>

          {/* Services */}
          <li>
            <NavLink
              to="/services"
              onClick={handleCloseMenu}
              className={isServicesActive ? "active-link" : ""}
            >
              Services
            </NavLink>
          </li>

          {/* Portfolio Dropdown */}
          <li
            className="dropdown"
            onClick={() => setPortfolioOpen(!portfolioOpen)}
          >
            <span className={isPortfolioActive ? "active-link" : ""}>
              Portfolio ▾
            </span>

            <ul className={`dropdown-menu ${portfolioOpen ? "show" : ""}`}>
              <li>
                <NavLink
                  to="/portfolio/apps"
                  onClick={handleCloseMenu}
                >
                  Our Apps Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio/websites"
                  onClick={handleCloseMenu}
                >
                  Our Website Portfolio
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/case-studies"
              onClick={handleCloseMenu}
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              Case Studies
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              onClick={handleCloseMenu}
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              Blog
            </NavLink>
          </li>

          {/* Mobile Button */}
          <li className="mobile-btn" onClick={handleCloseMenu}>
            <NavLink to="/quote" className="btn">
              Get in Touch
            </NavLink>
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
