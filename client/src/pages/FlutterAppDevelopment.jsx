import React from "react";
import "./FlutterAppDevelopment.css";


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
      {/* HERO */}
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
            </p>
          </div>

          <div className="hero-image">
            <img
              src="/images/flutter.png"
              alt="Flutter App Development"
              loading="eager"
            />
          </div>

        </div>
      </section>

      {/* WHY FLUTTER */}
      <section className="flutter-why">
        <div className="container">

          <h2>Why Flutter? Why Now?</h2>

          <ul className="why-list">
            <li>Single codebase for iOS & Android</li>
            <li>Hot reload for real-time changes</li>
            <li>Native performance with smooth animations</li>
            <li>Pixel-perfect design every time</li>
            <li>Custom Widgets: Fully brandable, fully scalable</li>
            <li>Built for AI/ML: Add smart features seamlessly</li>
            <li>Lower Costs: One team, one codebase, double the value</li>
          </ul>

        </div>
      </section>

      {/* TRANSFORM */}
      <section className="flutter-transform">
        <div className="container">

          <h2>
            Transform Your Mobile App with Flutter Development Company in Ahmedabad
          </h2>

          <div className="transform-cards">

            <div className="transform-card">
              <img src="/images/performance.png" alt="Performance" loading="lazy"/>
              <h3>Performance-driven</h3>
            </div>

            <div className="transform-card">
              <img src="/images/design.png" alt="Design" loading="lazy"/>
              <h3>Cross-platform</h3>
            </div>

            <div className="transform-card">
              <img src="/images/scalable.png" alt="Scalable" loading="lazy"/>
              <h3>Purpose-built for your audience</h3>
            </div>

            <div className="transform-card">
              <img src="/images/cost.png" alt="Cost Efficient" loading="lazy"/>
              <h3>AI-enhanced</h3>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="flutter-poll">
        <div className="container">

          <h2>Our Flutter App Development Services Include</h2>

          <div className="poll-grid">

            <div className="poll-card">
              <img src="/images/crossplatform.png" alt="Cross Platform" loading="lazy"/>
              <h3>Cross-Platform App Development</h3>
            </div>

            <div className="poll-card">
              <img src="/images/ml.png" alt="Machine Learning" loading="lazy"/>
              <h3>Machine Learning Integration</h3>
            </div>

            <div className="poll-card">
              <img src="/images/uiux.png" alt="UI UX" loading="lazy"/>
              <h3>Flutter App UI/UX Design</h3>
            </div>

            <div className="poll-card">
              <img src="/images/realtime.png" alt="Realtime Sync" loading="lazy"/>
              <h3>Real-Time Data Synchronization</h3>
            </div>

            <div className="poll-card">
              <img src="/images/iot.png" alt="IoT" loading="lazy"/>
              <h3>IoT and Cloud Integration</h3>
            </div>

            <div className="poll-card">
              <img src="/images/qa.png" alt="QA Testing" loading="lazy"/>
              <h3>Rigorous Quality Testing & QA</h3>
            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-choose-section py-16">
        <div className="container">

          <h2 className="text-center">
            Why Choose AppAspect as Your Flutter App Development Company in India?
          </h2>

          <div className="grid">
            {whyChooseData.map((card) => (
              <div key={card.id} className="card">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* GUARANTEE */}
      <section className="guarantee-industries-section py-16">

        <div className="container">

          <div className="grid">

            {guaranteeIndustriesData.map((card) => (

              <div key={card.id} className="card">

                <h3>{card.title}</h3>

                <p style={{ whiteSpace: "pre-line" }}>
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