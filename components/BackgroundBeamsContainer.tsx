"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

export default function BackgroundBeamsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <BackgroundBeams className="pointer-events-none z-0" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

