import React from "react";
import { SkillsList } from "./components";
import styles from "@/styles/about-hero-components.module.css";
import IconAndHeading from "@/app/ui/IconAndHeading";
export default function Skills() {
  return (
    <div className={styles.skills}>
      <div className="wContainer">
        <IconAndHeading title={"skills"} />
        <SkillsList />
      </div>
    </div>
  );
}
