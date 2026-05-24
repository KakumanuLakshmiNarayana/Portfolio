import React from 'react';
import { ExternalLink, Bot, Globe, MessageSquare } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PROJECTS = [
  {
    name: 'Spice Route',
    type: 'Indian Restaurant',
    built: ['Modern Website', 'AI Chatbot'],
    description:
      'Full website redesign with an AI chatbot that handles reservation requests, menu questions, hours, and directions — 24/7.',
    accent: '#f59e0b',
    bgFrom: 'rgba(245,158,11,0.06)',
    icons: [Globe, Bot],
    preview: {
      nav: 'rgba(245,158,11,0.15)',
      hero: 'rgba(245,158,11,0.22)',
      accent: '#f59e0b',
    },
  },
  {
    name: 'FreshFade',
    type: 'Barbershop',
    built: ['Booking Website', 'Review Automation'],
    description:
      'Online booking system with automated SMS review requests sent 2 hours after each appointment. Tripled their Google reviews in 30 days.',
    accent: '#06b6d4',
    bgFrom: 'rgba(6,182,212,0.06)',
    icons: [Globe, MessageSquare],
    preview: {
      nav: 'rgba(6,182,212,0.15)',
      hero: 'rgba(6,182,212,0.22)',
      accent: '#06b6d4',
    },
  },
  {
    name: 'GreenLeaf',
    type: 'Juice Bar',
    built: ['Landing Page', 'DM Bot', 'Promo Automation'],
    description:
      'High-converting landing page, Instagram DM bot for order inquiries, and automated weekly promo texts to their customer list.',
    accent: '#10b981',
    bgFrom: 'rgba(16,185,129,0.06)',
    icons: [Globe, Bot],
    preview: {
      nav: 'rgba(16,185,129,0.15)',
      hero: 'rgba(16,185,129,0.22)',
      accent: '#10b981',
    },
  },
];

function ProjectPreview({ preview }) {
  return (
    <div className="rounded-xl overflow-hidden border border-divide mb-6" style={{ background: '#F5F5F0' }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2.5" style={{ background: 'rgba(0,0,0,0.04)' }}>
        <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(0,0,0,0.15)' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(0,0,0,0.1)' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(0,0,0,0.07)' }} />
        <div className="ml-2 flex-1 rounded-full h-1.5" style={{ background: 'rgba(0,0,0,0.06)' }} />
      </div>
      {/* Mockup content */}
      <div className="p-3 space-y-2" style={{ minHeight: '110px' }}>
        <div className="rounded-lg h-7" style={{ background: preview.nav }} />
        <div className="rounded-lg h-12" style={{ background: preview.hero }} />
        <div className="flex gap-2">
          <div className="rounded h-4 flex-1" style={{ background: 'rgba(0,0,0,0.05)' }} />
          <div className="rounded h-4 w-1/3" style={{ background: preview.accent, opacity: 0.5 }} />
        </div>
        <div className="flex gap-2">
          <div className="rounded h-3 w-2/3" style={{ background: 'rgba(0,0,0,0.04)' }} />
          <div className="rounded h-3 flex-1" style={{ background: 'rgba(0,0,0,0.04)' }} />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, delay }) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="fade-up card-glow group bg-surface border border-divide rounded-2xl p-7 transition-all duration-300 hover:shadow-md flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <ProjectPreview preview={project.preview} />

      <div className="flex items-start justify-between mb-3">
        <div>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 inline-block"
            style={{ color: project.accent, borderColor: `${project.accent}30`, background: `${project.accent}10` }}
          >
            Sample Project
          </span>
          <h3 className="font-display text-xl font-bold text-heading">{project.name}</h3>
          <p className="text-body text-sm">{project.type}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.built.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-overlay border border-divide text-body"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-body text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

      <a
        href="#"
        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
        style={{ color: project.accent }}
      >
        View Demo
        <ExternalLink size={14} />
      </a>
    </div>
  );
}

export default function Portfolio() {
  const headerRef = useScrollAnimation();

  return (
    <section id="work" className="bg-background py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <span className="section-label">Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-heading mt-3 mb-4">
            What This Looks Like
            <br />
            <span className="text-accent">In the Real World</span>
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            Sample projects built to show what's possible for businesses like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
