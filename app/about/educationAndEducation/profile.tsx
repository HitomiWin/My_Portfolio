import React from "react";
import { montserrat } from "@/app/ui/fonts";
import styles from "@/styles/about-hero-components.module.css";
import { InfoList } from "./components";
import { Info } from "@/constants";

interface Props {
  category: string;
  profile: Array<Info>;
}
export default function Profile({ category, profile }: Props) {
  return (
    <div className={styles[category]}>
      <div className="wContainer">
        <h2 className={`${styles.heading} ${montserrat.className}`}>
          {category.toLocaleUpperCase()}
        </h2>
        <InfoList infos={profile} />
      </div>
    </div>
  );
}
