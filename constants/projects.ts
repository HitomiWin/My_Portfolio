import {
  faSquareGithub,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
interface Site {
  readonly url: string;
  readonly icon: IconDefinition;
  readonly name: string;
}
enum IText {
  github = "GitHub",
  link = "Live Site",
}

export interface ProjectsData {
  readonly id: string;
  readonly description: string;
  readonly skills: Array<string>;
  readonly github: Site;
  readonly link: Site;
  readonly imagePath: string;
  readonly imageWidth: number;
  readonly imageHeight: number;
}

export const projectData: Array<ProjectsData> = [
  {
    id: "movie",
    description:
      "Discover what's trending daily and weekly, explore movies by title or cast, read detailed biographies of individuals, and delve into movie descriptions. Easily search by genre, all on a responsive platform accessible across all devices.",
    skills: [
      "TypeScript",
      "React",
      "Sass",
      "React-query",
      "React-testing-library",
    ],
    github: {
      url: "https://github.com/HitomiWin/typescript_movie",
      icon: faSquareGithub,
      name: IText.github,
    },
    link: {
      url: "https://movie-hitomi.netlify.app",
      icon: faArrowUpRightFromSquare,
      name: IText.link,
    },

    imagePath: "/movie.png",
    imageWidth: 1435,
    imageHeight: 876,
  },
  {
    id: "practical-react-component",
    description:
      "A catalogue of React components focused on ease-of-use. I'm fixing buggs as a contoributor",
    skills: ["TypeScript", "React", "Jest", "MDX", "Cypress", "Formik"],
    github: {
      url: "https://github.com/AxisCommunications/practical-react-components",
      icon: faSquareGithub,
      name: IText.github,
    },
    link: {
      url: "https://axiscommunications.github.io/practical-react-components/",
      icon: faArrowUpRightFromSquare,
      name: IText.link,
    },
    imagePath: "/practical-react-components.png",
    imageWidth: 1519,
    imageHeight: 870,
  },
];
