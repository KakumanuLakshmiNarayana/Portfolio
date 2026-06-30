import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import WhyMe from './components/WhyMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Portfolio />
        <Services />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
