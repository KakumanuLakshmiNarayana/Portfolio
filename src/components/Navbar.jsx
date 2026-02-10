import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { navbarVariant } from "../utils/animations";
import useReducedMotion from "../hooks/useReducedMotion";
import styles from "./Navbar.module.css";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  // Update active nav link as user scrolls (only on / route)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      let current = "home";
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el && window.scrollY + 100 >= el.offsetTop) {
          current = section.id;
        }
      }
      setActive(current);
      
      // Add blur effect on scroll
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Smooth scroll for anchor links (only on / route)
  const handleNavClick = (id) => (e) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      window.location.href = `/#${id}`;
      return;
    }
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: "start" });
      setActive(id);
    }
  };

  // Smooth scroll for CTA button
  const handleCtaClick = (e) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      window.location.href = "/#contact";
      return;
    }
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: "start" });
      setActive("contact");
    }
  };

  const NavContent = () => (
    <>
      <div className={styles.brand}>
        <span className={styles.logo}>KLN</span>
        <span className={styles.portfolio}>Portfolio</span>
      </div>
      <ul className={styles.links}>
        {SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id && location.pathname === "/" ? styles.active : ""}
              onClick={handleNavClick(id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact" className={styles.cta} onClick={handleCtaClick}>
        Get In Touch
      </a>
    </>
  );

  // Use motion.nav if animations are enabled, otherwise regular nav
  if (prefersReducedMotion) {
    return (
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <NavContent />
      </nav>
    );
  }

  return (
    <motion.nav 
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial="hidden"
      animate="visible"
      variants={navbarVariant}
    >
      <NavContent />
    </motion.nav>
  );
}