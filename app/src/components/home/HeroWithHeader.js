'use client';

import { useRef } from 'react';
import { Hero3DContext } from '@/hooks/useHero3DContext';
import { HeroSection } from './HeroSection';
import Header from '@/components/Header';

export const HeroWithHeader = () => {
  const heroRef = useRef(null);

  return (
    <Hero3DContext.Provider value={{ heroRef }}>
      <Header />
      <HeroSection />
    </Hero3DContext.Provider>
  );
};

export default HeroWithHeader;
