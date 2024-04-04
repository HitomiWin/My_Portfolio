"use client";
import Project from "./project";
import { projectData } from "@/constants";
import styles from "./project.module.css";

export default function Projects() {
  return (
    <section className={styles.imgtext}>
      {projectData.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </section>
  );
}
