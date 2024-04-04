export interface ProjectsData {
  readonly id: string;
  readonly description: string;
  readonly skills: Array<string>;
  readonly githubUrl: string;
  readonly deployUrl: string;
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
    githubUrl: "https://github.com/HitomiWin/typescript_movie",
    deployUrl: "https://movie-hitomi.netlify.app",
    imagePath: "/movie.png",
    imageWidth: 1435,
    imageHeight: 876,
  },
  // {
  //   id: "practical-react-component",
  //   description:
  //     "A catalogue of React components focused on ease-of-use. I'm fixing buggs as a contoributor",
  //   skills: ["TypeScript", "React", "Jest", "MDX", "Cypress", "Formik"],
  //   githubUrl:
  //     "https://github.com/AxisCommunications/practical-react-components",
  //   deployUrl:
  //     "https://axiscommunications.github.io/practical-react-components/",
  //   imagePath: "/practical-react-components.png",
  //   imageWidth: 1519,
  //   imageHeight: 870,
  // },
];
