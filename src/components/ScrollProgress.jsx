import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import useReducedMotion from '../hooks/useReducedMotion';
import styles from './ScrollProgress.module.css';

/**
 * Scroll progress indicator showing how far user has scrolled
 */
export default function ScrollProgress() {
  const { scrollPercentage } = useScrollAnimation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div 
      className={styles.progressBar}
      style={{ 
        scaleX: scrollPercentage / 100,
        transformOrigin: 'left'
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollPercentage / 100 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.1 }}
    />
  );
}
