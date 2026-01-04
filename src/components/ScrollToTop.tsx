"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollSide, setScrollSide] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY >= 200);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (window.scrollY < 200) return;
      
      const touchCurrentX = e.touches[0].clientX;
      const screenWidth = window.innerWidth;
      const midPoint = screenWidth / 2;
      
      // Update side immediately on touch
      setScrollSide(touchCurrentX < midPoint ? 'left' : 'right');
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (window.scrollY < 200) return;
      
      const touchCurrentX = e.touches[0].clientX;
      const screenWidth = window.innerWidth;
      const midPoint = screenWidth / 2;
      
      // Update side based on current touch position
      setScrollSide(touchCurrentX < midPoint ? 'left' : 'right');
    };

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Notify navbar about scroll side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('scrollSideChange', { detail: scrollSide }));
    }
  }, [scrollSide]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top ${scrollSide}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
