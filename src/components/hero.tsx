"use client";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  FileSymlink,
  Info,
  MailQuestion,
  MapPin,
  User,
  Users,
} from "lucide-react";
import React, { Suspense } from "react";
import { committees as _committees } from "@/constants/committees";
import { MotionHighlight } from "./animate-ui/effects/motion-highlight";
import Link from "next/link";
import { BlurFade } from "./magicui/blur-fade";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { GradientText } from "./animate-ui/text/gradient";
import { Separator } from "./ui/separator";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Logo } from "@/components/icons/logo";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "./animate-ui/components/radix/popover";

// Lazy load Globe component
const Globe = dynamic(
  () => import("./magicui/globe").then((mod) => ({ default: mod.Globe })),
  {
    ssr: false,
    loading: () => (
      <div className="absolute -top-10 mx-auto aspect-[1/1] w-full max-w-[540px] animate-pulse bg-primary/5 rounded-full" />
    ),
  }
);

const CARDS = [
  {
    value: "1",
    icon: ArrowUpRight,
    title: "Register",
    description: "Join the competition",
    href: "https://forms.gle/VdQXyDo4DeGC4TXWA",
  },
  {
    value: "2",
    icon: MapPin,
    title: "Location",
    description: "Find the venue",
    href: "https://maps.app.goo.gl/u73xhSQ84uEXnnyv6",
  },
  {
    value: "3",
    icon: MailQuestion,
    title: "Contact",
    description: "Get in touch with us",
    href: "https://www.instagram.com/ptfest25/",
  },
  {
    value: "4",
    icon: FileSymlink,
    title: "Rules",
    description: "View sport regulations",
    href: "#about",
  },
];

export const Hero = () => {
  return (
    <div className="w-full mx-auto flex flex-col container">
      {/* Asymmetric grid layout - globe on left, content on right */}
      <div className="lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20 px-3">
        {/* Left: Globe with asymmetric positioning */}
        <BlurFade className="order-2 lg:order-1" delay={0.1}>
          <div className="flex items-center justify-center h-60 lg:h-auto">
            <Suspense>
              <div className="relative w-full aspect-square max-w-sm">
                <Logo />
              </div>
            </Suspense>
          </div>
        </BlurFade>

        {/* Right: Content with vertical emphasis */}
        <div className="order-1 lg:order-2 flex flex-col gap-6 animate-in slide-in-from-bottom-5 fade-in-5 delay-200 duration-500">
          <div className="flex flex-col gap-3">
            <motion.p className="text-sm md:text-base font-medium p-2 backdrop-blur-3xl bg-card/50 rounded-2xl px-4 w-fit border border-border/30">
              <span className="font-semibold">21-23 November 2025</span>
            </motion.p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
              Where Athletics Meet <GradientText text="Excellence" />
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Join Pakistan's premier inter-school sports festival celebrating
              excellence, athleticism, and camaraderie.
            </p>
          </div>

          {/* CTA Cards - Horizontal layout */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {CARDS.slice(0, 2).map((card, idx) => (
              <div
                className="animate-in slide-in-from-bottom-5 fade-in-5 delay-200 duration-500"
                key={card.value}
              >
                <Link
                  href={card.href}
                  target={card.href.includes("#about") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center gap-3 p-3 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-xl hover:bg-card/60 hover:border-primary/30 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-primary/15 group-hover:bg-primary/25 transition-colors">
                      <card.icon className="text-primary text-lg" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold">
                        {card.title}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {card.description}
                      </span>
                    </div>
                  </motion.button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
