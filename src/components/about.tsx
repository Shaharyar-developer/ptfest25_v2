"use client";

import { about } from "@/constants/about";
import { GradientText } from "./animate-ui/text/gradient";
import { BlurFade } from "./magicui/blur-fade";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Info, CalendarDays, PartyPopper, Sparkles } from "lucide-react";

export const About = () => {
  const icons = [Info, CalendarDays, PartyPopper];

  return (
    <section className="relative w-full px-4 py-16" id="about">
      <div className="relative grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        <BlurFade inView viewport={{ once: true }} className="px-2 relative">
          <div className="lg:sticky lg:top-28 h-fit ml-2">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              <GradientText text="About PTMUN" />
            </h2>
            <p className="text-muted-foreground text-sm">
              Get to know the story, vision, and experience behind the
              conference.
            </p>
          </div>
        </BlurFade>

        {/* Timeline cards */}
        <div className="relative">
          <div className="space-y-0.5">
            {about.map((item, idx) => {
              const Icon = icons[idx] ?? Info;
              return (
                <motion.article
                  key={item.heading}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={cn(
                    "relative first:rounded-t-3xl last:rounded-b-3xl bg-foreground/5 p-6 backdrop-blur-3xl",
                    "hover:border-primary/30 transition-colors"
                  )}
                >
                  <div className="flex items-start gap-2">
                    <div>
                      <h3 className="text-lg font-semibold inline-flex items-center gap-4">
                        <div className="px-2 py-1 shrink-0">
                          <Icon className="size-6" />
                        </div>
                        {item.heading}
                      </h3>
                      <div className="mt-1 text-sm leading-relaxed text-muted-foreground text-justify flex flex-col ml-8 gap-1.5">
                        {item.content.map((line, i) => (
                          <p key={i}>
                            {line}
                            <br />
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
