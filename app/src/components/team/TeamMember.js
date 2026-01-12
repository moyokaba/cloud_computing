// src/components/team/TeamMember.js
'use client';

import { forwardRef, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Linkedin, Github, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';

const TeamMember = forwardRef(({ member }, ref) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Set initial transform properties for 3D effect
    gsap.set(card, { 
      transformStyle: 'preserve-3d', 
      transformPerspective: 1000 
    });

    // --- 3D Hover Effect ---
    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 15; // Divide for subtlety
      const y = (e.clientY - top - height / 2) / -15; // Invert y-axis for natural feel

      gsap.to(card, {
        rotationY: x,
        rotationX: y,
        ease: 'power2.out',
        duration: 0.5,
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        ease: 'power2.out',
        duration: 1, // Slower return for a smoother effect
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: member.linkedin,
      bgColor: 'hover:bg-[#0A66C2]'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: member.github,
      bgColor: 'hover:bg-[#333]'
    },
    member.portfolio && {
      name: 'Portfolio',
      icon: LinkIcon,
      url: member.portfolio,
      bgColor: 'hover:bg-orange-500'
    }
  ].filter(Boolean);

  return (
    <div 
      ref={(el) => {
        cardRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden
                  hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Profile Image Container */}
      <div className="relative h-[300px] w-[300px] bg-gray-100 rounded-full overflow-hidden mx-auto">
        <Image
          src={member.image}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Social Links Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 opacity-0 
                      group-hover:opacity-100 transition-all duration-300 transform 
                      group-hover:translate-y-0 translate-y-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-white/10 backdrop-blur-sm
                          ${social.bgColor} hover:text-white
                          transform transition-all duration-300
                          hover:scale-110 hover:shadow-lg
                          group/link`}
                aria-label={`Visiter ${social.name} de ${member.name}`}
              >
                <Icon className="w-5 h-5" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2
                               bg-gray-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap
                               opacity-0 group-hover/link:opacity-100 pointer-events-none">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-30 p-6 bg-white">
        <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-orange-500
                     transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-orange-500 font-medium mb-3">
          {member.role}
        </p>
        <p className="text-gray-600 mb-4">
          {member.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {member.skills.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full
                      text-sm font-medium hover:bg-orange-200 transition-colors
                      duration-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Bottom Social Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300
                          hover:bg-gray-100 group/icon relative`}
                aria-label={`Visiter ${social.name} de ${member.name}`}
              >
                <Icon className="w-5 h-5 text-gray-500 group-hover/icon:text-gray-700" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1
                               bg-gray-900 text-white px-2 py-1 rounded text-xs
                               opacity-0 group-hover/icon:opacity-100 pointer-events-none">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
});

TeamMember.displayName = 'TeamMember';

export default TeamMember;