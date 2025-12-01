import { ScrollSection } from "@/components/ScrollSection";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <ScrollSection id="not-found" className="min-h-screen flex items-center">
      <div className="text-center w-full">
        <Reveal>
          <h1 className="text-8xl md:text-9xl font-heading font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-accent via-purple-500 to-accent-dark animate-pulse">
            404
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-blue-100">
            Lost in Space
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-slate-400 mb-8 max-w-md mx-auto">
            The page you're looking for has drifted into a black hole.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Button href="/" variant="primary">
            <Home className="w-5 h-5 mr-2" />
            Return to Base
          </Button>
        </Reveal>
      </div>
    </ScrollSection>
  );
}

