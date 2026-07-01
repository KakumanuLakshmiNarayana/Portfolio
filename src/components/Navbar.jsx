import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-divide transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group" onClick={closeMenu}>
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-display font-bold text-xs tracking-wide transition-all duration-200 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(217,119,6,0.4)]">
            KLN
          </div>
          <span className="font-display font-semibold text-heading text-sm hidden sm:block">
            K L Narayana
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}
              className="text-body hover:text-heading text-sm font-medium transition-colors duration-200">
              {link.label}
            </a>
          ))}
          <a href="#contact"
            className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 hover:shadow-[0_4px_20px_rgba(217,119,6,0.35)]">
            Hire Me
          </a>
        </div>

        <button className="md:hidden text-body hover:text-heading transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 border-b border-divide' : 'max-h-0'} bg-white`}>
        <div className="px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}
              className="text-body hover:text-heading font-medium transition-colors"
              onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-center text-sm" onClick={closeMenu}>
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
