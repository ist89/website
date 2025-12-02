"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NoiseBackground } from "@/components/ui/noise-background";

interface PhotoGalleryProps {
  photos: Array<{
    src: string;
    alt: string;
  }>;
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedIndex(index);
  };

  const handleClose = () => {
    setExpandedIndex(null);
  };

  return (
    <>
      <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] mb-16">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={cn(
              "absolute cursor-pointer group",
              "transform transition-all duration-300 hover:z-20",
            )}
            style={{
              left: `calc(50% + ${(index - (photos.length - 1) / 2) * 120}px)`,
              transform: `translateX(-50%) rotate(${(index - (photos.length - 1) / 2) * 12}deg) translateY(${Math.abs(index - 1) * 10}px)`,
              zIndex: index,
            }}
            onClick={() => handleCardClick(index)}
            whileHover={{ 
              scale: 1.1,
              rotate: 0,
              y: -30,
              zIndex: 30,
            }}
          >
            <NoiseBackground
              containerClassName="p-[2px] rounded-2xl"
              gradientColors={[
                "rgb(255, 100, 150)",
                "rgb(100, 150, 255)",
                "rgb(255, 200, 100)",
              ]}
            >
              <div className="relative w-[240px] h-[320px] sm:w-[280px] sm:h-[380px] md:w-[320px] md:h-[420px] rounded-xl overflow-hidden bg-neutral-900">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </NoiseBackground>
          </motion.div>
        ))}
      </div>

      {/* Expanded Image Modal */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-900/80 border border-white/10 hover:bg-neutral-800 transition-colors"
                aria-label="Close image"
              >
                <X className="w-6 h-6 text-neutral-100" />
              </button>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={photos[expandedIndex].src}
                  alt={photos[expandedIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

