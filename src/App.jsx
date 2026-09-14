import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Componants/Navbar";

import Home from "./Pages/Home";
import AboutSection from "./Componants/AboutSection";
import ServicesSection from "./Componants/ServicesSection";
import ContactSection from "./Componants/ContactSection";
import TestimonialsSection from "./Componants/TestimonialsSection";
import DoctorsSection from "./Componants/DoctorsSection";
import LocationSection from "./Componants/LocationSection";
import Footer from "./Componants/Footer";
import DiscountPopup from "./Componants/DiscountPopup";
import FAQ from "./Componants/FAQ";
import DeveloperCredit from "./Componants/DeveloperCredit";

const App = () => {
  return (
    <>
      <DiscountPopup />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/doctors" element={<DoctorsSection />} />
        <Route path="/location" element={<LocationSection />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      <Footer />
      <DeveloperCredit />
    </>
  );
};

export default App;
