import React from 'react';
import { Check, Phone, Eye, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const VALUE_PROPS = [
  {
    icon: BookOpen,
    title: 'I explain everything in plain English',
    description:
      "No jargon, no tech-speak. You'll always know exactly what was built, why it works, and how to use it.",
  },
  {
    icon: Eye,
    title: 'You see it before you pay',
    description:
      'I show you a complete working demo before you spend a single dollar. You only pay when you love it.',
  },
  {
    icon: Phone,
    title: 'I actually pick up my phone',
    description:
      'No ticket system, no 48-hour wait. You get my number. Real support from the person who built your system.',
  },
];

function ValueCard({ prop, delay }) {
  const ref = useScrollAnimation();
  const Icon = prop.icon;

  return (
    <div
      ref={ref}
      className="fade-up flex gap-5 items-start"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ background: 'rgba(59,130,246,0.12)' }}
      >
        <Icon size={20} className="text-accent" />
      </div>
      <div>
        <h3 className="font-display font-bold text-heading text-lg mb-2">{prop.title}</h3>
        <p className="text-body text-sm leading-relaxed">{prop.description}</p>
      </div>
    </div>
  );
}

export default function WhyMe() {
  const headerRef = useScrollAnimation();

  return (
    <section id="why-me" className="bg-background py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <span className="section-label">Why Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-heading mt-3 mb-4">
            A Lot of People Build Websites.
            <br />
            <span className="text-accent">Here's What Makes This Different.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {VALUE_PROPS.map((prop, i) => (
            <ValueCard key={prop.title} prop={prop} delay={i * 120} />
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-divide text-center">
          <p className="text-body text-lg mb-2">
            Ready to see what AI can do for your business?
          </p>
          <p className="text-heading font-semibold text-xl mb-8">
            The first call is free. No pitch. Just a conversation.
          </p>
          <a href="#contact" className="btn-primary">
            Book a Free 15-Min Call
          </a>
        </div>
      </div>
    </section>
  );
}
