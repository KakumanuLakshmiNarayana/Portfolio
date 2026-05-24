import React from 'react';
import { MessageSquare, Globe, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SERVICES = [
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    tagline: 'Your 24/7 customer service rep.',
    description:
      'Answers questions, takes bookings, and never calls in sick. Works on your website, Instagram, and Facebook automatically.',
  },
  {
    icon: Globe,
    title: 'Modern Websites',
    tagline: 'Make your business look like a million bucks.',
    description:
      'Fast, mobile-friendly, and built to convert visitors into customers. Custom-designed — not templates that everyone else has.',
  },
  {
    icon: Zap,
    title: 'Smart Automations',
    tagline: 'Handle the boring stuff automatically.',
    description:
      'Auto-send review requests, follow up with leads, send promos. Set it up once and watch it run while you focus on your business.',
  },
];

function ServiceCard({ service, delay }) {
  const ref = useScrollAnimation();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="fade-up card-glow group bg-surface border border-divide rounded-2xl p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: 'rgba(217,119,6,0.1)' }}>
        <Icon size={22} className="text-accent" />
      </div>
      <h3 className="font-display text-xl font-bold text-heading mb-2">
        {service.title}
      </h3>
      <p className="text-heading/70 font-semibold text-sm mb-3 leading-snug">
        {service.tagline}
      </p>
      <p className="text-body text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export default function Services() {
  const headerRef = useScrollAnimation();
  const pricingRef = useScrollAnimation();

  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <span className="section-label">What I Build</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-heading mt-3 mb-4 leading-tight">
            Everything You Need.
            <br />
            <span className="text-accent">Nothing You Don't.</span>
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            Three focused services that solve the real problems every local business faces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 120} />
          ))}
        </div>

        <div ref={pricingRef} className="fade-up text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-surface border border-divide rounded-2xl px-8 py-5 shadow-sm">
            <span className="text-body">All of this, starting at</span>
            <span className="font-display font-bold text-heading text-2xl">$500</span>
            <span className="text-body/50 text-lg">—</span>
            <span className="text-body">no monthly fees for the website. No BS.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
