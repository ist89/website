"use client";

import { ScrollSection } from "@/components/ScrollSection";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, BookOpen, Mail } from "lucide-react";
import { useState, FormEvent } from "react";
import { NoiseBackground } from "@/components/ui/noise-background";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ist89",
    icon: Github,
    description: "View my code repositories",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tom-davidov-2108b4a3",
    icon: Linkedin,
    description: "Connect professionally",
  },
  {
    name: "Medium",
    href: "https://medium.com/@t.dav89",
    icon: BookOpen,
    description: "Read my articles",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@example.com";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    if (formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setStatus("error");
        }
      } catch (error) {
        setStatus("error");
      }
    } else {
      // Fallback to mailto
      const mailtoLink = `mailto:${contactEmail}?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
      window.location.href = mailtoLink;
      setStatus("success");
    }
  };

  return (
    <ScrollSection id="contact" className="pt-0 min-h-0">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 flex items-center gap-3">
          <Mail className="w-8 h-8 md:w-10 md:h-10 text-neutral-300" />
          Get In Touch
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg text-text-secondary mb-12 max-w-2xl">
          Have a question or want to collaborate? Feel free to reach out
          through the form below or connect via social media.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Reveal delay={0.2}>
          <div className="bg-neutral-900/20 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group hover:border-neutral-400/30 transition-colors duration-500 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="text-2xl font-heading font-semibold mb-6 text-neutral-100 flex items-center">
              <span className="w-2 h-8 bg-neutral-400 rounded-full mr-4 shadow-[0_0_20px_rgba(163,163,163,0.5)]" />
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-200/80 mb-2 pl-1"
              >
                Name
              </label>
              <div className="relative group/input">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-neutral-400 to-neutral-300 rounded-xl opacity-0 group-focus-within/input:opacity-50 transition duration-500 blur-sm" />
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="relative w-full px-4 py-4 bg-black/40 border border-white/10 rounded-xl text-neutral-50 focus:outline-none focus:border-neutral-400/50 transition-all duration-300 placeholder:text-neutral-600 backdrop-blur-sm"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-200/80 mb-2 pl-1"
              >
                Email
              </label>
              <div className="relative group/input">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-neutral-400 to-neutral-300 rounded-xl opacity-0 group-focus-within/input:opacity-50 transition duration-500 blur-sm" />
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="relative w-full px-4 py-4 bg-black/40 border border-white/10 rounded-xl text-neutral-50 focus:outline-none focus:border-neutral-400/50 transition-all duration-300 placeholder:text-neutral-600 backdrop-blur-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-200/80 mb-2 pl-1"
              >
                Message
              </label>
              <div className="relative group/input">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-neutral-400 to-neutral-300 rounded-xl opacity-0 group-focus-within/input:opacity-50 transition duration-500 blur-sm" />
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="relative w-full px-4 py-4 bg-black/40 border border-white/10 rounded-xl text-neutral-50 focus:outline-none focus:border-neutral-400/50 resize-none transition-all duration-300 placeholder:text-neutral-600 backdrop-blur-sm"
                  placeholder="Your message here..."
                />
              </div>
            </div>
            <NoiseBackground
              containerClassName="w-full p-[4px] rounded-xl"
              gradientColors={[
                "rgb(255, 100, 150)",
                "rgb(100, 150, 255)",
                "rgb(255, 200, 100)",
              ]}
            >
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-neutral-100 via-neutral-50 to-white text-black border-none shadow-md hover:shadow-xl hover:from-neutral-200 hover:via-neutral-200 hover:to-neutral-200 transition-all duration-300"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Message Sent!"
                  : "Send Message"}
              </Button>
            </NoiseBackground>
            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again or use email directly.
              </p>
            )}
          </form>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="bg-neutral-900/20 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden hover:border-neutral-400/30 transition-colors duration-300 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]">
          <h3 className="text-2xl font-heading font-semibold mb-6 text-neutral-100 flex items-center">
            <span className="w-2 h-8 bg-neutral-300 rounded-full mr-4 shadow-[0_0_20px_rgba(163,163,163,0.5)]" />
            Connect Socially
          </h3>
          <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-black/40 border border-white/5 rounded-2xl hover:border-neutral-400/50 transition-all duration-300 group hover:shadow-[0_0_30px_-10px_rgba(163,163,163,0.2)] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mr-5 group-hover:bg-neutral-400/20 transition-colors border border-white/5 group-hover:border-neutral-400/30 backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-lg font-medium text-neutral-200 group-hover:text-white transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-sm text-neutral-500 group-hover:text-neutral-200/70 transition-colors">
                        {link.description}
                      </p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                      <div className="w-2 h-2 rounded-full bg-neutral-300 shadow-[0_0_10px_rgba(212,212,212,0.8)]" />
                    </div>
                  </a>
                );
              })}
          </div>
          </div>
        </Reveal>
      </div>
    </ScrollSection>
  );
}

