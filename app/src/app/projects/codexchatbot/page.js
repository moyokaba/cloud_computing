import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, AlertCircle, CheckCircle, Code, MessageCircle } from 'lucide-react';
import { programDates, programInfo, topics, chatbotSessions } from '@/data/projets/chatbotCodexData';

export const metadata = {
  title: "Chatbot Codex | Bootcamp IA Générative (Terminé)",
  description: "Bootcamp (terminé) de 12 sessions pour construire un chatbot avec Python, Vue.js et RAG basé sur la FAQ Codex. Découvrez la démo.",
  alternates: { canonical: 'https://www.codex-cmr.com/projects/codexchatbot' },
  openGraph: {
    title: "Chatbot Codex | Bootcamp IA Générative",
  description: "Bootcamp terminé: chatbot avec Python, Vue.js et RAG (FAQ Codex). Voir la démo.",
    url: 'https://www.codex-cmr.com/projects/codexchatbot'
  }
};

export default function ChatbotCodexPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="/projetCollab2.webp" 
          alt="Background"
          fill
          className="object-cover"
          style={{ filter: 'blur(8px) brightness(0.5)' }}
          priority
        />
      </div>

      {/* Header */}
      <div className="relative z-10 pt-20 pb-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white drop-shadow-lg">Chatbot Codex</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8" />
            <p className="text-xl md:text-2xl leading-relaxed text-white drop-shadow-md">
              Bootcamp pratique en IA générative (terminé) : Python, React.js et RAG avec contexte FAQ Codex.
            </p>
            <div className="inline-flex items-center gap-2 mt-8 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <Clock className="w-5 h-5 text-orange-300" />
              <span className="text-white font-medium">
                Terminé • {programInfo.liveSessions} sessions • {programInfo.durationHours}h/session
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="relative z-10 bg-white/95 backdrop-blur-sm py-16 shadow-xl rounded-t-3xl">
        <div className="container mx-auto px-4">
          <Link href="/projects" className="inline-flex items-center text-gray-600 hover:text-orange-500 mb-12 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" /> Retour à tous les projets
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* Program intro */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Programme en détail</h2>
              <div className="flex items-center gap-3 bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                <span className="text-green-600 font-semibold">Programme terminé</span>
                <span className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
            </div>

            <div className="prose max-w-none mb-16">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Rencontres toutes les deux semaines. <br />Planification: {programInfo.planification.join(' - ')}
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-500 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Objectifs & Stack</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Construire un chatbot fonctionnel (UI + backend)</li>
                  <li>Implémenter un RAG avec la FAQ Codex</li>
                  <li>Mise en production et monitoring</li>
                </ul>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="font-semibold text-gray-800 flex items-center gap-2"><Code className="w-4 h-4" /> Stack</div>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Versioning: {programInfo.stack.versionControl.join(', ')}</li>
                      <li>IDE: {programInfo.stack.ide.join(', ')}</li>
                      <li>Backend: {programInfo.stack.backend.join(', ')}</li>
                      <li>Frontend: {programInfo.stack.frontend.join(', ')}</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Thèmes clés</div>
                    <ul className="list-disc pl-6 text-gray-700">
                      {topics.python.slice(0,3).map((t, i) => (<li key={i}>{t}</li>))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dates */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
                <div className="flex items-start gap-4">
                  <Calendar className="text-blue-500 w-10 h-10 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Calendrier</h3>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                      <div><span className="text-blue-600 font-semibold">Début:</span><div className="text-lg font-medium">{programDates.startDate}</div></div>
                      <div><span className="text-blue-600 font-semibold">Fin:</span><div className="text-lg font-medium">{programDates.endDate}</div></div>
                      <div><span className="text-blue-600 font-semibold">Casting:</span><div className="text-lg font-medium">{programDates.castingDate}</div></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo video */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Démonstration vidéo</h3>
                <p className="text-gray-700 mb-4">Regardez la démonstration du Chatbot Codex en action.</p>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7377205328083312640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Voir la vidéo sur LinkedIn
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">Plan des 12 sessions</h3>
            <div className="space-y-6">
              {chatbotSessions.map((s) => (
                <div key={s.session} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 flex items-center justify-between">
                    <h4 className="text-xl font-bold text-gray-800">Session {s.session}: {s.title}</h4>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">{s.date}</span>
                  </div>
                  <div className="p-6">
                    {s.agenda && (
                      <ul className="space-y-3">
                        {s.agenda.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="text-green-500 w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.deliverable && (
                      <div className="mt-4 text-sm text-gray-600">Livrable: <span className="font-medium">{s.deliverable}</span></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl overflow-hidden shadow-xl">
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-white" />
                    <h3 className="text-2xl font-bold text-white">Découvrir le Chatbot Codex</h3>
                    
                  </div>
                  <p className="text-white/90 mb-3 text-lg">Le bootcamp est terminé. Vous pouvez regarder la démo et rejoindre notre communauté pour les prochains programmes.</p>
                  <div className="flex items-center gap-3 mb-5 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span className="text-white">Les détails seront partagés dans le forum principal.</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://codexbot.gen-ai.software/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Testez le Chatbot Codex
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <Link href="/inscription" className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Rejoindre Codex
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
