"use client";

import { usePathname } from 'next/navigation';
import Header from './Header';

// This component renders the Header on all pages except the homepage
// The homepage uses HeroWithHeader which includes its own Header for the 3D effect
export default function ConditionalHeader() {
    const pathname = usePathname();
    
    // Don't render Header on homepage - HeroWithHeader handles it there
    if (pathname === '/') {
        return null;
    }
    
    return <Header />;
}

