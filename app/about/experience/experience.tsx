import React from "react";
import { montserrat } from "@/app/ui/fonts";
import styles from "@/styles/about-hero-components.module.css";
import { ExperienceList } from "./components";
export default function Experience() {
  return (
    <div className={styles.experience}>
      <div className="wContainer">
        <h2 className={`${styles.heading} ${montserrat.className}`}>
          EXPERIENCE
        </h2>
        <ExperienceList />
      </div>
    </div>
  );
}
