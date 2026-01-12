"use client";

import { useState } from 'react';
import { ChevronDown, Info, Users, Presentation, FileCode2, GraduationCap, MessageCircle } from 'lucide-react';
import { faqData, faqCategories } from '@/data/faqData';

const iconMap = {
  Info,
  Users,
  Presentation,
  FileCode2,
  GraduationCap,
  MessageCircle
};

export default function FAQSection() {
  const [openCategory, setOpenCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (categoryId, questionIndex) => {
    const key = `${categoryId}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trouvez des réponses aux questions les plus courantes sur Codex, nos activités et nos programmes.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {faqCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <button
                key={category.id}
                onClick={() => setOpenCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  openCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData[openCategory]?.map((item, index) => {
              const key = `${openCategory}-${index}`;
              const isOpen = openQuestions[key] || false;
              
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleQuestion(openCategory, index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </h3>
            <p className="text-gray-700 mb-6">
              N'hésitez pas à nous contacter directement. Notre équipe est là pour vous aider.
            </p>
            <a
              href="mailto:teamcodex.infos@gmail.com"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

