"use client";
import React from "react";
import Contacts from "./contacts";
import styles from "@/styles/hero.module.css";
import { heroData } from "@/constants";

export default function Hero() {
  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.container} wContainer`}>
        <h1>
          {heroData.greeting} <br />
          {heroData.message}
        </h1>
        <Contacts />
      </div>
    </section>
  );
}
