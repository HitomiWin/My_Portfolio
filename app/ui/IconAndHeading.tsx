import React from "react";
import { GiImperialCrown } from "react-icons/gi";
import { montserrat } from "@/app/ui/fonts";
import styles from "@/styles/about-hero-components.module.css";

interface Props {
  title: string;
}
export default function IconAndHeading({ title }: Props) {
  return (
    <h2 className={`${styles.heading} ${montserrat.className}`}>
      <GiImperialCrown /> {title.toLocaleUpperCase()}
    </h2>
  );
}
