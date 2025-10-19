"use client";

import { invitationCopy, registrationDetails } from "@/constants/event";
import { GradientText } from "./animate-ui/text/gradient";
import { BlurFade } from "./magicui/blur-fade";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const InvitationSection = () => {
  const { title, tagline, campus, dates, greeting, paragraphs, socials } =
    invitationCopy;

  return (
    <section className="w-full px-4 py-16" id="invitation">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        <BlurFade inView viewport={{ once: true }} className="px-2 relative">
          <div className="lg:sticky lg:top-28 ml-2 h-fit">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              <GradientText text={title} />
            </h2>
            <p className="text-muted-foreground text-sm">
              A warm welcome to PTFEST'25 and everything the 2025 edition stands
              for.
            </p>
          </div>
        </BlurFade>

        <div className="space-y-6">
          <BlurFade
            inView
            delay={0.1}
            offset={24}
            className={cn(
              "bg-foreground/5 backdrop-blur-3xl p-6 rounded-3xl border border-border/20",
              "flex flex-col gap-6"
            )}
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="uppercase tracking-wide">
                {tagline}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="size-4" />
                Three days of athletic excellence
              </div>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">{greeting}</p>
              {paragraphs.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/50 bg-card/30 p-4 backdrop-blur-xl">
                <div className="flex items-start gap-3">
                  <CalendarDays className="size-5 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Event Dates
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {dates}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card/30 p-4 backdrop-blur-xl">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Venue
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {campus}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Connect:</span>
              <Link
                href="https://www.instagram.com/ptfest25/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {socials.instagram}
              </Link>
              <span aria-hidden="true" className="text-border">
                •
              </span>
              <Link
                href={`https://${socials.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {socials.website}
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link
                  href={registrationDetails.forms[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register a Team
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
