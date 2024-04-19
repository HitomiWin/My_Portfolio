export interface Skills {
  title: string;
  items: Array<string>;
}

export const skills: Array<Skills> = [
  {
    title: "Programming",
    items: ["HTML", "JavaScript", "TypeScript", "C#", "Node.js"],
  },
  {
    title: "CSS",
    items: ["Bootstrap", "Saas", "CSS-Modules", "Styled-Components"],
  },
  {
    title: "Framewrok",
    items: ["React", "Vue", "Next.js"],
  },
  {
    title: "Database",
    items: ["GraphQL / Urql", "SQLite", "MongoDB", "Firebase"],
  },
  {
    title: "Others",
    items: ["Git / GitHub / GitLab", "Jest", "Docker", "Jira"],
  },
  {
    title: "Language",
    items: ["English", "Swedish", "Japanese"],
  },
];
