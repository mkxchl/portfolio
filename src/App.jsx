import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ScrollReveal from "./components/ScrollReveal";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4">
      <Navbar />
      <Hero />
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal delay={0.2}><Projects /></ScrollReveal>
      <ScrollReveal delay={0.4}><Experiences /></ScrollReveal>
      <ScrollReveal delay={0.6}><Testimonial /></ScrollReveal>
      <ScrollReveal delay={0.8}><Contact /></ScrollReveal>
      <Footer />
    </div>
  );
};

export default App;
