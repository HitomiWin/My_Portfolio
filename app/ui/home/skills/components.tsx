import React from "react";
import styles from "./skills.module.css";
import { skillsData, SkillsData } from "@/app/data/skill";

export function SkillsList() {
  return (
    <div className={styles.skillsList}>
      {skillsData.map(({ title, skills }) => (
        <div key={title} className={styles.skillcard}>
          <span>
            <h3 className={styles.title}>{title}</h3>
            <Skill skills={skills} />
          </span>
        </div>
      ))}
    </div>
  );
}

function Skill(skills: Pick<SkillsData, "skills">) {
  return (
    <ul>
      {skills.skills.map((skill, index) => (
        <li className={styles.skillItem} key={index}>
          {skill}
        </li>
      ))}
    </ul>
  );
}
