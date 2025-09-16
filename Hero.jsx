import React from "react";
import styles from "./Hero.module.css";
import Typewriter from "./Typewriter"; // Make sure this file exists in your components folder

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Animated "HELLO, I'M" */}
      <span className={`${styles.hello} ${styles["typewriter-cursor"]}`}>
        <Typewriter text="• HELLO, I'M" speed={70} />
      </span>
      <h1>
        {/* Animated Name with line break */}
        <span className={`${styles.name} ${styles["typewriter-cursor"]}`}>
          <Typewriter text={"Lakshmi Narayana Kakumanu"} speed={65} />
        </span>
      </h1>
      <h2 className={styles.role}>Vibe Coder, Automation Builder,Python Developer,AI Consultant,</h2>
      <p className={styles.desc}>
        Building scalable web applications and workflow automation solutions
      </p>
      <div className={styles.buttons}>
        <a href="#projects" className={styles.primary}>View My Work →</a>
        <a href="#contact" className={styles.secondary}>Get In Touch</a>
      </div>
    </section>
  );
}
