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

import QuotePage from "./pages/QuotePage";
import AI from "./pages/AI";
import CustomAI from "./pages/CustomAI";
import AndroidAppDevelopment from "./pages/AndroidAppDevelopment";
import IOSAppDevelopment from "./pages/IOSAppDevelopment";
import FlutterAppDevelopment from "./pages/FlutterAppDevelopment";
import ScrollToTop from "./components/ScrollToTop";

import AppsPortfolio from "./pages/AppsPortfolio";
import WebsitesPortfolio from "./pages/WebsitesPortfolio";

import MultiSocial from "./pages/MultiSocial";
import PeriodsPage from "./pages/PeriodsPage";
import PlayPage from "./pages/PlayPage";
import BodyPage from "./pages/Bodypage";
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Services Page (NEW) */}
        <Route path="/services" element={<ExpertiseSection />} />

        {/* Quote */}
        <Route path="/quote" element={<QuotePage />} />

        <Route path="/portfolio/apps" element={<AppsPortfolio />} />
<Route path="/portfolio/websites" element={<WebsitesPortfolio />} />

<Route path="/multi-social" element={<MultiSocial />} />
<Route path="/periods" element={<PeriodsPage />} />
<Route path="/play-diary" element={<PlayPage />} />
<Route path="/body-care-love" element={<BodyPage />} />

        {/* AI Pages */}
        <Route path="/ai" element={<AI />} />
        <Route path="/customai" element={<CustomAI />} />

        <Route path="/periods" element={<PeriodsPage />} />

        {/* App Development Pages */}
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