import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaExternalLinkAlt } from "react-icons/fa";
import AnimatedSection from './AnimatedSection';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import useReducedMotion from '../hooks/useReducedMotion';
import styles from "./Projects.module.css";

const GITHUB_USERNAME = "KakumanuLakshmiNarayana";
const NO_DESCRIPTION_TEXT = "No description available";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    async function fetchRepos() {
      setLoading(true);
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
      );
      const data = await res.json();
      setRepos(
        Array.isArray(data)
          ? data.filter(r => !r.fork && !r.private)
          : []
      );
      setLoading(false);
    }
    fetchRepos();
  }, []);

  return (
    <AnimatedSection 
      id="projects" 
      className={styles.projects}
      variants={fadeInUp}
      as="section"
    >
      <motion.h2
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      {loading && (
        <motion.p 
          className={styles.loading}
          animate={prefersReducedMotion ? {} : {
            opacity: [0.5, 1, 0.5],
          }}
          transition={prefersReducedMotion ? {} : {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading projects...
        </motion.p>
      )}
      {!loading && (
        <motion.div 
          className={styles.list}
          initial={prefersReducedMotion ? {} : "hidden"}
          whileInView={prefersReducedMotion ? {} : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {repos.length === 0 && <p>No public repositories found.</p>}
          {repos.map(repo => (
            <motion.div 
              key={repo.id} 
              className={styles.card}
              variants={staggerItem}
              whileHover={prefersReducedMotion ? {} : {
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className={styles.cardGlow}></div>
              <div className={styles.title}>{repo.name}</div>
              <p className={styles.desc}>{repo.description || NO_DESCRIPTION_TEXT}</p>
              <div className={styles.meta}>
                {repo.language && (
                  <span className={styles.language}>
                    <span className={styles.languageDot}></span>
                    {repo.language}
                  </span>
                )}
                <span className={styles.stars}>
                  <FaStar className={styles.starIcon} />
                  {repo.stargazers_count}
                </span>
                <span className={styles.updated}>
                  Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
              <div className={styles.links}>
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewLink}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                >
                  View on GitHub <FaExternalLinkAlt />
                </motion.a>
                {repo.name.toLowerCase() === "finsight" && (
                  <motion.a
                    href="https://finsight.fun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.websiteLink}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                  >
                    Website <FaExternalLinkAlt />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatedSection>
  );
}