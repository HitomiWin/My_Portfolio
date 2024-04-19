import React from "react";
import { montserrat } from "@/app/ui/fonts";
import styles from "@/styles/about-hero-components.module.css";
import { EducationList } from "./components";
export default function Educations() {
  return (
    <div className={styles.education}>
      <div className="wContainer">
        <h2 className={`${styles.heading} ${montserrat.className}`}>
          EDUCATION
        </h2>
        <EducationList />
      </div>
    </div>
  );
}
