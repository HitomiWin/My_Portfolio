import React from "react";
import styles from "@/styles/skills.module.css";
import { skillsData, SkillsData } from "@/constants";

export function SkillsList() {
  return (
    <div className={styles.skillsList}>
      {skillsData.map(({ title, skills }) => (
        <div key={title} className={`${styles.skill}`}>
          <div className={styles.skillcard}>
            <h3 className={styles.title}>{title}</h3>
            <span>
              <Skill skills={skills} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Skill(skills: Pick<SkillsData, "skills">) {
  return (
    <ul>
      {skills.skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}
