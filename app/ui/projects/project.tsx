import { ProjectsData } from "@/constants/projects";
import styles from "./project.module.css";
import Image from "next/image";
interface Props {
  project: ProjectsData;
}

export default function Project({ project }: Props) {
  const height = project.imageHeight / (project.imageWidth / 300);
  return (
    <div className={`${styles.container} wContainer`}>
      <div className={styles.text}>
        <h2>{project.id.toUpperCase()}</h2>
        <p>{project.skills.map((skill) => skill).join(" / ")}</p>
        <p>{project.description}</p>
      </div>
      <figure className={styles.img}>
        {/* <Image
        src={project.imagePath}
        alt="project image"
        width={project.imageWidth}
        height={project.imageHeight}
      /> */}
      </figure>
    </div>
  );
}
