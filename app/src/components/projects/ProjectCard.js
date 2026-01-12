import Link from 'next/link';
import Image from 'next/image';
import { Github, ExternalLink, Users } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Image du projet */}
      <div className="h-48 relative bg-gradient-to-br from-orange-400 to-orange-600">
        {project.image && (
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover opacity-80"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        <div className="absolute top-4 right-4 bg-white/90 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
          {project.status}
        </div>
      </div>
      
      {/* Contenu du projet */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.shortDescription}</p>
        
        {/* Technologies utilisées */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Liens du projet */}
        <div className="flex gap-3 mb-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 transition-colors"
              aria-label="Voir le code source sur GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 transition-colors"
              aria-label="Voir le projet en ligne"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
        
        {/* Participants */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">Participants</span>
          </div>
          
          <div className="space-y-2">
            {project.participants.map((participant, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium">{participant.name}</span>
                <div className="flex gap-2">
                  {participant.linkedin && (
                    <a 
                      href={participant.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      aria-label={`LinkedIn de ${participant.name}`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                  
                  {participant.github && (
                    <a 
                      href={participant.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 transition-colors"
                      aria-label={`GitHub de ${participant.name}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Lien vers la page détaillée */}
        <Link 
          href={`/projects/${project.id}`}
          className="mt-4 inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
        >
          En savoir plus
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 