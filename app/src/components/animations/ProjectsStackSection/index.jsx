'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import './styles.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Project data based on Codex flyers
const PROJECTS_DATA = [
  {
    id: 1,
    phase: "Projet #01",
    title: "Falla Ton",
    titleAccent: "Werkstudent",
    subtitle: "Mentorat Intensif sur 3 Mois",
    description: "Programme unique pour accompagner les étudiants vers l'obtention d'un emploi de Werkstudent.",
    image: "/images/mentoring1.webp",
    color: "#ff6b00",
    link: "/projects/mentoring"
  },
  {
    id: 2,
    phase: "Projet #02",
    title: "Get Your",
    titleAccent: "Next Job",
    subtitle: "3 Mois d'Accompagnement",
    description: "Création de CVs, profils LinkedIn, simulation d'entretiens et conseils personnalisés.",
    image: "/images/mentoring2.webp",
    color: "#7dd8cd",
    link: "/projects/mentoring"
  },
  {
    id: 3,
    phase: "Projet #03",
    title: "Site Web",
    titleAccent: "Codex",
    subtitle: "Développement Web Collaboratif",
    description: "Apprends à développer un site web avec React et Next.js dans un projet réel.",
    image: "/images/projetCollab1.webp",
    color: "#e0ff57",
    link: "/projects/siteinternet"
  },
  {
    id: 4,
    phase: "Projet #04",
    title: "Intelligence",
    titleAccent: "Artificielle",
    subtitle: "Crée Ton Propre Chatbot",
    description: "Découvre l'IA, les LLMs et Python pour créer ton propre assistant intelligent.",
    image: "/images/projetCollab2.webp",
    color: "#ff6b00",
    link: "/projects/codexchatbot"
  }
];

const ProjectsStackSection = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const pinnedSection = containerRef.current.querySelector(".projects-pinned");
      const stickyHeader = containerRef.current.querySelector(".projects-sticky-header");
      const cards = gsap.utils.toArray(".project-card");
      const progressBarContainer = containerRef.current.querySelector(".projects-progress-bar");
      const progressBar = containerRef.current.querySelector(".projects-progress");
      const indicesContainer = containerRef.current.querySelector(".projects-indices");
      const indices = gsap.utils.toArray(".project-index");

      if (!pinnedSection || !stickyHeader || cards.length === 0) return;

      const cardCount = cards.length;
      const pinnedHeight = window.innerHeight * (cardCount + 1);

      // Card rotation presets
      const startRotations = [0, 5, 0, -5];
      const endRotations = [-10, -5, 10, 5];
      const progressColors = PROJECTS_DATA.map(p => p.color);

      // Set initial card rotations
      cards.forEach((card, index) => {
        gsap.set(card, { rotation: startRotations[index] || 0 });
      });

      let isProgressBarVisible = false;
      let currentActiveIndex = -1;

      const animateIndexOpacity = (newIndex) => {
        if (newIndex !== currentActiveIndex) {
          indices.forEach((indexEl, i) => {
            gsap.to(indexEl, {
              opacity: i === newIndex ? 1 : 0.25,
              duration: 0.5,
              ease: "power2.out",
            });
          });
          currentActiveIndex = newIndex;
        }
      };

      const showProgressAndIndices = () => {
        gsap.to([progressBarContainer, indicesContainer], {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });
        isProgressBarVisible = true;
      };

      const hideProgressAndIndices = () => {
        gsap.to([progressBarContainer, indicesContainer], {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
        isProgressBarVisible = false;
        animateIndexOpacity(-1);
      };

      ScrollTrigger.create({
        trigger: pinnedSection,
        start: "top top",
        end: `+=${pinnedHeight}`,
        pin: true,
        pinSpacing: true,
        onLeave: () => hideProgressAndIndices(),
        onEnterBack: () => showProgressAndIndices(),
        onUpdate: (self) => {
          const progress = self.progress * (cardCount + 1);
          const currentCard = Math.floor(progress);

          // 1. Sticky header opacity (fades out as first card enters)
          if (progress <= 1) {
            gsap.to(stickyHeader, {
              opacity: 1 - progress,
              duration: 0.1,
              ease: "none",
            });
          } else {
            gsap.set(stickyHeader, { opacity: 0 });
          }

          // 2. Progress bar + indices visibility
          if (progress > 1 && !isProgressBarVisible) {
            showProgressAndIndices();
          } else if (progress <= 1 && isProgressBarVisible) {
            hideProgressAndIndices();
          }

          // 3. Progress bar height + color
          if (progress > 1) {
            const progressHeight = ((progress - 1) / cardCount) * 100;
            const colorIndex = Math.min(Math.floor(progress - 1), cardCount - 1);

            gsap.to(progressBar, {
              height: `${progressHeight}%`,
              backgroundColor: progressColors[colorIndex],
              duration: 0.3,
              ease: "power1.out",
            });

            if (isProgressBarVisible) {
              animateIndexOpacity(colorIndex);
            }
          }

          // 4. Card positions (fly in from bottom with rotation)
          cards.forEach((card, index) => {
            if (index < currentCard) {
              // Already passed - at center with end rotation
              gsap.set(card, {
                top: "50%",
                rotation: endRotations[index] || 0,
              });
            } else if (index === currentCard) {
              // Active card - animating in
              const cardProgress = progress - currentCard;
              const newTop = gsap.utils.interpolate(150, 50, cardProgress);
              const newRotation = gsap.utils.interpolate(
                startRotations[index] || 0,
                endRotations[index] || 0,
                cardProgress
              );

              gsap.set(card, {
                top: `${newTop}%`,
                rotation: newRotation,
              });
            } else {
              // Yet to come - waiting below
              gsap.set(card, {
                top: "150%",
                rotation: startRotations[index] || 0,
              });
            }
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="projects-stack-root">
      {/* Pinned Section */}
      <section className="projects-pinned">
        {/* Sticky Header - Large Background Text */}
        <div className="projects-sticky-header">
          <h1>Projets</h1>
        </div>

        {/* Progress Bar */}
        <div className="projects-progress-bar">
          <div className="projects-progress"></div>
        </div>

        {/* Indices (Navigation) */}
        <div className="projects-indices">
          {PROJECTS_DATA.map((project, index) => (
            <div 
              key={project.id} 
              className="project-index"
              style={{ '--index-color': project.color }}
            >
              
              <p className="index-phase">{project.phase}</p>
              <p className="index-title">{project.titleAccent}</p>
            </div>
          ))}
        </div>

        {/* Project Cards */}
        {PROJECTS_DATA.map((project, index) => (
          <Link 
            href={project.link} 
            key={project.id}
            className="project-card"
            style={{ '--card-color': project.color }}
          >
            

            {/* Phase Label */}
            <div className="project-card-phase">
              <p>{project.phase}</p>
            </div>

            {/* Card Content */}
            <div className="project-card-content">
              <p className="project-subtitle">{project.subtitle}</p>
              <h2 className="project-title">
                {project.title} <span>{project.titleAccent}</span>
              </h2>
              <p className="project-description">{project.description}</p>
              
              {/* CTA */}
              <div className="project-cta">
                <span>Découvrir</span>
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default ProjectsStackSection;



