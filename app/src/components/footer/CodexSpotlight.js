"use client";

import { useState, useRef, useEffect } from "react";

const CodexSpotlight = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [spotlightSize, setSpotlightSize] = useState(200);

  // Update spotlight size based on screen width
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1024) {
        setSpotlightSize(320);
      } else if (window.innerWidth >= 768) {
        setSpotlightSize(250);
      } else {
        setSpotlightSize(180);
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const spotlightStyle = {
    maskImage: `radial-gradient(circle ${spotlightSize}px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
    WebkitMaskImage: `radial-gradient(circle ${spotlightSize}px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
    opacity: isHovering ? 1 : 0,
    transition: "opacity 0.3s ease",
  };

  return (
    <div
      ref={containerRef}
      className="codex-spotlight-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient glow background */}
      <div className="codex-ambient-glow" />

      {/* Base text layer - muted */}
      <div className="codex-text-wrapper">
        <span className="codex-text codex-text-base">CODEX</span>
        
        {/* Reflection */}
        <span className="codex-text codex-text-reflection">CODEX</span>
      </div>

      {/* Reveal layer - orange spotlight */}
      <div className="codex-text-wrapper codex-reveal-layer" style={spotlightStyle}>
        <span className="codex-text codex-text-reveal">CODEX</span>
      </div>

      {/* Torch cursor effect */}
      {isHovering && (
        <div
          className="codex-cursor-torch"
          style={{
            left: mousePos.x,
            top: mousePos.y,
          }}
        >
          <div className="torch-glow" />
          <div className="torch-flame" />
          <div className="torch-handle" />
        </div>
      )}
    </div>
  );
};

export default CodexSpotlight;

