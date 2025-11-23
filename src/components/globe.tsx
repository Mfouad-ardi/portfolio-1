"use client";

// *** THE FIX IS HERE ***
import createGlobe from "cobe";
import type { COBEOptions } from "cobe"; // Use 'import type' for types

import { useMotionValue, useSpring, MotionValue } from "motion/react";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

// We can now extend the official COBEOptions for better type safety
interface GlobeMarker {
  location: [number, number];
  size: number;
}

// Define the props for the Globe component
interface GlobeProps {
  className?: string;
  // Allow passing a partial config to override specific defaults
  config?: Partial<COBEOptions & { markers: GlobeMarker[] }>;
}

const MOVEMENT_DAMPING = 1400;

// Define the full, default configuration object
const GLOBE_CONFIG: COBEOptions & { markers: GlobeMarker[] } = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({ className, config }: GlobeProps) {
  let phi = 0;
  let width = 0;
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef<number>(0);

  const r: MotionValue<number> = useMotionValue(0);
  const rs: MotionValue<number> = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null): void => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number): void => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = (): void => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const finalConfig = { ...GLOBE_CONFIG, ...config };

    let globe: { destroy: () => void } | null = null;
    if (canvasRef.current) {
        globe = createGlobe(canvasRef.current, {
            ...finalConfig,
            width: width * 2,
            height: width * 2,
            onRender: (state) => {
            if (!pointerInteracting.current) phi += 0.005;
            state.phi = phi + rs.get();
            state.width = width * 2;
            state.height = width * 2;
            },
        });
    }

    if (canvasRef.current) {
        setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    }

    return () => {
      if (globe) {
        globe.destroy();
      }
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={twMerge(
        "mx-auto aspect-square w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={twMerge(
          "size-120 opacity-0 transition-opacity duration-500 [contain-layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e: React.PointerEvent<HTMLCanvasElement>) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e: React.MouseEvent<HTMLCanvasElement>) => updateMovement(e.clientX)}
        onTouchMove={(e: React.TouchEvent<HTMLCanvasElement>) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}