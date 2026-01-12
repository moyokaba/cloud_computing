import TermsOfUse from '@/components/privacy/TermsOfUse';

export const metadata = {
  title: 'Conditions d\'Utilisation | CODEX',
  description: 'Conditions d\'utilisation de la communauté Codex - Les règles qui régissent l\'utilisation de notre site web.',
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-orange-500 to-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Conditions d&apos;Utilisation</h1>
            <p className="text-lg opacity-90">
              Les règles qui régissent l&apos;utilisation de notre site web
            </p>
          </div>
        </div>
      </div>
      
      <TermsOfUse />
    </div>
  );
} 