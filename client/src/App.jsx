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
import WordpressDevelopment from "./pages/WordpressDevelopment";
import LaravelWebDevelopment from "./pages/LaravelWebDevelopment";
import ReactNativeAppDevelopment from "./pages/ReactNativeAppDevelopment";
import ScrollToTop from "./components/ScrollToTop";


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

        {/* Quote */}
        <Route path="/quote" element={<QuotePage />} />

        {/* AI Pages */}
        <Route path="/ai" element={<AI />} />
        <Route path="/customai" element={<CustomAI />} />

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
        <Route
          path="/wordpress-development"
          element={<WordpressDevelopment />}
        />
        <Route
          path="/laravel-web-development"
          element={<LaravelWebDevelopment />}
        />
        <Route
          path="/react-native-app-development"
          element={<ReactNativeAppDevelopment />}
        />
      </Routes>

      <CTASection />
      <Footer />
    </Router>
  );
}

export default App;