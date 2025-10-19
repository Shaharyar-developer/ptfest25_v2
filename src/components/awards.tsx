"use client";

import { awardInformation } from "@/constants/event";
import { GradientText } from "./animate-ui/text/gradient";
import { BlurFade } from "./magicui/blur-fade";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trophy, Medal, Scale, ShieldCheck } from "lucide-react";

export const AwardsSection = () => {
  return (
    <section className="w-full px-4 py-16" id="awards">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        <BlurFade inView viewport={{ once: true }} className="px-2 relative">
          <div className="lg:sticky lg:top-28 ml-2 h-fit">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              <GradientText text="Awards & Points" />
            </h2>
            <p className="text-muted-foreground text-sm">
              Understand how committees recognise excellence and how delegation
              standings are calculated.
            </p>
          </div>
        </BlurFade>

        <div className="space-y-6">
          <BlurFade
            inView
            delay={0.12}
            offset={24}
            className="rounded-3xl border border-border/20 bg-foreground/5 backdrop-blur-3xl p-6"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="outline" className="tracking-wide">
                Transparent Judging
              </Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="size-4" />
                Performance-driven recognition
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Trophy className="size-4 text-primary" />
                  Award Policy
                </div>
                <ul className="space-y-2 leading-relaxed">
                  {awardInformation.policy.map((item, idx) => (
                    <li key={`policy-${idx}`} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Medal className="size-4 text-primary" />
                  Delegation Awards
                </div>
                <ul className="space-y-2 leading-relaxed">
                  {awardInformation.delegationAwards.map((item, idx) => (
                    <li key={`delegation-${idx}`} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Separator className="my-6 opacity-40" />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Medal className="size-4 text-primary" />
                  Senior Category
                </div>
                <ul className="space-y-2 leading-relaxed">
                  {awardInformation.perCommittee.senior.map((item) => (
                    <li key={`senior-${item}`} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-foreground font-semibold pt-6">
                  <Medal className="size-4 text-primary" />
                  Junior Category
                </div>
                <ul className="space-y-2 leading-relaxed">
                  {awardInformation.perCommittee.junior.map((item) => (
                    <li key={`junior-${item}`} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs uppercase tracking-wide text-muted-foreground/80 pt-3">
                  {awardInformation.perCommittee.note}
                </p>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <Scale className="size-4 text-primary" />
                    Categories
                  </div>
                  <ul className="space-y-2 leading-relaxed">
                    {awardInformation.categories.map((item) => (
                      <li key={`category-${item}`} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator className="opacity-40" />

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <Scale className="size-4 text-primary" />
                    Point Structure
                  </div>
                  <ul className="space-y-2 leading-relaxed">
                    {awardInformation.points.structure.map((item) => (
                      <li key={`points-${item}`} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2 leading-relaxed text-xs text-muted-foreground/90">
                    {awardInformation.points.notes.map((item, idx) => (
                      <li key={`notes-${idx}`} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
