import styles from "../page.module.css";
import Hero from "@/app/about/hero/hero";
import Skills from "./skills/skills";

export default function Page() {
  return (
    <main className={styles.main}>
      <Hero />
      <Skills />
    </main>
  );
}
