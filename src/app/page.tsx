import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import { InvitationSection } from "@/components/invitation";
import { Suspense } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Logo } from "@/components/icons/logo";
import { StarsBackground } from "@/components/animate-ui/backgrounds/stars";

// Lazy load heavy animation components
const BubbleBackground = dynamic(() =>
  import("@/components/animate-ui/components/backgrounds/bubble").then(
    (mod) => ({ default: mod.BubbleBackground })
  )
);
// Lazy load below-the-fold components
const About = dynamic(() =>
  import("@/components/about").then((mod) => ({ default: mod.About }))
);
const CommitteesShowcase = dynamic(() =>
  import("@/components/committees").then((mod) => ({
    default: mod.CommitteesShowcase,
  }))
);
const RegistrationSection = dynamic(() =>
  import("@/components/registration").then((mod) => ({
    default: mod.RegistrationSection,
  }))
);
const ExecutiveCouncilSection = dynamic(() =>
  import("@/components/executive-council").then((mod) => ({
    default: mod.ExecutiveCouncilSection,
  }))
);
const CodeOfConductSection = dynamic(() =>
  import("@/components/code-of-conduct").then((mod) => ({
    default: mod.CodeOfConductSection,
  }))
);

export default function Home() {
  return (
    <div className="min-h-screen h-full">
      <StarsBackground className="fixed inset-0" />
      <Logo />
      <div className="min-h-screen flex items-center justify-center relative">
        <Hero />
      </div>
      <div className="max-w-7xl mx-auto relative lg:mt-20">
        <div className="flex flex-col gap-24 lg:gap-32 pb-24 lg:pb-40">
          <InvitationSection />
          <About />
          <CommitteesShowcase />
          <RegistrationSection />
          <ExecutiveCouncilSection />
          <CodeOfConductSection />
        </div>
        <div className="absolute w-px h-full left-0 top-0 bg-gradient-to-t from-indigo-500/10 via-primary to-indigo-500/10" />
      </div>
    </div>
  );
}
