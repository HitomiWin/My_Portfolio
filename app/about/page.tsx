"use client";
import { usePathname } from "next/navigation";
import Hero from "@/app/about/hero/hero";
import Skills from "./skills/skills";
import Experience from "./experience/experience";
import Educations from "./educations/educations";
export default function Page() {
  const pathname = usePathname();
  const headerStyle = pathname.substring(1);
  return (
    <main className={headerStyle}>
      <Hero />
      <Skills />
      <Experience />
      <Educations />
    </main>
  );
}
