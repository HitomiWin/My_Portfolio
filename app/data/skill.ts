export interface Skill {
  title: string;
  skills: Array<string>;
}

export const skillsData: Skill[] = [
  {
    title: "Programmig",
    skills: [
      "HTML",
      "CSS / Bootstrap / Saas",
      "JavaScript / TypeScript",
      "C#",
      "Node.js / Express",
    ],
  },
  {
    title: "Framewrok",
    skills: ["React", "Vue", "Next.js"],
  },
  {
    title: "Database",
    skills: ["GraphQL / Urql", "SQLite", "MongoDB", "Firebase"],
  },
  {
    title: "Others",
    skills: ["Git / GirHub / GitLab", "Jest", "Docker", "Jira"],
  },
  {
    title: "Language",
    skills: ["English", "Swedish", "Japanese"],
  },
];
