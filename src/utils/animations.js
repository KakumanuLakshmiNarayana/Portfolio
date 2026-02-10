// Shared animation variants for Framer Motion
// These provide consistent animations throughout the portfolio

// Fade in animation
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Fade in and slide up
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Fade in and slide down
export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Scale up animation
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Stagger container - animates children sequentially
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Item for stagger animations
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Slide from left
export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Slide from right
export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Navbar animation
export const navbarVariant = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

// Hero text stagger
export const heroTextContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

export const heroTextItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Button hover animations
export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeInOut" }
};

export const buttonTap = {
  scale: 0.95
};

// Card hover effect with subtle 3D tilt
export const cardHover = {
  y: -8,
  scale: 1.02,
  boxShadow: "0 20px 40px rgba(167, 139, 250, 0.3)",
  transition: { duration: 0.3, ease: "easeOut" }
};

// Glow effect on hover
export const glowHover = {
  boxShadow: "0 0 20px rgba(0, 234, 255, 0.6), 0 0 40px rgba(167, 139, 250, 0.4)",
  transition: { duration: 0.3 }
};

// Rotate animation for icons
export const rotateIn = {
  hidden: { opacity: 0, rotate: -180 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Pulse animation for attention-grabbing elements
export const pulse = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Shimmer effect for gradients
export const shimmer = {
  backgroundPosition: ["200% center", "-200% center"],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "linear"
  }
};
