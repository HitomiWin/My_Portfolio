import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import styles from "@/styles/about-hero.module.css";
import { IconAndUrl } from "@/app/ui/iconAndUrl";
import { ICategoryType, aboutHeroText, contactsData } from "@/constants";

export function AboutHero() {
  return (
    <section className={styles.imgtext}>
      <div className={`${styles.container} wContainer`}>
        <HeroText />
        <figure className={styles.img}>
          <Image
            src="/IMG_5640.JPG"
            width={300}
            height={300}
            alt="Picture of the author"
            priority={false}
          />
        </figure>
      </div>
    </section>
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

export function HeroText() {
  const socials = contactsData.filter(
    ({ category }) => category === ICategoryType.social,
  );
  const { title, subTitle, description } = aboutHeroText;
  return (
    <div className={styles.text}>
      <h2 className="headingDecoration">{title.toLocaleUpperCase()}</h2>
      <p>{subTitle.toLocaleUpperCase()}</p>
      <p>{description}</p>
      <div className={styles.iconAndUrlWrapper}>
        {socials.map(({ icon, url, name }, index) => (
          <IconAndUrl key={index} icon={icon} url={url} name={name} />
        ))}
      </div>
    </div>
  );
}
