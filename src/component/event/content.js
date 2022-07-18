import OG from "./image/OG Bonding Day.png";
import Duel from "./image/Duel.jpg";
import Outdoor from "./image/Outdoor Games.jpg";
import Night from "./image/Night.jpeg";
import Awards from "./image/Awards Night.jpg";
import Super from "./image/Super.jpeg";
import Day0 from "./image/Day 0.png";
import Day1 from "./image/Day 1.png";
import Day2 from "./image/Day 2.png";
import Day3 from "./image/Day 3.png";

const content = [
  {
    id: 1,
    days: Day0,
    content: [
      {
        id: 0,
        image: OG,
        title: "OG Bonding Day",
        description:
          "Participants are introduced to their fellow groupmates and group leaders. Bonding sessions will be conducted as led by respective group leaders to ignite unity that they will carry forward.",
      },
    ],
  },
  {
    id: 2,
    days: Day1,
    content: [
      {
        id: 1,
        image: Super,
        title: "Super GTD",
        description:
          "Taking inspiration from the famous TV Show Deal or No Deal, in this activity, participants within their own groups would play a series of bids, barters, and guessing games with the objective of having the most game cash at the end of the game.",
      },
      {
        id: 2,
        image: Night,
        title: "Night Games",
        description:
          "Participants would be invited to become detectives, solving riddles which would bring them to game stations located in NTU. The horror-themed games bond the newly formed groups of freshmen and seniors, introducing them to places in NTU and its hidden gems.",
      },
    ],
  },
  {
    id: 3,
    days: Day2,
    content: [
      {
        id: 3,
        image: Duel,
        title: "Duel Games",
        description:
          "Using a tournament format, participants would be competing in orientation groups to conquer other orientation groups through partaking in duel games. Each orientation group will have to defeat the opposing group with the aim of getting the top ranks in this game. The top ranks of this game would then be given awards during the awards night on the last day.",
      },
    ],
  },
  {
    id: 4,
    days: Day3,
    content: [
      {
        id: 4,
        image: Outdoor,
        title: "Outdoor Games",
        description:
          "Participants in groups of 5 would be playing station games which are dispersed into 4 venues in Singapore. The venues would be nature reserves or parks which are able to cater the number of participants we have without crowding and sticking to the safe management measures. The aim of this game would be to score as many points in every station. The best groups would be awarded in the Awards Night following this activity.",
      },
      {
        id: 5,
        image: Awards,
        title: "Awards Night",
        description:
          "This serves as the peak of Get Together Day and acts as the start of everlasting friendships formed during the event. Outstanding groups would be given awards to recognise their efforts in partaking and having worked well together within their groups. Awards Night is planned to be held at SCAPE The TreeTop. Performances by the orientation groups and the committee would be showcased during this time.",
      },
    ],
  },
];
export default content;
