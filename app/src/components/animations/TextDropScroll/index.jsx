// TextDropScroll.jsx
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./styles.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TextDropScroll = () => {
  const containerRef = useRef(null);

  // GSAP SCROLL ANIMATIONS
  useGSAP(
    () => {
      const lines = gsap.utils.toArray(".text-drop__line");
      const images = gsap.utils.toArray(".text-drop__img-box");
      const prlxElements = gsap.utils.toArray(".has-prlx");

      lines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { rotateX: -120 },
          {
            rotateX: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: line,
              start: "bottom bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        const image = images[index];
        if (image) {
          const targetOpacity = image.getAttribute("data-opacity") || 1;
          const startOffset = window.innerWidth < 1024 ? "-=200" : "-=500";

          gsap.to(image, {
            opacity: targetOpacity,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: line,
              start: `bottom bottom${startOffset}`,
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });

      prlxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-speed")) || 0.5;

        gsap.to(el, {
          y: () => -(1 - speed) * 150,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      });

      ScrollTrigger.refresh();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="text-drop-page">
      {/* START SCREEN */}
      

      {/* TEXT DROP */}
      <section className="text-drop">
        {/* IMAGES */}
        <div
          className="text-drop__img-box has-prlx"
          data-speed="0.0001"
          data-opacity="0.6"
        >
          <Image
            className="text-drop__img"
            src="/imagesValue/workshop.jpeg"
            alt="Workshop"
            fill
          />
        </div>

        <div
          className="text-drop__img-box has-prlx"
          data-speed="0.0001"
          data-opacity="0.5"
        >
          <Image
            className="text-drop__img"
            src="/imagesValue/mentorat.jpeg"
            alt="Mentorat"
            fill
          />
        </div>

        <div
          className="text-drop__img-box has-prlx"
          data-speed="0.0001"
          data-opacity="0.6"
        >
          <Image
            className="text-drop__img"
            src="/imagesValue/projet.jpeg"
            alt="Projet"
            fill
          />
        </div>

        <div
          className="text-drop__img-box has-prlx"
          data-speed="0.0001"
          data-opacity="0.5"
        >
          <Image
            className="text-drop__img"
            src="/imageworkshop/workshop10.webp"
            alt="CODEX"
            fill
          />
        </div>

        {/* TEXT LINES */}
        <div className="text-drop__line">Notre mission</div>
        <div className="text-drop__line">Aider nos membres</div>
        <div className="text-drop__line">à travers</div>
        <div className="text-drop__line">Nos Workshop</div>
        <div className="text-drop__line">Le Mentorat</div>
        <div className="text-drop__line">Des Projets </div>
        
      </section>
    </div>
  );
};

export default TextDropScroll;



