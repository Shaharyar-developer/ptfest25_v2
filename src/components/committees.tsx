"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { committees } from "@/constants/committees";
import { BlurFade } from "./magicui/blur-fade";
import { GradientText } from "./animate-ui/text/gradient";
import { cn } from "@/lib/utils";

export const CommitteesShowcase = () => {
  return (
    <section className="w-full px-4 py-8">
      <div className=" grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        {/* Sticky Left Side */}
        <BlurFade inView viewport={{ once: true }} className="px-2 relative">
          <div className="lg:sticky lg:top-28 ml-2 h-fit">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              <GradientText text="Sports" />
            </h2>
            <p className="text-muted-foreground text-sm">
              Explore the sports featured at PTFest 2025 with complete rules and
              regulations.
            </p>
          </div>
        </BlurFade>
        {/* Right Side: Committees Cards */}
        <div>
          <Accordion
            type="multiple"
            className="w-full max-w-4xl mx-auto flex flex-col gap-0.5 relative z-10"
          >
            {committees.map((committee) => (
              <AccordionItem
                key={committee.name}
                value={committee.name}
                className="border border-none first:rounded-t-3xl last:rounded-b-3xl bg-foreground/5 backdrop-blur-3xl rounded-none"
              >
                <BlurFade inView viewport={{ once: true }}>
                  <AccordionTrigger className="p-4 text-left">
                    <div className="flex items-center gap-4">
                      <div>{committee.logo}</div>
                      <div>
                        <h3 className="text-base font-semibold">
                          {committee.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {committee.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                </BlurFade>
                <AccordionContent className="px-4 pb-4">
                  <ScrollArea className="max-h-[45vh] pr-2">
                    <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                      {committee.content.map((para, idx) => (
                        <p key={idx} className="text-justify">
                          {para}
                        </p>
                      ))}
                    </div>
                  </ScrollArea>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
