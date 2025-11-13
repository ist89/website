import { Container } from "./Container";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  id?: string;
}

export function Section({
  children,
  className,
  containerSize = "lg",
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 scroll-mt-20", className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

