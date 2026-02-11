import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import useReducedMotion from '../hooks/useReducedMotion';
import styles from './BackToTop.module.css';

/**
 * Back to top button with smooth scroll
 * Appears when user scrolls down
 */
export default function BackToTop() {
  const { scrollY } = useScrollAnimation();
  const prefersReducedMotion = useReducedMotion();
  const isVisible = scrollY > 300;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={styles.backToTop}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
