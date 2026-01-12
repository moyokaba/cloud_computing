import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { workshopData } from './workshopData';
import Workshop from './workshopMember';

export default function workshopSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Ateliers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
Nos workshops sont des espaces collaboratifs où les participants échangent leurs idées et développent des compétences sur des sujets précis.
Chaque atelier dispose d`&apos;`une vidéo explicative disponible sur YouTube. Pour y accéder, cliquez simplement sur la carte correspondante !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshopData.map((workshop, index) => (
            <Workshop key={index} member={workshop} />
          ))}
        </div>

        {/* CTA Section After Workshops */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6 text-lg font-medium">
            Intéressé par nos workshops?
          </p>
          <Link href="/inscription">
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Rejoindre un Workshop
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
