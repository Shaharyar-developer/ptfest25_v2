import { GiBasketballBasket } from "react-icons/gi";
import { GiSoccerKick } from "react-icons/gi";
import { BiCricketBall } from "react-icons/bi";
import { PiVolleyball } from "react-icons/pi";
import { GiShuttlecock } from "react-icons/gi";

export const committees = [
  {
    name: "Futsal",
    description: "Fast-paced indoor soccer action",
    logo: GiSoccerKick,
    content: [
      "Futsal is a high-energy indoor soccer variant with 5 players per side and a smaller, heavier ball.",
      "All matches are knockout-based with 20-minute durations. In case of a draw, the match is decided through penalties.",
      "Maximum 8 players per team (5 playing, 3 substitutes). Teams must report 10 minutes before their match. Studs are not allowed.",
      "The decision of the referee is final. The winning team advances to the next round in the knockout tournament.",
    ],
  },
  {
    name: "Basketball",
    description: "Dynamic court competition with 5v5 action",
    logo: GiBasketballBasket,
    content: [
      "Basketball matches feature 5 players per side with up to 3 substitutes. Regular matches are 20 minutes (4 quarters of 5 minutes), while finals extend to 40 minutes (4 quarters of 10 minutes).",
      "All FIBA rules apply, including the 3-second rule and running clock throughout the match. Each team is allowed 2 timeouts per match.",
      "5 personal fouls result in a player's ejection. If a team commits four team fouls in the 4th quarter, each additional foul results in 2 free throws.",
      "Teams compete in a knockout format, with the strongest teams advancing to championship matches.",
    ],
  },
  {
    name: "Cricket",
    description: "Traditional cricket in fast-paced format",
    logo: BiCricketBall,
    content: [
      "Cricket matches feature 8 players on the field with a maximum of 3 substitutes. Games consist of 3 overs, while the final has 4 overs.",
      "All extras count except byes and LBWs. Each bowler can bowl a maximum of 1 over (except in the final where one bowler can bowl 2 overs).",
      "No-balls result in free hits. Only one bouncer is allowed per over; any additional bouncer is a no-ball.",
      "Matches are knockout-based with the umpire's decision being final. Misbehavior with the umpire may result in team disqualification.",
    ],
  },
  {
    name: "Volleyball",
    description: "High-flying net game with teamwork focus",
    logo: PiVolleyball,
    content: [
      "Volleyball matches are best-of-3 sets with each set won by reaching 25 points with a 2-point lead.",
      "Each team has 6 players (3 in front row, 3 in back row). Teams can touch the ball up to 3 times before returning it; no consecutive touches by the same player.",
      "Catching or holding the ball is not allowed. Let serves (net touches but lands in) are valid, while fault serves result in a retry.",
      "Competition focuses on teamwork, precision, and strategic play to advance through the tournament.",
    ],
  },
  {
    name: "Badminton",
    description: "Precision racquet sport",
    logo: GiShuttlecock,
    content: [
      "Badminton competition commences with a coin toss. The winner chooses either the side or first service.",
      "The side gallery is out of bounds, while the back gallery is in bounds. Service must be diagonal and land beyond the service line.",
      "For odd scores (1, 3, 5), serve from the left; for even scores, serve from the right. Service must be below waistline or it's a foul.",
      "Players compete in knockout format, with matches advancing through rounds of increasing difficulty and skill.",
    ],
  },
] as const;
