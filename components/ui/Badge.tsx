import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variant === "default" &&
          "bg-surface-light text-text-secondary border border-divider",
        variant === "accent" && "bg-accent/20 text-accent border border-accent/30",
        className
      )}
    >
      {children}
    </span>
  );
}

