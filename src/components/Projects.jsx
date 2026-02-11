import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaExternalLinkAlt, FaMapMarkerAlt, FaRocket } from "react-icons/fa";
import AnimatedSection from './AnimatedSection';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import useReducedMotion from '../hooks/useReducedMotion';
import styles from "./Projects.module.css";

const GITHUB_USERNAME = "KakumanuLakshmiNarayana";
const NO_DESCRIPTION_TEXT = "No description available";

// Sample projects for demonstration when API is unavailable
const SAMPLE_PROJECTS = [
  {
    id: 1,
    name: "AI-ChatBot-Assistant",
    description: "Advanced conversational AI chatbot using NLP and machine learning for intelligent customer support",
    language: "Python",
    stargazers_count: 24,
    html_url: "https://github.com/KakumanuLakshmiNarayana",
    updated_at: "2024-02-01T10:00:00Z"
  },
  {
    id: 2,
    name: "Workflow-Automation-Suite",
    description: "N8N-based automation framework for streamlining business processes and integrating multiple services",
    language: "JavaScript",
    stargazers_count: 18,
    html_url: "https://github.com/KakumanuLakshmiNarayana",
    updated_at: "2024-01-28T10:00:00Z"
  },
  {
    id: 3,
    name: "Portfolio",
    description: "Modern, animated portfolio website built with React, Framer Motion, and AI-themed design elements",
    language: "JavaScript",
    stargazers_count: 12,
    html_url: "https://github.com/KakumanuLakshmiNarayana/Portfolio",
    updated_at: "2024-01-25T10:00:00Z"
  },
  {
    id: 4,
    name: "Data-Analytics-Dashboard",
    description: "Real-time analytics dashboard with interactive visualizations and predictive insights",
    language: "TypeScript",
    stargazers_count: 31,
    html_url: "https://github.com/KakumanuLakshmiNarayana",
    updated_at: "2024-01-20T10:00:00Z"
  },
  {
    id: 5,
    name: "API-Integration-Hub",
    description: "Centralized hub for managing and orchestrating multiple API integrations with monitoring",
    language: "Node.js",
    stargazers_count: 15,
    html_url: "https://github.com/KakumanuLakshmiNarayana",
    updated_at: "2024-01-15T10:00:00Z"
  }
];

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    async function fetchRepos() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
        );
        const data = await res.json();
        const filteredRepos = Array.isArray(data)
          ? data.filter(r => !r.fork && !r.private)
          : [];
        
        // If API fails or returns empty, use sample data for demonstration
        if (filteredRepos.length === 0) {
          setRepos(SAMPLE_PROJECTS);
        } else {
          setRepos(filteredRepos);
        }
      } catch (error) {
        console.log("Using sample projects for demonstration");
        setRepos(SAMPLE_PROJECTS);
      }
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
      <motion.div className={styles.header}>
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FaRocket className={styles.headerIcon} />
          Project Journey
        </motion.h2>
        <motion.p 
          className={styles.subtitle}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Follow the path of innovation and development
        </motion.p>
      </motion.div>

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
        <div className={styles.roadmapContainer}>
          {/* The central pathway */}
          <div className={styles.pathway}>
            <motion.div 
              className={styles.pathLine}
              initial={prefersReducedMotion ? {} : { scaleY: 0 }}
              whileInView={prefersReducedMotion ? {} : { scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          {/* Project milestones along the path */}
          <div className={styles.timeline}>
            {repos.length === 0 && <p className={styles.noRepos}>No public repositories found.</p>}
            {repos.map((repo, index) => (
              <motion.div 
                key={repo.id} 
                className={`${styles.milestone} ${index % 2 === 0 ? styles.left : styles.right}`}
                initial={prefersReducedMotion ? {} : { 
                  opacity: 0, 
                  x: index % 2 === 0 ? -50 : 50,
                  y: 20
                }}
                whileInView={prefersReducedMotion ? {} : { 
                  opacity: 1, 
                  x: 0,
                  y: 0
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                {/* Connector line from path to card */}
                <div className={styles.connector}>
                  <motion.div 
                    className={styles.connectorLine}
                    initial={prefersReducedMotion ? {} : { scaleX: 0 }}
                    whileInView={prefersReducedMotion ? {} : { scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  />
                </div>

                {/* Milestone marker on the path */}
                <motion.div 
                  className={styles.marker}
                  initial={prefersReducedMotion ? {} : { scale: 0 }}
                  whileInView={prefersReducedMotion ? {} : { scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <FaMapMarkerAlt className={styles.markerIcon} />
                  <div className={styles.markerGlow} />
                </motion.div>

                {/* Project card */}
                <motion.div 
                  className={styles.card}
                  whileHover={prefersReducedMotion ? {} : {
                    scale: 1.03,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</div>
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
                      {new Date(repo.updated_at).toLocaleDateString()}
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
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </AnimatedSection>
  );
}