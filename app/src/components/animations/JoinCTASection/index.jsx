'use client';
import React, { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './styles.css';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const JoinCTASection = () => {
  const containerRef = useRef(null);

  // Feature keywords that will scatter and converge
  const features = [
    { text: 'Communauté', startPos: { top: 20, left: 10 } },
    { text: 'Projets', startPos: { top: 15, left: 45 } },
    { text: 'Workshops', startPos: { top: 25, left: 80 } },
    { text: 'Mentorat', startPos: { top: 70, left: 15 } },
    { text: 'Code', startPos: { top: 75, left: 55 } },
    { text: 'Réseau', startPos: { top: 65, left: 85 } },
  ];

  // GSAP ScrollTrigger animation (Lenis removed - GSAP scrub handles smooth scrolling natively)
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;


    const ctx = gsap.context(() => {
      const featureElements = gsap.utils.toArray('.join-feature');
      const featureBgs = gsap.utils.toArray('.join-feature-bg');

      // Store original dimensions
      const featureStartDimensions = [];
      featureBgs.forEach((bg) => {
        const rect = bg.getBoundingClientRect();
        featureStartDimensions.push({
          width: rect.width,
          height: rect.height,
        });
      });

      // Target dimensions (3rem circle)
      const oneRem = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const targetSize = 3 * oneRem;

      // Responsive CTA width
      const getCTAFinalWidth = () => (window.innerWidth < 768 ? 18 : 28);
      let ctaFinalWidth = getCTAFinalWidth();

      const handleResize = () => {
        ctaFinalWidth = getCTAFinalWidth();
        ScrollTrigger.refresh();
      };

      window.addEventListener('resize', handleResize);

      // Background text parallax
      gsap.to('.join-bg-text', {
        y: -100,
        scrollTrigger: {
          trigger: '.join-cta-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Spotlight rotation
      gsap.to('.join-spotlight', {
        rotation: 360,
        scrollTrigger: {
          trigger: '.join-cta-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });

      // Main ScrollTrigger for convergence animation
      ScrollTrigger.create({
        trigger: '.join-cta-section',
        start: 'top top',
        end: '+=150vh',  // Reduced from 250vh - less scrolling needed
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;

          // Phase 1: Features move toward center (0 - 50%)
          if (progress <= 0.5) {
            const featureProgress = progress / 0.5;

            featureElements.forEach((feature, index) => {
              const startTop = features[index].startPos.top;
              const startLeft = features[index].startPos.left;

              const currentTop = startTop + (50 - startTop) * featureProgress;
              const currentLeft = startLeft + (50 - startLeft) * featureProgress;

              gsap.set(feature, {
                top: `${currentTop}%`,
                left: `${currentLeft}%`,
              });
            });

            // Morph feature backgrounds into circles
            featureBgs.forEach((bg, index) => {
              const originalWidth = featureStartDimensions[index]?.width || 100;
              const originalHeight = featureStartDimensions[index]?.height || 40;

              const currentWidth = originalWidth + (targetSize - originalWidth) * featureProgress;
              const currentHeight = originalHeight + (targetSize - originalHeight) * featureProgress;
              const currentBorderRadius = 0.5 + (1.5 - 0.5) * featureProgress;

              gsap.set(bg, {
                width: `${currentWidth}px`,
                height: `${currentHeight}px`,
                borderRadius: `${currentBorderRadius}rem`,
              });
            });

            // Fade out feature text (0 - 15%)
            if (progress < 0.15) {
              const textFadeProgress = progress / 0.15;
              gsap.set('.join-feature-text', {
                opacity: 1 - textFadeProgress,
              });
            } else {
              gsap.set('.join-feature-text', {
                opacity: 0,
              });
            }
          }

          // Phase 2: Swap features for CTA container (at 50%)
          if (progress >= 0.5) {
            gsap.set('.join-features-container', { opacity: 0 });
            gsap.set('.join-cta-container', { opacity: 1 });
          } else {
            gsap.set('.join-features-container', { opacity: 1 });
            gsap.set('.join-cta-container', { opacity: 0 });
          }

          // Phase 3: CTA morphing - circle to pill button (50% - 75%)
          if (progress >= 0.5 && progress <= 0.75) {
            const ctaProgress = (progress - 0.5) / 0.25;

            const width = 3 + (ctaFinalWidth - 3) * ctaProgress;
            const height = 3 + (5 - 3) * ctaProgress;

            gsap.set('.join-cta-button', {
              width: `${width}rem`,
              height: `${height}rem`,
            });

            gsap.set('.join-cta-text', {
              opacity: 0,
            });
          } else if (progress > 0.75) {
            gsap.set('.join-cta-button', {
              width: `${ctaFinalWidth}rem`,
              height: '5rem',
            });
          }

          // Phase 4: Final reveal - text appears (75% - 100%)
          if (progress >= 0.75) {
            const finalProgress = (progress - 0.75) / 0.25;

            gsap.set('.join-cta-text', {
              opacity: finalProgress,
            });

            gsap.set('.join-header-content', {
              y: -30 + 30 * finalProgress,
              opacity: finalProgress,
            });
          } else {
            gsap.set('.join-header-content', {
              y: -30,
              opacity: 0,
            });
          }
        },
      });

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="join-cta-section">
      {/* Big CODEX background text */}
      <div className="join-bg-text-container">
        <span className="join-bg-text">CODEX</span>
      </div>

      {/* Spotlight background */}
      <div className="join-spotlight">
        <div className="join-spotlight-inner" />
      </div>

      {/* Header content - appears at end */}
      <div className="join-header">
        {/* Initial styles ensure SSR/CSR match before GSAP updates */}
        <div className="join-header-content" style={{ opacity: 0, transform: 'translateY(-30px)' }}>
          <h2>Prêt à nous rejoindre ?</h2>
          <p>Fais partie d&apos;une communauté de développeurs passionnés</p>
        </div>
      </div>

      {/* Scattered feature keywords */}
      {/* Initial opacity shown; GSAP will fade based on scroll */}
      <div className="join-features-container" style={{ opacity: 1 }}>
        {features.map((feature, index) => (
          <div
            key={feature.text}
            className="join-feature"
            style={{
              top: `${feature.startPos.top}%`,
              left: `${feature.startPos.left}%`,
            }}
          >
            {/* Keep deterministic initial sizes; GSAP morphs later */}
            <div className="join-feature-bg" />
            <div className="join-feature-text" style={{ opacity: 1 }}>
              <span>{feature.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button container - appears after convergence */}
      {/* Hidden initially to avoid hydration mismatch; GSAP reveals later */}
      <div className="join-cta-container" style={{ opacity: 0 }}>
        <Link href="/inscription" className="join-cta-button" style={{ width: '3rem', height: '3rem' }}>
          <span className="join-cta-text" style={{ opacity: 0 }}>Rejoindre Codex Maintenant</span>
        </Link>
      </div>

    </section>
  );
};

export default JoinCTASection;



