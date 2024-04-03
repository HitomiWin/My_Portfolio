import { ProjectsData } from "@/constants/progects";
import Image from "next/image";
interface Props {
  project: ProjectsData;
}

export default function Project({ project }: Props) {
  const height = project.imageHeight / (project.imageWidth / 300);
  return (
    <div>
      <Image
        src={project.imagePath}
        alt="project image"
        width={project.imageWidth}
        height={project.imageHeight}
      />
    </div>
  );
}
