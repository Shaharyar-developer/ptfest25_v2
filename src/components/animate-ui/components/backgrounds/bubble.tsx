"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type BubbleColors = {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  sixth: string;
};

type BubbleBackgroundProps = React.ComponentProps<"div"> & {
  colors?: BubbleColors;
};

function BubbleBackground({
  className,
  children,
  colors = {
    first: "36,22,61", // #24163D
    second: "21,22,50", // #151632
    third: "45,47,99", // #2d2f63
    fourth: "58,42,112", // #3a2a70
    fifth: "75,58,133", // #4b3a85
    sixth: "90,74,150", // #5a4a96
  },
  ...props
}: BubbleBackgroundProps) {
  const containerStyles = cn(
    "relative size-full overflow-hidden bg-gradient-to-br from-[#151632] via-[#24163D] to-[#2d2f63]",
    className
  );

  return (
    <div data-slot="bubble-background" className={containerStyles} {...props}>
      <style>
        {`
          :root {
            --first-color: ${colors.first};
            --second-color: ${colors.second};
            --third-color: ${colors.third};
            --fourth-color: ${colors.fourth};
            --fifth-color: ${colors.fifth};
            --sixth-color: ${colors.sixth};
          }
        `}
      </style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full size-[70%] top-[10%] left-[10%] opacity-30 blur-3xl mix-blend-lighten bg-[radial-gradient(circle_at_center,rgba(var(--first-color),0.4)_0%,rgba(var(--first-color),0)_50%)]" />
        <div className="absolute rounded-full size-[60%] top-[20%] right-[5%] opacity-25 blur-3xl mix-blend-lighten bg-[radial-gradient(circle_at_center,rgba(var(--second-color),0.4)_0%,rgba(var(--second-color),0)_50%)]" />
        <div className="absolute rounded-full size-[60%] top-[calc(50%+200px)] left-[calc(50%-500px)] opacity-20 blur-3xl mix-blend-lighten bg-[radial-gradient(circle_at_center,rgba(var(--third-color),0.4)_0%,rgba(var(--third-color),0)_50%)]" />
        <div className="absolute rounded-full size-[60%] top-[10%] left-[10%] opacity-30 blur-3xl mix-blend-lighten bg-[radial-gradient(circle_at_center,rgba(var(--fourth-color),0.4)_0%,rgba(var(--fourth-color),0)_50%)]" />
        <div className="absolute rounded-full size-[120%] top-[calc(50%-80%)] left-[calc(50%-80%)] opacity-20 blur-3xl mix-blend-lighten bg-[radial-gradient(circle_at_center,rgba(var(--fifth-color),0.35)_0%,rgba(var(--fifth-color),0)_50%)]" />
      </div>

      {children}
    </div>
  );
}

export { BubbleBackground, type BubbleBackgroundProps };
