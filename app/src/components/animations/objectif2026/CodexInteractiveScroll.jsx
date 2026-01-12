"use client";

// CodexInteractiveScroll.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import "./codex-interactive-scroll.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CodexInteractiveScroll = () => {
  const scopeRef = useRef(null);
  const pathRef = useRef(null);

  useGSAP(
    () => {
      // 1) Lenis smooth scroll
      const lenis = new Lenis();

      const onLenisScroll = () => ScrollTrigger.update();
      lenis.on?.("scroll", onLenisScroll);

      const tickerCb = (time) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tickerCb);
      gsap.ticker.lagSmoothing(0);

      // 2) SVG line draw
      const path = pathRef.current;
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".spotlight",
            start: "top 90%",
            end: "bottom 10%",
            scrub: true,
          },
        });
      }

      // 3) Row pop-in animations
      const rows = gsap.utils.toArray(".spotlight .row");
      rows.forEach((row) => {
        const items = row.querySelectorAll(".anim-box");

        gsap.from(items, {
          y: 100,
          opacity: 0,
          scale: 0.8,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        });
      });

      ScrollTrigger.refresh();

      return () => {
        gsap.ticker.remove(tickerCb);
        lenis.off?.("scroll", onLenisScroll);
        if (typeof lenis.destroy === "function") lenis.destroy();
      };
    },
    { scope: scopeRef }
  );

  return (
    <div ref={scopeRef} className="codex-page">
      <section className="hero">
        <h1>
          Objectifs 2026
          <br />
          Codex Community
        </h1>
      </section>

      <section className="spotlight">
        <div className="svg-path">
          <svg viewBox="-50 0 500 2800" preserveAspectRatio="none">
            <path
              ref={pathRef}
              id="stroke-path"
              d="M 260 400
                 C 260 50, 150 30, 120 80
                 C 60 150, 50 250, 100 350
                 C 150 450, 350 400, 380 500
                 S 300 700, 200 700
                 C 100 700, 50 750, 50 850
                 C 50 950, 150 1000, 250 1000
                 C 350 1000, 390 1050, 370 1150
                 C 350 1200, 320 1200, 300 1150
                 C 280 1100, 320 1080, 350 1120
                 C 380 1160, 350 1220, 280 1250
                 C 150 1300, 50 1400, 80 1550
                 C 110 1700, 350 1650, 380 1800
                 C 390 1950, 150 2000, 80 2150
                 C 20 2300, 200 2400, 350 2500
                 C 390 2570, 250 2700, 150 2800"
            />
          </svg>
        </div>

        {/* 1. Croissance */}
        <div className="row">
          <div className="col anim-box">
            <div className="card">
              <h2>01. Croissance</h2>
              <h3>Objectif : 250 Membres</h3>
              <p>
                Plus de membres signifie plus de partage, plus de diversité et
                plus d&apos;opportunités pour chacun.
              </p>
            </div>
          </div>
          <div className="col anim-box">
            {/* HERE WAS THE ERROR - FIXED NOW */}
            <Image
              src="/pictures/growth.png"
              alt="Croissance"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto" }}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* 2. Workshops */}
        <div className="row">
          <div className="col anim-box">
            <Image
              src="/pictures/workshop.png"
              alt="Workshops"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto" }}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div className="col anim-box">
            <div className="card">
              <h2>02. Workshops</h2>
              <h3>Compétences Clés</h3>
              <p>
                Des ateliers pratiques sur les compétences techniques les plus
                importantes pour cette année.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Talks */}
        <div className="row">
          <div className="col anim-box">
            <div className="card">
              <h2>03. Talks</h2>
              <h3>24 Talks par an</h3>
              <p>Débats animés autour des thèmes actuels de la Tech.</p>
            </div>
          </div>
          <div className="col anim-box">
            <Image
              src="/pictures/talkshow.png"
              alt="Talks"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto" }}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* 4. Job */}
        <div className="row">
          <div className="col anim-box">
            <Image
              src="/pictures/getyournextjob1.png"
              alt="Job"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto" }}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div className="col anim-box">
            <div className="card">
              <h2>04. Get Your Next Job</h2>
              <h3>3 sessions par an</h3>
              <p>
                Initiative concrète incluant le <strong>CV GPT Checker</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Study With Me */}
        <div className="row">
          <div className="col anim-box">
            <div className="card">
              <h2>05. Study With Me</h2>
              <h3>Objectif : 20h / semaine</h3>
              <p>Deep Work, Caméra On, Discipline.</p>
            </div>
          </div>
          <div className="col anim-box">
            <Image
              src="/pictures/studywithme.png"
              alt="Study"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto" }}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* 6. Newsletter */}
        <div className="row center-img">
          <div className="col anim-box newsletter-col">
            <div className="card newsletter-card">
              <h2 className="newsletter-title">06. Codex Newsletter</h2>
              <p className="newsletter-subtitle">
                Restez informés de toutes nos activités et récapitulatifs.
              </p>
            </div>
          </div>
          <div className="col anim-box">
            <Image
              src="/pictures/newsletter.png"
              alt="Newsletter"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto" }}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default CodexInteractiveScroll;