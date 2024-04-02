import { ProjectsData } from "@/constants/progects";
import Image from "next/image";
interface Props {
  project: ProjectsData;
}

const defaultWidth = 500;
export default function Project({ project }: Props) {
  const height = project.imageHeight / (project.imageWidth / defaultWidth);
  return (
    <div>
      <Image
        src={project.imagePath}
        alt="project image"
        width={defaultWidth}
        height={height}
      />
    </div>
  );
}
