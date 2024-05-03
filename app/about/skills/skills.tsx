import React from "react";
import { montserrat } from "@/app/ui/fonts";
import { SkillsList } from "./components";
import { GiImperialCrown } from "react-icons/gi";
import styles from "@/styles/about-hero-components.module.css";
export default function Skills() {
  return (
    <div className={styles.skills}>
      <div className="wContainer">
        <h2 className={`${styles.heading} ${montserrat.className}`}>
          <GiImperialCrown /> SKILLS
        </h2>
        <SkillsList />
      </div>
    </div>
  );
}
