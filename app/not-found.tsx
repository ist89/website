import { Section } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <Section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="text-center w-full">
        <Reveal>
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-4 text-accent">
            404
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">
            Page Not Found
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Button href="/" variant="primary">
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}

