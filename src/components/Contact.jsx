import React, { useState } from 'react';
import { Mail, Send, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'avinari32@gmail.com',
    href: 'mailto:avinari32@gmail.com',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'lakshminarayanakakumanu',
    href: 'https://www.linkedin.com/in/lakshminarayanakakumanu/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'KakumanuLakshmiNarayana',
    href: 'https://github.com/KakumanuLakshmiNarayana',
  },
];

export default function Contact() {
  const headerRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <span className="section-label">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-heading mt-3 mb-4 leading-tight">
            Open to New
            <br />
            <span className="text-accent">Opportunities</span>
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            Whether you're building an AI product, exploring what LLMs can do for your team, or looking for a collaborative AI engineer — I'd love to hear from you.
          </p>
        </div>

        <div ref={formRef} className="fade-up grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: links */}
          <div className="space-y-4">
            {LINKS.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-5 bg-surface border border-divide rounded-xl hover:border-accent/40 hover:shadow-sm transition-all group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(217,119,6,0.1)' }}>
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-body text-xs font-medium">{label}</div>
                  <div className="text-heading font-medium text-sm group-hover:text-accent transition-colors">
                    {value}
                  </div>
                </div>
              </a>
            ))}

            <div className="pt-4">
              <p className="text-body/60 text-sm leading-relaxed">
                Based in Bellevue, WA · Open to remote and hybrid roles · Response within 24 hours.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-surface border border-divide rounded-2xl p-7">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(217,119,6,0.1)' }}>
                  <Send size={24} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-heading mb-2">Message sent!</h3>
                <p className="text-body text-sm">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-body text-xs font-medium mb-1.5">Your Name</label>
                    <input type="text" required placeholder="Jane Smith"
                      className="w-full bg-background border border-divide rounded-xl px-4 py-3 text-heading text-sm placeholder-body/40 focus:outline-none focus:border-accent/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-body text-xs font-medium mb-1.5">Company</label>
                    <input type="text" placeholder="Acme Corp"
                      className="w-full bg-background border border-divide rounded-xl px-4 py-3 text-heading text-sm placeholder-body/40 focus:outline-none focus:border-accent/50 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-body text-xs font-medium mb-1.5">Email</label>
                  <input type="email" required placeholder="jane@company.com"
                    className="w-full bg-background border border-divide rounded-xl px-4 py-3 text-heading text-sm placeholder-body/40 focus:outline-none focus:border-accent/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-body text-xs font-medium mb-1.5">Message</label>
                  <textarea required rows={4}
                    placeholder="Tell me about your project, role, or what you're looking to build with AI..."
                    className="w-full bg-background border border-divide rounded-xl px-4 py-3 text-heading text-sm placeholder-body/40 focus:outline-none focus:border-accent/50 transition-colors resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-3.5">
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
