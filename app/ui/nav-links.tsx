"use client";
import Link from "next/link";
import styles from "@/styles/header-nav.module.css";

const links = [
  { name: "Hitomi Winberg", href: "/" },
  { name: "About", href: "/about" },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <Link
          prefetch={false}
          key={link.name}
          href={link.href}
          className={styles.nav}
        >
          <p className={styles.navtext}>{link.name.toLocaleUpperCase()}</p>
        </Link>
      ))}{" "}
    </>
  );
}
