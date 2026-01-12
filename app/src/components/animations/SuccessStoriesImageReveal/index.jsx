"use client";

import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Linkedin, ExternalLink } from "lucide-react";
import "./styles.css";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Testimonials data with LinkedIn profiles and placeholder images
const stories = [
  {
    id: "hillary",
    index: "01",
    name: "Hillary Tchakounté",
    role: "Membre Codex",
    linkedin: "https://www.linkedin.com/in/hillary-tchakounte/",
    quote:
      "J'ai intégré Codex en décembre 2024 et l'expérience a été vraiment enrichissante. Entre les workshops, les conseils sur la vie universitaire et les projets, j'ai acquis beaucoup de connaissances. J'ai créé mon premier portfolio avec HTML et CSS.",
    img: "/testimonial/hillary.jpg",
    rating: 5,
  },
  {
    id: "herman",
    index: "02",
    name: "Herman Tsago ",
    role: "AI Engineer",
    linkedin: "https://www.linkedin.com/in/herman-guenol-tsago/",
    quote:
      "Codex m’a offert un cadre inspirant pour apprendre, partager et évoluer, avec une communauté bienveillante et des initiatives qui donnent du sens",
    img: "/testimonial/herman.jpg",
    rating: 5,
  },
  {
    id: "christian",
    index: "03",
    name: "Christian Uriel Tchinda Dassia",
    role: "Membre Codex",
    linkedin: "https://www.linkedin.com/in/christian-uriel-tchinda-dassia-11b377279/",
    quote:
      "Une aventure humaine chez Codex : des rencontres, des idées, et la sensation d’avancer vers quelque chose de plus grand",
    img: "/testimonial/christian.png",
    rating: 5,
  }
];

// Placeholder image fallback
const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600&auto=format&fit=crop";

const SuccessStoriesImageReveal = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const xToRef = useRef(null);
  const yToRef = useRef(null);
  const accordionRefs = useRef({});

  const [cardData, setCardData] = useState({
    imgUrl: "",
    quote: "",
    name: "",
    linkedin: "",
    rating: 5,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [activeAccordionId, setActiveAccordionId] = useState(null);

  // Check for mobile/tablet on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll-triggered entrance animation (fixes pop-in glitch)
  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in header from below
      gsap.from('.success-stories-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.success-stories-section',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });

      // Stagger fade-in for story items (both desktop and mobile lists)
      gsap.from('.story-item', {
        y: 25,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.stories-list',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });

      // Fade in CTA section
      gsap.from('.success-stories-cta', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.success-stories-cta',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const { contextSafe } = useGSAP(
    () => {
      if (!cardRef.current || isMobile) return;

      // Smooth cursor tracking for the floating card
      xToRef.current = gsap.quickTo(cardRef.current, "x", {
        duration: 0.5,
        ease: "power3",
      });
      yToRef.current = gsap.quickTo(cardRef.current, "y", {
        duration: 0.5,
        ease: "power3",
      });
    },
    { scope: containerRef, dependencies: [isMobile] }
  );

  // Global mouse move to drive quickTo (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      if (!xToRef.current || !yToRef.current) return;
      xToRef.current(e.clientX);
      yToRef.current(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  const showCard = contextSafe((story) => {
    if (isMobile) return;

    setCardData({
      imgUrl: story.img,
      quote: story.quote,
      name: story.name,
      linkedin: story.linkedin,
      rating: story.rating,
    });

    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.7)",
      overwrite: "auto",
    });
  });

  const hideCard = contextSafe(() => {
    if (isMobile || !cardRef.current) return;

    gsap.to(cardRef.current, {
      autoAlpha: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  });

  // Toggle accordion for mobile
  const toggleAccordion = contextSafe((storyId) => {
    if (!isMobile) return;

    const isCurrentlyOpen = activeAccordionId === storyId;

    // Close all accordions first
    Object.keys(accordionRefs.current).forEach((id) => {
      const content = accordionRefs.current[id];
      if (content && id !== storyId) {
        gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });

    const currentContent = accordionRefs.current[storyId];
    if (!currentContent) return;

    if (isCurrentlyOpen) {
      // Close current
      gsap.to(currentContent, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      setActiveAccordionId(null);
    } else {
      // Open current
      gsap.set(currentContent, { height: "auto" });
      const fullHeight = currentContent.offsetHeight;
      gsap.fromTo(
        currentContent,
        { height: 0, opacity: 0 },
        {
          height: fullHeight,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
      setActiveAccordionId(storyId);
    }
  });

  // Handle image error - use placeholder
  const handleImageError = (e) => {
    e.target.style.backgroundImage = `url(${PLACEHOLDER_IMAGE})`;
  };

  // Render star rating
  const renderRating = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <section ref={containerRef} className="success-stories-section">
      {/* Header */}
      <header className="success-stories-header">
        <h2 className="success-stories-title">Témoignages</h2>
        <p className="success-stories-subtitle">
          Découvrez ce que nos membres disent de leur expérience au sein de la
          communauté Codex et comment nos activités les ont aidés dans leur
          parcours professionnel.
        </p>
      </header>

      {/* Desktop: Interactive List with Hover Card */}
      <div className="stories-list stories-list-desktop">
        {stories.map((story) => (
          <div
            key={story.id}
            className="story-item"
            onMouseEnter={() => showCard(story)}
            onMouseLeave={hideCard}
          >
            <div className="story-item-content">
              <span className="story-index">{story.index}</span>
              <span className="story-name">{story.name}</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="story-role">{story.role}</span>
              {story.linkedin && story.linkedin !== "#" && (
                <a
                  href={story.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="story-linkedin-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin size={16} />
                  <span className="hidden md:inline">LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet: Accordion List */}
      <div className="stories-list stories-list-mobile">
        {stories.map((story) => (
          <div
            key={story.id}
            className={`story-item story-item-accordion ${activeAccordionId === story.id ? "is-open" : ""}`}
            onClick={() => toggleAccordion(story.id)}
          >
            {/* Accordion Header */}
            <div className="story-item-content">
              <div className="flex items-baseline gap-3 md:gap-5">
                <span className="story-index">{story.index}</span>
                <span className="story-name">{story.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="story-role">{story.role}</span>
                <span className="mobile-icon">
                  {activeAccordionId === story.id ? "−" : "+"}
                </span>
              </div>
            </div>

            {/* Accordion Content */}
            <div
              ref={(el) => (accordionRefs.current[story.id] = el)}
              className="accordion-content"
            >
              <div
                className="accordion-image"
                style={{
                  backgroundImage: `url(${story.img}), url(${PLACEHOLDER_IMAGE})`,
                }}
              />
              <p className="accordion-quote">&ldquo;{story.quote}&rdquo;</p>
              <div className="accordion-footer">
                <span className="accordion-rating">
                  {renderRating(story.rating)}
                </span>
                {story.linkedin && story.linkedin !== "#" && (
                  <a
                    href={story.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accordion-linkedin"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin size={16} />
                    LinkedIn
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Reveal Card (Desktop only) */}
      {!isMobile && (
        <div ref={cardRef} className="floating-card">
          {/* Image */}
          <div
            className="floating-card-image"
            style={{
              backgroundImage: cardData.imgUrl
                ? `url(${cardData.imgUrl}), url(${PLACEHOLDER_IMAGE})`
                : `url(${PLACEHOLDER_IMAGE})`,
            }}
          />

          {/* Text Content */}
          <div className="floating-card-content">
            <p className="floating-card-quote">
              &ldquo;{cardData.quote || 'Témoignage...'}&rdquo;
            </p>
            <div className="floating-card-footer">
              <span className="floating-card-rating">
                {renderRating(cardData.rating)}
              </span>
              {cardData.linkedin && cardData.linkedin !== "#" && (
                <a
                  href={cardData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="floating-card-linkedin pointer-events-auto"
                >
                  LinkedIn ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="success-stories-cta">
        <p className="success-stories-cta-text">
          Prêt à rejoindre 100+ étudiants satisfaits?
        </p>
        <Link href="/inscription">
          <button className="success-stories-cta-button">
            Rejoindre la Communauté
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessStoriesImageReveal;
