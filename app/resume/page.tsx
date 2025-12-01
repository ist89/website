import { ScrollSection } from "@/components/ScrollSection";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Download, FileText } from "lucide-react";

export default function ResumePage() {
  return (
    <>
      <ScrollSection id="resume" className="pt-32">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-white">
            Resume
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl">
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
          <div className="bg-slate-900/20 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-400/5 to-transparent pointer-events-none" />
            <iframe
              src="/resume.pdf"
              className="w-full h-[800px] rounded-xl bg-white relative z-10"
              title="Resume PDF Viewer"
            />
          </div>
        </Reveal>
      </ScrollSection>
    </>
  );
}

