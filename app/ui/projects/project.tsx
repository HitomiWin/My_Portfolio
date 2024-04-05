import { ProjectsData } from "@/constants/projects";
import styles from "./project.module.css";
import Image from "next/image";
interface Props {
  project: ProjectsData;
  index: number;
}

export default function Project({ project, index }: Props) {
  const isOdd = index % 2 === 1;

  return (
    <section className={styles.imgtext}>
      <div
        className={`${styles.container} ${isOdd ? styles.reverse : ""} wContainer`}
      >
        <div className={styles.text}>
          <h2 className="headingDecoration">{project.id.toUpperCase()}</h2>
          <p>{project.skills.map((skill) => skill).join(" / ")}</p>
          <p>{project.description}</p>
        </div>
        <figure className={styles.img}>
          <Image
            src={project.imagePath}
            alt="project image"
            width={project.imageWidth}
            height={project.imageHeight}
            priority={false}
          />
        </figure>
      </div>
    </section>
  );
}
