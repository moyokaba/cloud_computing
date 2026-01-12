'use client';
import { useLayoutEffect, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const MagneticButton = ({ href, children, className }) => {
  const buttonRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device to disable magnetic effect
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useLayoutEffect(() => {
    if (isTouchDevice) return;

    const button = buttonRef.current;
    if (!button) return;

    // QuickTo improves performance for mouse movement
    const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = button.getBoundingClientRect();

      // Calculate distance from center
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      // Move button (0.35 is the magnetic strength)
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isTouchDevice]);

  return (
    <div className="relative inline-block">
      <Link
        ref={buttonRef}
        href={href}
        className={`relative z-10 flex items-center justify-center px-10 py-4 font-bold rounded-full transition-colors duration-300 ${className}`}
      >
        {children}
        <ArrowRight className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
};

export default MagneticButton;



