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
    <section className="relative w-full px-4 py-20" id="about">
      {/* Section header */}
      <div className="mb-12 animate-in blur-in fade-in">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            <GradientText text="About PTMFest" />
          </h2>
          <p className="text-lg text-muted-foreground">
            Get to know the story, vision, and athletic excellence behind the
            event.
          </p>
        </div>
      </div>

      {/* Timeline flow - horizontal staggered cards */}
      <div className="relative">
        {/* Decorative line */}

        <div className="space-y-6 lg:space-y-8">
          {about.map((item, idx) => {
            const Icon = icons[idx] ?? Info;
            const isEven = idx % 2 === 0;

            return (
              <motion.article
                key={item.heading}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-6 items-center",
                  isEven ? "lg:text-right" : ""
                )}
              >
                {/* Content */}
                <div
                  className={cn(
                    "animate-in blur-in fade-in",
                    isEven ? "lg:order-2" : ""
                  )}
                >
                  <div className="space-y-4">
                    <div
                      className={cn(
                        "flex items-center gap-3",
                        isEven && "lg:justify-end"
                      )}
                    >
                      <div className="p-3 rounded-xl bg-primary/15 w-fit">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold leading-tight">
                        {item.heading}
                      </h3>
                    </div>
                    <div className="space-y-2 text-muted-foreground leading-relaxed">
                      {item.content.map((line, i) => (
                        <p key={i} className="text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Accent element */}
                <div
                  className={cn(
                    "hidden lg:flex items-center justify-center",
                    isEven ? "lg:order-1" : ""
                  )}
                ></div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
