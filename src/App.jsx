import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

function HomeSections() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSections />} />
      </Routes>
      <BackToTop />
    </Router>
  );
}