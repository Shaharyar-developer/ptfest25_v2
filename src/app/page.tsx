import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import { InvitationSection } from "@/components/invitation";
import { Suspense } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Logo } from "@/components/icons/logo";
import { StarsBackground } from "@/components/animate-ui/backgrounds/stars";

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
      {/* Background */}
      <StarsBackground className="fixed inset-0 z-0" />

      {/* Logo */}

      {/* Hero Section - Full viewport height */}
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <Hero />
      </div>

      {/* Main content container with improved spacing */}
      <div className="lg:max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-20 pb-24 lg:pb-40 px-4 lg:px-0">
          {/* Invitation Section */}
          <InvitationSection />

          {/* About Section */}
          <About />

          {/* Committees/Sports Section */}
          <CommitteesShowcase />

          {/* Registration Section */}
          <RegistrationSection />

          {/* Executive Council Section */}
          <ExecutiveCouncilSection />

          {/* Code of Conduct Section */}
          <CodeOfConductSection />
        </div>
      </div>
    </div>
  );
}
