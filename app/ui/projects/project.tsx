import { ProjectsData } from "@/constants/projects";
import styles from "@/styles/project.module.css";
import Image from "next/image";
import { IconAndUrl } from "../iconAndUrl";
interface Props {
  project: ProjectsData;
  index: number;
}

export default function Project({ project, index }: Props) {
  const isOdd = index % 2 === 1;
  const sites = [project.github, project.link];
  return (
    <section className={styles.imgtext}>
      <div
        className={`${styles.container} ${isOdd ? styles.reverse : ""} wContainer`}
      >
        <div className={styles.text}>
          <h2 className="headingDecoration">{project.id.toUpperCase()}</h2>
          <p>{project.skills.map((skill) => skill).join(" / ")}</p>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.iconAndUrlWrapper}>
            {sites.map(({ icon, url, name }, index) => (
              <IconAndUrl key={index} icon={icon} url={url} name={name} />
            ))}
          </div>
        </div>
        <figure className={styles.img}>
          <Image
            src={project.imagePath}
            alt="project image"
            width={project.imageWidth}
            height={project.imageHeight}
            priority={true}
          />
        </figure>
      </div>
    </section>
  );
}
