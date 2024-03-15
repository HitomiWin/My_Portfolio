import styles from "./page.module.css";
import Hero from "@/app/ui/home/hero/hero";
import Skills from "./ui/home/skills/skills";
import Projects from "./ui/home/projects/projects";

export default function Page() {
  return (
    <main className={styles.main}>
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}
