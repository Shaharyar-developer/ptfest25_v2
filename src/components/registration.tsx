"use client";

import {
  registrationDetails,
  feeStructure,
  registrationTeam,
} from "@/constants/event";
import { GradientText } from "./animate-ui/text/gradient";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ClipboardList, CreditCard, UsersRound, Phone } from "lucide-react";
import { motion } from "motion/react";

export const RegistrationSection = () => {
  return (
    <section className="w-full px-4 py-20" id="registration">
      {/* Section header */}
      <div className="mb-12 animate-in blur-in fade-in duration-700 delay-300">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            <GradientText text="Registration" />
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to join PTFest 2025, from forms to contact
            leads.
          </p>
        </div>
      </div>

      {/* CTA and Forms section */}
      <div className="mb-8 animate-in blur-in fade-in duration-700 delay-300">
        <div className="rounded-3xl border border-border/30 bg-gradient-to-br from-foreground/8 to-foreground/3 backdrop-blur-3xl p-8 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge
              variant="outline"
              className="tracking-wide uppercase text-xs"
            >
              {registrationDetails.highlight.earlyBirdDeadline}
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <UsersRound className="size-4" />
              Limited slots per committee
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {registrationDetails.forms.map((form) => (
              <Button asChild key={form.label} className="w-full">
                <Link
                  href={form.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {form.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Guidelines and Payment Methods */}
      <div className="grid gap-6 lg:grid-cols-2 mb-8">
        <div className="animate-in blur-in fade-in duration-700 delay-300">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-border/30 bg-card/40 backdrop-blur-3xl p-8 h-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/15">
                <ClipboardList className="size-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Guidelines</h3>
            </div>
            <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              {registrationDetails.guidelines.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-primary font-bold">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="animate-in blur-in fade-in duration-700 delay-300">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-border/30 bg-card/40 backdrop-blur-3xl p-8 h-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/15">
                <CreditCard className="size-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Payment Methods</h3>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              {registrationDetails.payments.map((payment) => (
                <div key={payment.method}>
                  <p className="font-semibold text-foreground">
                    {payment.method}
                  </p>
                  <p className="text-xs leading-relaxed mt-1">
                    {payment.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fee Structure */}
      <div className="mb-8 animate-in blur-in fade-in duration-700 delay-300">
        <div className="rounded-3xl border border-border/30 bg-card/40 backdrop-blur-3xl p-8">
          <h3 className="text-xl font-bold mb-6">Fee Structure</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {feeStructure.map((tier) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4 }}
              >
                <Card className="border-border/50 shadow-none hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex flex-col gap-2">
                      <span className="text-lg font-semibold">
                        {tier.title}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-muted-foreground font-normal">
                        {tier.caption}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {tier.items.map((item) => (
                        <li
                          key={`${tier.title}-${item.label}`}
                          className="flex items-center justify-between"
                        >
                          <span>{item.label}</span>
                          <span className="font-semibold text-foreground">
                            {item.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Team */}
      <div className="animate-in blur-in fade-in duration-700 delay-300">
        <div className="rounded-2xl border border-border/30 bg-card/40 backdrop-blur-3xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-primary/15">
              <Phone className="size-4 text-primary" />
            </div>
            <h3 className="text-lg font-bold">Registration Team</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {registrationTeam.map((member, idx) => (
              <motion.div
                key={member.phone}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05 }}
                className="flex w-full items-center gap-2 rounded-lg border border-border/50 bg-card/30 backdrop-blur px-3 py-2 hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col">
                  <span className="text-foreground font-semibold text-xs">
                    {member.name}
                  </span>
                  <Link
                    href={`tel:${member.phone.replace(/\s+/g, "")}`}
                    className="text-xs text-primary hover:text-primary/80 transition-colors"
                  >
                    {member.phone}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
