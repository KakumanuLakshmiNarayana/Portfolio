import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 hero-grid" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(217,119,6,0.1) 0%, transparent 70%)',
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #FAFAF8)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-20">
        <div className="hero-anim animate-hero-1 inline-flex items-center gap-2.5 border border-accent/25 rounded-full px-4 py-1.5 text-sm text-accent font-medium mb-8"
          style={{ backgroundColor: 'rgba(217,119,6,0.08)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
          AI Solutions for Local Businesses
        </div>

        <h1
          className="hero-anim animate-hero-2 font-display font-extrabold text-heading leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.25rem)' }}
        >
          I Build AI That Runs Your
          <br />
          <span className="text-accent">Business While You Sleep</span>
        </h1>

        <p className="hero-anim animate-hero-3 text-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          I help restaurants, salons, and small businesses get more customers
          with AI chatbots, modern websites, and smart automations.
        </p>

        <div className="hero-anim animate-hero-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#work" className="btn-primary">
            See My Work
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-secondary">
            <MessageSquare size={18} className="text-accent" />
            Let's Talk
          </a>
        </div>

        <div className="hero-anim animate-hero-5 mt-16 flex flex-col items-center gap-3">
          <p className="text-body/50 text-xs font-medium tracking-[0.18em] uppercase">
            Built for local business owners
          </p>
          <div className="flex items-center gap-5 text-body/35 text-xs font-medium">
            {['Restaurants', 'Barbershops', 'Salons', 'Retail Stores'].map((type, i) => (
              <React.Fragment key={type}>
                {i > 0 && <span className="w-1 h-1 rounded-full bg-body/20" />}
                <span className="hidden sm:block">{type}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
