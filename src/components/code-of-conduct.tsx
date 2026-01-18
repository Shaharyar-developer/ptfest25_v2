"use client";

import React from "react";
import { codeOfConduct } from "@/constants/about";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { GradientText } from "./animate-ui/text/gradient";

export const CodeOfConductSection = () => {
  return (
    <section className="w-full px-4 py-24 max-w-5xl mx-auto" id="code-of-conduct">
      {/* Original Header Style */}
      <div className="mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <GradientText text={codeOfConduct.title} />
          </h2>
          <p className="text-base md:text-lg text-muted-foreground/80">
            Mandatory behavioral framework and official regulations for all PTMFest 2026 participants and spectators.
          </p>
        </div>
      </div>

      {/* Modern Compact Articles Layout */}
      <div className="space-y-16">
        {codeOfConduct.categories.map((category, idx) => (
          <motion.div
            key={category.heading}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group"
          >
            {/* Section Index Ribbon */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-mono font-bold text-primary/40 tracking-[0.3em] uppercase whitespace-nowrap">
                Section {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="h-px flex-1 bg-border/40 group-hover:bg-primary/20 transition-colors duration-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 pl-1 md:pl-0">
              {/* Category Sidebar */}
              <div className="md:col-span-1 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                    <div className="[&_svg]:size-5">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {category.heading}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-4">
                  {category.description}
                </p>
              </div>

              {/* Rules List */}
              <div className="md:col-span-3">
                <div className="grid gap-5">
                  {category.rules.map((rule, i) => (
                    <div key={i} className="flex gap-5 group/item">
                      <span className="text-[10px] font-mono text-muted-foreground/80 font-bold shrink-0 pt-1 w-6">
                        {idx + 1}.{i + 1}
                      </span>
                      <p className="text-sm md:text-[0.9375rem] text-muted-foreground hover:text-foreground transition-colors leading-relaxed font-medium/80">
                        {rule}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compact Enforcement Footer */}
      <div className="mt-24 pt-12 border-t border-border/40 flex flex-col md:flex-row justify-between items-center md:items-center gap-8">
        <div className="flex flex-col gap-1 max-w-max mx-auto">
          <p className="text-sm text-muted-foreground max-w-max">
            The organizing committee reserves the right to disqualify any participant found in violation of these articles.
          </p>
        </div>

      </div>
    </section>
  );
};

