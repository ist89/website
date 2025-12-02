"use client";

import { ScrollSection } from "@/components/ScrollSection";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

const certifications = [
  {
    name: "Project Management Professional (PMP)®",
    issuer: "Project Management Institute",
    image: "/badges/pmp-badge.png",
    link: "/certifications/pmp.pdf",
    expires: "20 January 2028",
    certNumber: "4031022",
    color: "from-purple-500/20 to-blue-500/20",
    borderColor: "group-hover:border-purple-500/50",
  },
  {
    name: "Certified ScrumMaster (CSM)®",
    issuer: "Scrum Alliance",
    image: "/badges/csm-badge.png",
    link: "/certifications/csm.pdf",
    expires: "5 January 2027",
    certNumber: "001720968",
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "group-hover:border-yellow-500/50",
  },
];

export function SkillsSection() {
  return (
    <ScrollSection id="skills" className="py-4 min-h-0">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 flex items-center gap-3">
          <Award className="w-8 h-8 md:w-10 md:h-10 text-neutral-300" />
          Skills & Certifications
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-wrap gap-3 mb-16">
          {skills.map((skill) => (
            <Badge key={skill} variant="accent">
              {skill}
            </Badge>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <Reveal key={cert.name} delay={0.2 + index * 0.1}>
            <Link 
              href={cert.link}
              target="_blank"
              className={`group relative flex items-center gap-6 p-6 h-full rounded-3xl bg-neutral-900/20 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-800/40 ${cert.borderColor}`}
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative z-10 shrink-0 bg-white/5 p-2 rounded-2xl border border-white/5">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={300}
                  height={300}
                  className="w-20 h-20 object-contain"
                />
              </div>

              <div className="relative z-10 flex-1">
                <h3 className="text-xl font-bold text-neutral-100 mb-1 group-hover:text-white transition-colors">
                  {cert.name}
                </h3>
                <p className="text-neutral-400 text-sm mb-2 group-hover:text-neutral-300 transition-colors">
                  {cert.issuer}
                </p>
                <div className="text-xs text-neutral-500 mb-3 space-y-1 font-mono">
                  <p>Expires: {cert.expires}</p>
                  <p>Cert #: {cert.certNumber}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 group-hover:text-neutral-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    Verified
                  </span>
                  <span className="w-1 h-1 rounded-full bg-neutral-600" />
                  <span className="flex items-center gap-1 group-hover:text-neutral-200 transition-colors">
                    View Credential <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </ScrollSection>
  );
}

