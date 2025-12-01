import Link from "next/link";
import { Github, Linkedin, BookOpen } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ist89",
    icon: Github,
    ariaLabel: "Visit GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tom-davidov-2108b4a3",
    icon: Linkedin,
    ariaLabel: "Visit LinkedIn profile",
  },
  {
    name: "Medium",
    href: "https://medium.com/@t.dav89",
    icon: BookOpen,
    ariaLabel: "Visit Medium profile",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Tom Davidov. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="text-text-secondary hover:text-slate-300 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

