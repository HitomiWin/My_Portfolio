import React from "react";
import { lato } from "@/app/ui/fonts";
import styles from "@/styles/about-hero-components.module.css";
import { IconAndUrl } from "@/app/ui/iconAndUrl";
import { Info } from "@/constants";

interface Props {
  infos: Array<Info>;
}
export function InfoList({ infos }: Props) {
  return (
    <div className={styles.profileContainer}>
      {infos.map(({ icon, url, name, title, period }) => (
        <div key={name}>
          <h3 className={styles.title}>
            {" "}
            <IconAndUrl icon={icon} url={url} name={name} />
          </h3>
          <div>
            <p className={`${lato.className} ${styles.title}`}>
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
