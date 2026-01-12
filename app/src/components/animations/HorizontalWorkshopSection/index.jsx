'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import WorkshopCard from '@/components/home/WorkshopCard';
import { workshopData } from '@/components/Workshop/workshopData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FEATURED_WORKSHOPS = workshopData.slice(0, 5);

export const HorizontalWorkshopSection = () => {
  const containerRef = useRef(null); // The overall container
  const sliderRef = useRef(null);    // The horizontal strip
  const triggerRef = useRef(null);   // The element to pin

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      if (!slider) return;
      
      // Calculate how far to move: Total width of strip minus the viewport width
      const getScrollAmount = () => -(slider.scrollWidth - window.innerWidth);

      gsap.to(slider, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,     // Pin the trigger element
          scrub: 1,      // Smooth scrubbing
          end: () => `+=${slider.scrollWidth}`, // Scroll distance equals width of content
          invalidateOnRefresh: true,
        }
      });
      
      // Parallax text in background specifically for the slider area
      gsap.to(".bg-text-parallax", {
        x: -150,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${slider.scrollWidth}`,
          scrub: 1
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#f8f8f8] overflow-x-hidden">
      
      {/* 1. VERTICAL INTRO SECTION - Context First */}
      <div className="container mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-orange-500 font-bold tracking-widest uppercase mb-4 block text-sm">
              Apprendre & Pratiquer
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Nos Ateliers
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
              Des sessions pratiques pour maîtriser les technologies les plus demandées. 
              Rejoignez nos experts et montez en compétence.
            </p>
          </div>
          
          {/* Visual cue to tell user to scroll down */}
          <div className="hidden md:block pb-2">
            <div className="text-gray-400 text-sm font-medium flex items-center gap-2">
              SCROLL TO EXPLORE <ArrowRight className="w-4 h-4 rotate-90" />
            </div>
          </div>
        </div>
        
        <div className="w-full h-[1px] bg-gray-300 mt-12"></div>
      </div>

      {/* 2. PINNED HORIZONTAL SECTION */}
      {/* This div hits top of viewport and sticks there while content slides */}
      <div ref={triggerRef} className="relative h-screen flex flex-col justify-center overflow-hidden z-20">
        
        {/* Background Aesthetics for the Slider Part */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
          <h1 className="bg-text-parallax text-[20vw] font-black text-gray-200/50 whitespace-nowrap leading-none tracking-tighter opacity-40">
            2025 SERIES
          </h1>
        </div>

        {/* The Moving Strip */}
        <div 
          ref={sliderRef} 
          className="relative flex items-center px-10 md:px-20 w-max h-[60vh] md:h-[70vh] will-change-transform z-10"
        >
          {FEATURED_WORKSHOPS.map((workshop, index) => (
            <div 
              key={index} 
              className={`mx-6 md:mx-8 transform ${index % 2 === 0 ? 'rotate-1 translate-y-4' : '-rotate-1 -translate-y-4'} transition-all duration-500 hover:rotate-0 hover:translate-y-0`}
            >
              <WorkshopCard item={workshop} />
            </div>
          ))}

          {/* CTA Card at the end of the scroll */}
          <div className="w-[300px] h-full flex items-center justify-center mx-10 md:mx-20">
            <Link 
              href="/Workshop" 
              className="group relative flex flex-col items-center justify-center w-[280px] h-[400px] rounded-3xl bg-gray-900 text-white overflow-hidden hover:bg-orange-500 transition-colors duration-500 shadow-xl"
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
              
              <span className="text-2xl font-bold mb-6 relative z-10">Voir le catalogue</span>
              <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300">
                <ArrowRight size={36} />
              </div>
              <span className="mt-6 text-sm text-white/60 relative z-10 uppercase tracking-widest">
                {workshopData.length} ateliers
              </span>
            </Link>
          </div>
        </div>
        
        {/* Visual Progress Indicator */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center">
          <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
            Slide to discover
          </span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalWorkshopSection;



