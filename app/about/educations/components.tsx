import React from "react";
import { lato } from "@/app/ui/fonts";
import styles from "@/styles/about-hero-components.module.css";
import { IconAndUrl } from "@/app/ui/iconAndUrl";
import { educations } from "@/constants";

export function EducationList() {
  return (
    <div className={styles.container}>
      {educations.map(({ icon, url, name, title, period }) => (
        <div key={name}>
          <h2 className={styles.title}>
            {" "}
            <IconAndUrl icon={icon} url={url} name={name} />
          </h2>
          <div>
            <p className={`${lato.className} ${styles.jobTitle}`}>
              {title.toLocaleUpperCase()}
            </p>
            <p className={`${lato.className} ${styles.period}`}>
              {period.toLocaleUpperCase()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
