// import React from "react";
// import "./QuotePage.css";

// function QuotePage() {

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you! We will contact you soon.");
//   };

//   // Image from public folder
//   const contactImg = "/images/hero.png";

//   return (
//     <section className="quote-section">
//       <div className="quote-container">

//         {/* ===== HEADER ===== */}
//         <div className="quote-header">
//           <h1 className="quote-title">Get in Touch</h1>
//           <h2 className="quote-subtitle">Have Any Questions?</h2>

//           <p className="quote-description">
//             Innovation is the key to smart success. We provide modern technology
//             solutions and creative strategies that help businesses grow faster and smarter.
//           </p>

//           <p className="quote-highlight">
//             Fill out the form below and our team will contact you as soon as possible.
//           </p>
//         </div>


//         {/* ================= TOP ROW ================= */}

//         <div className="quote-top">

//           {/* FORM */}
//           <div className="quote-form-wrapper">

//             <form className="quote-form" onSubmit={handleSubmit}>

//               <div className="form-group">
//                 <label>Full Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter your full name"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Email Address</label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email address"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Company Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter your company name"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Phone Number</label>
//                 <input
//                   type="tel"
//                   placeholder="Enter your phone number"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Your Message</label>
//                 <textarea
//                   rows="5"
//                   placeholder="Write your message here..."
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="submit-btn"
//               >
//                 Send Message
//               </button>

//             </form>

//           </div>


//           {/* OFFICE INFO */}

//           <div className="office-info">

//             <h3>India Office</h3>

//             <p>
//               <strong>Phone:</strong> +91 xxxxxxxxxx
//             </p>

//             <p>
//               <strong>Contact Person:</strong> Gurupritsingh Saini
//             </p>

//             <p>
//               <strong>Email:</strong> devideastudio@gmail.com
//             </p>

//             <p className="address">
//               A/8 Shakti Vijay Society, Near Vijay Park BRTS Bus Stand,
//               N.H. 8, Krishnanagar, Ahmedabad - 382345
//             </p>

//           </div>

//         </div>


//         {/* ================= BOTTOM ROW ================= */}

//         <div className="quote-bottom">

//           {/* IMAGE */}

//           <div className="image-box">
//             <img
//               src={contactImg}
//               alt="Contact Illustration"
//               loading="lazy"
//             />
//           </div>


//           {/* FEATURES */}

//           <div className="features-box">

//             <div className="feature-item">
//               <h3>Fast Response</h3>
//               <p>
//                 We reply within 24 hours with proper consultation and guidance.
//               </p>
//             </div>

//             <div className="feature-item">
//               <h3>Experienced Team</h3>
//               <p>
//                 Professional developers & designers with 5+ years of experience.
//               </p>
//             </div>

//             <div className="feature-item">
//               <h3>Affordable Pricing</h3>
//               <p>
//                 Transparent pricing with no hidden charges and flexible plans.
//               </p>
//             </div>

//             <div className="feature-item">
//               <h3>24/7 Support</h3>
//               <p>
//                 Our support team is always ready to help you anytime.
//               </p>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default QuotePage;

import React from "react";
import "./QuotePage.css";

function QuotePage() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our team will contact you within 24 hours.");
  };

  const contactImg = "/images/hero.png";

  return (
    <section className="quote-section">
      <div className="quote-container">

        {/* ===== HEADER ===== */}

        <div className="quote-header">

          <span className="quote-tag">
             Let's Build Something Amazing
          </span>

          <h1 className="quote-title">
            Get Your Free Project Quote
          </h1>

          <h2 className="quote-subtitle">
            Tell Us About Your Idea
          </h2>

          <p className="quote-description">
            We help startups, businesses and enterprises build powerful
            mobile apps, modern websites and AI automation systems.
            Our expert developers create secure, scalable and high
            performance digital products that accelerate business growth.
          </p>

          <p className="quote-highlight">
            Fill out the form below and our team will contact you within 24 hours.
          </p>

        </div>


        {/* ================= TOP ROW ================= */}

        <div className="quote-top">

          {/* ===== FORM ===== */}

          <div className="quote-form-wrapper">

            <form className="quote-form" onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  placeholder="Your company name"
                />
              </div>


              {/* SERVICE SELECT */}

              <div className="form-group">
                <label>Select Service</label>
                <select>

                  <option>Mobile App Development</option>
                  <option>Website Development</option>
                  <option>UI / UX Design</option>
                  <option>AI Automation</option>
                  <option>Cloud Solutions</option>

                </select>
              </div>


              {/* BUDGET */}

              <div className="form-group">
                <label>Project Budget</label>
                <select>

                  <option>$500 - $2000</option>
                  <option>$2000 - $5000</option>
                  <option>$5000 - $10000</option>
                  <option>$10000+</option>

                </select>
              </div>


              {/* MESSAGE */}

              <div className="form-group full">
                <label>Project Details</label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your project idea..."
                  required
                />

              </div>


              <button
                type="submit"
                className="submit-btn"
              >
                Send Quote Request
              </button>

            </form>

          </div>


          {/* ===== OFFICE INFO ===== */}

          <div className="office-info">

            <h3> India Office</h3>

            <p>
              <strong>Phone:</strong> +91 xxxxxxxxxx
            </p>

            <p>
              <strong>Contact Person:</strong> Gurupritsingh Saini
            </p>

            <p>
              <strong>Email:</strong> devideastudio@gmail.com
            </p>

            <p className="address">

              A/8 Shakti Vijay Society,  
              Near Vijay Park BRTS Bus Stand,  
              N.H. 8, Krishnanagar,  
              Ahmedabad - 382345

            </p>

            {/* TRUST STATS */}

            <div className="office-stats">

              <div>
                <h4>21+</h4>
                <span>Projects</span>
              </div>

              <div>
                <h4>15+</h4>
                <span>Clients</span>
              </div>

              <div>
                <h4>3+</h4>
                <span>Years</span>
              </div>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM ROW ================= */}

        <div className="quote-bottom">

          {/* IMAGE */}

          <div className="image-box">

            <img
              src={contactImg}
              alt="Contact Illustration"
              loading="lazy"
            />

          </div>


          {/* FEATURES */}

          <div className="features-box">

            <div className="feature-item">
              <h3> Fast Response</h3>

              <p>
                Our team responds within 24 hours with detailed
                consultation and project planning.
              </p>
            </div>

            <div className="feature-item">
              <h3>👨‍💻 Expert Developers</h3>

              <p>
                Skilled mobile and web developers with experience
                in modern technologies like React, Flutter and AI.
              </p>
            </div>

            <div className="feature-item">
              <h3>💰 Transparent Pricing</h3>

              <p>
                Affordable pricing models with no hidden charges
                and flexible payment options.
              </p>
            </div>

            <div className="feature-item">
              <h3>🛠 Long Term Support</h3>

              <p>
                We provide continuous updates, maintenance and
                support for your digital products.
              </p>
            </div>

          </div>

        </div>


        {/* TRUST FOOTER */}

        <div className="quote-trust">

           {/* Trusted by startups and businesses across India */}

        </div>

      </div>
    </section>
  );
}

export default QuotePage;