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
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm",
        variant === "default" &&
          "bg-white/5 text-text-secondary border border-white/10",
        variant === "accent" && "bg-accent/10 text-accent-glow border border-accent/20 shadow-[0_0_10px_-3px_rgba(99,102,241,0.3)]",
        className
      )}
    >
      {children}
    </span>
  );
}

