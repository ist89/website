"use client";

import { ScrollSection } from "@/components/ScrollSection";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";

const skills = [
  "Project Management (PMP®)",
  "Agile/Scrum (CSM®)",
  "AI/ML",
  "Web3",
  "DeFi",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Cybersecurity",
  "CI/CD",
  "DevOps",
  "GitLab",
  "N8N",
  "SaaS",
  "ITIL v4",
  "Lean Six Sigma",
];

export function AboutSection() {
  return (
    <ScrollSection id="about">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Bio
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="max-w-3xl space-y-6 text-slate-300 mb-16 bg-slate-900/20 p-8 rounded-3xl border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-400/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <p className="text-lg leading-relaxed">
              US Army veteran with nearly 9 years of service. Technical Program Manager with 7+ years of experience 
              leading complex technical projects across Web3, DeFi, trading automation, and large-scale operational programs. 
              Certified Project Management Professional (PMP®) and Certified Scrum Master (CSM®).
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Passionate about AI, Web3, and DeFi technologies. Currently in final MBA term at Southern New Hampshire 
              University (4.0 GPA), with plans to pursue an MS in IT, followed by a PhD in AI/ML. Working towards ASQ 
              Lean Six Sigma Green Belt (LSS-GB) and ITIL v4 certifications.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Beyond program management, an amateur frontend developer with experience in cybersecurity. Has created 
              several passive income streams through SaaS N8N AI agents. Managed $35M+ logistics operations for U.S. 
              Department of State aid to Ukraine.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-slate-100">
          Skills & Technologies
        </h3>
      </Reveal>
      <Reveal delay={0.3}>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge key={skill} variant="accent">
              {skill}
            </Badge>
          ))}
        </div>
      </Reveal>
    </ScrollSection>
  );
}

