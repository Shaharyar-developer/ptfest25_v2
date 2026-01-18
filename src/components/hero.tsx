"use client";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  BookOpen,
  FileSymlink,
  FileText,
  Info,
  Mail,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./animate-ui/components/radix/dialog";

const GUIDE_LINKS = [
  {
    title: "Hackathon Guide",
    description: "Round details, rules and requirements",
    href: "/hackathon-guide.pdf",
  },
  {
    title: "MathMania Guide",
    description: "Competition guidelines and modules",
    href: "/mathmania-guide.pdf",
  },
];

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
    icon: Mail,
    title: "E-Invite",
    description: "Download invitation",
    href: "/e-invite.pdf",
  },
  {
    value: "3",
    icon: BookOpen,
    title: "Guides",
    description: "Event instructions",
    href: "#",
  },
  {
    value: "4",
    icon: MapPin,
    title: "Location",
    description: "Find the venue",
    href: "https://maps.app.goo.gl/u73xhSQ84uEXnnyv6",
  },
];

const CardButton = React.forwardRef<
  HTMLButtonElement,
  { icon: any; title: string; description: string; onClick?: () => void }
>(({ icon: Icon, title, description, onClick, ...props }, ref) => (
  <motion.button
    ref={ref}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    {...props}
    className="w-full flex items-center gap-3 p-3 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-xl hover:bg-card/60 hover:border-primary/30 transition-all group h-full"
  >
    <div className="p-2 rounded-lg bg-primary/15 group-hover:bg-primary/25 transition-colors shrink-0">
      <Icon className="text-primary text-lg" />
    </div>
    <div className="flex flex-col items-start overflow-hidden">
      <span className="text-sm font-semibold truncate w-full text-left">
        {title}
      </span>
      <span className="text-xs text-muted-foreground truncate w-full text-left">
        {description}
      </span>
    </div>
  </motion.button>
));
CardButton.displayName = "CardButton";


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
              <span className="font-semibold">
                23 - 25 January 2026
              </span>
            </motion.p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
              Where Athletics Meet <GradientText text="Excellence" />
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Join Pakistan's premier inter-school sports festival celebrating
              excellence, athleticism, and camaraderie.
            </p>
          </div>

          {/* CTA Cards - 2x2 Grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-lg">
            {CARDS.map((card, i) => (
              <div
                className={cn("animate-in slide-in-from-bottom-5 fade-in-5 delay-200 duration-500")}
                key={card.value}
              >
                {card.value === "1" ? (
                  <Popover>
                    <PopoverTrigger asChild>
                      <CardButton
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                      />
                    </PopoverTrigger>
                    <PopoverContent className="w-72 p-1 bg-popover/30 flex flex-col gap-1 backdrop-blur-2xl border-border/40 shadow-2xl rounded-3xl">
                      <Link
                        href="https://forms.gle/VdQXyDo4DeGC4TXWA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-3xl hover:bg-primary/10 transition-colors inline-flex gap-2.5 items-center"
                      >
                        <Users className="text-primary bg-primary/10 rounded-lg p-2 size-10" />
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm font-bold text-foreground">
                            <span>Delegation Registration</span>
                          </span>
                          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                            School / College Teams
                          </span>
                        </div>
                      </Link>
                      <Link
                        href="https://forms.gle/1VraU5gZn7RCZQsD8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-3xl hover:bg-primary/10 transition-colors inline-flex gap-2.5 items-center"
                      >
                        <User className="text-primary bg-primary/10 rounded-lg p-2 size-10" />
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm font-bold text-foreground">
                            Solo Delegation Registration
                          </span>
                          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                            Individual Participants
                          </span>
                        </div>
                      </Link>
                    </PopoverContent>
                  </Popover>
                ) : card.value === "3" ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <CardButton
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-md bg-card/50 backdrop-blur-2xl border-border/40 shadow-2xl rounded-3xl p-4">
                      <DialogHeader className="mb-4">
                        <DialogTitle className="text-xl font-bold">Event Guides</DialogTitle>
                        <DialogDescription>
                          Download PDF guides for various modules and activities.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-2">
                        {GUIDE_LINKS.map((guide) => (
                          <Link
                            key={guide.href}
                            href={guide.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-2xl hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20 flex items-center gap-3 group"
                          >
                            <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                              <FileText className="size-5" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-semibold text-sm">{guide.title}</span>
                              <span className="text-xs text-muted-foreground line-clamp-1">{guide.description}</span>
                            </div>
                            <ArrowUpRight className="ml-auto size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Link
                    href={card.href}
                        target={card.href.startsWith("http") || card.href.endsWith(".pdf") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                        className="h-full"
                  >
                        <CardButton
                          icon={card.icon}
                          title={card.title}
                          description={card.description}
                        />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
