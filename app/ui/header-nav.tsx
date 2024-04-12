"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NavLinks from "./nav-links";
import styles from "@/styles/header-nav.module.css";

export default function HeaderNav() {
  const pathname = usePathname();
  const headerStyle = pathname.substring(1);
  return (
    <header className={`${styles.header} ${headerStyle ?? ""}`}>
      <div className={`${styles.container} wContainer`}>
        <NavLinks />
      </div>
    </header>
  );
}
