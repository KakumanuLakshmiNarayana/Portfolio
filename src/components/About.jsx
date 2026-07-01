import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MILESTONES = [
  {
    period: '2021',
    role: 'Bachelor of Commerce',
    org: 'Acharya Nagarjuna University · India',
    story: "Started with commerce — learned how businesses think, where value flows, and why decisions are made. That foundation never left me. It's why I build AI for outcomes, not just for code.",
    current: false,
  },
  {
    period: 'Jan 2021 – Dec 2022',
    role: 'Software Engineer',
    org: 'Janaspandana Software Solutions · India',
    story: 'Built my engineering foundation shipping real production systems — 25+ REST APIs, secure auth for 5,000+ daily users, and government-grade integrations. Learned that reliability and scale aren\'t optional.',
    current: false,
  },
  {
    period: '2022 – 2024',
    role: "Master's in Computer Information Technology",
    org: 'Purdue University · Indiana, USA',
    story: 'Crossed continents and disciplines. Immersed myself in systems, software, and eventually AI. Built real projects, asked hard questions, graduated May 2024 — and immediately knew this was the work I was meant to do.',
    current: false,
  },
  {
    period: 'July 2024 – Present',
    role: 'AI Engineer',
    org: 'Axitemus · USA',
    story: 'Now shipping production AI — LLM pipelines, RAG systems, workflow automations, full-stack applications. Every project connects intelligent systems to measurable business value. This is the current chapter.',
    current: true,
  },
];

function TimelineItem({ milestone, delay, isLast }) {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className="fade-up flex gap-7 md:gap-10" style={{ transitionDelay: `${delay}ms` }}>
      {/* Spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={`w-4 h-4 rounded-full border-2 z-10 mt-1 transition-all ${
          milestone.current
            ? 'bg-accent border-accent shadow-[0_0_12px_rgba(217,119,6,0.4)]'
            : 'bg-white border-divide'
        }`} />
        {!isLast && (
          <div className="w-px flex-1 mt-2" style={{ background: 'linear-gradient(to bottom, rgba(217,119,6,0.25), rgba(217,119,6,0.05))', minHeight: '88px' }} />
        )}
      </div>

      {/* Content */}
      <div className={`pb-14 ${isLast ? 'pb-0' : ''}`}>
        <p className="font-display font-bold text-accent text-sm mb-1">{milestone.period}</p>
        <h3 className="font-display text-xl md:text-2xl font-bold text-heading mb-0.5">{milestone.role}</h3>
        <p className="text-body text-sm mb-3 flex items-center gap-1.5">
          {milestone.org}
          {milestone.current && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-accent text-white ml-1">
              <span className="w-1 h-1 rounded-full bg-white animate-pulse-slow" />
              Now
            </span>
          )}
        </p>
        <p className="text-body leading-relaxed text-sm md:text-base max-w-lg">{milestone.story}</p>
      </div>
    </div>
  );
}

export default function About() {
  const headerRef = useScrollAnimation();

  return (
    <section id="about" className="bg-surface py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={headerRef} className="fade-up mb-16">
          <span className="section-label">My Journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-heading mt-3 mb-5 leading-tight">
            From Commerce Student
            <br />
            <span className="text-accent">to AI Engineer</span>
          </h2>
          <p className="text-body text-lg leading-relaxed max-w-xl">
            My path wasn't linear — it was intentional. I crossed continents, switched disciplines, and kept building until the work matched the vision.
          </p>
        </div>

        <div>
          {MILESTONES.map((m, i) => (
            <TimelineItem
              key={m.role}
              milestone={m}
              delay={i * 200}
              isLast={i === MILESTONES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
