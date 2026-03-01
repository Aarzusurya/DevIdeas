import React from "react";
import "./FlutterAppDevelopment.css";

/* HERO IMAGE */
import flutterImg from "../assets/flutter.png";

/* TRANSFORM SECTION IMAGES */
import performanceImg from "../assets/performance.png";
import designImg from "../assets/design.png";
import scalableImg from "../assets/scalable.png";
import costImg from "../assets/cost.png";

/* SERVICES SECTION IMAGES */
import service1 from "../assets/crossplatform.png";
import service2 from "../assets/ml.png";
import service3 from "../assets/uiux.png";
import service4 from "../assets/realtime.png";
import service5 from "../assets/iot.png";
import service6 from "../assets/qa.png";

// Cards data for Why Choose AppAspect
const whyChooseData = [
  {
    id: 1,
    title: "Fast, Visual Prototyping",
    description:
      "Get a working prototype of your app - before we write the first line of code.",
  },
  {
    id: 2,
    title: "Expert Consulting",
    description:
      "Not sure how Flutter fits your vision? We'll guide you, step by step.",
  },
  {
    id: 3,
    title: "Scalable Cloud Integrations",
    description:
      "We connect your Flutter app with AWS, Google Cloud, and Microsoft Azure - so you stay reliable and secure.",
  },
  {
    id: 4,
    title: "Continuous Integration & Delivery",
    description:
      "Updates roll out faster, bugs disappear sooner, and your app always stays on point.",
  },
  {
    id: 5,
    title: "Post-Launch Support",
    description:
      "Bugs fixed. Features added. Security updated. We're with you every step of the way.",
  },
];

// Cards data for Guarantees & Industries Section
const guaranteeIndustriesData = [
  {
    id: 1,
    title: "What We Guarantee",
    description: `You'll love what we deliver - or we'll make it right.

Here’s our promise:
- On-Time Delivery - We respect your deadlines
- 100% Code Ownership - You own the IP, always
- Post-Launch Support - 30 days of free maintenance
- Bug-Free Experience - We test on real devices
- Transparent Communication - Weekly updates, no surprises
- NDA Protection - Your idea stays yours

Because trust isn't just built - it's coded in.`,
  },
  {
    id: 2,
    title: "Industries We Build Flutter Apps For",
    description: `We've helped businesses across India launch apps that matter.

Industries we specialize in:
- Healthcare (Appointments, telehealth, medical records)
- Education (Online learning, tests, student portals)
- E-Commerce (Catalogs, carts, secure payments)
- Logistics & Transport (Real-time tracking, routing)
- Finance & FinTech (Wallets, dashboards, UPI, EMI)
- On-Demand Services (Salons, home cleaning, food delivery)

Got a unique use case? We'll tailor every element of your Flutter app to fit your niche.`,
  },
];

const FlutterAppDevelopment = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="flutter-hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>Flutter App Development Company in India</h1>
            <p>
              In today's digital-first world, users want apps that are fast, sleek, and smart.
              <br /><br />
              That's where Flutter comes in.
              <br /><br />
              At AppAspect, a trusted Flutter app development company in India,
              we build cross-platform mobile apps that are visually stunning,
              blazing fast, and engineered to scale.
              Whether you're based in Ahmedabad or reaching users across India,
              we help you build apps that don't just work — they win.
            </p>
          </div>
          <div className="hero-image">
            <img src={flutterImg} alt="Flutter App Development" />
          </div>
        </div>
      </section>

      {/* ===== WHY FLUTTER SECTION ===== */}
      <section className="flutter-why">
        <div className="container">
          <h2>Why Flutter? Why Now?</h2>
          <p className="why-intro">
            Flutter is more than a framework — it's a revolution in mobile app development.
            Here's why companies across India are switching to Flutter:
          </p>
          <ul className="why-list">
            <li>Single codebase for iOS & Android</li>
            <li>Hot reload for real-time changes</li>
            <li>Native performance with smooth animations</li>
            <li>Pixel-perfect design every time</li>
            <li>Custom Widgets: Fully brandable, fully scalable</li>
            <li>Built for AI/ML: Add smart features seamlessly</li>
            <li>Lower Costs: One team, one codebase, double the value</li>
          </ul>
          <p className="why-bottom">
            Flutter cuts dev time, reduces bugs, and gives you a competitive edge —
            without breaking the bank.
          </p>
        </div>
      </section>

      {/* ===== TRANSFORM SECTION ===== */}
      <section className="flutter-transform">
        <div className="container">
          <h2>
            Transform Your Mobile App with Flutter Development Company in Ahmedabad
          </h2>
          <p className="transform-intro">
            If you're navigating the complexities of app development, Flutter offers a vibrant solution that simplifies your journey.
            As a leading Flutter development company in Ahmedabad, we build apps that are:
          </p>
          <div className="transform-cards">
            <div className="transform-card">
              <img src={performanceImg} alt="High Performance" />
              <h3>Performance-driven</h3>
            </div>
            <div className="transform-card">
              <img src={designImg} alt="Visually Stunning" />
              <h3>Cross-platform</h3>
            </div>
            <div className="transform-card">
              <img src={scalableImg} alt="Scalable & Secure" />
              <h3>Purpose-built for your audience</h3>
            </div>
            <div className="transform-card">
              <img src={costImg} alt="Cost Efficient" />
              <h3>AI-enhanced</h3>
            </div>
          </div>
        </div>
        <p className="transform-bottom-line">
          From idea to launch - we craft every app like a symphony of speed, usability, and innovation.
        </p>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="flutter-poll">
        <div className="container">
          <h2>Our Flutter App Development Services Include</h2>
          <div className="poll-grid">
            <div className="poll-card">
              <img src={service1} alt="Cross Platform" />
              <h3>Cross-Platform App Development</h3>
            </div>
            <div className="poll-card">
              <img src={service2} alt="Machine Learning" />
              <h3>Machine Learning Integration</h3>
            </div>
            <div className="poll-card">
              <img src={service3} alt="UI UX Design" />
              <h3>Flutter App UI/UX Design</h3>
            </div>
            <div className="poll-card">
              <img src={service4} alt="Real Time Sync" />
              <h3>Real-Time Data Synchronization</h3>
            </div>
            <div className="poll-card">
              <img src={service5} alt="IoT & Cloud" />
              <h3>IoT and Cloud Integration</h3>
            </div>
            <div className="poll-card">
              <img src={service6} alt="QA Testing" />
              <h3>Rigorous Quality Testing & QA</h3>
            </div>
          </div>
          <p className="poll-bottom-line">
            Each service is designed to help your app scale smoothly while delivering a flawless user experience.
          </p>
        </div>
      </section>

      {/* ===== WHY CHOOSE APPASPECT SECTION (Styled Cards) ===== */}
      <section className="why-choose-section py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose AppAspect as Your Flutter App Development Company in India?
          </h2>
          <p className="text-center mb-12 text-gray-700">
            AppAspect doesn't just build apps - we build solutions that drive ROI.
            Here's what sets us apart:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseData.map((card) => (
              <div
                key={card.id}
                className="card bg-gradient-to-br from-white to-blue-100 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-800">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GUARANTEE & INDUSTRIES SECTION (2 Cards) ===== */}
      <section className="guarantee-industries-section py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guaranteeIndustriesData.map((card) => (
              <div
                key={card.id}
                className="card bg-gradient-to-br from-white to-blue-100 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-800">{card.title}</h3>
                <p className="text-gray-700" style={{ whiteSpace: "pre-line" }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FlutterAppDevelopment;