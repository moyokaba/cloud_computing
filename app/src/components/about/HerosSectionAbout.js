// src/components/about/HeroSection.js
import { Download } from 'lucide-react';

export default function HerosSectionAbout() {
    return (
      <section className="bg-gradient-to-br from-orange-500 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Notre Vision</h1>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-10">
              Codex est un laboratoire d&apos;idées et d&apos;innovations collaboratives. 
              Nous sommes un collectif de passionnés de nouvelles technologies, 
              motivés par l&apos;envie d&apos;apprendre, de créer, et de repousser les limites du possible.
            </p>
            
            <a 
              href="https://drive.google.com/uc?export=download&id=1R1t-jtTUpwfr6X0p89KdzkfI_6hQiiBy" 
              download
              className="inline-flex items-center px-6 py-3 bg-white text-orange-500 rounded-full 
                       font-semibold hover:bg-orange-50 transition-all duration-300 
                       hover:shadow-lg hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Télécharger la vision
            </a>
          </div>
        </div>
      </section>
    );
  }