import React from 'react';
import { Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ACHIEVEMENTS = [
  'Designed AI-assisted workflow automations that reduced repetitive manual tasks by integrating backend APIs, intelligent processing, and business logic.',
  'Built full-stack applications using React, Python, and Node.js — from requirements to production-ready deployment.',
  'Engineered intelligent document-processing workflows that extract, validate, and transform structured and unstructured business data.',
  'Applied prompt engineering and structured output validation to improve the reliability and consistency of LLM-generated responses.',
  'Collaborated with business stakeholders to translate functional requirements into maintainable, AI-driven applications.',
  'Designed reusable backend services supporting automation pipelines, document workflows, API integrations, and intelligent decision support.',
];

const TECH = ['Python', 'React', 'Node.js', 'OpenAI', 'REST APIs', 'FastAPI', 'n8n', 'LLMs', 'PostgreSQL'];

export default function HowItWorks() {
  const headerRef = useScrollAnimation();
  const cardRef = useScrollAnimation();

  return (
    <section id="experience" className="bg-background py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={headerRef} className="fade-up mb-12">
          <span className="section-label">Experience</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-heading mt-3 mb-4 leading-tight">
            Building AI in
            <br />
            <span className="text-accent">the Real World</span>
          </h2>
        </div>

        <div ref={cardRef} className="fade-up bg-surface border border-divide rounded-2xl p-8 md:p-10 shadow-sm">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-8 border-b border-divide">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(217,119,6,0.1)' }}>
                <Briefcase size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-heading">AI Engineer</h3>
                <p className="text-body text-sm">Axitemus · USA</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border border-accent/25 text-accent self-start sm:self-center"
              style={{ backgroundColor: 'rgba(217,119,6,0.07)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
              July 2024 – Present
            </span>
          </div>

          {/* Achievements */}
          <ul className="space-y-3.5 mb-8">
            {ACHIEVEMENTS.map((a, i) => (
              <li key={i} className="flex gap-3 items-start text-body text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-[7px]" />
                {a}
              </li>
            ))}
          </ul>

          {/* Tech used */}
          <div className="pt-6 border-t border-divide">
            <p className="text-body text-xs font-semibold uppercase tracking-widest mb-3">Technologies Used</p>
            <div className="flex flex-wrap gap-2">
              {TECH.map(t => (
                <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-overlay border border-divide text-body">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
