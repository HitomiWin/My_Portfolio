import {
  faSquareGithub,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export enum ICategoryType {
  contact = "contact",
  social = "social",
}
export interface ContactsData {
  id: string;
  icon: IconDefinition;
  url: string;
  category: ICategoryType;
  name: string;
}

export interface HeroData {
  greeting: string;
  message: string;
}

export interface AboutHeroText {
  title: string;
  subTitle: string;
  description: string;
}

export const heroData: HeroData = {
  greeting: "Hi, I am Hitomi Winberg 👋",
  message:
    "As a front-end developer, my motto is crafting efficient, clutter-freecode. Ensuring users navigate seamlessly to the information they seek without any inconvenience.",
};

export const aboutHeroText: AboutHeroText = {
  title: "Hitomi Winberg",
  subTitle: "Front End Developer",
  description:
    "I am a front-end developer. To live the life I love, I am currently facing my biggest challenge in life. I believe in the power of new technologies to make people's lives easier.",
};

export const contactsData: Array<ContactsData> = [
  {
    id: "mail",
    icon: faEnvelope,
    url: "hitomi.winberg@gmail.com",
    category: ICategoryType.contact,
    name: "Mail",
  },
  {
    id: "github",
    icon: faSquareGithub,
    url: "https://github.com/HitomiWin",
    category: ICategoryType.social,
    name: "GitHub",
  },
  {
    id: "linkedin",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/hitomi-winberg-8880b214a/",
    category: ICategoryType.social,
    name: "LinkedIn",
  },
];
