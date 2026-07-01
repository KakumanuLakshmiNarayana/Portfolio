import React from 'react';
import { Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ROLES = [
  {
    title: 'AI Engineer',
    company: 'Axitemus',
    location: 'USA',
    period: 'July 2024 – Present',
    current: true,
    summary: 'Designing AI-driven business applications that integrate Large Language Models, workflow automation, and intelligent document processing to simplify complex operational workflows.',
    achievements: [
      'Built production-ready AI capabilities supporting 20K+ indexed knowledge records through Retrieval-Augmented Generation (RAG), embedding-based search, and intelligent document processing.',
      'Designed a scalable semantic search architecture capable of retrieving relevant context from 1,000+ enterprise documents using OpenAI embeddings and vector similarity search.',
      'Improved LLM response relevance by 38% through metadata-aware retrieval, optimized chunk sizes, prompt refinement, and retrieval quality evaluation.',
      'Designed and implemented 6+ AI-powered automation workflows using LLMs, prompt engineering, and intelligent document processing to streamline repetitive business operations.',
      'Built production-style AI features that reduced manual processing time by 80% through workflow automation and structured AI-assisted decision making.',
      'Improved AI response consistency by 35% through prompt optimization, structured output validation, and iterative evaluation strategies.',
      'Developed intelligent document processing pipelines capable of extracting and transforming structured and unstructured business information across multiple document formats.',
      'Collaborated with cross-functional stakeholders to evaluate AI opportunities, validate technical approaches, and deliver production-ready AI capabilities aligned with business objectives.',
    ],
    tech: ['Python', 'OpenAI', 'RAG', 'LangChain', 'FastAPI', 'React', 'Node.js', 'PostgreSQL', 'n8n', 'LLMs'],
  },
  {
    title: 'Software Engineer',
    company: 'Janaspandana Software Solutions',
    location: 'India',
    period: 'Jan 2021 – Dec 2022',
    current: false,
    summary: 'Developed backend systems and REST APIs for citizen service applications serving multiple government departments.',
    achievements: [
      'Developed 25+ REST APIs supporting citizen service applications used across multiple government departments.',
      'Built secure authentication and role-based access control modules serving 5,000+ daily users.',
      'Reduced API response latency by 40% through SQL optimization and backend refactoring.',
      'Developed reusable backend services adopted across 100+ internal modules.',
      'Integrated payment gateways, SMS gateways, and third-party government services supporting 20+ digital citizen services.',
    ],
    tech: ['Python', 'REST APIs', 'SQL', 'PostgreSQL', 'Authentication', 'Payment Gateways'],
  },
];

function RoleCard({ role, delay }) {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className="fade-up bg-surface border border-divide rounded-2xl p-8 md:p-10 shadow-sm"
      style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-divide">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(217,119,6,0.1)' }}>
            <Briefcase size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-heading">{role.title}</h3>
            <p className="text-body text-sm">{role.company} · {role.location}</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border self-start sm:self-center"
          style={{
            borderColor: role.current ? 'rgba(217,119,6,0.25)' : 'rgba(107,114,128,0.25)',
            color: role.current ? '#D97706' : '#6B7280',
            backgroundColor: role.current ? 'rgba(217,119,6,0.07)' : 'rgba(107,114,128,0.07)',
          }}>
          {role.current && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />}
          {role.period}
        </span>
      </div>

      <p className="text-body text-sm leading-relaxed mb-5 italic">{role.summary}</p>

      <ul className="space-y-3 mb-7">
        {role.achievements.map((a, i) => (
          <li key={i} className="flex gap-3 items-start text-body text-sm leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-[7px]" />
            {a}
          </li>
        ))}
      </ul>

      <div className="pt-5 border-t border-divide">
        <p className="text-body text-xs font-semibold uppercase tracking-widest mb-3">Technologies Used</p>
        <div className="flex flex-wrap gap-2">
          {role.tech.map(t => (
            <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-overlay border border-divide text-body">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const headerRef = useScrollAnimation();

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

        <div className="space-y-6">
          {ROLES.map((role, i) => (
            <RoleCard key={role.company} role={role} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
