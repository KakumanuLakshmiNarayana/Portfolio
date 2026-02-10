import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useReducedMotion from '../hooks/useReducedMotion';

/**
 * Reusable wrapper component for scroll-triggered animations
 * Animates children when they come into view
 */
export default function AnimatedSection({ 
  children, 
  variants, 
  className = '',
  threshold = 0.1,
  triggerOnce = true 
}) {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  });

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
