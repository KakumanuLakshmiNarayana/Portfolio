import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.104-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.026 2.747-1.026.547 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
    </svg>
  );
}

const FEATURED = [
  {
    name: 'Panchangam Agent',
    type: 'AI Content Automation Pipeline',
    description:
      'End-to-end AI pipeline that collects daily Panchangam data, generates bilingual scripts using LLMs, synthesizes speech, renders videos with FFmpeg, and auto-publishes via GitHub Actions — zero human intervention required.',
    tech: ['Python', 'OpenAI', 'GitHub Actions', 'FFmpeg', 'TTS'],
    github: 'https://github.com/KakumanuLakshmiNarayana/panchangam-agent',
    accent: '#D97706',
    label: 'Automation · LLM · Video',
  },
  {
    name: 'AI Diet Tracker',
    type: 'Full-Stack Health Application',
    description:
      'Full-stack nutrition platform with GPT-4o-powered personalized meal recommendations, activity tracking, secure authentication, and cloud-backed health metrics using Supabase and PostgreSQL.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'GPT-4o'],
    github: 'https://github.com/KakumanuLakshmiNarayana/diet-tracker',
    accent: '#0D9488',
    label: 'Full-Stack · LLM · Health',
  },
  {
    name: 'Job Email Labeling',
    type: 'AI Workflow Automation',
    description:
      'n8n workflow that automatically classifies and organizes job application emails using OpenAI and Gmail API — turning a chaotic inbox into a structured, zero-effort pipeline. ⭐ 2 stars on GitHub.',
    tech: ['n8n', 'OpenAI', 'Gmail API', 'Workflow Automation'],
    github: 'https://github.com/KakumanuLakshmiNarayana/job-email-labelling-n8n',
    accent: '#3B82F6',
    label: 'Automation · NLP · APIs',
  },
  {
    name: 'Bedtime Story Generator',
    type: 'AI Storytelling Application',
    description:
      'Python CLI that generates safe, age-appropriate bedtime stories (ages 5–10) using a structured LLM storyteller, deterministic content validation, and an LLM-based judge for iterative refinement.',
    tech: ['Python', 'OpenAI', 'Prompt Engineering', 'LLM Judge'],
    github: 'https://github.com/KakumanuLakshmiNarayana/Bedtime_story_Genrator',
    accent: '#8B5CF6',
    label: 'LLM · Content Gen · Python',
  },
];

const MORE = [
  {
    name: 'FINSIGHT',
    desc: 'All-in-one personal finance tracker to manage money, work hours, and financial goals.',
    tech: ['TypeScript'],
    github: 'https://github.com/KakumanuLakshmiNarayana/FINSIGHT',
  },
  {
    name: 'Expense Tracker PWA',
    desc: 'Progressive Web App for personal expense tracking with offline support.',
    tech: ['TypeScript', 'PWA'],
    github: 'https://github.com/KakumanuLakshmiNarayana/expense-tracker-app',
  },
  {
    name: 'Grocery Scraper',
    desc: 'Helps local vendors source product catalog and pricing from wholesale distributors via web scraping.',
    tech: ['Python', 'Web Scraping'],
    github: 'https://github.com/KakumanuLakshmiNarayana/web-scraping-grocery-store',
  },
  {
    name: 'GharKaBazaar',
    desc: 'Flask-based web application for managing grocery store orders end-to-end.',
    tech: ['Python', 'Flask'],
    github: 'https://github.com/KakumanuLakshmiNarayana/gharkabazaar',
  },
];

function FeaturedCard({ project, delay }) {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className="fade-up card-glow group bg-surface border border-divide rounded-2xl p-7 transition-all duration-300 hover:shadow-md flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ color: project.accent, background: `${project.accent}12`, border: `1px solid ${project.accent}28` }}>
          {project.label}
        </span>
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="text-body hover:text-heading transition-colors" aria-label="GitHub">
          <GithubIcon size={16} />
        </a>
      </div>

      <h3 className="font-display text-xl font-bold text-heading mb-0.5">{project.name}</h3>
      <p className="text-body text-xs font-medium mb-4">{project.type}</p>
      <p className="text-body text-sm leading-relaxed flex-1 mb-5">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map(t => (
          <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-overlay border border-divide text-body">
            {t}
          </span>
        ))}
      </div>

      <a href={project.github} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
        style={{ color: project.accent }}>
        View on GitHub
        <ExternalLink size={13} />
      </a>
    </div>
  );
}

function MiniCard({ project, delay }) {
  const ref = useScrollAnimation();

  return (
    <a ref={ref} href={project.github} target="_blank" rel="noopener noreferrer"
      className="fade-up group bg-surface border border-divide rounded-xl p-5 hover:border-accent/30 hover:shadow-sm transition-all duration-200 flex flex-col gap-2"
      style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex items-start justify-between">
        <h4 className="font-display font-bold text-heading text-sm group-hover:text-accent transition-colors">{project.name}</h4>
        <GithubIcon size={14} className="text-body group-hover:text-accent transition-colors flex-shrink-0 mt-0.5" />
      </div>
      <p className="text-body text-xs leading-relaxed flex-1">{project.desc}</p>
      <div className="flex flex-wrap gap-1 mt-1">
        {project.tech.map(t => (
          <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-overlay border border-divide text-body/70">{t}</span>
        ))}
      </div>
    </a>
  );
}

export default function Portfolio() {
  const headerRef = useScrollAnimation();
  const moreRef = useScrollAnimation();

  return (
    <section id="projects" className="bg-surface py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <span className="section-label">Projects</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-heading mt-3 mb-4">
            What I've Built
            <br />
            <span className="text-accent">End to End</span>
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            Every project is a working system — not a tutorial. Real data, real pipelines, real outcomes.
          </p>
        </div>

        {/* Featured 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {FEATURED.map((p, i) => (
            <FeaturedCard key={p.name} project={p} delay={i * 100} />
          ))}
        </div>

        {/* More projects */}
        <div ref={moreRef} className="fade-up">
          <p className="text-body text-xs font-semibold uppercase tracking-widest mb-6 text-center">More on GitHub</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {MORE.map((p, i) => (
              <MiniCard key={p.name} project={p} delay={i * 80} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <a href="https://github.com/KakumanuLakshmiNarayana" target="_blank" rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2">
            <GithubIcon size={16} />
            View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
}
