"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Calendar } from "lucide-react";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  index: number;
}

export function TimelineItem({
  title,
  company,
  period,
  description,
  technologies,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 pb-12 border-l border-divider last:border-l-0 last:pb-0"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(99,102,241,0.8)] border-2 border-white/20 z-10" />
      <div className="bg-surface/30 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-surface/50 transition-colors duration-300">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
          <div>
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-1">
              {title}
            </h3>
            <p className="text-accent font-medium">{company}</p>
          </div>
          <div className="flex items-center text-text-secondary text-sm mt-2 md:mt-0">
            <Calendar className="w-4 h-4 mr-2" />
            {period}
          </div>
        </div>
        <p className="text-text-secondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

