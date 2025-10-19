"use client";

import { codeOfConduct } from "@/constants/about";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GradientText } from "./animate-ui/text/gradient";
import { BlurFade } from "./magicui/blur-fade";

export const CodeOfConductSection = () => {
  return (
    <section className="w-full px-4 py-16">
      <div className=" grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        <BlurFade inView viewport={{ once: true }} className="px-2 relative">
          <div className="lg:sticky lg:top-28 h-fit ml-2">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              <GradientText text={codeOfConduct.title} />
            </h2>
            <p className="text-muted-foreground text-sm">
              The rules, regulations, and code of conduct for all athletes and
              spectators.
            </p>
          </div>
        </BlurFade>

        {/* Right Side: Categories */}
        <div className="flex flex-col gap-0.5">
          {codeOfConduct.categories.map((category, idx) => (
            <motion.div
              key={category.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className={cn(
                "first:rounded-t-3xl bg-foreground/5 last:rounded-b-3xl p-6 backdrop-blur-3xl"
              )}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="mt-1 shrink-0">{category.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{category.heading}</h3>
                  <p className="text-xs text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              <ol className=" space-y-3 pl-6 text-sm text-muted-foreground">
                {category.rules.map((rule, i) => (
                  <li key={i}>{rule}</li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
