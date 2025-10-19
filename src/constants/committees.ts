import crisis from "@/components/icons/crisis.png";
import pna from "@/components/icons/pna.png";
import un from "@/components/icons/un.png";
import uncsw from "@/components/icons/uncsw.png";
import unhrc from "@/components/icons/unhrc.png";

export const committees = [
  {
    name: "UNSC - DUAL",
    description: "United Nations Security Council",
    logo: un,
    content: [
      "UNSC - DUAL pairs delegates, challenging them to synchronize strategy while representing their state in the council’s premier security forum.",
      "The committee mirrors real-world UNSC protocol, complete with veto dynamics, emergency consultations, and rapid position drafting under pressure.",
      "Ideal for confident speakers seeking a collaborative edge, the format rewards coordination, sharp analysis, and decisive diplomacy.",
    ],
  },
  {
    name: "CRISIS",
    description: "Rapid Response Crisis Committee",
    logo: crisis,
    content: [
      "CRISIS throws delegates into unfolding scenarios where briefings evolve and consequences arrive swiftly.",
      "Participants must craft creative directives, negotiate alliances on the fly, and adapt as the arc twists with every update.",
      "High stakes and fast pacing make this the perfect arena for delegates who thrive on improvisation and bold decision-making.",
    ],
  },
  {
    name: "PNA",
    description: "Pakistan National Assembly",
    logo: pna,
    content: [
      "PNA simulates Pakistan’s parliament, blending legislative debate with the energy of real-world political theatre.",
      "Delegates juggle bilingual rhetoric, constituency interests, and coalition building to shepherd bills through the house.",
      "Expect spirited floor action, whip counts, and media scrutiny that test both policy depth and street-smart negotiation.",
    ],
  },
  {
    name: "UNHRC",
    description: "United Nations Human Rights Council",
    logo: unhrc,
    content: [
      "UNHRC examines global rights violations through investigative debate and resolution-building rooted in international law.",
      "Delegates must balance principled advocacy with pragmatic compromise to rally broad coalitions around protective measures.",
      "The agenda demands empathy, rigorous research, and diplomatic tact to champion vulnerable communities worldwide.",
    ],
  },
  {
    name: "UNW",
    description: "United Nations Women",
    logo: uncsw,
    content: [
      "UNW spotlights gender equality, examining structural barriers and breakthrough policies empowering women and girls.",
      "Sessions blend data-driven briefings with stakeholder testimonies, pushing delegates to craft intersectional, actionable outcomes.",
      "Advocates gain a platform to advance inclusive development, leadership, and justice through persuasive multilateral dialogue.",
    ],
  },
] as const;
   