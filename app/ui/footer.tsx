"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Contacts from "./home/components/contacts";
import styles from "@/styles/footer.module.css";

export default function Footer() {
  const pathname = usePathname();
  const headerStyle = pathname.substring(1);
  return (
    <footer className={`${styles.footer} ${headerStyle ?? ""}`}>
      <div className={`${styles.container} wContainer`}>
        <Contacts />
      </div>
    </footer>
  );
}
