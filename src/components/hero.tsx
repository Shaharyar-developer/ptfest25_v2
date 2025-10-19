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
    <div className="w-full mx-auto flex flex-col items-center justify-center container">
      <div className="flex flex-col items-center justify-center h-[20vh] md:h-[20vh] ">
        <Suspense>
          <Globe />
        </Suspense>
      </div>

      <div className="rounded-3xl pointer-events-none relative pt-[30svh] z-50">
        <BlurFade className="max-w-3xl" delay={0.2}>
          <div className="my-auto h-full flex flex-col px-5 items-center justify-center">
            <motion.p className="mt-4 text-lg md:text-lg text-foreground p-1 backdrop-blur-3xl bg-card/75 rounded-3xl px-3">
              <span className="font-medium">21-23 Nov 2025</span> ·{" "}
              <span className="uppercase tracking-wide">PTFest'25</span>
            </motion.p>

            <h1 className="mt-6 text-4xl md:text-5xl xl:text-7xl font-bold text-center !leading-[1.2] tracking-tight">
              Where Athletics Meet <GradientText text="Excellence!" />
            </h1>
          </div>
        </BlurFade>
      </div>

      <div className="px-4 lg:py-8 py-4 lg:px-0">
        <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-4">
          <MotionHighlight hover className="rounded-3xl">
            {CARDS.map((card, idx) => (
              <BlurFade key={card.value} delay={(idx + 0.5) * 0.2}>
                <Link
                  href={card.href}
                  target={card.href.includes("#about") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileTap={{ scale: 0.97 }}
                    className={cn(
                      "cursor-pointer flex items-center gap-4 p-4 transition-colors",
                      "first:rounded-t-3xl last:rounded-b-3xl",
                      "lg:flex-col lg:items-center lg:justify-center",
                      "lg:rounded-3xl lg:shadow-none lg:divide-y-0"
                    )}
                  >
                    <div className="p-3 rounded-xl bg-primary/10 lg:mb-2">
                      <card.icon className="text-primary text-xl lg:text-2xl" />
                    </div>
                    <div className="flex flex-col lg:items-center lg:text-center">
                      <p className="text-base font-semibold">{card.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </BlurFade>
            ))}
          </MotionHighlight>
        </div>
      </div>
    </div>
  );
};
