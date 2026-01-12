/* import { projectsData } from '@/data/projets/projectsData'; */
import { siteInternetSessions, programDates } from '@/data/projets/siteInternetData';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, ExternalLink, Calendar, Code, Users, CheckCircle, Clock, AlertCircle, MessageCircle, Monitor } from 'lucide-react';

export const metadata = {
  title: 'Projet de Sites Internet | CODEX',
  description: 'Découvrez notre programme de création de sites web portfolio pour débutants et avancés.',
};

export default function SiteInternetProjectsPage() {
  // Filter projects by category
  /* const webProjects = projectsData.filter(project => project.category === 'siteinternet'); */
  
  return (
    <div className="min-h-screen relative">
      {/* Fond d'image flou */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="/sitecodex.webp" 
          alt="Background"
          fill
          className="object-cover"
          style={{ filter: 'blur(8px) brightness(0.5)' }}
          priority
        />
      </div>
      
      {/* Header avec superposition sur l'image */}
      <div className="relative z-10 pt-20 pb-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white drop-shadow-lg">
              Projet Portfolio Web
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-white drop-shadow-md">
              Apprenez à créer votre propre site portfolio, du design à l&apos;hébergement, 
              avec HTML/CSS pour débutants et Next.js pour avancés.
            </p>
            
            {/* Badge dates du programme */}
            <div className="inline-flex items-center gap-2 mt-8 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <Clock className="w-5 h-5 text-orange-300" />
              <span className="text-white font-medium">
                Du {programDates.startDate} au {programDates.endDate}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contenu principal */}
      <section className="relative z-10 bg-white/95 backdrop-blur-sm py-16 shadow-xl rounded-t-3xl">
        <div className="container mx-auto px-4">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-gray-600 hover:text-orange-500 mb-12 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Retour à tous les projets
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Programme en détail</h2>
              
              <div className="flex items-center gap-3 bg-orange-50 px-4 py-2 rounded-lg border border-orange-100">
                <span className="text-orange-600 font-semibold">Programme actif</span>
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              </div>
            </div>

            <div className="prose max-w-none mb-16">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Le <strong>Projet Portfolio Web</strong> est conçu pour vous apprendre à créer votre propre site portfolio 
                professionnel, de la conception du design à la programmation et l&apos;hébergement.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ce programme de 8 semaines est divisé en deux niveaux :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Pour débutants</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Fondamentaux HTML et CSS</li>
                    <li>Création d&apos;un site responsive</li>
                    <li>Versionning avec Git</li>
                    <li>Hébergement sur GitHub Pages</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Pour avancés</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Framework Next.js</li>
                    <li>Composants réutilisables</li>
                    <li>Optimisation des performances</li>
                    <li>Déploiement sur Vercel</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-500 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Objectifs du programme</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Créer un site portfolio personnel professionnel</li>
                  <li>Apprendre les technologies web fondamentales ou avancées</li>
                  <li>Maîtriser les outils de développement modernes</li>
                  <li>Comprendre les principes de design UI/UX</li>
                  <li>Mettre en ligne et gérer votre site</li>
                </ul>
              </div>
              
              {/* Section des dates */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
                <div className="flex items-start gap-4">
                  <Calendar className="text-blue-500 w-10 h-10 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Calendrier du programme</h3>
                    <p className="text-gray-700 mb-3">Le programme se déroule sur 8 semaines, avec une session par semaine.</p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                      <div>
                        <span className="text-blue-600 font-semibold">Date de début:</span>
                        <div className="text-lg font-medium">{programDates.startDate}</div>
                      </div>
                      <div>
                        <span className="text-blue-600 font-semibold">Date de fin:</span>
                        <div className="text-lg font-medium">{programDates.endDate}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Section Technologies */}
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 mb-8">
                <div className="flex items-start gap-4">
                  <Monitor className="text-green-500 w-10 h-10 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Technologies utilisées</h3>
                    <p className="text-gray-700 mb-4">Les participants apprendront et utiliseront ces technologies :</p>
                    
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">HTML5</span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">CSS3</span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">JavaScript</span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">Git</span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">GitHub</span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">React</span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">Next.js</span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">Tailwind CSS</span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">Vercel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">Programme des 8 semaines</h3>
            
            <div className="space-y-6">
              {siteInternetSessions.map((session, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 flex items-center justify-between">
                    <h4 className="text-xl font-bold text-gray-800">{session.week}: {session.title}</h4>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      {session.deliverable}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-3">
                      {session.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start">
                          <CheckCircle className="text-green-500 w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl overflow-hidden shadow-xl">
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-white" />
                    <h3 className="text-2xl font-bold text-white">Ne manquez pas la prochaine session !</h3>
                  </div>
                  
                  <p className="text-white/90 mb-3 text-lg">
                    Places limitées pour un accompagnement personnalisé.
                  </p>
                  
                  <div className="flex items-center gap-2 mb-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                    <Clock className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">
                      Prochaine session : {programDates.nextSession}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-5 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span className="text-white">
                      Les détails de la prochaine session seront partagés dans notre forum principal WhatsApp.
                    </span>
                  </div>
                  
                  <p className="text-white/90 mb-8">
                    Remplissez notre formulaire d&apos;inscription pour rejoindre notre forum WhatsApp et devenir membre de CODEX. 
                    C&apos;est votre chance de créer un portfolio professionnel qui vous démarquera!
                  </p>
                  
                  <Link 
                    href="/inscription" 
                    className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Réserver ma place maintenant
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 