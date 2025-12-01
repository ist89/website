"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}

export function ScrollSection({
  children,
  id,
  className,
  containerSize = "lg",
}: ScrollSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.95, 1, 1, 0.95]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const sizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ opacity, scale }}
      className={cn(
        "min-h-screen flex items-center justify-center py-8 md:py-12 scroll-mt-20",
        className
      )}
    >
      <div className={cn("mx-auto px-4 sm:px-6 lg:px-8 w-full", sizes[containerSize])}>
        {children}
      </div>
    </motion.section>
  );
}

