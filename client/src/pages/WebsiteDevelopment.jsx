import React from "react";
import website from "../assets/website.png";
import "./WebsiteDevelopment.css";

const WebsiteDevelopment = () => {
  return (
    <div className="webdev-container">

      {/* Hero Section */}
      <div className="webdev-heroin">

        <div className="webdev-left">
          <img src={website} alt="web development" />
        </div>

        <div className="webdev-right">
          <h1>Web Development Service in India</h1>

          <p>
            In today's business landscape, a website plays a crucial role for any company.
            Regardless of your business type, having a website is essential to directly
            connect with your customers.
          </p>

          <p>
            AppAspect Technologies - Outsource Website Development Service with a Unique
            Approach. Let us make it happen for you! Choose our website development
            services from India for a brand new website that fits within your budget.
          </p>
        </div>

      </div>

      {/* Service Section */}

      <div className="seu-section">

        <h2>AppAspect’s Web Development Services in India</h2>

        <div className="seu-grid">

          <div className="seu-card">
            <h3>Laravel Web Development</h3>
            <p>
              Feature rich Laravel websites with high performance and
              seamless third-party integrations.
            </p>
          </div>

          <div className="seu-card">
            <h3>WordPress Development</h3>
            <p>
              End-to-end WordPress development with attractive themes and
              smooth user interfaces.
            </p>
          </div>

          <div className="seu-card">
            <h3>PHP Web Development</h3>
            <p>
              Secure and scalable PHP web development with high speed
              performance and flexible customization.
            </p>
          </div>

          <div className="seu-card">
            <h3>CodeIgniter Development</h3>
            <p>
              MVC-based development using CodeIgniter to build powerful
              and scalable applications.
            </p>
          </div>

          <div className="seu-card">
            <h3>React JS Development</h3>
            <p>
              High-performing responsive single-page web apps using
              React JS.
            </p>
          </div>

          <div className="seu-card">
            <h3>Vue JS Development</h3>
            <p>
              Custom Vue applications with high productivity and
              interactive interfaces.
            </p>
          </div>

          <div className="seu-card">
            <h3>Python Web Development</h3>
            <p>
              Scalable web apps using Django and Flask frameworks
              powered by Python.
            </p>
          </div>

          <div className="seu-card">
            <h3>Node JS Development</h3>
            <p>
              Real-time applications and scalable backend solutions
              with Node JS.
            </p>
          </div>

        </div>

      </div>


      {/* Why Choose Section */}

      <div className="whu-section">

        <h2>Why Brands Choose AppAspect</h2>

        <ul>
          <li>Excellent communication and collaboration</li>
          <li>Cost-effective development solutions</li>
          <li>Latest cutting-edge technologies</li>
          <li>Pre-vetted experienced developers</li>
          <li>Secure and scalable website solutions</li>
        </ul>

      </div>

    </div>
  );
};

export default WebsiteDevelopment;