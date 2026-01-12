// src/components/about/ValuesSection.js
const values = [
  {
    title: "Curiosité",
    description: "Nous croyons que la curiosité est le moteur de l'apprentissage. Chaque membre est encouragé à explorer de nouvelles idées."
  },
  {
    title: "Collaboration",
    description: "Le développement informatique est plus fort en équipe. Nous valorisons l'entraide pour résoudre des problèmes ensemble."
  },
  {
    title: "Excellence",
    description: "Bien que nous soyons en apprentissage, nous visons toujours la qualité et l'excellence dans nos entreprises."
  },
  {
    title: "Ouverture d'esprit",
    description: "L'innovation naît des perspectives différentes. Nous sommes ouverts aux nouvelles idées et à la diversité de pensée."
  }
];

export { values };

export default function ValuesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300
                       transform hover:-translate-y-1 border-l-4 border-orange-500"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}