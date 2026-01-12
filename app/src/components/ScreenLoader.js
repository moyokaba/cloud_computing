'use client';

import { useState, useEffect } from 'react';


export default function ScreenLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Wait for the page to be fully loaded
    const handleLoad = () => {
      // Start fade out animation
      setIsFading(true);
      // Remove loader after fade animation completes
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      // Add a minimum display time for the loader
      setTimeout(handleLoad, 1500);
    } else {
      window.addEventListener('load', () => {
        setTimeout(handleLoad, 1000);
      });
    }

    // Fallback: hide loader after 3 seconds max
    const fallbackTimer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => setIsLoading(false), 500);
    }, 3000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`screen-loader ${isFading ? 'fade-out' : ''}`}>
     
      <div className="loader-container">
        <div className="screen-loader-ball"></div>
        <div className="screen-loader-ball"></div>
        <div className="screen-loader-ball"></div>
        <div className="screen-loader-ball"></div>
        <div className="screen-loader-ball"></div>
      </div>
    </div>
  );
}

