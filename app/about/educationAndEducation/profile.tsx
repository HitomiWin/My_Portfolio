import React from "react";
import styles from "@/styles/about-hero-components.module.css";
import { InfoList } from "./components";
import { Info } from "@/constants";
import IconAndHeading from "@/app/ui/IconAndHeading";

interface Props {
  category: string;
  profile: Array<Info>;
}
export default function Profile({ category, profile }: Props) {
  return (
    <div className={styles[category]}>
      <div className="wContainer">
        <IconAndHeading title={category} />
        <InfoList infos={profile} />
      </div>
    </div>
  );
}
