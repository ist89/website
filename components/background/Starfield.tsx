"use client";

import { useEffect, useRef } from "react";

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 3000);
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.2 + 0.05,
          opacity: Math.random() * 0.5 + 0.5, // 0.5 to 1.0 (brighter)
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#fff";

      stars.forEach((star) => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Move star
        star.y -= star.speed;

        // Reset if out of bounds
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-space-void overflow-hidden">
      {/* Nebula glow effects */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-slate-800/30 blur-[120px] opacity-40 animate-pulse" 
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-slate-700/20 blur-[120px] opacity-40 animate-pulse" 
        style={{ animationDuration: '10s' }}
      />
      
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />
    </div>
  );
}

