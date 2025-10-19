import { GiBasketballBasket } from "react-icons/gi";
import { GiSoccerKick } from "react-icons/gi";
import { BiCricketBall } from "react-icons/bi";
import { PiVolleyball } from "react-icons/pi";
import { GiShuttlecock } from "react-icons/gi";
import { GiSoccerBall } from "react-icons/gi";
import { GiFist } from "react-icons/gi";
import { GiChessKnight } from "react-icons/gi";
import { GiDiceSixFacesFive } from "react-icons/gi";
import { GiPoolTableCorner } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiTreasureMap } from "react-icons/gi";
import { GiPingPongBat } from "react-icons/gi";
import { GiRopeCoil } from "react-icons/gi";

export const committees = [
  {
    name: "Futsal",
    description: "Fast-paced indoor soccer action",
    logo: <GiSoccerKick className="size-7" />,
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
    logo: <GiBasketballBasket className="size-7" />,
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
    logo: <BiCricketBall className="size-7" />,
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
    logo: <PiVolleyball className="size-7" />,
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
    logo: <GiShuttlecock className="size-7" />,
    content: [
      "Badminton competition commences with a coin toss. The winner chooses either the side or first service.",
      "The side gallery is out of bounds, while the back gallery is in bounds. Service must be diagonal and land beyond the service line.",
      "For odd scores (1, 3, 5), serve from the left; for even scores, serve from the right. Service must be below waistline or it's a foul.",
      "Players compete in knockout format, with matches advancing through rounds of increasing difficulty and skill.",
    ],
  },
  {
    name: "FIFA",
    description: "Virtual football simulation",
    logo: <GiSoccerBall className="size-7" />,
    content: [
      "Matches consist of 4-minute halves (6-minute halves for the final). If the score reaches 4-0, the losing player is disqualified.",
      "Custom formations, tactics, and instructions are not allowed. Draws lead to penalty shootouts (no extra time).",
      "No pauses during active play. Injuries, handballs, and manual keeping are off. Game speed is set to 'Fast.'",
      "Default camera setting (unless both players agree otherwise). Matches are knockout-based. Participants must bring their own controllers.",
    ],
  },
  {
    name: "Tekken",
    description: "Fighting game tournament",
    logo: <GiFist className="size-7" />,
    content: [
      "3 rounds per match. Only default combos and characters are allowed (no DLC or unlocked versions).",
      "60 seconds per round. Stage selection is random. No pausing mid-game.",
      "Matches are knockout-based.",
    ],
  },
  {
    name: "Chess",
    description: "Strategic board game competition",
    logo: <GiChessKnight className="size-7" />,
    content: [
      "Each participant has 10 minutes per game, with a 3-minute increment. All moves must be made using only one hand.",
      "If a player touches their own piece, they must move it. If a player touches an opponent’s piece, they must capture it if legally possible.",
      "If two pieces are touched, the first touched piece must be moved if legal. Once a move is played, it cannot be taken back.",
      "Tie-breaks in order: Match points (Win = 2, Draw = 1, Loss = 0), Olympiad-Sonneborn-Berger system (excluding lowest result), total game points. An illegal move results in a 2-minute time penalty.",
    ],
  },
  {
    name: "Ludo",
    description: "Classic board game race",
    logo: <GiDiceSixFacesFive className="size-7" />,
    content: [
      "The game is played on a standard 4-player Ludo board. Players are randomly assigned colors corresponding to their turn order.",
      "Rolling a six allows a player to move a token out. The first player to get all tokens to the home point wins.",
      "Landing on an opponent's token sends it back to spawn and grants an extra turn. Rolling three consecutive sixes cancels the turn.",
      "A precise roll is needed to enter the home path; otherwise, the turn is canceled.",
    ],
  },
  {
    name: "Snooker",
    description: "Precision cue sport",
    logo: <GiPoolTableCorner className="size-7" />,
    content: [
      "A foul on the black when it's the only ball remaining does not decide the frame. A player can win if they have more points than the remaining table points plus two fouls.",
      "Free ball nomination is allowed under the supervision of the head of snooker. If a foul occurs and a re-shot is requested, the cue ball stays in place, and the fouler plays.",
      "Voluntary jumping of the ball is prohibited. Players must declare their chosen color after potting a red if unclear.",
      "No shot is allowed until all balls have stopped moving. No 'golden ball' rule applies. Double touch (push shot) is a foul.",
    ],
  },
  {
    name: "Strongman",
    description: "Strength-based challenges",
    logo: <GiWeightLiftingUp className="size-7" />,
    content: [
      "Push-up competitions will be 1-minute rounds. Participants may rest for up to 2 seconds between reps.",
      "Knees touching the ground results in disqualification. Half reps are not allowed.",
      "Arm-Wrestling has two categories: Free weight and Under 65kg. Dead-Lifting has two categories: Free weight and Under 65kg.",
    ],
  },
  {
    name: "Scavenger Hunt",
    description: "Team-based clue collection",
    logo: <GiTreasureMap className="size-7" />,
    content: [
      "All team members must stay together while finding a clue. Asking for assistance from other teams is not allowed.",
      "Phones are allowed during a round. The first team to collect all clues and provide them to the head moves to the next round.",
      "Leaving the building or interfering in other sports is not allowed. No assistance will be provided by the management.",
    ],
  },
  {
    name: "Table Tennis",
    description: "Fast-paced paddle sport",
    logo: <GiPingPongBat className="size-7" />,
    content: [
      "All matches except the final follow a knockout format. The final is best-of-3 sets.",
      "Players alternate serves every 2 points. The serve must be tossed at least 6 inches and bounce on both sides.",
      "A rally continues until a player fails to return the ball correctly. A ball hitting the net but landing correctly is a let and replayed.",
      "Double bounce results in losing the point. Unsportsmanlike behavior may lead to disqualification.",
    ],
  },
  {
    name: "Tug of War",
    description: "Team pulling competition",
    logo: <GiRopeCoil className="size-7" />,
    content: [
      "Each team is limited to a maximum of 8 players. Lowering an elbow below knee level is a foul.",
      "Cleated or metal shoes are prohibited. No substitutions once the match has started.",
      "Matches are played as a best of 3 rounds (separate matches for boys and girls).",
    ],
  },
] as const;
