import React from "react";
import "./IOSAppDevelopment.css";
import iosBanner from "../assets/ios-banner.jpg";

function IOSAppDevelopment() {
  return (
    <div className="ios-page">

      {/* ===== HERO SECTION ===== */}
      <section className="ios-hero">
        <div className="ios-hero-content">

          <div className="ios-image-wrapper">
            <img src={iosBanner} alt="iOS Development" />
          </div>

          <div className="ios-text-wrapper">
            <h1>
              IOS App Development <br />
              Company in Ahmedabad, India
            </h1>

            <p>
              Looking for the best iOS app development company in India?
              You're in the right place. At AppAspect, we're your partner in
              crafting apps that transform ideas into powerful digital experiences.
            </p>
          </div>

        </div>
      </section>


      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="ios-why-section">

        <div className="ios-container">

          <h2>Why Choose Us for iPhone App Development in Ahmedabad?</h2>

          <p className="ios-why-text">
            Here's the deal: creating a standout iOS app isn't easy. It takes a mix
            of creativity, technical expertise, and an obsession with user experience.
            That's where we come in. Whether you're looking for a custom iOS app
            development company in India or need iOS app development services in
            Ahmedabad, we've got you covered.
          </p>

          <h3 className="advantage-title">The AppAspect Advantage</h3>

          <div className="advantage-grid">

            <div className="adv-card">
              <h4>Expertise You Can Trust</h4>
              <p>
                With years of experience, we've mastered the art of iOS app development.
              </p>
            </div>

            <div className="adv-card">
              <h4>Custom Solutions</h4>
              <p>
                No cookie-cutter apps here. Every app we build is tailored to your business.
              </p>
            </div>

            <div className="adv-card">
              <h4>Future-Ready Technology</h4>
              <p>
                From SwiftUI to Objective-C, we use cutting-edge tools to ensure your app stands out.
              </p>
            </div>

            <div className="adv-card">
              <h4>Full-Cycle Support</h4>
              <p>
                From concept to App Store submission, we're with you every step of the way.
              </p>
            </div>

          </div>

        </div>

      </section>

       {/* CALL TO ACTION SECTION */}
<section className="android-cta">
  <div className="android-container cta-wrapper">

    <div className="cta-left">
      <h2>Call us now!</h2>
      <p>Boost your digital presence with our expert.</p>
    </div>

    <div className="cta-right">
      <div className="phone-icon">📞</div>
      <span className="phone-number">+91 96876 90810</span>
      <button className="cta-btn">Contact Us</button>
    </div>

  </div>
</section>



{/* ===== App SECTION ===== */}
<section className="ios-app-section">

  <div className="ios-container">

    <h2>iPhone Application Development Services in Ahmedabad</h2>

    <p className="app-intro">
      Looking to scale your business with an iPhone app? Our services include
      everything from design to deployment, ensuring your app delivers an
      exceptional user experience.
    </p>

    <div className="app-grid">

      <div className="app-card">
        <h4>Custom iPhone Apps</h4>
        <p>
          When you partner with our iOS application development company in Ahmedabad,
          you get more than just an app. You get a solution built to solve problems,
          streamline operations, and delight users.
        </p>
      </div>

      <div className="app-card">
        <h4>iPhone App Testing</h4>
        <p>
          Buggy apps? Not on our watch. Our rigorous testing ensures your app
          runs flawlessly on every iOS device, every time.
        </p>
      </div>

      <div className="app-card">
        <h4>Enterprise iPhone Apps</h4>
        <p>
          We build enterprise-grade solutions that help your business scale efficiently.
        </p>
      </div>

      <div className="app-card">
        <h4>iPhone Upgrades</h4>
        <p>
          Keep your app ahead of the curve with latest iOS compatibility and features.
        </p>
      </div>

      <div className="app-card">
        <h4>iPhone Utility Apps</h4>
        <p>
          We craft and maintain utility apps optimized for efficiency and convenience.
        </p>
      </div>

      <div className="app-card">
        <h4>iPhone UI/UX Interface</h4>
        <p>
          Our advanced UI designs ensure fast, intuitive and conversion-focused experience.
        </p>
      </div>

    </div>

    <div className="app-cta">
      <h3>
        Your vision, our expertise. AppAspect is here to uplift your goals.
      </h3>
    </div>

  </div>
</section>


{/* ===== EXPAND SECTION ===== */}
<section className="expand-app">
  <div className="ios-container">

    <h2>Expand Your Reach with Custom iOS Apps</h2>

    <p className="expand-intro">
      Your business is unique, and your app should be, too. At AppAspect, we specialize in building apps that reflect your brand's identity and meet your specific needs. Here's how we do it:
    </p>

    <div className="expand-steps">
      <ol>
        <li><strong>In-Depth Research:</strong> We start by understanding your business and industry.</li>
        <li><strong>UI/UX Design:</strong> Our intuitive designs focus on delivering a seamless user experience.</li>
        <li><strong>Development:</strong> We use the latest tech to bring your app idea to life.</li>
        <li><strong>Launch & Beyond:</strong> We don't just launch your app; we stick around to ensure its success.</li>
      </ol>
    </div>

  </div>
</section>

    </div>
  );
}

export default IOSAppDevelopment;