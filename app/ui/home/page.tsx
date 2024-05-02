"use client";
import React from "react";

import Hero from "./components/hero";
import Projects from "../projects/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
    </div>
  );
}
