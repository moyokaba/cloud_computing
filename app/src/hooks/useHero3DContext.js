'use client';

import { createContext, useContext } from 'react';

// Context for the 3D effect that works across component boundaries
export const Hero3DContext = createContext(null);

export const useHero3DEffect = () => useContext(Hero3DContext);

