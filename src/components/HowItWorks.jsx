import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const STEPS = [
  {
    number: '01',
    title: 'We Talk',
    description:
      'Tell me about your business and what\'s eating your time. 15 minutes, no pressure, no sales pitch. Just a real conversation.',
  },
  {
    number: '02',
    title: 'I Build',
    description:
      'I create your AI-powered setup in 5–7 days. You see a full preview before you pay a single cent. No surprises.',
  },
  {
    number: '03',
    title: 'You Grow',
    description:
      'We launch it, you start getting more customers, and you stop answering the same questions 50 times a day.',
  },
];

function Step({ step, delay }) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="fade-up relative flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-display font-extrabold text-6xl md:text-7xl leading-none mb-4"
        style={{ color: 'rgba(217,119,6,0.18)' }}>
        {step.number}
      </div>
      <h3 className="font-display text-2xl font-bold text-heading mb-3">
        {step.title}
      </h3>
      <p className="text-body leading-relaxed text-sm md:text-base">
        {step.description}
      </p>
    </div>
  );
}

export default function HowItWorks() {
  const headerRef = useScrollAnimation();

  return (
    <section id="how-it-works" className="bg-surface py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <span className="section-label">How It Works</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-heading mt-3 mb-4">
            Simple. Fast. No Tech Degree Required.
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            Getting AI into your business shouldn't be complicated. Here's exactly what happens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connector line desktop */}
          <div
            className="hidden md:block absolute top-8 left-[calc(33%_+_1rem)] right-[calc(33%_+_1rem)] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(217,119,6,0.25), transparent)' }}
          />
          {STEPS.map((step, i) => (
            <Step key={step.number} step={step} delay={i * 150} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Book Your Free 15-Min Call
          </a>
        </div>
      </div>
    </section>
  );
}
