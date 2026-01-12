'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Provider component that handles ScrollTrigger lifecycle across route changes.
 * 
 * Fixes the issue where scroll animations work on first load but break after
 * navigating to another page and back (client-side navigation).
 */
export function ScrollRefreshProvider({ children }) {
    const pathname = usePathname();

    // Handle route changes - refresh ScrollTrigger when path changes
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Clear scroll position memory from previous page
        ScrollTrigger.clearScrollMemory();

        // Reset scroll position to top
        window.scrollTo(0, 0);

        // Delay refresh to allow new components to mount and calculate dimensions
        const timer = setTimeout(() => {
            ScrollTrigger.refresh(true);
            console.log('[ScrollRefreshProvider] Refreshed on route change:', pathname);
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname]);

    // Handle initial page load and resize
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleLoad = () => {
            setTimeout(() => {
                ScrollTrigger.refresh(true);
                console.log('[ScrollRefreshProvider] Refreshed on page load');
            }, 100);
        };

        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        // Check if page is already loaded
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('load', handleLoad);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return children;
}

export default ScrollRefreshProvider;
