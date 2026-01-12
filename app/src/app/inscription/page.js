import InscriptionForm from '@/components/inscription/InscriptionForm';

export const metadata = {
  title: 'Inscription | CODEX',
  description: 'Rejoignez la communauté CODEX - Un espace de co-apprentissage et d\'innovation pour les passionnés de développement.',
};

export default function InscriptionPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <InscriptionForm />
      </div>
    </div>
  );
}