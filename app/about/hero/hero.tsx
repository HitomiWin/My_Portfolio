import React from "react";
import { AboutHero } from "./components";
import styles from "@/styles/about-hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.hero}`}>
      <AboutHero />
    </section>
  );
}
