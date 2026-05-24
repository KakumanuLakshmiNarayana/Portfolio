import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section id="about" className="bg-surface py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Avatar side */}
          <div ref={leftRef} className="fade-up flex flex-col items-center md:items-start gap-6">
            {/* Avatar */}
            <div className="relative">
              <div
                className="w-28 h-28 rounded-2xl flex items-center justify-center font-display font-extrabold text-3xl text-white"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #1d4ed8 100%)',
                  boxShadow: '0 0 0 1px rgba(59,130,246,0.3), 0 20px 60px rgba(59,130,246,0.2)',
                }}
              >
                LN
              </div>
              {/* Replace with real photo — swap the div above with:
                  <img src="/your-photo.jpg" alt="Narayana" className="w-28 h-28 rounded-2xl object-cover" /> */}
              <div
                className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-2 border-surface"
                style={{ background: '#22c55e' }}
              />
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-heading mb-1">
                Lakshminarayana Kakumanu
              </h3>
              <p className="text-body text-sm">AI Solutions Architect · Indiana, USA</p>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8">
              {[
                { value: '5–7', label: 'Day turnaround' },
                { value: '$500', label: 'Starting price' },
                { value: '100%', label: 'See before you pay' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display font-bold text-xl text-heading">{value}</div>
                  <div className="text-body text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio side */}
          <div ref={rightRef} className="fade-up" style={{ transitionDelay: '150ms' }}>
            <span className="section-label">About</span>
            <h2 className="font-display text-4xl font-bold text-heading mt-3 mb-6 leading-tight">
              I Build for Business Owners,
              <br />
              <span className="text-accent">Not for Tech People</span>
            </h2>
            <div className="space-y-4 text-body leading-relaxed">
              <p>
                I'm Narayana — an AI solutions architect based in Indiana. I combine a business background
                with AI tools to build things that actually help local businesses grow.
              </p>
              <p>
                I've spent years understanding how small businesses work, and I use that knowledge to build
                solutions that fit — not generic templates that collect dust.
              </p>
              <p>
                When I'm not building, I'm probably figuring out a new way to automate something that
                shouldn't take a human 3 hours.
              </p>
            </div>
            <div className="mt-8">
              <a href="#contact" className="btn-primary">
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
