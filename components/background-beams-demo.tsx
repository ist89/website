"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { cn } from "@/lib/utils";
import React from "react";

export function BackgroundBeamsDemo() {
  return (
    <div className="relative flex h-[40rem] w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-950 border border-neutral-800">
      <BackgroundBeams />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Background Beams
        </h2>
        <p className="text-neutral-400 text-lg max-w-lg text-center">
          This is a demo of the Background Beams component from Aceternity UI.
          The animated beams create a dynamic background effect.
        </p>
      </div>
    </div>
  );
}

