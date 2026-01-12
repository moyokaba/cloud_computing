// Données du programme Chatbot Codex (bootcamp IA générative)
export const programDates = {
  startDate: "1 Juillet 2025",
  endDate: "Dernière semaine de Septembre 2025",
  castingDate: "29 Juin 2025",
  nextSession: "À venir"
};

export const programInfo = {
  cadence: "Rencontre chaque 2 semaines",
  liveSessions: 12,
  durationHours: 2,
  day: "Dimanche",
  time: "17h - 19h",
  planification: [
    "1er mois : Théorie",
    "2e mois : Pratique + Théorie",
    "3e mois : Pratique"
  ],
  stack: {
    versionControl: ["Git", "GitHub"],
    ide: ["VS Code", "IntelliJ", "PyCharm"],
    backend: ["Python"],
    frontend: ["React.js"],
    deployment: "Déploiement géré par l'équipe Codex"
  },
  requirements: [
    "Savoir utiliser un IDE (VS Code, IntelliJ, ...)",
    "Connaître un langage de programmation",
    "Optionnel : notions de Git et commandes Linux de base"
  ],
  rules: [
    "Groupe limité à 10 participants (peut être augmenté)",
    "3 absences maximum (au-delà exclusion)",
    "Ne pas faire les devoirs 3 fois = exclusion",
    "Pas de messages hors thématique"
  ],
  branding: [
    "Respecter le branding Codex",
    "Améliorer l'UI/UX du conteneur du chatbot"
  ],
  rag: {
    description: "Implémentation d'un RAG avec contexte basé sur la FAQ de Codex"
  }
};

export const topics = {
  python: [
    "Installer un IDE avec Python",
    "Syntaxe de base",
    "Déclaration et utilisation des variables",
    "Fonctions simples",
    "Docstrings",
    "Dépendances & environnements",
    "Frameworks Python (aperçu)"
  ],
  genAI: [
    "Définition de l'IA générative",
    "Utiliser des modèles via Hugging Face",
    "Recommandations de datasets : Kaggle, GitHub, (ex. Natasha sur LinkedIn, Clotilde)",
    "Prompt Engineering (bases)"
  ],
  applications: {
    domains: [
      "Santé : diagnostic médical (ex. détection du cancer via imagerie)",
      "Transports : voitures autonomes",
      "Divertissement : recommandations (Netflix, Spotify), jeux vidéo",
      "Éducation : tuteurs IA personnalisés",
      "Commerce : chatbots service client, prédiction des ventes"
    ],
    landmarks: [
      "LLM : ChatGPT, Gemini, Mistral (NLP)",
      "Génération d'images : DALL·E"
    ]
  }
};

// Sessions (12 lives). Dates indicatives basées sur le planning fourni.
export const chatbotSessions = [
  {
    session: 0,
    title: "Casting & Introduction du programme",
    date: "29/06/2025 (17h00 - 18h30)",
    deliverable: "Inscription validée et règles acceptées",
    agenda: [
      "Présentation des organisateurs",
      "Pourquoi participer ?",
      "Déroulement du bootcamp, règles et conditions",
      "Questions/Réponses"
    ]
  },
  {
    session: 1,
    title: "Qu'est-ce que l'IA ? Histoire, usages & Iceberg de l'IA",
    date: "06/07/2025 (17h - 19h)",
    deliverable: "Résumé des domaines d'application",
    agenda: [
      "Panorama IA & historique",
      "Tour des domaines d'applications",
      "Intro Python Crash Course (Partie 1)"
    ]
  },
  {
    session: 2,
    title: "Sous-disciplines : ML, DL, Prompt Engineering, GenAI",
    date: "13/07/2025 (17h - 19h)",
    deliverable: "Fiche récap ML/DL/GenAI",
    agenda: [
      "ML vs DL",
      "Prompt engineering (bases)",
      "IA générative : cas d'usage"
    ]
  },
  {
    session: 3,
    title: "Python Crash Course (Atelier) — Parties 1 & 2",
    date: "20/07/2025 (17h - 19h)",
    deliverable: "Mini scripts Python (variables, fonctions, docstrings)",
    agenda: [
      "Installer IDE + Python",
      "Syntaxe, variables, fonctions",
      "Docstrings & dépendances"
    ]
  },
  {
    session: 4,
    title: "Générative AI & RAG (théorie + démo)",
    date: "27/07/2025 (17h - 19h)",
    deliverable: "Plan d'implémentation RAG",
    agenda: [
      "RAG : concepts et architecture",
      "Hugging Face : modèles & pipelines",
      "Préparer la FAQ Codex comme contexte"
    ]
  },
  {
    session: 5,
    title: "Introduction au développement du chatbot",
    date: "03/08/2025 (17h - 19h)",
    deliverable: "Repo initialisé + conventions",
    agenda: [
      "Version control (Git/GitHub)",
      "Choix IDE (VS Code / IntelliJ / PyCharm)",
      "Architecture projet"
    ]
  },
  // Sessions 6 à 11 : focus pratique incrémental
  {
    session: 6,
    title: "Backend Python — APIs & intégration modèle",
    date: "A eu lieu",
    deliverable: "Endpoint basique fonctionnel",
    agenda: [
      "Création API (FastAPI/Flask)",
      "Intégration modèle depuis HF",
      "Gestion des dépendances"
    ]
  },
  {
    session: 7,
    title: "Frontend Vue.js — UI Chat + branding Codex",
    date: "A eu lieu",
    deliverable: "UI conversationnelle basique",
    agenda: [
      "Composants UI",
      "Gestion d'état",
      "Branding Codex"
    ]
  },
  {
    session: 8,
    title: "Implémentation RAG — ingestion & recherche",
    date: "A eu lieu",
    deliverable: "Chaîne RAG reliée à la FAQ Codex",
    agenda: [
      "Prétraitement documents",
      "Indexation & similarité",
      "Chaîne récupération + génération"
    ]
  },
  {
    session: 9,
    title: "Tests, qualité & instrumentation",
    date: "A eu lieu",
    deliverable: "Plan de tests + métriques",
    agenda: [
      "Tests unitaires",
      "Suivi erreurs & logs",
      "Mesures qualitatives (réponses)"
    ]
  },
  {
    session: 10,
    title: "Déploiement (piloté par Codex) & monitoring",
    date: "A eu lieu",
    deliverable: "Instance déployée",
    agenda: [
      "Pipeline déploiement",
      "Secrets & variables d'environnement",
      "Surveillance basique"
    ]
  },
  {
    session: 11,
    title: "Démonstrations finales & rétrospective",
    date: "A eu lieu",
    deliverable: "Demo finale",
    agenda: [
      "Démos projets",
      "Rétrospective & prochaines étapes"
    ]
  }
];
