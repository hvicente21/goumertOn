import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Menu from "./components/MenuSection";
import Testimonials from "./components/Testimonials";
import Contact from "./components/ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Menu />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
