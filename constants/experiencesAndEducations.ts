import {
  faBuilding,
  faGraduationCap,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export interface Info {
  url: string;
  icon: IconDefinition;
  name: string;
  title: string;
  period: string;
}
type Infos = Array<Info>;

export const experiences: Infos = [
  {
    url: "https://www.axis.com/",
    icon: faBuilding,
    name: "Axis Communicatioins AB",
    title: "Front end developer",
    period: "January 2022 - Present",
  },
];
export const educations: Infos = [
  {
    url: "https://medieinstitutet.se/",
    icon: faGraduationCap,
    name: "Medieinstitutet Malmö",
    title: "Front end developer",
    period: "August 2020 - May 2022",
  },
];
