import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function WhyMe() {
  const headerRef = useScrollAnimation();
  const eduRef = useScrollAnimation();
  const certRef = useScrollAnimation();

  return (
    <section id="education" className="bg-surface py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={headerRef} className="fade-up mb-16">
          <span className="section-label">Education & Certifications</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-heading mt-3 mb-4 leading-tight">
            The Foundation
            <br />
            <span className="text-accent">Behind the Work</span>
          </h2>
          <p className="text-body text-lg leading-relaxed max-w-xl">
            Academic roots in both business and technology — plus an AWS ML credential that validates the engineering side.
          </p>
        </div>

        {/* Degrees */}
        <div ref={eduRef} className="fade-up space-y-4 mb-6">
          <div className="bg-background border border-divide rounded-2xl p-6 flex gap-5 items-start">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(217,119,6,0.1)' }}>
              <GraduationCap size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="font-display font-bold text-heading text-lg leading-snug mb-0.5">
                Master's in Computer Information Technology
              </h3>
              <p className="text-body text-sm">Purdue University · Indiana, USA</p>
              <p className="text-accent text-xs font-semibold mt-1.5">Graduated May 2024</p>
            </div>
          </div>

          <div className="bg-background border border-divide rounded-2xl p-6 flex gap-5 items-start">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(217,119,6,0.1)' }}>
              <GraduationCap size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="font-display font-bold text-heading text-lg leading-snug mb-0.5">
                Bachelor of Commerce
              </h3>
              <p className="text-body text-sm">Acharya Nagarjuna University · India</p>
              <p className="text-accent text-xs font-semibold mt-1.5">Graduated March 2021</p>
            </div>
          </div>
        </div>

        {/* Certification */}
        <div ref={certRef} className="fade-up" style={{ transitionDelay: '120ms' }}>
          <div className="rounded-2xl p-6 flex gap-5 items-start border"
            style={{ background: 'rgba(217,119,6,0.05)', borderColor: 'rgba(217,119,6,0.22)' }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-accent">
              <Award size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-heading text-lg leading-snug mb-0.5">
                AWS Certified Machine Learning – Specialty
              </h3>
              <p className="text-body text-sm">Amazon Web Services · MLS-C01</p>
              <p className="text-accent text-xs font-semibold mt-1.5">Credential Verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
