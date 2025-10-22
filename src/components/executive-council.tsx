"use client";

import { executiveCouncil } from "@/constants/event";
import { GradientText } from "./animate-ui/text/gradient";
import { BlurFade } from "./magicui/blur-fade";
import { PhoneCall, Users } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

export const ExecutiveCouncilSection = () => {
  return (
    <section className="w-full px-4 py-16" id="executive-council">
      <div className="flex flex-col gap-8">
        <BlurFade inView viewport={{ once: true }} className="px-2 relative">
          <div className="lg:sticky lg:top-28 ml-2 h-fit">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              <GradientText text="Event Leadership" />
            </h2>
            <p className="text-muted-foreground text-sm">
              Reach out to the leadership team organizing PTFest 2025.
            </p>
          </div>
        </BlurFade>

        <div className="space-y-6">
          <BlurFade
            inView
            delay={0.12}
            offset={24}
            className="rounded-3xl border border-border/20 bg-card/40 backdrop-blur-3xl p-6 group"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="outline">Leadership & Organization</Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="size-4" />
                The team behind PTFest
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {executiveCouncil.map((group) => (
                <div
                  key={group.role}
                  className="rounded-2xl border border-border/50 bg-card/5 p-5 backdrop-blur-3xl space-y-4"
                >
                  <div className="flex items-center gap-2">
                    <PhoneCall className="size-4 text-primary" />
                    <h3 className="text-base font-semibold text-foreground">
                      {group.role}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {group.members.map((member) => (
                      <li key={member.phone} className="flex flex-col">
                        <span className="font-medium text-foreground">
                          {member.name}
                        </span>
                        <Link
                          href={`tel:${member.phone.replace(/\s+/g, "")}`}
                          className="text-xs uppercase tracking-wide hover:text-primary transition-colors"
                        >
                          {member.phone}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link
              href={"tel:+923144289959"}
              className="flex flex-wrap mb-4 sm:mb-0 max-w-max mx-auto transition-all text-muted-foreground text-center translate-y-full text-xs gap-1"
            >
              And the one bringing to you, all this magic:{" "}
              <strong> M. Shaharyar</strong> +92 314 4289959
            </Link>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
