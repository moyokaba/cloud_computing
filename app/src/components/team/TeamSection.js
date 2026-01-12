// src/components/team/TeamSection.js
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TeamMember from './TeamMember';
import { teamData } from './teamData';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TeamSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || cards.length === 0) return;

    // Use gsap.context for scoped cleanup (only kills THIS component's animations)
    const ctx = gsap.context(() => {
      // Set initial perspective for 3D effect
      gsap.set(section, { perspective: 1000 });

      // Set initial state for cards
      gsap.set(cards, {
        autoAlpha: 0,
        y: 50,
        rotationX: -30,
      });

      // --- Staggered Entry Animation ---
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'bottom top',
          toggleActions: 'play none none none',
          once: true,
        },
      }).to(cards, {
        autoAlpha: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef); // Scope to this component

    // Cleanup - only kills this component's animations, NOT global
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Current Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notre Équipe
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une équipe passionnée de développeurs et de créatifs, unis par la volonté
            de repousser les limites de l&apos;innovation technologique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <TeamMember
              key={index}
              member={member}
              ref={(el) => (cardsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
