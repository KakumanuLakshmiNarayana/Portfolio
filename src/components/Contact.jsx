import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
import { fadeInUp, staggerContainer, staggerItem, buttonHover, buttonTap } from '../utils/animations';
import useReducedMotion from '../hooks/useReducedMotion';
import styles from "./Contact.module.css";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection 
      id="contact" 
      className={styles.contact}
      variants={fadeInUp}
    >
      <motion.h2
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>
      <motion.div 
        className={styles.cta}
        initial={prefersReducedMotion ? {} : "hidden"}
        whileInView={prefersReducedMotion ? {} : "visible"}
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.a 
          href="mailto:avinari32@gmail.com" 
          className={styles.emailButton}
          variants={staggerItem}
          whileHover={prefersReducedMotion ? {} : buttonHover}
          whileTap={prefersReducedMotion ? {} : buttonTap}
        >
          <FaEnvelope className={styles.icon} />
          avinari32@gmail.com
        </motion.a>
        <motion.a
          href="https://github.com/KakumanuLakshmiNarayana"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ghButton}
          variants={staggerItem}
          whileHover={prefersReducedMotion ? {} : buttonHover}
          whileTap={prefersReducedMotion ? {} : buttonTap}
        >
          <FaGithub className={styles.icon} />
          GitHub
        </motion.a>
      </motion.div>
      <motion.div 
        className={styles.socials}
        initial={prefersReducedMotion ? {} : "hidden"}
        whileInView={prefersReducedMotion ? {} : "visible"}
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.a 
          href="https://www.linkedin.com/in/lakshminarayanakakumanu/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.socialLink}
          variants={staggerItem}
          whileHover={prefersReducedMotion ? {} : { 
            scale: 1.1, 
            rotate: 5,
            transition: { duration: 0.2 }
          }}
        >
          <FaLinkedin className={styles.socialIcon} />
          LinkedIn
        </motion.a>
      </motion.div>
    </AnimatedSection>
  );
}