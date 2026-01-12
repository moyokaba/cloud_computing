// src/components/Footer.js
import Link from "next/link";
import {
  Mail,
  MessageCircle,
  ArrowRight,
  SquareArrowOutUpRight,
  Linkedin,
  MapPin,
  Youtube,
} from "lucide-react";
import "@/styles/components/footer.css";
import "@/styles/components/codex-spotlight.css";
import CodexSpotlight from "./footer/CodexSpotlight";
import { ABOUT_LABEL } from "@/data/navigationLabels";

// Static year to prevent hydration mismatch (update manually each year)
const CURRENT_YEAR = 2026;

const Footer = () => {

  const navigation = {
    main: [
      { name: ABOUT_LABEL, href: "/about" },
      { name: "Workshops", href: "/Workshop" },
      { name: "Projets", href: "/projects" },
      { name: "FAQ", href: "/faq" },
      { name: "Nous Rejoindre", href: "/inscription" },
    ],
    social: [
      {
        name: "Email",
        href: "mailto:teamcodex.infos@gmail.com",
        icon: Mail,
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/codex-cmr/",
        icon: Linkedin,
      },

    ],
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-orange-500">
              CODEX
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Un laboratoire d&apos;idées et d&apos;innovations collaboratives
              pour les passionnés de technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Support & Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:teamcodex.infos@gmail.com"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>teamcodex.infos@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/codex-cmr/"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/@Codex-cmr"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2"
                >
                  <Youtube className="h-5 w-5" />
                  <span>YouTube</span>
                </a>
              </li>
              <li className="text-gray-400 flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Allemagne</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
        </div>
      </div>

    {/* Large CODEX Spotlight Section */}
      <CodexSpotlight />
      {/* Bottom Bar */}
      <div className=" border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>© {CURRENT_YEAR} CODEX. Tous droits réservés.</p>
              <p className="mt-1">
                Site développé par{" "}
                <a
                  href="https://www.linkedin.com/in/alain-ngongang-0b57ab19a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 transition-colors duration-300"
                >
                  ALAIN
                </a>
                {" "}et{" "}
                <a
                  href="https://de.linkedin.com/in/alex-dilane-douanla-wamba-236b65251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 transition-colors duration-300"
                >
                  ALEX
                </a>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/terms-of-use"
                className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Conditions d&apos;utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
