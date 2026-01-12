'use client';

import { useRef } from 'react';
import TextDropScroll from "@/components/animations/TextDropScroll";

export const OurMissionSection = () => {
  const containerRef = useRef(null);

  return (
    // Wrapper with z-10 to slide over the pinned hero, rounded top corners for card-deck effect
    <div className="relative z-10 bg-white rounded-t-[3rem] -mt-4 pt-10 shadow-[0_-20px_60px_rgba(0,0,0,0.5)]">
      
      
      
      <TextDropScroll />
    </div>
  );
};

export default OurMissionSection;