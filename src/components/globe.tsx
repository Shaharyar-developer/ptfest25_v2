// ...existing code...
// Place updatePointerInteraction after refs and state
"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

// Extended marker type with name and committee info
type MarkerWithName = {
  location: [number, number];
  size: number;
  name: string;
  committee?: string;
};

type COBEOptionsWithNames = Omit<COBEOptions, "markers"> & {
  markers?: MarkerWithName[];
};

const GLOBE_CONFIG: COBEOptionsWithNames = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 32000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0.337, 0.612, 0.984], // Default blue
  glowColor: [1, 1, 1],
  markers: [
    {
      location: [33.9391, 67.71],
      size: 0.1,
      name: "Afghanistan",
      committee: "DISEC",
    },
    {
      location: [41.1533, 20.1683],
      size: 0.1,
      name: "Albania",
      committee: "ECOSOC",
    },
    {
      location: [28.0339, 1.6596],
      size: 0.1,
      name: "Algeria",
      committee: "UNHRC",
    },
    {
      location: [42.5078, 1.5218],
      size: 0.1,
      name: "Andorra",
      committee: "DISEC",
    },
    {
      location: [-11.2027, 17.8739],
      size: 0.1,
      name: "Angola",
      committee: "ECOSOC",
    },
    {
      location: [17.0608, -61.7964],
      size: 0.1,
      name: "Antigua and Barbuda",
      committee: "UNHRC",
    },
    {
      location: [-38.4161, -63.6167],
      size: 0.1,
      name: "Argentina",
      committee: "DISEC",
    },
    {
      location: [40.0691, 45.0382],
      size: 0.1,
      name: "Armenia",
      committee: "ECOSOC",
    },
    {
      location: [-25.2744, 133.7751],
      size: 0.1,
      name: "Australia",
      committee: "UNHRC",
    },
    {
      location: [47.5162, 14.5501],
      size: 0.1,
      name: "Austria",
      committee: "DISEC",
    },
    {
      location: [40.1431, 47.5769],
      size: 0.1,
      name: "Azerbaijan",
      committee: "ECOSOC",
    },
    {
      location: [55.1694, 23.7136],
      size: 0.1,
      name: "United Arab Emirates",
      committee: "UNSC",
    },
    {
      location: [51.1657, 10.4515],
      size: 0.1,
      name: "Germany",
      committee: "UNSC",
    },
    {
      location: [46.2276, 2.2137],
      size: 0.1,
      name: "France",
      committee: "UNSC",
    },
    {
      location: [55.3781, -3.436],
      size: 0.1,
      name: "United Kingdom",
      committee: "UNSC",
    },
    {
      location: [37.0902, -95.7129],
      size: 0.1,
      name: "United States",
      committee: "UNSC",
    },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
  selectedCommittee,
  showAllMarkers = false,
}: {
  className?: string;
  config?: COBEOptionsWithNames;
  selectedCommittee?: string;
  showAllMarkers?: boolean;
}) {
  let phi = 0;
  let theta = 0.3;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<any>(null);
  // Track pointer interaction start position
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 800 });
  // Add pointer interaction handler after refs and state
  const updatePointerInteraction = useCallback(
    (value: { x: number; y: number } | null) => {
      pointerStart.current = value;
      if (canvasRef.current) {
        canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
      }
    },
    []
  );

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
    restSpeed: 0.01,
  });

  // Filter markers based on selected committee
  const visibleMarkers = useMemo(() => {
    if (showAllMarkers) {
      return Array.isArray(config.markers) ? config.markers : [];
    }
    return Array.isArray(config.markers)
      ? config.markers.filter(
          (marker) =>
            !selectedCommittee || marker.committee === selectedCommittee
        )
      : [];
  }, [config.markers, selectedCommittee, showAllMarkers]);

  const updateMovement = useCallback(
    (clientX: number, clientY: number) => {
      if (pointerStart.current !== null) {
        const deltaX = clientX - pointerStart.current.x;
        const deltaY = clientY - pointerStart.current.y;
        r.set(r.get() + deltaX / MOVEMENT_DAMPING);
        theta = Math.max(-1, Math.min(1, theta + deltaY / MOVEMENT_DAMPING));
        pointerStart.current = { x: clientX, y: clientY };
      }
    },
    [r]
  );

  // Handle resize separately
  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        const width = canvasRef.current.offsetWidth;
        setCanvasSize({ width, height: width });
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Handle globe creation and updates
  useEffect(() => {
    if (!canvasRef.current) return;

    // Only create the globe once
    if (!globeRef.current) {
      const globeConfig = {
        ...config,
        width: canvasSize.width * 2,
        height: canvasSize.height * 2,
        markers: visibleMarkers.map((marker: any) => ({
          location: marker.location,
          size: marker.size,
        })),
        onRender: (state: any) => {
          if (!pointerStart.current) phi += 0.005;
          state.phi = phi + rs.get();
          state.theta = theta;
          state.width = canvasSize.width * 2;
          state.height = canvasSize.height * 2;
        },
      };

      globeRef.current = createGlobe(canvasRef.current!, globeConfig);

      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
        }
      }, 0);
    } else {
      // Only update markers and config, do not destroy/recreate
      globeRef.current.options.markers = visibleMarkers.map((marker: any) => ({
        location: marker.location,
        size: marker.size,
      }));
      globeRef.current.options.width = canvasSize.width * 2;
      globeRef.current.options.height = canvasSize.height * 2;
      globeRef.current.options.onRender = (state: any) => {
        if (!pointerStart.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.theta = theta;
        state.width = canvasSize.width * 2;
        state.height = canvasSize.height * 2;
      };
    }

    return () => {
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }
    };
  }, [rs, config, canvasSize, visibleMarkers]);

  return (
    <div className={cn("relative mx-auto", className)}>
      {/* Globe Canvas */}
      <div className="relative aspect-square w-full max-w-[600px] mx-auto">
        <canvas
          className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
          ref={canvasRef}
          onPointerDown={(e) => {
            updatePointerInteraction({ x: e.clientX, y: e.clientY });
          }}
          onPointerUp={() => updatePointerInteraction(null)}
          onPointerOut={() => updatePointerInteraction(null)}
          onMouseMove={(e) => {
            if (pointerStart.current !== null) {
              updateMovement(e.clientX, e.clientY);
            }
          }}
          onTouchStart={(e) => {
            if (e.touches[0]) {
              updatePointerInteraction({
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
              });
            }
          }}
          onTouchEnd={() => updatePointerInteraction(null)}
          onTouchCancel={() => updatePointerInteraction(null)}
          onTouchMove={(e) => {
            if (pointerStart.current && e.touches[0]) {
              updateMovement(e.touches[0].clientX, e.touches[0].clientY);
            }
          }}
        />
      </div>
    </div>
  );
}
