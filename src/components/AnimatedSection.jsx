import React from 'react';
import PropTypes from 'prop-types';
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
  triggerOnce = true,
  as = 'div'
}) {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  });

  const Component = motion[as] || motion.div;

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    const PlainComponent = as;
    return <PlainComponent className={className}>{children}</PlainComponent>;
  }

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </Component>
  );
}

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  variants: PropTypes.object.isRequired,
  className: PropTypes.string,
  threshold: PropTypes.number,
  triggerOnce: PropTypes.bool,
  as: PropTypes.string
};

