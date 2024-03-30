import React from "react";
import NavLinks from "./nav-links";
import styles from "./header-nav.module.css";

export default function HeaderNav() {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.container} wContainer`}>
        <NavLinks />
      </div>
    </header>
  );
}
