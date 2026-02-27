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
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Quote Page */}
        <Route path="/quote" element={<QuotePage />} />

        {/* About Page */}
        <Route path="/ai" element={<AI />} />

        <Route path="/customai" element={<CustomAI />} />

      </Routes>
      <CTASection/>
      <Footer />
    </Router>
  );
}

export default App;
