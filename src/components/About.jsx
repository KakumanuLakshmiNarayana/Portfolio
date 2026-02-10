import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCog, FaTools } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import useReducedMotion from '../hooks/useReducedMotion';
import styles from "./About.module.css";

const skills = [
  { icon: <FaCode />, text: '🛠️ TypeScript, React, Node.js' },
  { icon: <FaDatabase />, text: '🗄️ Express, MongoDB, SQL' },
  { icon: <FaCog />, text: '🔄 Git, CI/CD, Automation' },
  { icon: <FaTools />, text: '🧰 Python, Shell Scripting, REST APIs, Vibe Coding, N8N Automation' }
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection 
      id="about" 
      className={styles.about}
      variants={fadeInUp}
    >
      <motion.h2
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h2>
      <div className={styles.content}>
        <motion.div
          initial={prefersReducedMotion ? {} : "hidden"}
          whileInView={prefersReducedMotion ? {} : "visible"}
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p variants={staggerItem}>
            I am a passionate Vibe Code developer focused on building scalable web applications and workflow automation solutions. I enjoy working with modern web technologies and love to solve real-world problems with Vibe coding and No Code Automations.
          </motion.p>
          <motion.ul 
            className={styles.skillsList}
            variants={staggerContainer}
          >
            {skills.map((skill, index) => (
              <motion.li 
                key={index}
                variants={staggerItem}
                className={styles.skillItem}
                whileHover={prefersReducedMotion ? {} : { 
                  scale: 1.05, 
                  x: 10,
                  transition: { duration: 0.2 }
                }}
              >
                <span className={styles.skillIcon}>{skill.icon}</span>
                {skill.text}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
