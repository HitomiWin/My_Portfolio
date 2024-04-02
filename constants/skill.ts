export interface SkillsData {
  title: string;
  skills: Array<string>;
}

export const skillsData: Array<SkillsData> = [
  {
    title: "Programmig",
    skills: ["HTML", "JavaScript", "TypeScript", "C#", "Node.js"],
  },
  {
    title: "CSS",
    skills: ["Bootstrap", "Saas", "CSS-Modules", "Styled-Components"],
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
    skills: ["Git / GitHub / GitLab", "Jest", "Docker", "Jira"],
  },
  {
    title: "Language",
    skills: ["English", "Swedish", "Japanese"],
  },
];
