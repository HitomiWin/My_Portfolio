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
