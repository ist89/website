import { Section } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TimelineItem } from "@/components/cards/TimelineItem";
import experienceData from "@/data/experience.json";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Experience
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg text-text-secondary mb-12 max-w-2xl">
          A timeline of my professional journey, highlighting key roles,
          responsibilities, and technologies I've worked with.
        </p>
      </Reveal>
      <div className="max-w-4xl">
        {experienceData.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            company={item.company}
            period={item.period}
            description={item.description}
            technologies={item.technologies}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}

