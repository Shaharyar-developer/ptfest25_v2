"use client";

import * as React from "react";
import { type HTMLMotionProps, motion, type Transition } from "motion/react";

import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type StarLayerProps = HTMLMotionProps<"div"> & {
  count?: number;
  size?: number;
  transition?: Transition;
  starColor?: string;
  disableAnimation?: boolean;
};

function hashStringToSeed(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = Math.imul(31, hash) + input.charCodeAt(i);
  }
  return hash >>> 0;
}

function createRandomGenerator(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateStars(count: number, starColor: string, seed: number) {
  const random = createRandomGenerator(seed);
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(random() * 4000) - 2000;
    const y = Math.floor(random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px ${starColor}`);
  }
  return shadows.join(", ");
}

function StarLayer({
  count = 1000,
  size = 1,
  transition = { repeat: Infinity, duration: 50, ease: "linear" },
  starColor = "#145DFC",
  className,
  disableAnimation = false,
  style,
  ...props
}: StarLayerProps) {
  const seed = React.useMemo(
    () => hashStringToSeed(`${count}-${starColor}-${size}`),
    [count, starColor, size]
  );

  const boxShadow = React.useMemo(
    () => generateStars(count, starColor, seed),
    [count, starColor, seed]
  );

  const motionProps = disableAnimation
    ? { animate: undefined, transition: undefined }
    : {
        animate: { y: [0, 2000] },
        transition,
      };

  return (
    <motion.div
      data-slot="star-layer"
      className={cn("absolute top-0 left-0 w-full h-[2000px]", className)}
      style={{
        willChange: disableAnimation ? undefined : "transform",
        transform: "translateZ(0)", // Force GPU acceleration
        ...style,
      }}
      {...motionProps}
      {...props}
    >
      <div
        className="absolute bg-transparent rounded-full rotate-[25deg]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
          transform: "translateZ(0)", // Force GPU acceleration
        }}
      />
      <div
        className="absolute bg-transparent rounded-full rotate-[25deg] top-[2000px]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
          transform: "translateZ(0)", // Force GPU acceleration
        }}
      />
    </motion.div>
  );
}

type StarsBackgroundProps = React.ComponentProps<"div"> & {
  speed?: number;
  starColor?: string;
  pointerEvents?: boolean;
};

function StarsBackground({
  children,
  className,
  speed = 50,
  starColor = "#cba6f7",
  pointerEvents = false,
  ...props
}: StarsBackgroundProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const layers = React.useMemo(
    () => [
      {
        key: "layer-1",
        count: prefersReducedMotion ? 80 : 140,
        size: 1,
        duration: speed,
        color: "#7FB5FF",
      },
      {
        key: "layer-2",
        count: prefersReducedMotion ? 40 : 90,
        size: 1.75,
        duration: speed * 1.8,
        color: "#7FB5FF",
      },
      {
        key: "layer-3",
        count: prefersReducedMotion ? 20 : 50,
        size: 2.5,
        duration: speed * 2.6,
        color: starColor,
      },
    ],
    [prefersReducedMotion, speed, starColor]
  );

  return (
    <div
      data-slot="stars-background"
      className={cn("relative size-full overflow-hidden", className)}
      {...props}
    >
      <div className={cn({ "pointer-events-none": !pointerEvents })}>
        {layers.map((layer) => (
          <StarLayer
            key={layer.key}
            count={layer.count}
            size={layer.size}
            disableAnimation={prefersReducedMotion}
            transition={{
              repeat: Infinity,
              duration: layer.duration,
              ease: "linear",
            }}
            starColor={layer.color}
            style={{ opacity: prefersReducedMotion ? 0.45 : 0.7 }}
          />
        ))}
      </div>
      {children}
    </div>
  );
}

export {
  StarLayer,
  StarsBackground,
  type StarLayerProps,
  type StarsBackgroundProps,
};
