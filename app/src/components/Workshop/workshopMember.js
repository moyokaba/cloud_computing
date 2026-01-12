// src/components/team/TeamMember.js
import { Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';

export default function Workshop({ member }) {
  const socialLinks = [
    {
      name: 'YouTube',
      icon: Youtube,
      url: member.youtube,
      bgColor: 'hover:bg-red-600'
    }
  ];

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden
                  hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Profile Image Container */}
      <div className="relative h-[300px] w-full bg-gray-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          priority
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
        <p className="text-gray-600 mb-4">
          {member.description}
        </p>

        {/* Tutors' Names */}
        <div className="mt-4 flex items-center gap-2">
          <p className="text-orange-500 font-medium">
            Tuteurs:
          </p>
          {member.tutors.map((tutor, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-black group-hover:text-orange-500 transition-colors duration-300">{tutor.name}</span>
              <a
                href={tutor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300 ml-2"
                aria-label={`Visiter LinkedIn de ${tutor.name}`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="flex flex-wrap gap-2 mt-4">
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

        
      </div>
    </div>
  );
}