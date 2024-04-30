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
      "I have developed a movie search app using The Movie Database (TMDB) API. It allows users to search for movies by cast, title, genre, and trending categories.",
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

    imagePath: "/movie.jpg",
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
    imagePath: "/practical-react-components.jpg",
    imageWidth: 1519,
    imageHeight: 870,
  },
];
