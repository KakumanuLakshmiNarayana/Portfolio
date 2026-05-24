import React from 'react';
import { Mail } from 'lucide-react';

function LinkedinIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-divide">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-accent rounded-md flex items-center justify-center text-white font-display font-bold text-xs">
              LN
            </div>
            <span className="font-display font-semibold text-heading text-sm">
              Narayana AI Solutions
            </span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body hover:text-heading text-xs font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:avinari32@gmail.com"
              className="w-8 h-8 rounded-lg border border-divide flex items-center justify-center text-body hover:text-accent hover:border-accent/40 transition-all"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/lakshminarayanakakumanu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-divide flex items-center justify-center text-body hover:text-accent hover:border-accent/40 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={14} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-divide/50 text-center">
          <p className="text-body/50 text-xs">
            © 2026 Narayana AI Solutions · Built to help local businesses grow.
          </p>
        </div>
      </div>
    </footer>
  );
}
