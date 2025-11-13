import { Section } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Download, FileText } from "lucide-react";

export default function ResumePage() {
  return (
    <>
      <Section>
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Resume
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl">
            Download my resume or view it directly in your browser.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              href="/resume.pdf"
              external
              variant="primary"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
            <Button
              href="/resume.pdf"
              external
              variant="secondary"
            >
              <FileText className="w-5 h-5 mr-2" />
              View in Browser
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="bg-surface border border-divider rounded-xl p-8">
            <iframe
              src="/resume.pdf"
              className="w-full h-[800px] rounded-lg"
              title="Resume PDF Viewer"
            />
          </div>
        </Reveal>
      </Section>
    </>
  );
}

