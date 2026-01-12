// src/components/about/UnacceptableSection.js
import { AlertTriangle } from 'lucide-react';

const unacceptable = [
  {
    title: "NON-RESPECT DES VALEURS",
    description: "Codex valorise l'entraide, la curiosité et l'ouverture d'esprit. Tout manquement à ces principes nuira à notre cohésion et ne sera pas toléré."
  },
  {
    title: "ABSENCE DE COLLABORATION",
    description: "La collaboration et l'échange de connaissances sont essentiels à notre succès commun. Une approche individualiste nuirait à notre esprit d'équipe et est inacceptable."
  },
  {
    title: "MANQUE D'ENGAGEMENT",
    description: "L'engagement de tous est crucial pour le succès de Codex. Un désintérêt ou des absences fréquentes peuvent nuire au sentiment d'appartenance au groupe."
  }
];

export default function UnacceptableSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Ce Qui Est Inacceptable Dans Le Groupe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {unacceptable.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-8 rounded-xl relative overflow-hidden
                       border-2 border-red-500/20 hover:border-red-500/40
                       transition-all duration-300"
            >
              <div className="absolute top-4 right-4">
                <AlertTriangle className="w-6 h-6 text-red-500/60" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-red-500">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <blockquote className="text-xl italic text-gray-400">
            &quot;La discipline est mère du succès.&quot;
            <footer className="text-sm mt-2 text-gray-500">- Eschyle</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}