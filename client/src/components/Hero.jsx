import React, { useEffect, useState, useMemo, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/Hero.css";
import "./AboutSection.css";
import "./WhyChoose.css";
import "./ServicesSection.css";
import "./StatsSection.css";
import "./ExpertiseSection.css";
import "./CTASection.css";
import "./DifferenceSection.css";
import "./ContactSection.css";
import { FaPhoneAlt } from "react-icons/fa";

function Hero() {
  const navigate = useNavigate();

  // 🔥 Preload images for faster rendering
  useEffect(() => {
    const images = [
      "/images/dev.png",
      "/images/growth.png",
      "/images/Ai.png",
      "/images/Ai1.png",
      "/images/Ai2.png",
      "/images/agent.png",
      "/images/agent1.png",
      "/images/agent2.png"
    ];
    images.forEach((img) => {
      const image = new Image();
      image.src = img;
    });
  }, []);

  const handleCTA = () => navigate("/quote");

  /* ================= WHY CHOOSE DATA ================= */
  const features = [
    { title: "Feature-Rich Solutions", description: "Our distinguishing factor lies in providing feature-rich solutions that make your clients choose you repeatedly." },
    { title: "Scalability", description: "We understand your product and vision like no other. That's why we're the perfect guides for scaling up and reaching your ambitious goals." },
    { title: "Latest Industry Knowledge", description: "We employ top talent and consistently upskill with the latest trends to ensure your solution is top-notch." },
    { title: "Effective Communication", description: "We break down all technical aspects into easy-to-understand language, keeping you fully aware of every detail." },
    { title: "Your Success Never Sleeps", description: "We offer continuous updates and steadfast support, fueling your solution's ascent day and night." },
    { title: "Endless Possibilities", description: "Unlock endless possibilities with AppAspect, your trusted custom mobile & web development company in India." }
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFeature = (index) => setActiveIndex(activeIndex === index ? null : index);

  /* ================= SERVICES DATA ================= */
  const services = useMemo(() => [
    { title: "Android App Development", slug: "android-app-development", desc: "We develop powerful Android applications with modern UI, high performance and excellent user experience.", image: "/images/android.png" },
    { title: "iOS App Development", slug: "ios-app-development", desc: "Our team builds high quality iOS apps for iPhone and iPad using the latest technologies and frameworks.", image: "/images/ios.png" },
    { title: "Flutter App Development", slug: "flutter-app-development", desc: "Flutter helps us build fast and beautiful cross-platform apps with a single codebase.", image: "/images/flutters.png" }
  ], []);

  useEffect(() => {
    services.forEach((service) => {
      const img = new Image();
      img.src = service.image;
    });
  }, [services]);

  const handleReadMore = (slug) => navigate(`/${slug}`);

  /* ================= STATS SECTION ================= */
  const stats = [
    { title: "Projects Delivered", value: 21 },
    { title: "Happy Clients", value: 15 },
    { title: "Years Experience", value: 3 },
    { title: "Expert Developers", value: 15 }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (!startCount) return;
    const interval = setInterval(() => {
      setCounts(prev => prev.map((num, idx) => num < stats[idx].value ? num + 1 : num));
    }, 20);
    return () => clearInterval(interval);
  }, [startCount, stats]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.disconnect();
          }
        });
      }, { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= EXPERTISE SECTION ================= */
  const aiImages = ["/images/Ai.png", "/images/Ai1.png", "/images/Ai2.png"];
  const agentImages = ["/images/agent.png", "/images/agent1.png", "/images/agent2.png"];
  const [aiIdx, setAiIdx] = useState(0);
  const [agentIdx, setAgentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAiIdx(prev => (prev + 1) % aiImages.length);
      setAgentIdx(prev => (prev + 1) % agentImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const expertiseData = [
    { img: aiImages[aiIdx], title: "AI Automation", desc: "AppAspect is a trusted AI automation company in India, helping businesses streamline operations and improve efficiency through intelligent automation.", route: "/ai" },
    { img: agentImages[agentIdx], title: "Custom AI Agent Development", desc: "Custom AI agent development transforms business operations with intelligent, automated solutions that adapt to your workflow.", route: "/customai" }
  ];

  const handleExpertiseReadMore = (route) => navigate(route);

  /* ================= CTA COMPONENT ================= */
  const CTASection = () => {
    const handleContactClick = () => navigate("/quote");
    return (
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-text">
            <h2>Call us now!</h2>
            <p>Boost your digital presence with our expert.</p>
          </div>
          <div className="cta-contact">
            <div className="phone-box">
              <div className="phone-icon"><FaPhoneAlt /></div>
              <span className="phone-number">+91 xxxxxxxxxx</span>
            </div>
            <button className="cta-btn" onClick={handleContactClick}>Contact Us</button>
          </div>
        </div>
      </section>
    );
  };

  /* ================= DIFFERENCE SECTION ================= */
  const DifferenceSection = () => {
    const handleClick = () => navigate("/about");
    return (
      <section className="difference-section">
        <div className="difference-container">
          <h2 className="difference-heading">
            How AppAspect Differs from Other Mobile App Development Companies
          </h2>
          <p className="difference-text">
            AppIdeas aims to rise to the top and become the best web design and mobile app development company based in Ahmedabad, India. 
            We prioritize our client’s demands and consumer’s needs and provide efficient, attractive, and valuable cross-platform app development 
            compatible with all systems and platforms. We guarantee the credibility of our work through the satisfaction achieved by our previous clients.
          </p>
          <button className="difference-btn" onClick={handleClick}>
            Learn more about us
          </button>
        </div>
      </section>
    );
  };

  /* ================= CONTACT SECTION ================= */
  const ContactSection = () => {
    return (
      <section className="contact-section">
        <div className="contact-container">

          {/* LEFT SIDE - FORM */}
          <div className="contact-form">
            <h2>Get In Touch</h2>

            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Company" />
              <input type="tel" placeholder="Phone" required />
              <textarea placeholder="Message" rows="5" required></textarea>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>

          {/* RIGHT SIDE - INFO */}
          <div className="contact-info">
            <h2>Contact Us</h2>

            <p><strong>Email:</strong> devideastudio@gmail.com</p>

            <p>
              A/8 Shakti Vijay Society, Near Vijay Park BRTS Bus Stand,  
              N.H. 8, Krishnanagar, Ahmedabad-382345
            </p>

            <p><strong>Working days/hours:</strong><br/>
              Mon - Fri / 10:00 AM - 7:00 PM
            </p>
          </div>

        </div>
      </section>
    );
  };

  return (
    <>
      {/* ================= HERO ================= */}
      {/* <section className="KRS">
        <div className="container KRS-content">
          <div className="KRS-text1">
            <h1>Best Mobile App Development<br/>and Web Solutions in Ahmedabad</h1>
            <p>Guiding businesses with the ideal combination of modern technology solutions that makes you stand out from the competitors and generates a solid return on investment.</p>
            <Link to="/quote" className="btn1">Get a Quote</Link>
          </div>
          <div className="KRS-image1">
            <img src="/images/hero.png" alt="Mobile App Development" className="KRS-img" width="600" height="500" loading="eager" decoding="async" fetchpriority="high"/>
          </div>
        </div>
      </section> */}

      {/* ================= HERO ================= */}
<section className="KRS">
  <div className="container KRS-content">

    {/* LEFT CONTENT */}
    <div className="KRS-text1">

      <span className="hero-tag">
         Trusted Mobile & Web Development Agency
      </span>

      <h1>
        Best Mobile App Development <br />
        and Web Solutions in Ahmedabad
      </h1>

      <p>
        We help startups, businesses and enterprises build powerful
        mobile apps and scalable web solutions using modern
        technologies like React, Flutter, AI Automation and Cloud.
        Our expert team delivers secure, high-performance products
        that accelerate your digital growth.
      </p>

      {/* HERO BUTTONS */}
      <div className="hero-buttons">

        <Link to="/quote" className="btn1">
          Get Free Quote
        </Link>

        <button
          className="btn-outline"
          onClick={() => navigate("/portfolio/apps")}
        >
          View Portfolio
        </button>

      </div>

      {/* TRUST STATS */}
      <div className="hero-stats">

        <div className="hero-stat">
          <h3>21+</h3>
          <span>Projects Delivered</span>
        </div>

        <div className="hero-stat">
          <h3>15+</h3>
          <span>Happy Clients</span>
        </div>

        <div className="hero-stat">
          <h3>3+</h3>
          <span>Years Experience</span>
        </div>

      </div>

      {/* FEATURE POINTS */}
      <div className="hero-features">

        <div className="hero-feature">
          ✔ Custom Mobile App Development
        </div>

        <div className="hero-feature">
          ✔ AI Automation & Smart Solutions
        </div>

        <div className="hero-feature">
          ✔ Fast & Secure Web Platforms
        </div>

        <div className="hero-feature">
          ✔ Scalable Cloud Architecture
        </div>

      </div>

      <p className="hero-trust">
         Trusted by startups and growing companies across India
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="KRS-image1">

      <img
        src="/images/hero.png"
        alt="Mobile App Development"
        className="KRS-img"
        width="600"
        height="500"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* FLOATING CARDS */}
      <div className="hero-floating hero-float1">
        <span> Fast Development</span>
      </div>

      <div className="hero-floating hero-float2">
        <span>🤖 AI Powered Solutions</span>
      </div>

      <div className="hero-floating hero-float3">
        <span>📱 Mobile + Web Apps</span>
      </div>

    </div>

  </div>
</section>

      {/* ================= ABOUT ================= */}
      <section className="flop-section">
        <div className="container flop-content">
          <div className="flop-top">
            <div className="flop-text">
              <span className="mini-title">AppAspect Development</span>
              <h2>Website and Mobile App Development In India</h2>
              <p>Are you searching for a reliable mobile app development company in Ahmedabad? At AppAspect, we specialize in creating innovative mobile and web solutions tailored to meet your business needs.</p>
              <ul className="feature-list">
                <li>✔ Custom Web & Mobile Applications</li>
                <li>✔ AI Powered Business Automation</li>
                <li>✔ Fast & Secure Scalable Platforms</li>
              </ul>
              <button className="btn" onClick={handleCTA}>Hire Top Development Agency Now</button>
            </div>
            <div className="flop-image">
              <img src="/images/dev.png" alt="Development" loading="eager" decoding="async" fetchpriority="high"/>
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="flop-bottom">
            <div className="flop-image">
              <img src="/images/growth.png" alt="Growth" loading="eager" decoding="async" fetchpriority="high"/>
            </div>
            <div className="flop-text">
              <span className="mini-title">Growth Focused Solutions</span>
              <h2>We Develop, Design, Grow, and Prosper</h2>
              <p>At AppAspect, a leading mobile app and web development company in Ahmedabad, we transform your ideas into powerful digital products that help your business scale faster.</p>
              <ul className="feature-list">
                <li>✔ Revenue Focused Digital Products</li>
                <li>✔ Modern UI/UX Experience</li>
                <li>✔ Long-Term Technology Support</li>
              </ul>
              <button className="btn" onClick={handleCTA}>Hire AppAspect Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="sit-heading">Why Choose AppAspect for Mobile App & Web Development in Ahmedabad</h2>
          <p className="sit-subtitle">As the leading mobile app development company in Ahmedabad, AppAspect offers end-to-end solutions for businesses of all sizes.</p>
          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className={`feature-item ${activeIndex === index ? "active" : ""}`}>
                <div className="feature-header" onClick={() => toggleFeature(index)}>
                  <h3>{feature.title}</h3>
                  <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
                </div>
                {activeIndex === index && <p className="feature-desc">{feature.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DIFFERENCE SECTION ================= */}
      <DifferenceSection />


            {/* ================= CTA SECTION ================= */}
      <CTASection />

      {/* ================= SERVICES ================= */}
      <section className="srv-section">
        <div className="srv-wrapper">
          <h2 className="srv-heading">Custom Web & Mobile Development Services</h2>
          <p className="srv-subtext">At AppIdeas we provide powerful digital solutions that help businesses grow faster with modern technology and innovation.</p>
          <div className="srv-grid">
            {services.map((service, index) => (
              <div key={index} className="srv-card">
                <div className="srv-image">
                  <img src={service.image} alt={service.title} loading="eager" decoding="async" fetchpriority="high" width="100%" height="220"/>
                </div>
                <h3 className="srv-title">{service.title}</h3>
                <p className="srv-desc">{service.desc}</p>
                <button className="srv-btn" onClick={() => handleReadMore(service.slug)}>Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section" ref={sectionRef}>
        <div className="container stats-container">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <h3 className="stat-number">{counts[idx]}+</h3>
              <p className="stat-title">{stat.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXPERTISE ================= */}
      <section className="expertise-section">
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <div className="expertise-cards">
            {expertiseData.map((item, index) => (
              <div key={index} className="expertise-card">
                <div className="card-img">
                  <img src={item.img} alt={item.title} loading="lazy" decoding="async" width="100" height="100"/>
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
                <button className="btn read-more" onClick={() => handleExpertiseReadMore(item.route)}>Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= CONTACT SECTION ================= */}
       <section className="contact-section">
      <div className="contact-container">

        {/* LEFT SIDE - FORM */}
        <div className="contact-form">
          <h2>Get In Touch</h2>

          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Company" />
            <input type="tel" placeholder="Phone" required />
            <textarea placeholder="Message" rows="5" required></textarea>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - INFO */}
        <div className="contact-info">
          <h2>Contact Us</h2>

          <p><strong>Email:</strong> devideastudio@gmail.com
          </p>

          <p >
            A/8 Shakti Vijay Society, Near Vijay Park BRTS Bus Stand,  
            N.H. 8, Krishnanagar, Ahmedabad-382345
          </p>

          <p><strong>Working days/hours:</strong><br/>
            Mon - Fri / 10:00 AM - 7:00 PM
          </p>
        </div>

      </div>
    </section>

    </>
  );
}

export default Hero;