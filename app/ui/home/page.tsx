import React from "react";
import styles from "./home.module.css";
import { Icons } from "@/app/about/hero/components";
import Contacts from "./contacts";

export default function Home() {
  return (
    <div className={`${styles.container} wContainer`}>
      <div>
        <p className={styles.text}>
          Hi, I am Hitomi Winberg! <br />
          As a front-end developer, my motto is crafting efficient, clutter-free
          code. Ensuring users navigate seamlessly to the information they seek
          without any inconvenience.{" "}
        </p>
      </div>
      <Contacts />
    </div>
  );
}
