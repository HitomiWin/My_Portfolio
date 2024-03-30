import styles from "./page.module.css";
import Home from "./ui/home/page";

export default function Page() {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
}
