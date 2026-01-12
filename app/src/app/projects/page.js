import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/projets/categoriesData';

export const metadata = {
  title: 'Projets et Opportunités Professionnelles | Codex',
  description: 'Découvrez nos projets d\'accompagnement et comment Codex aide les étudiants à trouver des postes de Werkstudent et à développer leur carrière en informatique en Allemagne.',
  alternates: {
    canonical: 'https://www.codex-cmr.com/projects',
  },
  openGraph: {
    title: 'Projets et Opportunités d\'Emploi | Codex',
    description: 'Accompagnement vers des postes de Werkstudent et développement de carrière pour étudiants en informatique en Allemagne.',
    url: 'https://www.codex-cmr.com/projects',
  }
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-orange-500 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Projets</h1>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Chez Codex, nous croyons en l&apos;apprentissage par la pratique. 
              Nos projets sont des opportunités de développer des compétences 
              techniques tout en créant des solutions innovantes.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Catégories des Projets
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explorez nos différentes catégories de projets et découvrez les réalisations 
              de la communauté Codex.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {categories.map((category) => (
              <Link 
                key={category.id}
                href={`/projects/${category.id}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-48 relative overflow-hidden">
                  {category.image ? (
                    <Image
                      src={category.image}
                      alt={`Illustration ${category.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      priority={false}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600" />
                  )}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-orange-500 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                  
                  <div className="mt-4 flex justify-end">
                    <span className="text-orange-500 font-medium group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
                      Voir le projet
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}   