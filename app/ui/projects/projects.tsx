"use client";
import Project from "./project";
import { projectData } from "@/constants";
import styles from "./project.module.css";

export default function Projects() {
  return (
    <section className={`${styles.container} wContainer`}>
      {projectData.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </section>
  );
}
