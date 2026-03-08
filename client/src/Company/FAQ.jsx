import React, { useState } from "react";
import "./FAQ.css";



const faqData = [
  {
    q: "How can I distribute my enterprise app to my employees?",
    a: "Our team has experience setting up iOS enterprise apps through the Apple iTunes Volume Purchase Program. Android apps require no distribution licensing, so you are free to distribute apps directly to employees or use the Google for Work service."
  },
  {
    q: "Can you integrate with my existing backend software systems?",
    a: "Yes, with over 25 years of custom enterprise software development experience we can integrate a variety of software stacks with existing backend software systems."
  },
  {
    q: "How much does it cost to develop an app?",
    a: "Typically apps cost between $2,000 and $75,000 depending on complexity, backend integration, or high-end services."
  },
  {
    q: "Will you develop my app idea for profit share?",
    a: "AppAspect works strictly as a developer for hire. We do not participate in revenue share agreements."
  },
  {
    q: "How is my mobile app idea protected?",
    a: "The first step is signing a non-disclosure agreement (NDA). After development the source code and intellectual property belong to you."
  },
  {
    q: "How long does it take to develop an app?",
    a: "Simple apps can take a few weeks while complex apps may take several months."
  },
  {
    q: "Can you do iPhone and Android at the same time?",
    a: "Yes. We support iOS, Android, BlackBerry and Windows Phone."
  },
  {
    q: "Can we do some of the development work ourselves?",
    a: "Yes. If you already have artwork or technical assets we can collaborate with your team."
  },
  {
    q: "How is the app distributed?",
    a: "Apps can be published on Apple App Store, Google Play, BlackBerry World, Windows Store or private enterprise servers."
  },
  {
    q: "How can I make sure my app will get downloads?",
    a: "Our digital marketing services help apps gain visibility and attract users."
  }
];

const FAQ = () => {

  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">

      <div className="faq-top">

        <div className="faq-image">
          <img src="/images/faq-hero.jpg" alt="faq"/>
        </div>

        <div className="faq-intro">

          <h2>FAQ</h2>

          <p>
            In 2011, AppAspect was born as a creator of simple, flexible and affordable custom software. We are doing the same tradition today, no matter its back end systems for mobile apps, robust desktop programs, or enterprise application software. Our custom software development takes your unique ideas, put them into practice, and make them a reality.

Security and scalability of use are our primary considerations when developing enterprise Solution. Instead of spending time worrying about your sensitive data and getting frustrated with software not designed for what you actually do, you can concentrate on getting business done.

AppAspect is an established and well-known software development company with dedicated teams which are specialized in custom application development using platforms such as PHP, .Net, Java, Node.JS, Windows, ColdFusion development, and Facebook application development have been used by clients ranging from startups to the Fortune 500.

Our database creation for apps on various web, mobile, and desktop platforms have utilized SQL Server, Oracle, MySQL, PostgreSQL, SQLLite database management systems and No-SQL Database too. We always keep up with trends to ensure every project uses current best practices.
            </p>

        </div>

      </div>

      <div className="faq-container">

        {faqData.map((item, index) => (

          <div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
          >

            <div
              className="faq-question"
              onClick={() => toggle(index)}
            >
              {item.q}
              <span>{active === index ? "-" : "+"}</span>
            </div>

            <div className="faq-answer">
              <p>{item.a}</p>
            </div>

          </div>

        ))}

      </div>
      

    </section>
  );
};

export default FAQ;