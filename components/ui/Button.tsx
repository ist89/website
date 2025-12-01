"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-2.5 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background relative overflow-hidden min-w-[160px]";
  
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white shadow-[0_0_20px_-5px_rgba(29,78,216,0.5)] hover:shadow-[0_0_30px_-5px_rgba(29,78,216,0.7)] hover:from-blue-800 hover:via-blue-700 hover:to-cyan-700 border border-blue-500/30",
    secondary:
      "bg-surface/50 text-text-primary border border-white/10 hover:bg-surface/80 hover:border-white/20 backdrop-blur-sm",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-white/5",
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center justify-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, variants[variant], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {content}
    </button>
  );
}

