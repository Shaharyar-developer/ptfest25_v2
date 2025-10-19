"use client";

import * as React from "react";

const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function getInitialValue(defaultValue: boolean) {
  if (typeof window === "undefined" || !("matchMedia" in window)) {
    return defaultValue;
  }

  return window.matchMedia(MOTION_QUERY).matches;
}

export function usePrefersReducedMotion(defaultValue = false) {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(() =>
    getInitialValue(defaultValue)
  );

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia(MOTION_QUERY);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      // Safari < 14 fallback
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReducedMotion;
}
