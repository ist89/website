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
        <div className="max-w-3xl space-y-6 text-text-secondary mb-16">
          <p className="text-lg leading-relaxed">
            I'm a passionate software engineer with a focus on building
            scalable, user-friendly web applications. With years of
            experience in modern web technologies, I specialize in creating
            solutions that are both performant and maintainable.
          </p>
          <p className="text-lg leading-relaxed">
            My approach combines technical excellence with a deep understanding
            of user needs. I believe in writing clean, well-documented code
            and staying current with industry best practices and emerging
            technologies.
          </p>
          <p className="text-lg leading-relaxed">
            When I'm not coding, you'll find me exploring new frameworks,
            contributing to open source projects, or sharing knowledge through
            technical writing.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
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
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg">
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

