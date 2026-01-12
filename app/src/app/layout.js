import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";
import Footer from "@/components/Footer";
import ScreenLoader from "@/components/ScreenLoader";
import { ScrollRefreshProvider } from "@/components/ScrollRefreshProvider";

// Configuration de la police Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Métadonnées de l'application
export const metadata = {
  metadataBase: new URL('https://www.codex-cmr.com'),
  title: {
    default: 'Codex - Association pour Étudiants en Informatique et Recherche d\'Emploi en Allemagne',
    template: '%s | Codex',
  },
  description: 'Codex accompagne les étudiants en Allemagne dans leur développement en informatique et les aide à trouver des postes de Werkstudent et des opportunités d\'emploi. Workshops, projets, mentorat et réseau professionnel.',
  keywords: [
    'codex', 'informatique', 'workshops', 'projets', 'programmation',
    'étudiants camerounais', 'cameroun', 'dortmund', 'allemagne',
    'werkstudent', 'emploi informatique', 'job étudiant allemagne',
    'stage informatique', 'carrière tech', 'mentorat professionnel'
  ],
  authors: [{ name: "Team Codex" }],
  creator: 'Codex Association',
  publisher: 'Codex',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.codex-cmr.com',
    title: 'Codex - Développement de Compétences et Emploi pour Étudiants en Allemagne',
    description: 'Association qui accompagne les étudiants en Allemagne dans leur formation informatique et les aide à décrocher des postes de Werkstudent et des opportunités professionnelles.',
    siteName: 'Codex',
    images: [
      {
        url: '/Codex_logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Codex - Association pour Étudiants en Informatique et Recherche d\'Emploi',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codex - Formation Tech et Emploi pour Étudiants en Allemagne',
    description: 'Workshops informatiques, aide à la recherche de postes Werkstudent et accompagnement vers l\'emploi pour étudiants en Allemagne.',
    images: ['/Codex_logo.jpg'],
  },
  alternates: {
    canonical: 'https://www.codex-cmr.com',
  },
  // Add location metadata
  locationCreated: {
    type: 'Place',
    name: 'Dortmund, Germany',
  },
  // Add language metadata
  inLanguage: ['fr-FR', 'en'],
};

// Viewport export séparé (nouvelle recommandation Next.js)
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Layout principal
export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="48x48"
        />
      </head>
      <body className={`min-h-screen bg-black m-0 p-0 ${inter.className}`}>
        <ScrollRefreshProvider>
          {/* Screen Loader  <ScreenLoader />*/}


          {/* Header Component - conditionally rendered (not on homepage) */}
          <ConditionalHeader />

          {/* Main Content */}
          <main className="flex-grow">
            {children}
            <Analytics />
          </main>

          {/* Footer Component - à créer séparément */}
          <footer className="bg-black text-white">
            <Footer />
          </footer>
        </ScrollRefreshProvider>
      </body>
    </html>
  );
}