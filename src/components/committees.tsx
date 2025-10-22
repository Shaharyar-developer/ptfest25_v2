"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { committees } from "@/constants/committees";
import { BlurFade } from "./magicui/blur-fade";
import { GradientText } from "./animate-ui/text/gradient";
import { cn } from "@/lib/utils";

type Committee = (typeof committees)[number];

export const CommitteesShowcase = () => {
  const [selected, setSelected] = React.useState<Committee | null>(null);

  return (
    <LayoutGroup>
      <section className="w-full px-4 py-20" id="sports">
        {/* Section header */}
        <div className="mb-12 animate-in blur-in fade-in">
          <div className="flex flex-col gap-2 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold">
              <GradientText text="Sports" />
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore the sports featured at PTFest 2025 with complete rules and
              regulations. (click to expand)
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committees.map((committee, idx) => (
            <motion.div
              key={committee.name}
              className="animate-in blur-in fade-in"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                layoutId={`committee-card-${committee.name}`}
                whileHover={!selected ? { y: -5 } : {}}
                className="group rounded-2xl border border-border/30 bg-gradient-to-br from-foreground/8 to-foreground/3 backdrop-blur-xl overflow-hidden hover:border-primary/40 transition-all cursor-pointer h-full"
                onClick={() => setSelected(committee)}
              >
                {/* Card Header */}
                <div className="p-6 border-b border-border/20 group-hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/15 group-hover:bg-primary/25 transition-colors">
                      {committee.logo}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground">
                        {committee.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {committee.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Content - Scrollable */}
                <ScrollArea className="h-[180px]">
                  <div className="p-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {committee.content.map((para, idx) => (
                      <p key={idx} className="text-justify last:mb-4">
                        {para}
                      </p>
                    ))}
                  </div>
                </ScrollArea>

                {/* Card Footer - Hover action */}
                <div className="px-6 py-4 border-t border-border/20 bg-foreground/3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold text-primary flex items-center gap-2">
                    Learn more →
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal for selected card */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelected(null)}
              />
              <motion.div
                layoutId={`committee-card-${selected.name}`}
                className="bg-background rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl border border-border/40 z-10"
                onClick={(e) => e.stopPropagation()}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/15 shrink-0">
                    {selected.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-foreground">
                      {selected.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {selected.description}
                    </p>
                  </div>
                </div>
                <ScrollArea className="max-h-[50vh] pr-4">
                  <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                    {selected.content.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </ScrollArea>
                <button
                  className="absolute top-4 right-4 text-muted-foreground hover:text-primary text-2xl font-bold transition-colors"
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </LayoutGroup>
  );
};
