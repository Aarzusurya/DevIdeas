import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleCloseMenu = () => {
    setMenuOpen(false);
    setCompanyOpen(false);
    setPortfolioOpen(false);
    setServicesOpen(false);
  };

  /* Scroll to Hero */
  const goToHero = () => {
    navigate("/");

    setTimeout(() => {
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  /* Scroll to WhyChoose */
  const goToWhyChoose = () => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("whychoose");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  const isPortfolioActive = location.pathname.startsWith("/portfolio");

  const isCompanyActive = [
    "/about",
    "/developmentprocess",
    "/testimonials",
    "/faq"
  ].includes(location.pathname);

  return (
    <nav className="navbar">

      <div className="container nav-content">

        {/* Logo */}
        <NavLink to="/" className="logo" onClick={handleCloseMenu}>
          <span style={{ fontSize: "32px" }}>D</span>ev
          <span style={{ fontSize: "32px" }}>I</span>deas
        </NavLink>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          {/* Company Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >

            <span
              onClick={goToHero}
              className={isCompanyActive ? "active-link" : ""}
              style={{ cursor: "pointer" }}
            >
              Company
            </span>

            <ul className={`dropdown-menu ${companyOpen ? "show" : ""}`}>

              <li>
                <NavLink to="/about" onClick={handleCloseMenu}>
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink to="/developmentprocess" onClick={handleCloseMenu}>
                  Development Process
                </NavLink>
              </li>

              <li>
                <NavLink to="/testimonials" onClick={handleCloseMenu}>
                  Testimonials
                </NavLink>
              </li>

              <li>
                <NavLink to="/faq" onClick={handleCloseMenu}>
                  FAQ
                </NavLink>
              </li>

            </ul>

          </li>

          {/* SERVICES */}
          <li
            className="dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >

            <span
              onClick={goToWhyChoose}
              style={{ cursor: "pointer" }}
            >
              Services
            </span>

            <ul className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>

              <li>
                <NavLink to="/ai" onClick={handleCloseMenu}>
                  AI Development
                </NavLink>
              </li>

              <li>
                <NavLink to="/customai" onClick={handleCloseMenu}>
                  Custom AI
                </NavLink>
              </li>

              <li>
                <NavLink to="/website-development" onClick={handleCloseMenu}>
                  Website Development
                </NavLink>
              </li>

              <li>
                <NavLink to="/ios-app-development" onClick={handleCloseMenu}>
                  Hire iOS Developers
                </NavLink>
              </li>

              <li>
                <NavLink to="/mobile-app-development" onClick={handleCloseMenu}>
                  Mobile App Development
                </NavLink>
              </li>

              <li>
                <NavLink to="/android-app-development" onClick={handleCloseMenu}>
                  Android Developers
                </NavLink>
              </li>

              <li>
                <NavLink to="/flutter-app-development" onClick={handleCloseMenu}>
                  Flutter Developers
                </NavLink>
              </li>

            </ul>

          </li>

          {/* Portfolio */}
          <li
            className="dropdown"
            onMouseEnter={() => setPortfolioOpen(true)}
            onMouseLeave={() => setPortfolioOpen(false)}
          >

            <span className={isPortfolioActive ? "active-link" : ""}>
              Portfolio
            </span>

            <ul className={`dropdown-menu ${portfolioOpen ? "show" : ""}`}>

              <li>
                <NavLink to="/portfolio/apps" onClick={handleCloseMenu}>
                  Apps Portfolio
                </NavLink>
              </li>

              <li>
                <NavLink to="/portfolio/websites" onClick={handleCloseMenu}>
                  Website Portfolio
                </NavLink>
              </li>

            </ul>

          </li>

          {/* Case Studies */}
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

          {/* Get in Touch */}
          <li className="mobile-btn0">

            <NavLink
              to="/quote"
              className="btn0"
              onClick={handleCloseMenu}
            >
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