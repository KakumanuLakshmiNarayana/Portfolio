import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const location = useLocation();

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
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // Only run on homepage
  }, [location.pathname]);

  // Smooth scroll for anchor links (only on / route)
  const handleNavClick = (id) => (e) => {
    if (location.pathname !== "/") {
      // If not on home, go to home with anchor
      e.preventDefault();
      window.location.href = `/#${id}`;
      return;
    }
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
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
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive("contact");
    }
  };

  return (
    <nav className={styles.navbar}>
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
    </nav>
  );
}