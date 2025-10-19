import {
  Handshake,
  Library,
  Ban,
  Shield,
  Clock,
  Scale,
  Shirt,
} from "lucide-react";

export type CodeOfConduct = typeof codeOfConduct;
export const codeOfConduct = {
  title: "Code of Conduct",
  categories: [
    {
      heading: "General Conduct",
      icon: <Handshake size={24} />,
      description:
        "Basic guidelines for respectful behaviour towards all participants.",
      rules: [
        "All attendees, delegates, and team members are expected to strictly adhere to this Code of Conduct throughout every PTMUN-related activity.",
        "All participants are responsible for their own behaviour to ensure a successful conference; all participants must act in a manner respectful of the rights of others.",
        "Rude, disrespectful, cruel, or otherwise offensive behaviour towards any delegate, staff member, or guest will not be tolerated in or outside of the committee.",
        "Harassment of any individual based on a person's race, gender, sexual orientation, ethnicity, religion, disability, national origin, appearance or any other criteria is strictly prohibited.",
        "Bullying, name-calling and any form of hazing are also prohibited.",
        "Inappropriate and/or uninvited physical contact between any delegate, staff member, or guest is not allowed.",
        "A formal manner of behaviour must be applied to all actions; delegates must sit up straight and be hygienic.",
      ],
    },
    {
      heading: "Facilities and Property",
      icon: <Library size={24} />,
      description:
        "Respect for PTMUN facilities and property to ensure continued use.",
      rules: [
        "All PTMUN facilities are to be treated with respect and care at all times. The use of these facilities is a privilege, and your behaviour towards them directly impacts our ability to use them in the future.",
        "Any act of vandalism, destruction of property, or misuse of a facility may be considered a crime and will be treated as such.",
      ],
    },
    {
      heading: "Prohibited Items and Substances",
      icon: <Ban size={24} />,
      description:
        "A list of items and substances that are forbidden during the event.",
      rules: [
        "The consumption and/or possession of alcohol, pod, vape, cigarettes, or any type of intoxicants is strictly prohibited and if confiscated, will not be returned. Similarly, the possession or use of illegal drugs by any individual is not allowed under any circumstances. ",
        "Weapons of any kind, along with items that could cause injury or damage to participants or property, are also strictly forbidden. Additionally, the discovery of any inappropriate items may result in the immediate cancellation of the individual's registration.",
      ],
    },
    {
      heading: "Safety and Health",
      icon: <Shield size={24} />,
      description:
        "Measures to ensure the safety and well-being of all participants.",
      rules: [
        "Activities that endanger the health or safety of yourself or others are prohibited.",
        "For safety reasons, all PTMUN participants must wear their assigned passes at all times and keep them visible.",
      ],
    },
    {
      heading: "Dress Code and Appearance",
      icon: <Shirt size={24} />,
      description: "Guidelines on proper attire for the event and ceremonies.",
      rules: [
        "The minimum standard of dress required is business casual, and participants are encouraged to wear either Western or Eastern Business Attire. The dress code is mandatory during all committee sessions, as well as for the opening and closing ceremonies.",
        "We kindly ask all participants to ensure their clothing is dignified and appropriate for a professional setting. Choices that uphold a polished, formal appearance are preferred to maintain the decorum of the event.",
      ],
    },
    {
      heading: "Attendance and Punctuality",
      icon: <Clock size={24} />,
      description:
        "Expectations regarding attendance and timeliness during sessions.",
      rules: [
        "Delegates must be present and punctual for all committee sessions.",
      ],
    },
    {
      heading: "Disciplinary Actions",
      icon: <Scale size={24} />,
      description: "Consequences for violating the code of conduct.",
      rules: [
        "Derogation from any of the following rules may result in disciplinary action deemed appropriate by PTMUN's staff.",
        "Contravention of these rules may induce immediate expulsion from PTMUN activities, payment for damages, notification of parents, guardians, or institutions, and contacting law enforcement if necessary.",
      ],
    },
  ],
} as const;

export type About = typeof about;
export const about = [
  {
    heading: "PTMUN VI Overview",
    content: [
      "We are pleased to invite you to the sixth edition of Pak-Turk Maarif Model United Nations (PTMUN VI).",
      "Taking place from 31 October to 2 November 2025 at the Pak-Turk Maarif Boys Campus in Lahore, the conference welcomes delegations to three days of debate, dialogue, and dynamic socials.",
      "Let Diplomacy Prevail as the campus transforms into a hub for collaborative policy-making and impactful international discourse.",
    ],
  },
  {
    heading: "Theme and Vision",
    content: [
      "This year's theme is rooted in UN Sustainable Development Goal 16, championing peace, justice, and strong institutions.",
      "PTMUN VI encourages delegates to become responsible global citizens, advocates for inclusive policy-making, and stewards of transparent governance.",
      "The conference continues to set the benchmark for Lahore's MUN circuit by blending academic rigour with a commitment to community impact.",
    ],
  },
  {
    heading: "Conference Experience",
    content: [
      "Across three immersive days, PTMUN VI delivers rigorous committee sessions, moderated caucuses, and real-time crisis simulations that challenge delegates to think on their feet.",
      "Beyond debate, the experience features cultural nights, networking dinners, and social events that celebrate the spirit of collaboration.",
      "Whether you're a seasoned delegate or a first-timer, PTMUN remains a tradition that inspires young leaders to dream beyond borders.",
    ],
  },
] as const;
