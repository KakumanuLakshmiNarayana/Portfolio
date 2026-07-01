import React from 'react';
import { Mail } from 'lucide-react';

function GithubIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.104-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.026 2.747-1.026.547 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-divide">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-accent rounded-md flex items-center justify-center text-white font-display font-bold text-xs">
              KLN
            </div>
            <div>
              <span className="font-display font-semibold text-heading text-sm block leading-none">K L Narayana</span>
              <span className="text-body text-xs">AI Engineer</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}
                className="text-body hover:text-heading text-xs font-medium transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a href="mailto:avinari32@gmail.com"
              className="w-8 h-8 rounded-lg border border-divide flex items-center justify-center text-body hover:text-accent hover:border-accent/40 transition-all"
              aria-label="Email">
              <Mail size={14} />
            </a>
            <a href="https://github.com/KakumanuLakshmiNarayana"
              target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-divide flex items-center justify-center text-body hover:text-accent hover:border-accent/40 transition-all"
              aria-label="GitHub">
              <GithubIcon size={14} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-divide/50 text-center">
          <p className="text-body/50 text-xs">
            © 2026 K L Narayana · AI Engineer · Bellevue, WA
          </p>
        </div>
      </div>
    </footer>
  );
}
