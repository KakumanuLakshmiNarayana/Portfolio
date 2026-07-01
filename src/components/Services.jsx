import React from 'react';
import { Cpu, Code2, Server, Database, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SKILLS = [
  {
    icon: Cpu,
    category: 'AI & LLM',
    items: ['OpenAI API', 'GPT-4o', 'Prompt Engineering', 'LangChain', 'Agentic AI', 'Embeddings', 'Semantic Search', 'AI Workflow Automation'],
  },
  {
    icon: Code2,
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5 / CSS3'],
  },
  {
    icon: Server,
    category: 'Backend',
    items: ['Python', 'Node.js', 'FastAPI', 'Express.js', 'REST APIs', 'SQL'],
  },
  {
    icon: Database,
    category: 'Databases',
    items: ['PostgreSQL', 'Supabase', 'SQLite'],
  },
  {
    icon: Zap,
    category: 'Automation & DevOps',
    items: ['n8n', 'GitHub Actions', 'Docker', 'CI/CD', 'FFmpeg'],
  },
];

function SkillCard({ skill, delay }) {
  const ref = useScrollAnimation();
  const Icon = skill.icon;

  return (
    <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(217,119,6,0.1)' }}>
          <Icon size={17} className="text-accent" />
        </div>
        <h3 className="font-display font-bold text-heading text-base">{skill.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.items.map(item => (
          <span key={item}
            className="text-xs font-medium px-2.5 py-1.5 rounded-lg bg-surface border border-divide text-body hover:border-accent/30 hover:text-heading transition-colors cursor-default">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useScrollAnimation();

  return (
    <section id="skills" className="bg-background py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <span className="section-label">Technical Skills</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-heading mt-3 mb-4 leading-tight">
            The Stack Behind
            <br />
            <span className="text-accent">Every Project</span>
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            From LLM prompt design to database schema — I work across the full depth of modern AI development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
