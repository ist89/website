"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "bg-slate-900/20 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]",
        hover && "hover:-translate-y-1",
        className
      )}
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

