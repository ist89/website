"use client";

import { Section } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";
import { useState, FormEvent } from "react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
    description: "View my code repositories",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    description: "Connect professionally",
  },
  {
    name: "Medium",
    href: "https://medium.com",
    icon: BookOpen,
    description: "Read my articles",
  },
  {
    name: "Email",
    href: "mailto:contact@tdavidov.com",
    icon: Mail,
    description: "Send me a message",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";

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
      const mailtoLink = `mailto:contact@tdavidov.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoLink;
      setStatus("success");
    }
  };

  return (
    <>
      <Section>
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get In Touch
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-text-secondary mb-12 max-w-2xl">
            Have a question or want to collaborate? Feel free to reach out
            through the form below or connect via social media.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal delay={0.2}>
            <Card>
              <h2 className="text-2xl font-heading font-semibold mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-surface-light border border-divider rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-surface-light border border-divider rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-surface-light border border-divider rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "success"
                    ? "Message Sent!"
                    : "Send Message"}
                </Button>
                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or use email directly.
                  </p>
                )}
              </form>
            </Card>
          </Reveal>

          <Reveal delay={0.3}>
            <Card>
              <h2 className="text-2xl font-heading font-semibold mb-6">
                Connect Socially
              </h2>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.name === "Email" ? undefined : "_blank"}
                      rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                      className="flex items-center p-4 bg-surface-light border border-divider rounded-lg hover:border-accent/50 hover:bg-surface transition-all group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mr-4 group-hover:bg-accent/30 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-text-primary">
                          {link.name}
                        </h3>
                        <p className="text-sm text-text-secondary">
                          {link.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

