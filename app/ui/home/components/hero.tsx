import React from "react";
import Contacts from "./contacts";
import styles from "../home.module.css";

export default function Hero() {
  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.container} wContainer`}>
        <h1>
          Hi, I am Hitomi Winberg! <br />
          As a front-end developer, my motto is crafting efficient, clutter-free
          code. Ensuring users navigate seamlessly to the information they seek
          without any inconvenience.{" "}
        </h1>
        <Contacts />
      </div>
    </section>
  );
}
