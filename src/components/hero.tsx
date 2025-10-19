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
import Logo from "../../public/logo-optimized.webp";
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
    description: "Register for the event",
    href: "", // This will be ignored for popover
  },
  {
    value: "2",
    icon: MapPin,
    title: "Location",
    description: "Find us at the event location",
    href: "https://maps.app.goo.gl/u73xhSQ84uEXnnyv6",
  },
  {
    value: "3",
    icon: MailQuestion,
    title: "Contact",
    description: "Get in touch with us",
    href: "https://www.instagram.com/ptmun.vi/",
  },
  {
    value: "4",
    icon: FileSymlink,
    title: "ACD Application",
    description: "Apply to be an ACD",
    href: "https://forms.gle/zC9XNA5qrMzBCEXv8",
  },
];

export const Hero = () => {
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center container">
      <div className="flex flex-col items-center justify-center h-[10vh] md:h-[20vh]">
        <Suspense>
          <Globe />
        </Suspense>
        <BlurFade className="absolute top-0 lg:top-10 rounded-3xl">
          <Image
            src={Logo}
            className="invert grayscale shadow-primary mx-auto w-[80%] md:w-[400px] aspect-square object-contain"
            alt="PTMUN VI Logo"
            priority
            width={400}
            height={500}
            quality={85}
            sizes="(max-width: 768px) 80vw, 400px"
            placeholder="empty"
          />
        </BlurFade>
      </div>

      <div className="rounded-3xl pointer-events-none relative pt-[30svh] z-50">
        <BlurFade className="max-w-3xl" delay={0.2}>
          <div className="my-auto h-full flex flex-col px-5 items-center justify-center">
            <motion.p className="mt-4 text-lg md:text-lg text-foreground p-1 backdrop-blur-3xl bg-card/75 rounded-3xl px-3">
              <span className="font-medium">31 Oct – 2 Nov 2025</span> ·{" "}
              <span className="uppercase tracking-wide">PTMUN VI</span>
            </motion.p>

            <h1 className="mt-6 text-4xl md:text-5xl xl:text-7xl font-bold text-center !leading-[1.2] tracking-tight">
              Where Diplomacy Meets <GradientText text="Destiny!" />
            </h1>
          </div>
        </BlurFade>
      </div>

      <div className="px-4 lg:py-8 py-4 lg:px-0">
        <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-4">
          <MotionHighlight hover className="rounded-3xl">
            {CARDS.map((card, idx) => (
              <BlurFade key={card.value} delay={(idx + 0.5) * 0.2}>
                {card.title === "Register" ? (
                  <Popover>
                    <PopoverTrigger asChild>
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
                          <p className="text-base font-semibold">
                            {card.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {card.description}
                          </p>
                        </div>
                      </motion.div>
                    </PopoverTrigger>
                    <PopoverContent
                      side="bottom"
                      align="center"
                      className={cn(
                        "w-72 rounded-xl p-4 shadow-xl border-none",
                        "backdrop-blur-sm bg-card/80 space-y-3"
                      )}
                    >
                      <div className="flex flex-col gap-3">
                        <Link
                          href="https://forms.gle/GoMmq8Cjk8pNbFQB7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-4 border border-border/50 text-sm font-medium text-primary bg-accent/10 rounded-3xl hover:bg-accent/20 transition-colors flex items-center gap-2"
                        >
                          <Users className="size-5" /> Delegation Form
                        </Link>
                        <Link
                          href="https://forms.gle/hioqtKKqxcYvBKmo9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-4 border border-border/50 text-sm font-medium text-primary bg-accent/10 rounded-3xl hover:bg-accent/20 transition-colors flex items-center gap-2"
                        >
                          <User className="size-5" /> Delegate Form
                        </Link>
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
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
                )}
              </BlurFade>
            ))}
          </MotionHighlight>
        </div>
      </div>
    </div>
  );
};
