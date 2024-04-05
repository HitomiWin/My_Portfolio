"use client";
import Project from "./project";
import { projectData } from "@/constants";
import styles from "./project.module.css";

export default function Projects() {
  return (
    <div className={styles.projects}>
      {projectData.map((project, index) => (
        <Project project={project} index={index} key={project.id} />
      ))}
    </div>
  );
}
