"use client";
import { usePathname } from "next/navigation";
import Hero from "@/app/about/hero/hero";
import Skills from "./skills/skills";
import Profile from "./educationAndEducation/profile";
import { experiences, educations } from "@/constants";

export default function Page() {
  const pathname = usePathname();
  const headerStyle = pathname.substring(1);
  const profiles = [
    { category: "experience", profile: experiences },
    { category: "education", profile: educations },
  ];

  return (
    <main className={headerStyle}>
      <Hero />
      <Skills />
      {profiles.map((profile, index) => (
        <Profile
          category={profile.category}
          profile={profile.profile}
          key={index}
        />
      ))}
    </main>
  );
}
