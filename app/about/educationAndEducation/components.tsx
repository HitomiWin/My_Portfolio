import React from "react";
import { lato } from "@/app/ui/fonts";
import styles from "@/styles/about-hero-components.module.css";
import { IconAndUrl } from "@/app/ui/iconAndUrl";
import { Info } from "@/constants";

interface Props {
  infos: Array<Info>;
}
export function InfoList({ infos }: Props) {
  console.log(infos);
  return (
    <div className={styles.container}>
      {infos.map(({ icon, url, name, title, period }) => (
        <div key={name}>
          <h2 className={styles.title}>
            {" "}
            <IconAndUrl icon={icon} url={url} name={name} />
          </h2>
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
