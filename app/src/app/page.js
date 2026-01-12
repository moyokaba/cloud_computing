import { HeroWithHeader } from '@/components/home/HeroWithHeader';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import OurMissionSection from '@/components/home/OurMissionSection';
import { HorizontalWorkshopSection } from '@/components/animations/HorizontalWorkshopSection';
import ProjectsStackSection from '@/components/animations/ProjectsStackSection';
import { JoinCTASection } from '@/components/animations/JoinCTASection';
import {
  MissionToWorkshopTransition,
  WorkshopToProjectsTransition,
  ProjectsToCTATransition
} from '@/components/animations/MarqueeTransition';
import Script from 'next/script';

export default function HomePage() {
  return (
    <div className="bg-black">
      <HeroWithHeader />
      <OurMissionSection />

      {/* Transition: Mission → Workshop */}
      <MissionToWorkshopTransition />

      {/* Horizontal Scroll Workshop Section - Pins and scrolls horizontally */}
      <HorizontalWorkshopSection />

      {/* Transition: Workshop → Projects */}
      <WorkshopToProjectsTransition />

      {/* Projects Stack Section - Cards fly in with rotation */}
      <ProjectsStackSection />

      {/* Transition: Projects → CTA */}
      <ProjectsToCTATransition />

      {/* Join CTA Section - Scattered elements converge into CTA button */}
      <JoinCTASection />

      <TestimonialsSection />



      {/* Structured Data (JSON-LD) for SEO */}
      <Script id="organization-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Codex",
            "url": "https://www.codex-cmr.com",
            "logo": "https://www.codex-cmr.com/Codex_logo.jpg",
            "description": "Association d'étudiants qui accompagne le développement en informatique et l'insertion professionnelle des étudiants en Allemagne",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dortmund",
              "addressCountry": "DE"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Information",
              "email": "contact@codex-cmr.com"
            },
            "sameAs": [
              "https://github.com/wamby1",
              "https://www.youtube.com/@codex_cmr"
            ]
          }
        `}
      </Script>
    </div>
  );
}