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
        variant === "accent" && "bg-gradient-to-r from-slate-400/10 to-slate-300/10 text-slate-300 border border-slate-400/20 shadow-[0_0_10px_-3px_rgba(148,163,184,0.3)]",
        className
      )}
    >
      {children}
    </span>
  );
}

