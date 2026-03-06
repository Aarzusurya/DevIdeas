import React from "react";
import mobileImg from "../assets/mobile.png";

const MobileAppDevelopment = () => {
  return (
    <div>

      {/* HERO SECTION */}

      <section style={styles.hero}>
        <div style={styles.container}>

          <div style={styles.heroGrid}>

            {/* IMAGE FIRST */}
            <div style={styles.imageBox}>
              <img
                src={mobileImg}
                alt="mobile app"
                style={styles.heroImage}
                loading="eager"
              />
            </div>

            {/* TEXT */}
            <div style={styles.textBox}>
              <h1 style={styles.heading}>
                Mobile App Development Services in Ahmedabad, India
              </h1>

              <p style={styles.heroPara}>
                Looking for mobile app development services in India that deliver real results?
                You're in the right place. We create high-performance, user-friendly mobile apps
                that drive engagement, boost revenue, and set your business apart.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY MOBILE APPS */}

      <section style={styles.section}>
        <div style={styles.container}>

          <h2 style={styles.sectionTitle}>
            Why Mobile Apps Are a Game-Changer for Businesses
          </h2>

          <p style={styles.text}>
            In today's digital landscape, mobile apps aren't optional—they're essential.
            Businesses leverage mobile technology to enhance customer engagement,
            streamline operations, and gain a competitive advantage across industries.
          </p>

        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}

      <section style={styles.sectionGray}>
        <div style={styles.container}>

          <h2 style={styles.sectionTitle}>How We Build High-Impact Mobile Apps</h2>

          <div style={styles.grid}>

            <div style={styles.card}>
              <h3>Cross Platform Development</h3>
              <p>
                We develop Android, iOS and hybrid apps that run smoothly across
                all devices with maximum performance.
              </p>
            </div>

            <div style={styles.card}>
              <h3>UI / UX Design</h3>
              <p>
                Our designers craft visually stunning and user-friendly
                interfaces that keep users engaged.
              </p>
            </div>

            <div style={styles.card}>
              <h3>Secure Backend</h3>
              <p>
                Robust backend architecture ensures scalability,
                security and smooth performance for your application.
              </p>
            </div>

            <div style={styles.card}>
              <h3>Agile Development</h3>
              <p>
                Continuous improvement with rapid development cycles
                keeps your mobile app ahead of competitors.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}

      <section style={styles.section}>
        <div style={styles.container}>

          <h2 style={styles.sectionTitle}>
            Why Businesses Choose AppAspect
          </h2>

          <p style={styles.text}>
            With years of experience in mobile development,
            our team focuses on innovation, performance,
            and scalable architecture to build successful applications.
          </p>

        </div>
      </section>

      {/* SUCCESS STORIES */}

      <section style={styles.sectionGray}>
        <div style={styles.container}>

          <h2 style={styles.sectionTitle}>Real Success Stories</h2>

          <div style={styles.grid}>

            <div style={styles.card}>
              <h3>E-commerce Startup</h3>
              <p>
                Increased sales by 60% within six months
                by launching a customized mobile shopping application.
              </p>
            </div>

            <div style={styles.card}>
              <h3>Healthcare Platform</h3>
              <p>
                Reduced patient waiting time by 40%
                using a smart appointment booking system.
              </p>
            </div>

            <div style={styles.card}>
              <h3>Fintech Solution</h3>
              <p>
                Improved user retention by 30%
                with secure real-time financial tracking features.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}

      <section style={styles.section}>
        <div style={styles.container}>

          <h2 style={styles.sectionTitle}>
            Benefits of Mobile App Development
          </h2>

          <div style={styles.grid}>

            <div style={styles.card}>
              <h3>New Age Investment</h3>
              <p>
                Mobile apps make services accessible anywhere
                and provide long term business value.
              </p>
            </div>

            <div style={styles.card}>
              <h3>Higher Profit</h3>
              <p>
                Apps open new revenue channels
                and increase operational productivity.
              </p>
            </div>

            <div style={styles.card}>
              <h3>Business Growth</h3>
              <p>
                A successful mobile product allows businesses
                to expand into new markets faster.
              </p>
            </div>

            <div style={styles.card}>
              <h3>Customer Engagement</h3>
              <p>
                Apps create a direct connection between
                brand and customers which improves loyalty.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};


const styles = {

  container: {
    width: "90%",
    maxWidth: "1200px",
    margin: "auto"
  },

  hero: {
    background: "#0d6efd",
    color: "#fff",
    padding: "90px 0"
  },

  heroGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    flexWrap: "wrap"
  },

  imageBox: {
    flex: "1",
    textAlign: "center"
  },

  textBox:{
    flex:"1"
  },

  heroImage: {
    width: "420px",
    maxWidth: "100%",
    height:"auto"
  },

  heading: {
    fontSize: "42px",
    marginBottom: "20px",
    lineHeight: "1.2"
  },

  heroPara: {
    fontSize: "18px",
    lineHeight: "1.7"
  },

  section: {
    padding: "80px 0",
    textAlign: "center",
    background: "#fff"
  },

  sectionGray: {
    padding: "80px 0",
    textAlign: "center",
    background: "#f5f7ff"
  },

  sectionTitle: {
    fontSize: "34px",
    marginBottom: "30px"
  },

  text: {
    maxWidth: "800px",
    margin: "auto",
    fontSize: "18px",
    lineHeight: "1.7"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "30px",
    marginTop: "40px"
  },

  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
  }

};

export default MobileAppDevelopment;