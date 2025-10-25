"use client";

import { codeOfConduct } from "@/constants/about";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GradientText } from "./animate-ui/text/gradient";
import { BlurFade } from "./magicui/blur-fade";

export const CodeOfConductSection = () => {
  return (
    <section className="w-full px-4 py-20" id="code-of-conduct">
      {/* Section header */}
      <div className="mb-12 animate-in blur-in fade-in">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            <GradientText text={codeOfConduct.title} />
          </h2>
          <p className="text-lg text-muted-foreground">
            The rules, regulations, and code of conduct for all athletes and
            spectators.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {codeOfConduct.categories.map((category, idx) => (
          <motion.div
            key={category.heading}
            className={cn(
              "rounded-3xl border border-border/30 bg-gradient-to-br from-foreground/8 to-foreground/3 backdrop-blur-3xl p-8 animate-in blur-in fade-in",
              "hover:border-primary/40 transition-all group"
            )}
          >
            {/* Category Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/15 group-hover:bg-primary/25 transition-colors shrink-0">
                {category.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">
                  {category.heading}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Rules List */}
            <ul className="space-y-3 pl-4 text-sm text-muted-foreground leading-relaxed list-disc!">
              {category.rules.map((rule, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.03 }}
                  className="flex gap-3 list-disc items-start"
                >
                  <span className="text-primary font-bold shrink-0">.</span>
                  <span>{rule}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
