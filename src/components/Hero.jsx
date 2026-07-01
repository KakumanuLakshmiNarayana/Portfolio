import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const TECH_PILLS = ['Python', 'OpenAI', 'React', 'Next.js', 'TypeScript', 'LangChain', 'n8n'];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 hero-grid" />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(217,119,6,0.09) 0%, transparent 65%)',
      }} />

      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #FAFAF8)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-20">

        {/* Status badges */}
        <div className="hero-anim animate-hero-1 flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-body bg-surface border border-divide rounded-full px-3 py-1.5">
            <MapPin size={11} className="text-accent" />
            Bellevue, WA
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold border border-accent/25 rounded-full px-3 py-1.5"
            style={{ color: '#B45309', backgroundColor: 'rgba(217,119,6,0.07)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
            AI Engineer · Axitemus
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold border border-divide rounded-full px-3 py-1.5 text-body bg-surface">
            ☁ AWS ML Specialty
          </span>
        </div>

        {/* Name */}
        <h1 className="hero-anim animate-hero-2 font-display font-extrabold text-heading leading-none tracking-tight mb-5"
          style={{ fontSize: 'clamp(3.25rem, 8vw, 5.5rem)' }}>
          K L Narayana
        </h1>

        {/* Tagline */}
        <p className="hero-anim animate-hero-3 font-display font-bold text-accent mb-6 leading-tight"
          style={{ fontSize: 'clamp(1.2rem, 3vw, 1.75rem)' }}>
          Building AI That Thinks, Learns, and Acts.
        </p>

        {/* Subtitle */}
        <p className="hero-anim animate-hero-3 text-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          I design and ship end-to-end AI products — LLM pipelines, intelligent automations,
          and full-stack applications that turn ideas into real business outcomes.
        </p>

        {/* Tech pills */}
        <div className="hero-anim animate-hero-4 flex flex-wrap items-center justify-center gap-2 mb-10">
          {TECH_PILLS.map(t => (
            <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-surface border border-divide text-body">
              {t}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero-anim animate-hero-5 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="btn-primary">
            See My Work
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-secondary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}
