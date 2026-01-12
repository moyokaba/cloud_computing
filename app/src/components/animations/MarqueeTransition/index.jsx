'use client';
import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './styles.css';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * MarqueeTransition Component (Refactored for Brand Consistency)
 * 
 * Brand palette: Orange #ff6b00, Black #050505, White
 * 
 * @param {string[]} texts - array of 2 text strings for opposing rows
 * @param {boolean} withCurvedTransition - adds curved SVG separator at top
 * @param {string} curveColor - color of the curve (for transitioning from light sections)
 * @param {boolean} solidSecondRow - if true, Row 2 is solid orange; if false, Row 2 is white
 */
export const MarqueeTransition = ({
  texts = ['CRÉER', 'INNOVER'],
  withCurvedTransition = false,
  curveColor = '#f8f8f8',
  solidSecondRow = true,
}) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const wrapper = containerRef.current;
      if (!wrapper) return;

      const row1 = wrapper.querySelector('.marquee-row-1');
      const row2 = wrapper.querySelector('.marquee-row-2');

      // Row 1: Scrolls left with scrub for weighted feel
      if (row1) {
        gsap.to(row1, {
          xPercent: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1, // Adds momentum/weight
          },
        });
      }

      // Row 2: Scrolls right (opposing direction)
      if (row2) {
        gsap.to(row2, {
          xPercent: 25,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Create repeating text for seamless scroll
  const repeatText = (text) => {
    return `${text} • ${text} • ${text} • ${text} • ${text} •`;
  };

  return (
    <section ref={containerRef} className="marquee-section">
      {/* Curved SVG Separator - bridges white to black sections */}
      {withCurvedTransition && (
        <div className="marquee-curve-container">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="marquee-curve-svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120V60C240 20 480 0 720 0C960 0 1200 20 1440 60V120H0Z"
              fill={curveColor}
            />
          </svg>
        </div>
      )}

      {/* Main Marquee Content */}
      <div className="marquee-content">
        {/* Row 1: Outline text (subtle, scrolls left) */}
        <div className="marquee-row marquee-row-1">
          <span className="marquee-text marquee-text-outline">
            {repeatText(texts[0] || 'CRÉER')}
          </span>
        </div>

        {/* Spacer for breathing room */}
        <div className="marquee-spacer" />

        {/* Row 2: Solid text (prominent, scrolls right) */}
        <div className="marquee-row marquee-row-2">
          <span className={`marquee-text ${solidSecondRow ? 'marquee-text-orange' : 'marquee-text-white'}`}>
            {repeatText(texts[1] || 'INNOVER')}
          </span>
        </div>
      </div>

      {/* Gradient fade at bottom for smooth transition to next section */}
      <div className="marquee-bottom-fade" />
    </section>
  );
};

// ============================================
// Pre-configured transitions for Codex website
// ============================================

// Mission Section → Workshop Section (black to light transition not needed here)
export const MissionToWorkshopTransition = () => (
  <MarqueeTransition
    texts={['APPRENDRE', 'CRÉER']}
    withCurvedTransition={false}
    solidSecondRow={true}
  />
);

// Workshop Section → Projects Section
export const WorkshopToProjectsTransition = () => (
  <MarqueeTransition
    texts={['PROJETS', 'CODEX']}
    withCurvedTransition={false}
    solidSecondRow={true}
  />
);

// Projects → CTA Section
export const ProjectsToCTATransition = () => (
  <MarqueeTransition
    texts={['REJOINS', 'CODEX']}
    withCurvedTransition={false}
    solidSecondRow={false}
  />
);

export default MarqueeTransition;

