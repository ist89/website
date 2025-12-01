"use client";

import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

/**
 * HeroPixelatedAvatar Component
 * 
 * This component displays your profile photo with a pixelated canvas effect.
 * 
 * TO CUSTOMIZE:
 * 
 * 1. CHANGE THE IMAGE:
 *    - Replace the file at: public/profile-photo.png
 *    - Or update the `src` prop below to point to your image path
 *    - Supports PNG with transparent backgrounds
 * 
 * 2. ADJUST SIZE:
 *    - Change `width` and `height` props to resize the avatar
 *    - Example: width={300} height={400} for smaller avatar
 * 
 * 3. PIXELATION EFFECT:
 *    - `cellSize`: Controls how large each pixel is (smaller = more detailed)
 *    - `dotScale`: Size of each dot relative to cell (0.5-1.0)
 * 
 * 4. DISTORTION EFFECTS (when hovering):
 *    - `distortionStrength`: How strong the effect is (0-10)
 *    - `distortionRadius`: How far the effect reaches from mouse (pixels)
 *    - `distortionMode`: "swirl", "repel", or "attract"
 * 
 * 5. JITTER EFFECT (constant animation):
 *    - `jitterStrength`: How much pixels move around (0-10)
 *    - `jitterSpeed`: How fast the jitter animation is (0-10)
 * 
 * 6. VISUAL STYLING:
 *    - `dropoutStrength`: How many pixels are randomly hidden (0-1)
 *    - `tintColor`: Color overlay (hex format like "#FFFFFF")
 *    - `tintStrength`: How strong the tint is (0-1)
 *    - `backgroundColor`: Background color behind pixels (hex format)
 */
export function HeroPixelatedAvatar() {
  return (
    <div className="mx-auto mt-8 md:mt-0 -mt-[15px]">
      <PixelatedCanvas
        // ===== IMAGE PATH =====
        // Replace /profile-photo.png with your image path
        // Place your PNG image in the public/ folder
        // Supports transparent backgrounds
        src="/profile-photo.png"
        
        // ===== SIZE =====
        // Adjust these to change avatar dimensions
        // Decreased by 20%: 600 -> 480, 750 -> 600
        width={480}
        height={600}
        
        // ===== PIXELATION =====
        // Smaller cellSize = more detail (try 2-5)
        cellSize={3}
        // Size of each pixel dot (0.5 = half size, 1.0 = full cell size)
        dotScale={0.9}
        
        // ===== SHAPE =====
        // "square" or "circle" for pixel shape
        shape="square"
        
        // ===== BACKGROUND =====
        // Set to empty string or undefined to remove background
        // For transparent PNGs, this will show transparent background
        backgroundColor=""
        
        // ===== DROPOUT =====
        // Randomly hides pixels (0 = none hidden, 1 = all hidden)
        dropoutStrength={0.4}
        
        // ===== INTERACTIVITY =====
        // Enable mouse hover distortion effects
        interactive
        
        // ===== DISTORTION (hover effects) =====
        // How strong the effect is when hovering
        distortionStrength={3}
        // How far from mouse the effect reaches (in pixels)
        distortionRadius={80}
        // Type of distortion: "swirl" (rotates), "repel" (pushes away), or "attract" (pulls toward)
        distortionMode="swirl"
        // How fast the effect follows the mouse (0-1)
        followSpeed={0.2}
        
        // ===== JITTER (constant animation) =====
        // How much pixels move around constantly
        jitterStrength={4}
        // How fast the jitter animation is
        jitterSpeed={4}
        
        // ===== COLOR EFFECTS =====
        // Average colors for smoother look
        sampleAverage
        // Tint color overlay (white tint in this case)
        tintColor="#FFFFFF"
        // How strong the tint is (0 = no tint, 1 = full tint)
        tintStrength={0.2}
        
        // ===== IMAGE FITTING =====
        // "cover" = fills canvas, cropping if needed (may cut off parts)
        // "contain" = fits entire image within canvas (shows full image, no cropping)
        // "fill" = stretches to fill canvas
        // Changed to "contain" to prevent head from being cut off
        objectFit="contain"
        
        // ===== STYLING =====
        // Removed border and shadow for clean look
        // bg-transparent ensures no background color shows through
        className="bg-transparent"
      />
    </div>
  );
}

