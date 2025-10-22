"use client";

import { invitationCopy, registrationDetails } from "@/constants/event";
import { GradientText } from "./animate-ui/text/gradient";
import { BlurFade } from "./magicui/blur-fade";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { PiInstagramLogo } from "react-icons/pi";

export const InvitationSection = () => {
  const { title, tagline, campus, dates, greeting, paragraphs, socials } =
    invitationCopy;

  return (
    <section className="w-full px-4 py-20" id="invitation">
      {/* Section header - full width */}
      <div className="mb-12 animate-in blur-in fade-in">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl md:text-5xl font-bold">
            <GradientText text={title} />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A warm welcome to PTFEST'25 and everything the 2025 edition stands
            for.
          </p>
        </div>
      </div>

      {/* Main content grid - asymmetric */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Large featured card - left side */}
        <div className="lg:col-span-2 animate-in blur-in fade-in">
          <div className="group rounded-3xl border border-border/30 bg-gradient-to-br from-foreground/8 to-foreground/3 backdrop-blur-3xl p-8 hover:border-primary/30 transition-all h-full flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant="outline"
                className="uppercase tracking-wide text-xs"
              >
                {tagline}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="size-4 text-primary" />
                <span>Three days of excellence</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-foreground text-lg">
                {greeting}
              </p>
              <div className="space-y-3">
                {paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Side info cards - stacked */}
        <div className="flex flex-col gap-4">
          <div className="animate-in blur-in fade-in">
            <div className="rounded-2xl border border-border/30 bg-card/40 backdrop-blur-xl p-6 hover:border-primary/40 transition-all">
              <div className="flex items-start gap-3">
                <CalendarDays className="size-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    Event Dates
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-2">
                    {dates}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-in blur-in fade-in grow">
            <div className="rounded-2xl border border-border/30 bg-card/40 backdrop-blur-xl p-6 hover:border-primary/40 transition-all">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    Venue
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-2">
                    {campus}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Social connections - bottom bar */}

          <div className="animate-in blur-in fade-in">
            <div className="rounded-2xl border border-border/30 bg-card/40 backdrop-blur-xl p-6 flex flex-row items-center justify-between gap-4">
              <span className="font-semibold inline-flex items-center gap-2 text-foreground text-sm">
                <PiInstagramLogo className="size-5 text-primary" /> Connect with
                us:
              </span>
              <Link
                href="https://www.instagram.com/ptfest25/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {socials.instagram} ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
           