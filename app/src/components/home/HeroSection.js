'use client';
import { useRef, useEffect, useState } from 'react';
import '@/styles/components/hero.css';
import { useHero3DEffect } from '@/hooks/useHero3DContext';
import MagneticButton from '@/components/animations/MagneticButton';

export const HeroSection = () => {
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const triggerRef = useRef(null); // New ref for the Pinning Container
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Get the hero ref from 3D context
  const hero3DContext = useHero3DEffect();
  const heroRef = hero3DContext?.heroRef;

  // Title and subtitle configuration
  const titleText = "CODEX";
  const subtitleLines = [
    "Notre ambition est de créer un véritable lieu de",
    "collaboration, où des individus de divers horizons",
    "se rassemblent pour apprendre et innover."
  ];

  useEffect(() => {
    const video = videoRef.current;
    let fallbackTimer;

    if (video) {
      // Defer video playback to after first paint for better LCP
      requestAnimationFrame(() => {
        video.play().catch((error) => {
          console.log('Video autoplay was prevented:', error);
          // Ensure we still reveal the background layer if autoplay fails
          setIsVideoLoaded((v) => v || true);
        });
      });
      // Safety: if no load events fire, reveal after a short delay
      fallbackTimer = setTimeout(() => setIsVideoLoaded((v) => v || true), 1500);
    }

    return () => {
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, []);

  // 1. Entrance Animation (lazy-loaded GSAP)
  useEffect(() => {
    let ctx;

    (async () => {
      const { default: gsap } = await import('gsap');

      ctx = gsap.context(() => {
        const tl = gsap.timeline();

        // Initial State Setters (Prevention of FOUC)
        gsap.set(".letter", { y: 120, opacity: 0, rotateX: -90 });
        gsap.set(".subtitle-line", { y: 40, opacity: 0 });
        gsap.set(".hero-btn", { scale: 0, opacity: 0 });

        // Animation Sequence
        tl.to(".letter", { y: 0, opacity: 1, rotateX: 0, duration: 1.4, stagger: 0.15, ease: "power4.out", delay: 0.6 })
          .to(".subtitle-line", { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }, "-=0.4")
          .to(".hero-btn", { scale: 1, opacity: 1, duration: 1.4, ease: "elastic.out(1, 0.4)" }, "-=0.5");
      }, contentRef);
    })();

    return () => ctx?.revert();
  }, []);

  // 2. "Pin & Shrink" Scroll Animation (lazy-loaded GSAP + ScrollTrigger)
  useEffect(() => {
    let ctx;

    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.to(triggerRef.current, {
          scale: 0.9,           // Shrink to 90%
          opacity: 0,           // Fade out content
          borderRadius: "3rem", // Round corners
          // blur removed - expensive GPU operation on scroll
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom top",
            pin: true,          // Lock in place
            pinSpacing: false,  // Allow next section to overlap
            scrub: true         // Link to scrollbar
          }
        });
      }, triggerRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    // We use triggerRef for the pinning logic to avoid conflict with heroRef (3D effect)
    <section
      ref={triggerRef}
      className="hero-section relative w-full h-screen overflow-hidden bg-black z-0"
    >
      {/* Inner wrapper for 3D effect */}
      <div
        ref={heroRef}
        className="w-full h-full relative overflow-hidden"
        style={heroRef ? { transformStyle: 'preserve-3d' } : undefined}
      >
        
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
            src="/hero.mp4"
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-poster.webp"
            onLoadedData={() => setIsVideoLoaded((v) => v || true)}
            onLoadedMetadata={() => setIsVideoLoaded((v) => v || true)}
            onCanPlayThrough={() => setIsVideoLoaded((v) => v || true)}
            onError={() => setIsVideoLoaded((v) => v || true)}
            style={{ opacity: isVideoLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
          />
          <div className="absolute inset-0 bg-black" style={{ opacity: isVideoLoaded ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }} />
          <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="hero-content relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="hero-title overflow-hidden leading-tight text-white text-6xl md:text-8xl font-bold">
            {titleText.split("").map((char, index) => (
              <span key={index} className="letter inline-block">{char}</span>
            ))}
          </h1>

          <div className="hero-description space-y-1 mt-6 text-white/90 text-lg md:text-xl">
            {subtitleLines.map((line, index) => (
              <div key={index} className="overflow-hidden">
                <p className="subtitle-line block">{line}</p>
              </div>
            ))}
          </div>

          <div className="hero-btn mt-10">
            <MagneticButton href="/inscription" className="bg-white text-orange-500 hover:bg-orange-500 hover:text-white shadow-xl">
              Nous Rejoindre
            </MagneticButton>
          </div>
        </div>

      </div>
    </section>
  );
};
