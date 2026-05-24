import React, { useState } from 'react';
import { Mail, CalendarDays, Send } from 'lucide-react';

function LinkedinIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const headerRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to a form backend (Formspree, EmailJS, etc.)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-surface py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <span className="section-label">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-heading mt-3 mb-4 leading-tight">
            Ready to Stop Losing Customers to
            <br />
            <span className="text-accent">Your Competitor's Website?</span>
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            Let's talk about your business. No pressure, no jargon — just an honest
            conversation about what AI can do for you.
          </p>
        </div>

        <div
          ref={formRef}
          className="fade-up grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          {/* Left: CTA info */}
          <div>
            <a
              href="#"
              className="btn-primary w-full justify-center mb-8 text-base py-4"
              onClick={(e) => e.preventDefault()}
            >
              <CalendarDays size={20} />
              Book a Free 15-Min Call
            </a>

            <div className="text-center mb-8">
              <span className="text-body/60 text-sm">— or send a message below —</span>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:avinari32@gmail.com"
                className="flex items-center gap-4 p-4 bg-background border border-divide rounded-xl hover:border-accent/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(217,119,6,0.1)' }}>
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-body text-xs font-medium">Email</div>
                  <div className="text-heading font-medium text-sm group-hover:text-accent transition-colors">
                    avinari32@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/lakshminarayanakakumanu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-background border border-divide rounded-xl hover:border-accent/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(217,119,6,0.1)' }}>
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <div className="text-body text-xs font-medium">LinkedIn</div>
                  <div className="text-heading font-medium text-sm group-hover:text-accent transition-colors">
                    lakshminarayanakakumanu
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-background border border-divide rounded-2xl p-7">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(217,119,6,0.1)' }}>
                  <Send size={24} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-heading mb-2">
                  Message sent!
                </h3>
                <p className="text-body text-sm">
                  I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-body text-xs font-medium mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full bg-surface border border-divide rounded-xl px-4 py-3 text-heading text-sm placeholder-body/40 focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-body text-xs font-medium mb-1.5">Business Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Mario's Pizza"
                      className="w-full bg-surface border border-divide rounded-xl px-4 py-3 text-heading text-sm placeholder-body/40 focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-body text-xs font-medium mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@yourbusiness.com"
                      className="w-full bg-surface border border-divide rounded-xl px-4 py-3 text-heading text-sm placeholder-body/40 focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-body text-xs font-medium mb-1.5">
                      Phone <span className="text-body/50">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full bg-surface border border-divide rounded-xl px-4 py-3 text-heading text-sm placeholder-body/40 focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-body text-xs font-medium mb-1.5">
                    Tell me about your business
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="I run a pizza restaurant and I need help getting more online orders and managing customer questions..."
                    className="w-full bg-surface border border-divide rounded-xl px-4 py-3 text-heading text-sm placeholder-body/40 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  />
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
