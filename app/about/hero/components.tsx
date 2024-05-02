import Image from "next/image";
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
            priority={true}
          />
        </figure>
      </div>
    </section>
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
      <h3 className={styles.description}>{description}</h3>
      <div className={styles.iconAndUrlWrapper}>
        {socials.map(({ icon, url, name }, index) => (
          <IconAndUrl key={index} icon={icon} url={url} name={name} />
        ))}
      </div>
    </div>
  );
}
