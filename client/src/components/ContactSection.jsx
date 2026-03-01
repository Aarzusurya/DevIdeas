import React from "react";
import "./ContactSection.css";

function ContactSection() {
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

          <p><strong>India:</strong> +91 96876 90810</p>
          <p><strong>Germany:</strong> +49 151 42424417</p>
          <p><strong>Email:</strong> InfoTechVertex@gmail.com
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
  );
}

export default ContactSection;
