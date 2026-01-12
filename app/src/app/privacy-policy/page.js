import PrivacyPolicy from '@/components/privacy/PrivacyPolicy';

export const metadata = {
  title: 'Politique de Confidentialité | CODEX',
  description: 'Politique de confidentialité de la communauté Codex - Comment nous protégeons vos données personnelles.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-orange-500 to-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Politique de Confidentialité</h1>
            <p className="text-lg opacity-90">
              Comment nous protégeons vos données personnelles
            </p>
          </div>
        </div>
      </div>
      
      <PrivacyPolicy />
    </div>
  );
} 