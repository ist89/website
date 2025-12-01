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
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] border-2 border-white/20 z-10" />
      <div className="bg-slate-900/20 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-heading font-semibold text-blue-50 mb-1 group-hover:text-blue-200 transition-colors">
                {title}
              </h3>
              <p className="text-blue-400 font-medium">{company}</p>
            </div>
            <div className="flex items-center text-slate-400 text-sm mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full border border-white/5">
              <Calendar className="w-3.5 h-3.5 mr-2" />
              {period}
            </div>
          </div>
          <p className="text-slate-300 mb-6 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

