'use client';

import { Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function WorkshopCard({ item }) {
  return (
    <div className="workshop-card relative w-[350px] md:w-[450px] h-[550px] flex-shrink-0 mx-6 group">
      
      {/* Image Container with Parallax Overflow */}
      <div className="relative h-[320px] w-full rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 350px, 450px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
        
        {/* Floating YouTube Link */}
        <div className="absolute top-4 right-4 flex gap-2 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <a 
            href={item.youtube} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-red-600 hover:text-white transition-colors text-white"
            aria-label={`Voir ${item.name} sur YouTube`}
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>

      {/* Content Card - Floating over image */}
      <div className="relative -mt-16 ml-6 mr-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 z-10 transition-transform duration-300 group-hover:-translate-y-2">
        
        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {item.skills.map((skill, index) => (
            <span 
              key={index} 
              className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-orange-50 text-orange-600 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-orange-500 transition-colors line-clamp-2">
          {item.name}
        </h3>
        
        <p className="text-gray-500 text-sm line-clamp-2 mb-4">
          {item.description}
        </p>

        {/* Footer: Tutors & Action */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-semibold uppercase">Tuteurs</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-medium text-gray-800">
                {item.tutors[0]?.name}
              </span>
              {item.tutors[0]?.linkedin && (
                <a 
                  href={item.tutors[0].linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:scale-110 transition-transform"
                  aria-label={`LinkedIn de ${item.tutors[0].name}`}
                >
                  <Linkedin size={14} />
                </a>
              )}
            </div>
          </div>
          
          <a 
            href={item.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-orange-500 transition-colors"
            aria-label={`Voir ${item.name}`}
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
