import { useEffect, useState } from 'react';

/**
 * Custom hook for scroll-based animations
 * Returns scroll position and percentage
 */
export default function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;

      setScrollY(currentScrollY);
      setScrollPercentage(Math.min(percentage, 100));
    };

    // Initial call
    handleScroll();

    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollPercentage };
}
