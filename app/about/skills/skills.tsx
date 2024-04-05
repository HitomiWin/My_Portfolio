import React from "react";
import { SkillsList } from "./components";
export default function Skills() {
  return (
    <section className={`backgroundPink`}>
      <div className={`wContainer`}>
        <h1>Skills</h1>
        <SkillsList />
      </div>
    </section>
  );
}
