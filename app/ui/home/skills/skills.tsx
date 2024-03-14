import React from "react";
import styles from "./skills.module.css";
import { SkillsList } from "./components";
export default function Skills() {
  return (
    <section className={`fullContainer backgroundPink`}>
      <div className={`${styles.container} wContainer `}>
        <h2>Skills</h2>
        <SkillsList />
      </div>
    </section>
  );
}
