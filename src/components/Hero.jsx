import React from "react";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import { heroTextContainer, heroTextItem, buttonHover, buttonTap } from "../utils/animations";
import useReducedMotion from "../hooks/useReducedMotion";
import styles from "./Hero.module.css";
import Typewriter from "./Typewriter";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const HeroContent = () => (
    <>
      {/* Animated "HELLO, I'M" */}
      <motion.span 
        className={`${styles.hello} ${styles["typewriter-cursor"]}`}
        variants={heroTextItem}
      >
        <Typewriter text="• HELLO, I'M" speed={70} />
      </motion.span>
      <motion.h1 variants={heroTextItem}>
        {/* Animated Name with gradient */}
        <span className={`${styles.name} ${styles["typewriter-cursor"]}`}>
          <Typewriter text={"Lakshmi Narayana Kakumanu"} speed={65} />
        </span>
      </motion.h1>
      <motion.h2 className={styles.role} variants={heroTextItem}>
        Vibe Coder, Automation Builder, Python Developer, AI Consultant.
      </motion.h2>
      <motion.p className={styles.desc} variants={heroTextItem}>
        Building scalable web applications and workflow automation solutions
      </motion.p>
      <motion.div className={styles.buttons} variants={heroTextItem}>
        <motion.a 
          href="#projects" 
          className={styles.primary}
          whileHover={prefersReducedMotion ? {} : buttonHover}
          whileTap={prefersReducedMotion ? {} : buttonTap}
        >
          View My Work <FaRocket className={styles.icon} />
        </motion.a>
        <motion.a 
          href="#contact" 
          className={styles.secondary}
          whileHover={prefersReducedMotion ? {} : buttonHover}
          whileTap={prefersReducedMotion ? {} : buttonTap}
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </>
  );

  if (prefersReducedMotion) {
    return (
      <section className={styles.hero} id="home">
        <HeroContent />
      </section>
    );
  }

  return (
    <motion.section 
      className={styles.hero} 
      id="home"
      initial="hidden"
      animate="visible"
      variants={heroTextContainer}
    >
      <HeroContent />
    </motion.section>
  );
}
