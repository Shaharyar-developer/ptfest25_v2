import { useState, useEffect } from "react";

export function useIsSlowBrowser() {
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    // Check user preference first
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsSlow(true);
      return;
    }

    // Device memory & CPU heuristics
    const lowMemory =
      ("deviceMemory" in navigator && (navigator as any).deviceMemory < 4) ||
      false;
    const fewCores =
      navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
    if (lowMemory || fewCores) {
      setIsSlow(true);
      return;
    }

    // FPS benchmark
    let frameCount = 0;
    const startTime = performance.now();

    function checkFPS() {
      frameCount++;
      if (frameCount < 60) {
        requestAnimationFrame(checkFPS);
      } else {
        const fps = 1000 / ((performance.now() - startTime) / frameCount);
        if (fps < 30) {
          setIsSlow(true);
        }
      }
    }

    requestAnimationFrame(checkFPS);
  }, []);

  return isSlow;
}
