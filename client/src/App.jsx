// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import AboutSection from "./components/AboutSection";
// import WhyChoose from "./components/WhyChoose";
// import StatsSection from "./components/StatsSection";
// import ExpertiseSection from "./components/ExpertiseSection";
// import CTASection from "./components/CTASection";
// import DifferenceSection from "./components/DifferenceSection";
// import ServicesSection from "./components/ServicesSection";
// import ContactSection from "./components/ContactSection";
// import Footer from "./components/Footer";

// import QuotePage from "./pages/QuotePage";
// import AI from "./pages/AI";
// import CustomAI from "./pages/CustomAI";
// import AndroidAppDevelopment from "./pages/AndroidAppDevelopment";
// import IOSAppDevelopment from "./pages/IOSAppDevelopment";
// import FlutterAppDevelopment from "./pages/FlutterAppDevelopment";
// import ScrollToTop from "./components/ScrollToTop";

// import AppsPortfolio from "./pages/AppsPortfolio";
// import WebsitesPortfolio from "./pages/WebsitesPortfolio";

// import MultiSocial from "./pages/MultiSocial";
// import PeriodsPage from "./pages/PeriodsPage";
// import PlayPage from "./pages/PlayPage";
// import BodyPage from "./pages/Bodypage";
// import RANFleet from "./pages/RANFleet";
// import Tommy from "./pages/Tommy";
// import NullcomPage from "./pages/NullcomPage";
// import Heliosphere from "./pages/Heliosphere";
// import HisablyPage from "./pages/HisablyPage";


// import CaseStudies from "./pages/CaseStudies";
// import FitAgPage from "./pages/FitAgpage";
// import SelfHealthCarePage from "./pages/SelfHealthCarePage";
// import LifeIXPage from "./pages/LifeIXPage";
// import SikhWorldAppPage from "./pages/sikhWorldAppPage";
// import UltimateNotepadPage from "./pages/UltimateNotepadPage";
// import AppzCreativePage from "./pages/AppzCreativePage";

// import AboutUsPage from "./pages/AboutUsPage";





// function HomePage() {
//   return (
//     <>
//       <Hero />
//       <AboutSection />
//       <WhyChoose />
//       <StatsSection />
//       <ExpertiseSection />
//       <CTASection />
//       <DifferenceSection />
//       <ServicesSection />
//       <ContactSection />
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <Navbar />

//       <Routes>
//         {/* Home */}
//         <Route path="/" element={<HomePage />} />

//         {/* Services */}
//         <Route path="/services" element={<ExpertiseSection />} />

//         {/* Quote */}
//         <Route path="/quote" element={<QuotePage />} />

//         {/* Portfolio */}
//         <Route path="/portfolio/apps" element={<AppsPortfolio />} />
//         <Route path="/portfolio/websites" element={<WebsitesPortfolio />} />

//         {/* App Portfolio Pages */}
//         <Route path="/multi-social" element={<MultiSocial />} />
//         <Route path="/periods" element={<PeriodsPage />} />
//         <Route path="/play-diary" element={<PlayPage />} />
//         <Route path="/body-care-love" element={<BodyPage />} />

//         {/* ✅ IMPORTANT FIXED ROUTE */}
//         <Route path="/ranfleet" element={<RANFleet />} />
//         <Route path="/tommy" element={<Tommy />} />
//         <Route path="/nextpage" element={<div style={{padding:"120px"}}>Next Page</div>} />
//         <Route path="/nullcom" element={<NullcomPage />} />
//         <Route path="/heliosphere" element={<Heliosphere />} />
//         <Route path="/hisably" element={<HisablyPage />} />


//         <Route path="/case-studies" element={<CaseStudies />} />
//         <Route path="/fitag" element={<FitAgPage />} />
//         <Route path="/self-health-care" element={<SelfHealthCarePage />} />
//         <Route path="/lifeix" element={<LifeIXPage />} />
//         <Route path="/sikh-world" element={<SikhWorldAppPage />} />
//         <Route path="/ultimate-notepad" element={<UltimateNotepadPage />} />
//         <Route path="/appzcreative" element={<AppzCreativePage />} />

//       <Route path="/about" element={<AboutUsPage />} />


//         {/* AI Pages */}
//         <Route path="/ai" element={<AI />} />
//         <Route path="/customai" element={<CustomAI />} />

//         {/* App Development Pages */}
//         <Route
//           path="/android-app-development"
//           element={<AndroidAppDevelopment />}
//         />
//         <Route
//           path="/ios-app-development"
//           element={<IOSAppDevelopment />}
//         />
//         <Route
//           path="/flutter-app-development"
//           element={<FlutterAppDevelopment />}
//         />
//       </Routes>

//       <CTASection />
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import WhyChoose from "./components/WhyChoose";
import StatsSection from "./components/StatsSection";
import ExpertiseSection from "./components/ExpertiseSection";
import CTASection from "./components/CTASection";
import DifferenceSection from "./components/DifferenceSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import QuotePage from "./pages/QuotePage";
import AI from "./pages/AI";
import CustomAI from "./pages/CustomAI";

import AndroidAppDevelopment from "./pages/AndroidAppDevelopment";
import IOSAppDevelopment from "./pages/IOSAppDevelopment";
import FlutterAppDevelopment from "./pages/FlutterAppDevelopment";

import AppsPortfolio from "./pages/AppsPortfolio";
import WebsitesPortfolio from "./pages/WebsitesPortfolio";

import MultiSocial from "./pages/MultiSocial";
import PeriodsPage from "./pages/PeriodsPage";
import PlayPage from "./pages/PlayPage";
import BodyPage from "./pages/Bodypage";

import RANFleet from "./pages/RANFleet";
import Tommy from "./pages/Tommy";
import NullcomPage from "./pages/NullcomPage";
import Heliosphere from "./pages/Heliosphere";
import HisablyPage from "./pages/HisablyPage";

import CaseStudies from "./pages/CaseStudies";
import FitAgPage from "./pages/FitAgpage";
import SelfHealthCarePage from "./pages/SelfHealthCarePage";
import LifeIXPage from "./pages/LifeIXPage";
import SikhWorldAppPage from "./pages/SikhWorldAppPage";
import UltimateNotepadPage from "./pages/UltimateNotepadPage";
import AppzCreativePage from "./pages/AppzCreativePage";

import AboutUsPage from "./pages/AboutUsPage";



/* ================= HOME PAGE ================= */

function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyChoose />
      <StatsSection />
      <ExpertiseSection />
      <CTASection />
      <DifferenceSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}


/* ================= APP ================= */

function App() {
  return (
    <Router>

      <ScrollToTop />

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* SERVICES */}
        <Route path="/services" element={<ExpertiseSection />} />

        {/* QUOTE PAGE */}
        <Route path="/quote" element={<QuotePage />} />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<AboutUsPage />} />

        {/* PORTFOLIO */}
        <Route path="/portfolio/apps" element={<AppsPortfolio />} />
        <Route path="/portfolio/websites" element={<WebsitesPortfolio />} />

        {/* APP PORTFOLIO */}
        <Route path="/multi-social" element={<MultiSocial />} />
        <Route path="/periods" element={<PeriodsPage />} />
        <Route path="/play-diary" element={<PlayPage />} />
        <Route path="/body-care-love" element={<BodyPage />} />

        {/* CLIENT APPS */}
        <Route path="/ranfleet" element={<RANFleet />} />
        <Route path="/tommy" element={<Tommy />} />
        <Route path="/nullcom" element={<NullcomPage />} />
        <Route path="/heliosphere" element={<Heliosphere />} />
        <Route path="/hisably" element={<HisablyPage />} />

        {/* CASE STUDIES */}
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/fitag" element={<FitAgPage />} />
        <Route path="/self-health-care" element={<SelfHealthCarePage />} />
        <Route path="/lifeix" element={<LifeIXPage />} />
        <Route path="/sikh-world" element={<SikhWorldAppPage />} />
        <Route path="/ultimate-notepad" element={<UltimateNotepadPage />} />
        <Route path="/appzcreative" element={<AppzCreativePage />} />

        {/* AI PAGES */}
        <Route path="/ai" element={<AI />} />
        <Route path="/customai" element={<CustomAI />} />

        {/* DEVELOPMENT PAGES */}
        <Route
          path="/android-app-development"
          element={<AndroidAppDevelopment />}
        />

        <Route
          path="/ios-app-development"
          element={<IOSAppDevelopment />}
        />

        <Route
          path="/flutter-app-development"
          element={<FlutterAppDevelopment />}
        />

      </Routes>

      <CTASection />
      <Footer />

    </Router>
  );
}

export default App;
