import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import styles from "./components.module.css";

export function HeroMyImage() {
  return (
    <div>
      <Image
        className={"circleImg"}
        src="/IMG_5640.JPG"
        width={150}
        height={150}
        alt="Picture of the author"
        priority={false}
      />
    </div>
  );
}

export function Icons() {
  return (
    <div>
      <ul className={styles.iconList}>
        <li>
          <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} size="2xl" />
        </li>
      </ul>
    </div>
  );
}
