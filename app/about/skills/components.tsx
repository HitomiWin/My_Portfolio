import React from "react";
import { lato } from "@/app/ui/fonts";
import styles from "@/styles/about-hero-components.module.css";
import { skills, Skills } from "@/constants";

export function SkillsList() {
  return (
    <div className={styles.container}>
      {skills.map(({ title, items }) => (
        <div key={title}>
          <h2 className={styles.title}>{title.toLocaleUpperCase()}...</h2>
          <Skill items={items} />
        </div>
      ))}
    </div>
  );
}

function Skill(skills: Pick<Skills, "items">) {
  return (
    <ul>
      {skills.items.map((item, index) => (
        <li key={index} className={`${lato.className} ${styles.item}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
