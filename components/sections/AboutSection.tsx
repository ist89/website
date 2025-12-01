"use client";

import { ScrollSection } from "@/components/ScrollSection";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "AWS",
  "PostgreSQL",
  "Docker",
  "GraphQL",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
];

export function AboutSection() {
  return (
    <ScrollSection id="about">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          About Me
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="max-w-3xl space-y-6 text-slate-300 mb-16 bg-slate-900/20 p-8 rounded-3xl border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <p className="text-lg leading-relaxed">
              I'm a passionate software engineer with a focus on building
              scalable, user-friendly web applications. With years of
              experience in modern web technologies, I specialize in creating
              solutions that are both performant and maintainable.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              My approach combines technical excellence with a deep understanding
              of user needs. I believe in writing clean, well-documented code
              and staying current with industry best practices and emerging
              technologies.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              When I'm not coding, you'll find me exploring new frameworks,
              contributing to open source projects, or sharing knowledge through
              technical writing.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-blue-100">
          Skills & Technologies
        </h3>
      </Reveal>
      <Reveal delay={0.3}>
        <div className="flex flex-wrap gap-3 mb-16">
          {skills.map((skill) => (
            <Badge key={skill} variant="accent">
              {skill}
            </Badge>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_50px_-10px_rgba(99,102,241,0.5)] group">
            <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Image
              src="/avatar.jpg"
              alt="Tom Davidov"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>
    </ScrollSection>
  );
}

