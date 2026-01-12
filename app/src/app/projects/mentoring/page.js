/* import { projectsData } from '@/data/projets/projectsData'; */
import { mentoringSessions, programDates } from '@/data/projets/mentoringData';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, ExternalLink, Calendar, Code, Users, CheckCircle, Clock, AlertCircle, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Mentorat Professionnel et Aide à la Recherche d\'Emploi | Codex',
  description: 'Notre programme de mentorat aide les étudiants à développer leurs compétences professionnelles et à trouver des postes de Werkstudent et des emplois en informatique en Allemagne.',
  alternates: {
    canonical: 'https://www.codex-cmr.com/projects/mentoring',
  },
  openGraph: {
    title: 'Mentorat et Recherche d\'Emploi | Codex',
    description: 'Accompagnement personnalisé pour trouver des postes de Werkstudent et développer votre carrière en Allemagne.',
    url: 'https://www.codex-cmr.com/projects/mentoring',
  }
};

export default function MentoringProjectsPage() {
  // Filter projects by category
  // Note: We no longer use projectsData on this page; if needed, re-enable the import above.
  // const mentoringProjects = projectsData.filter(project => project.category === 'mentoring');
  
  return (
    <div className="min-h-screen relative">
      {/* Fond d'image flou */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="/Wekstudent.webp" 
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
              Get Your Werkstudent Job
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-white drop-shadow-md">
              Un programme d&apos;accompagnement intensif de 12 semaines pour 
              aider les étudiants à décrocher leur emploi Werkstudent en Allemagne.
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
                Le projet <strong>&quot;Get Your Werkstudent Job&quot;</strong> est un programme de mentorat visant à accompagner 
                10 étudiants pendant une période de 3 mois pour les aider à obtenir un poste de Werkstudent en Allemagne.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ce programme structuré en 12 semaines couvre tous les aspects essentiels de la recherche d&apos;emploi, 
                depuis la création d&apos;un CV professionnel jusqu&apos;à la préparation aux entretiens d&apos;embauche.
              </p>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-500 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Objectifs du programme</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Préparer un CV et une lettre de motivation adaptés au marché allemand</li>
                  <li>Créer une présence professionnelle en ligne (LinkedIn, Xing, Stepstone)</li>
                  <li>Développer des compétences pour les entretiens d&apos;embauche</li>
                  <li>Soumettre au moins 25 candidatures pendant le programme</li>
                  <li>Obtenir un job Werkstudent à la fin du programme</li>
                </ul>
              </div>
              
              {/* Section des dates */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
                <div className="flex items-start gap-4">
                  <Calendar className="text-blue-500 w-10 h-10 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Calendrier du programme</h3>
                    <p className="text-gray-700 mb-3">Le programme se déroule sur 3 mois, avec une session par semaine.</p>
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
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">Programme des 12 semaines</h3>
            
            <div className="space-y-6">
              {mentoringSessions.map((session, index) => (
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
            <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl overflow-hidden shadow-xl">
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-white" />
                    <h3 className="text-2xl font-bold text-white">Ne manquez pas la prochaine session !</h3>
                  </div>
                  
                  <p className="text-white/90 mb-3 text-lg">
                    Places limitées à 10 participants pour un accompagnement personnalisé.
                  </p>
                  
                  <div className="flex items-center gap-2 mb-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
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
                    C&apos;est le premier pas pour commencer votre chemin vers l&apos;obtention d&apos;un job Werkstudent en Allemagne !
                  </p>
                  
                  <Link 
                    href="/inscription" 
                    className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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