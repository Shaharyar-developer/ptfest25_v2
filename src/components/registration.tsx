"use client";

import {
  registrationDetails,
  feeStructure,
  registrationTeam,
} from "@/constants/event";
import { GradientText } from "./animate-ui/text/gradient";
import { BlurFade } from "./magicui/blur-fade";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ClipboardList, CreditCard, UsersRound, Phone } from "lucide-react";

export const RegistrationSection = () => {
  return (
    <section className="w-full px-4 py-16" id="registration">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        <BlurFade inView viewport={{ once: true }} className="px-2 relative">
          <div className="lg:sticky lg:top-28 ml-2 h-fit">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              <GradientText text="Registration" />
            </h2>
            <p className="text-muted-foreground text-sm">
              Everything you need to join PTFest 2025, from forms to contact
              leads.
            </p>
          </div>
        </BlurFade>

        <div className="space-y-6">
          <BlurFade
            inView
            delay={0.08}
            offset={24}
            className="rounded-3xl border border-border/20 bg-foreground/5 backdrop-blur-3xl p-6 flex flex-col gap-4"
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="tracking-wide">
                {registrationDetails.highlight.earlyBirdDeadline}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <UsersRound className="size-4" />
                Limited slots per committee
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
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
          </BlurFade>

          <div className="grid gap-4 lg:grid-cols-2">
            <BlurFade
              inView
              delay={0.12}
              offset={24}
              className="rounded-3xl border border-border/20 bg-foreground/5 backdrop-blur-3xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <ClipboardList className="size-5 text-primary" />
                <h3 className="text-lg font-semibold">Guidelines</h3>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                {registrationDetails.guidelines.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </BlurFade>

            <BlurFade
              inView
              delay={0.16}
              offset={24}
              className="rounded-3xl border border-border/20 bg-foreground/5 backdrop-blur-3xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="size-5 text-primary" />
                <h3 className="text-lg font-semibold">Payment Methods</h3>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground">
                {registrationDetails.payments.map((payment) => (
                  <div key={payment.method}>
                    <p className="font-medium text-foreground">
                      {payment.method}
                    </p>
                    <p className="leading-relaxed">{payment.description}</p>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          <BlurFade
            inView
            delay={0.2}
            offset={24}
            className="rounded-3xl border border-border/20 bg-foreground/5 backdrop-blur-3xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Fee Structure</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {feeStructure.map((tier) => (
                <Card key={tier.title} className="border-border/50 shadow-none">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex flex-col gap-1">
                      <span className="text-base font-semibold">
                        {tier.title}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">
                        {tier.caption}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6 shadow-none">
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {tier.items.map((item) => (
                        <li
                          key={`${tier.title}-${item.label}`}
                          className="flex items-center justify-between"
                        >
                          <span>{item.label}</span>
                          <span className="font-medium text-foreground">
                            {item.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </BlurFade>

          <BlurFade
            inView
            delay={0.24}
            offset={24}
            className="rounded-3xl border border-border/20 bg-foreground/5 backdrop-blur-3xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Phone className="size-5 text-primary" />
              <h3 className="text-lg font-semibold">Registrations Team</h3>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
              {registrationTeam.map((member) => (
                <li
                  key={member.phone}
                  className="rounded-2xl border border-border/50 bg-card/30 px-4 py-3 flex flex-col"
                >
                  <span className="text-foreground font-medium">
                    {member.name}
                  </span>
                  <span className="text-xs uppercase tracking-wide">
                    {member.phone}
                  </span>
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
