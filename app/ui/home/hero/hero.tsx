import React from "react";
import { HeroMyImage, Icons } from "./components";
import styles from "./hero.module.css";
export default function Hero() {
  return (
    <section className={`fullContainer`}>
      <div className={`${styles.container} wContainer  `}>
        <HeroMyImage />
        <h3 className={[styles.fadeText, styles.fadeIn].join(" ")}>
          Front-End-Developer
        </h3>
        <h1 className={[styles.fadeText, styles.fadeIn].join(" ")}>
          Hitomi Winberg
        </h1>
        <Icons />
      </div>
    </section>
  );
}
