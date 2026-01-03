import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  }, [location.pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Smooth scroll for anchor links (only on / route)
  const handleNavClick = (id) => (e) => {
    // Close mobile menu
    setMobileMenuOpen(false);

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
    setMobileMenuOpen(false);
    
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

  // Close menu when clicking backdrop
  const handleBackdropClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.brand}>
          <span className={styles.logo}>KLN</span>
          <span className={styles.portfolio}>Portfolio</span>
        </div>

        {/* Desktop navigation */}
        <ul className={`${styles.links} ${styles.desktopOnly}`}>
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id && location.pathname === "/" ? styles.active : ""}
                onClick={handleNavClick(id)}
                aria-current={active === id && location.pathname === "/" ? "page" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a 
          href="#contact" 
          className={`${styles.cta} ${styles.desktopOnly}`} 
          onClick={handleCtaClick}
        >
          Get In Touch
        </a>

        {/* Hamburger button for mobile */}
        <button
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </nav>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className={styles.mobileLinks}>
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id && location.pathname === "/" ? styles.active : ""}
                onClick={handleNavClick(id)}
                aria-current={active === id && location.pathname === "/" ? "page" : undefined}
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contact" 
              className={styles.mobileCta}
              onClick={handleCtaClick}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              Get In Touch
            </a>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div 
          className={styles.backdrop}
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      )}
    </>
  );
}
