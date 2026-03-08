import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTASection from "./components/CTASection";
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
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";

import DevelopmentProcess from "./Company/DevelopmentProcess";
import Testimonials from "./Company/Testimonials";
import FAQ from "./Company/FAQ";


/* ================= HOME PAGE ================= */

const HomePage = () => {
  return (
    <>
      <Hero />
    </>
  );
};


/* ================= APP ================= */

function App() {
  return (
    <Router>

      {/* Scroll top when route changes */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* All Routes */}
      <Routes>

        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* QUOTE PAGE */}
        <Route path="/quote" element={<QuotePage />} />

        {/* ABOUT */}
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

        {/* SERVICES */}
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />

        {/* AI */}
        <Route path="/ai" element={<AI />} />
        <Route path="/customai" element={<CustomAI />} />

        {/* DEVELOPMENT */}
        <Route path="/android-app-development" element={<AndroidAppDevelopment />} />
        <Route path="/ios-app-development" element={<IOSAppDevelopment />} />
        <Route path="/flutter-app-development" element={<FlutterAppDevelopment />} />

        {/* COMPANY */}
        <Route path="/developmentprocess" element={<DevelopmentProcess />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />

      </Routes>

      {/* Global CTA + Footer */}
      <CTASection />
      <Footer />

    </Router>
  );
}

export default App;