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
  title: "Code of Conduct & Rules",
  categories: [
    {
      heading: "Fair Play & Sportsmanship",
      icon: <Handshake size={24} />,
      description: "Core principles of ethical athletic competition.",
      rules: [
        "All athletes, teams, and spectators must adhere to this Code of Conduct throughout all PTFest 2025 activities.",
        "All participants are responsible for respectful behavior towards other teams, officials, and spectators.",
        "Disrespectful, abusive, or offensive behavior towards any athlete, official, or guest will not be tolerated.",
        "Harassment of any individual based on race, gender, ethnicity, religion, disability, or any other criteria is strictly prohibited.",
        "Bullying, taunting, unsportsmanlike conduct, and aggressive behavior are not allowed.",
        "Players must accept referee/umpire decisions with respect. Arguing or questioning official decisions will result in penalties.",
        "Good sportsmanship includes congratulating opponents and celebrating wins humbly.",
      ],
    },
    {
      heading: "Facilities and Equipment",
      icon: <Library size={24} />,
      description: "Proper use of PTFest venues and sporting equipment.",
      rules: [
        "All PTFest facilities, equipment, and grounds must be treated with respect and care.",
        "Any act of vandalism, property damage, or misuse of facilities will result in disciplinary action and potential liability.",
        "Teams must properly store and return all borrowed equipment after use.",
        "Participants must maintain cleanliness of facilities and grounds during and after activities.",
      ],
    },
    {
      heading: "Prohibited Conduct",
      icon: <Ban size={24} />,
      description: "Actions and items that are strictly forbidden.",
      rules: [
        "Consumption and/or possession of alcohol, cigarettes, vapes, or any intoxicants is strictly prohibited and grounds for disqualification.",
        "Illegal drugs and controlled substances are absolutely forbidden.",
        "Weapons of any kind are strictly prohibited.",
        "Physical violence, aggressive contact beyond sport rules, or intentionally injuring opponents will result in immediate disqualification.",
        "Any participant found violating these rules may face expulsion from the event and referral to parents/guardians.",
      ],
    },
    {
      heading: "Safety and Health",
      icon: <Shield size={24} />,
      description: "Measures to ensure the well-being of all participants.",
      rules: [
        "All athletes must follow sport-specific safety rules and regulations to prevent injuries.",
        "Unsafe play, reckless behavior, or deliberate fouls that endanger others are strictly prohibited.",
        "All participants must wear identification passes at all times.",
        "Report any injuries or health emergencies immediately to event staff.",
        "Medical facilities are available on-site for all participants.",
      ],
    },
    {
      heading: "Attire and Equipment Standards",
      icon: <Shirt size={24} />,
      description: "Guidelines for proper athletic attire.",
      rules: [
        "Athletes must wear appropriate sports clothing and footwear as per each sport's requirements.",
        "Uniforms or team colors are required for team events.",
        "Protective equipment (if required by the sport) must be worn during all matches.",
        "Cleats and specialized footwear must comply with sport regulations.",
        "Spectators are encouraged to wear school colors and team jerseys.",
      ],
    },
    {
      heading: "Attendance and Punctuality",
      icon: <Clock size={24} />,
      description: "Requirements for timely participation in matches.",
      rules: [
        "Teams must arrive at their designated match times as per the schedule.",
        "Late arrival may result in forfeiture or penalty at the discretion of match officials.",
        "All team members must be present for team photos and opening ceremonies.",
        "Absences must be reported to event coordinators in advance when possible.",
      ],
    },
    {
      heading: "Enforcement and Penalties",
      icon: <Scale size={24} />,
      description: "Consequences for violating the code of conduct.",
      rules: [
        "Violations may result in warnings, penalties, suspension from matches, or disqualification.",
        "Match officials have the authority to issue yellow and red cards in applicable sports.",
        "Serious violations may result in immediate disqualification from PTFest 2025.",
        "Event organizers reserve the right to disqualify any participant or team for serious misconduct.",
        "Parents/guardians will be notified of any serious violations or disciplinary actions.",
        "All decisions by officials are final and binding.",
      ],
    },
  ],
} as const;

export type About = typeof about;
export const about = [
  {
    heading: "PTFest 2025 Overview",
    content: [
      "PTFest 2025 is a premier three-day sports extravaganza organized by Pak-Turk Maarif International Schools.",
      "Taking place from 21-23 November 2025 at the Pak-Turk Maarif Boys Campus in Lahore, the event welcomes athletes from leading schools across the city to compete in over 12 thrilling sports and activities.",
      "Experience Excellence as the campus transforms into a hub for competitive sports, athletic achievement, and school pride.",
    ],
  },
  {
    heading: "Sports & Activities",
    content: [
      "PTFest 2025 features a diverse range of sports including Futsal, Basketball, Cricket, Volleyball, Badminton, and more.",
      "Beyond traditional sports, the event showcases esports competitions (FIFA and Tekken), mind games (Chess, Ludo, Snooker), and physical challenges (Strongman, Tug of War).",
      "From team sports to individual competitions, there's something for every athlete to showcase their talent and passion.",
    ],
  },
  {
    heading: "Community & Values",
    content: [
      "PTFest celebrates athleticism, teamwork, sportsmanship, and school spirit among participating institutions including LGS, BSS, LACAS, CITI, ROOTS, PGC, SICAS, and Aitchison.",
      "The event promotes values of fair play, collaboration, and healthy competition while creating unforgettable memories for athletes and spectators alike.",
      "Whether you're competing or cheering, PTFest is a celebration of excellence, passion, and the unifying power of sports.",
    ],
  },
] as const;
