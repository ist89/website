"use client";

import React from "react";
import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

interface PhotoGalleryProps {
  photos: Array<{
    src: string;
    alt: string;
  }>;
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  // Layout configuration for the 5 photos - adjusted to be more centered and less spread out
  const layoutConfig = [
    {
      className: "absolute top-[10%] left-[15%] md:left-[25%] rotate-[-6deg] z-10",
    },
    {
      className: "absolute top-[30%] left-[20%] md:left-[30%] rotate-[-3deg] z-20",
    },
    {
      className: "absolute top-[5%] left-[35%] md:left-[45%] rotate-[5deg] z-30",
    },
    {
      className: "absolute top-[25%] left-[40%] md:left-[50%] rotate-[8deg] z-40",
    },
    {
      className: "absolute top-[15%] right-[10%] md:right-[20%] rotate-[-2deg] z-50",
    },
  ];

  return (
    <DraggableCardContainer className="relative flex h-[600px] w-full items-center justify-center">
      {photos.map((photo, index) => {
        // cycle through configs if more photos than configs
        const config = layoutConfig[index % layoutConfig.length];
        
        return (
          <DraggableCardBody key={index} className={config.className}>
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="pointer-events-none object-cover rounded-sm shadow-inner border border-neutral-200/20"
                sizes="(max-width: 768px) 256px, 320px"
                draggable={false}
              />
            </div>
          </DraggableCardBody>
        );
      })}
    </DraggableCardContainer>
  );
}
