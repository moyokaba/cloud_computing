// FAQ Data - Questions and Answers based on Codex website content

export const faqCategories = [
  {
    id: 'general',
    name: 'Général',
    icon: 'Info'
  },
  {
    id: 'membership',
    name: 'Adhésion',
    icon: 'Users'
  },
  {
    id: 'workshops',
    name: 'Workshops',
    icon: 'Presentation'
  },
  {
    id: 'projects',
    name: 'Projets',
    icon: 'FileCode2'
  },
  {
    id: 'mentoring',
    name: 'Mentoring',
    icon: 'GraduationCap'
  },
  {
    id: 'contact',
    name: 'Contact & Support',
    icon: 'MessageCircle'
  }
];

export const faqData = {
  general: [
    {
      question: "Qu'est-ce que Codex ?",
      answer: "Codex est une association créée en Allemagne qui accompagne les étudiants camerounais et internationaux dans leur développement en informatique et leur recherche de postes de Werkstudent. Nous offrons des workshops, des projets collaboratifs, du mentorat et un réseau professionnel pour aider les étudiants à développer leurs compétences techniques et à trouver des opportunités d'emploi."
    },
    {
      question: "Où se trouve Codex ?",
      answer: "Codex est basé à Dortmund, en Allemagne. Nous organisons nos activités principalement dans cette ville, mais nous accueillons également des étudiants d'autres villes allemandes."
    },
    {
      question: "Quelle est la mission de Codex ?",
      answer: "La mission de Codex est d'accompagner les étudiants en informatique dans leur développement professionnel et leur insertion sur le marché du travail allemand. Nous visons à créer une communauté de passionnés de technologie qui s'entraident, apprennent ensemble et contribuent à des projets innovants."
    },
    {
      question: "Codex est-il réservé uniquement aux étudiants camerounais ?",
      answer: "Non, Codex accueille tous les étudiants passionnés d'informatique, quelle que soit leur origine. Bien que l'association ait été créée par des étudiants camerounais, nous sommes ouverts à tous les étudiants internationaux en Allemagne qui partagent notre passion pour la technologie."
    },
    {
      question: "Quels sont les objectifs chiffrés de Codex pour 2025 ?",
      answer: "Nos objectifs pour 2025 incluent : 3 projets collaboratifs, 12 workshops, 20 étudiants accompagnés jusqu'à l'obtention de leur alternance (Werkstudent), 24 talk-shows, et une communauté grandissante de minimum 100 informaticiens passionnés."
    }
  ],
  membership: [
    {
      question: "Comment rejoindre Codex ?",
      answer: "Pour rejoindre Codex, vous pouvez vous inscrire via notre page d'inscription sur le site web. Remplissez le formulaire avec vos informations et vous recevrez un email de confirmation avec les instructions pour rejoindre notre groupe WhatsApp et commencer à participer aux activités."
    },
    {
      question: "Y a-t-il des frais d'adhésion ?",
      answer: "Codex est une association étudiante et l'adhésion est gratuite. Nous croyons en l'accessibilité de l'éducation et de l'apprentissage pour tous les étudiants passionnés de technologie."
    },
    {
      question: "Quels sont les avantages de rejoindre Codex ?",
      answer: "En rejoignant Codex, vous bénéficiez de : l'accès à des workshops animés par des professionnels, la participation à des projets collaboratifs concrets, un programme de mentorat pour trouver un poste de Werkstudent, un réseau professionnel actif, des talk-shows sur des thèmes tech actuels, et une communauté d'entraide et de partage de connaissances."
    },
    {
      question: "Quels sont les prérequis pour rejoindre Codex ?",
      answer: "Il n'y a pas de prérequis techniques stricts. Nous accueillons tous les étudiants passionnés d'informatique, du niveau débutant au niveau avancé. L'essentiel est d'avoir la motivation d'apprendre, de collaborer et de contribuer à la communauté."
    },
    {
      question: "Que se passe-t-il après mon inscription ?",
      answer: "Après votre inscription, vous recevrez un email de confirmation avec les instructions pour rejoindre notre groupe WhatsApp. Vous pourrez alors participer aux workshops, vous inscrire aux projets, et commencer à interagir avec la communauté Codex."
    },
    {
      question: "Quels comportements sont inacceptables dans Codex ?",
      answer: "Nous ne tolérons pas : le non-respect des valeurs (entraide, curiosité, ouverture d'esprit), l'absence de collaboration et l'approche individualiste, et le manque d'engagement (absences fréquentes, désintérêt). La discipline et l'engagement de tous sont essentiels au succès de notre communauté."
    }
  ],
  workshops: [
    {
      question: "Qu'est-ce qu'un workshop Codex ?",
      answer: "Les workshops Codex sont des sessions de formation animées par des professionnels du domaine. Ils couvrent des sujets variés allant de la méthodologie Scrum à l'intelligence artificielle, en passant par Git, les bases de données, Python, et bien d'autres technologies."
    },
    {
      question: "Combien de workshops sont organisés ?",
      answer: "Nous organisons 12 workshops par an sur différents thèmes. Nos workshops couvrent des sujets comme Scrum/Trello, Git/GitHub, PostgreSQL, Python, Figma, la rédaction de travaux universitaires, et la création de CV/LinkedIn professionnels."
    },
    {
      question: "Comment accéder aux workshops ?",
      answer: "Les workshops sont accessibles à tous les membres de Codex. Les informations sur les prochains workshops sont partagées dans notre groupe WhatsApp et sur notre site web. Certains workshops sont également enregistrés et disponibles sur notre chaîne YouTube."
    },
    {
      question: "Les workshops sont-ils gratuits ?",
      answer: "Oui, tous les workshops Codex sont gratuits pour les membres de l'association. Nous croyons en l'accessibilité de la formation pour tous les étudiants."
    },
    {
      question: "Puis-je revoir les workshops passés ?",
      answer: "Oui, de nombreux workshops sont enregistrés et disponibles sur notre chaîne YouTube. Vous pouvez accéder aux replays pour réviser ou découvrir les sessions auxquelles vous n'avez pas pu assister."
    },
    {
      question: "Qui anime les workshops ?",
      answer: "Les workshops sont animés par des professionnels expérimentés dans leur domaine, souvent des membres de la communauté Codex ou des experts invités. Chaque workshop est mené par des tuteurs qualifiés qui partagent leurs connaissances pratiques."
    }
  ],
  projects: [
    {
      question: "Quels projets collaboratifs propose Codex ?",
      answer: "Codex propose actuellement trois projets principaux : la création d'un site web (portfolio), un programme de mentoring pour trouver un poste de Werkstudent, et un bootcamp de chatbot avec IA générative. Ces projets permettent aux membres d'évoluer d'un niveau débutant à un niveau professionnel."
    },
    {
      question: "Comment participer aux projets ?",
      answer: "Pour participer aux projets, vous devez être membre de Codex. Les informations sur les inscriptions aux projets sont partagées dans notre groupe WhatsApp et sur le site web. Chaque projet a ses propres critères et dates d'inscription."
    },
    {
      question: "Qu'est-ce que le projet Site Internet ?",
      answer: "Le projet Site Internet est un programme de 8 semaines pour créer votre portfolio personnel. Il couvre HTML/CSS, Next.js, Tailwind CSS, le design UI/UX, et le déploiement. C'est un projet collaboratif où vous évoluez du niveau débutant au niveau professionnel."
    },
    {
      question: "Qu'est-ce que le projet Chatbot Codex ?",
      answer: "Le projet Chatbot Codex est un bootcamp de 12 sessions sur l'IA générative. Les participants apprennent à construire un chatbot avec Python, Vue.js et RAG (Retrieval-Augmented Generation) basé sur la FAQ Codex. Le programme dure environ 3 mois avec des sessions toutes les 2 semaines."
    },
    {
      question: "Les projets sont-ils adaptés aux débutants ?",
      answer: "Oui, nos projets sont conçus pour accompagner les participants du niveau débutant au niveau professionnel. Vous travaillerez en collaboration avec des experts du domaine qui vous guideront tout au long du processus d'apprentissage."
    }
  ],
  mentoring: [
    {
      question: "Qu'est-ce que le programme de mentoring Codex ?",
      answer: "Le programme de mentoring Codex est un accompagnement personnalisé de 12 semaines pour aider les étudiants à trouver un poste de Werkstudent (alternance) en Allemagne. Le programme couvre la création de CV, de lettres de motivation, l'optimisation de LinkedIn, la préparation aux entretiens, et la recherche d'emploi."
    },
    {
      question: "Combien d'étudiants ont été accompagnés jusqu'à présent ?",
      answer: "Notre objectif est d'accompagner 20 étudiants jusqu'à l'obtention de leur poste de Werkstudent en 2025. Le programme a déjà aidé plusieurs étudiants à décrocher des contrats de travail."
    },
    {
      question: "Comment fonctionne le programme de mentoring ?",
      answer: "Le programme dure 12 semaines avec des sessions hebdomadaires. Chaque semaine couvre un aspect spécifique : élaboration du CV, lettres de motivation, création de profils professionnels, préparation aux entretiens, recherche d'emploi, et gestion des candidatures. Les participants reçoivent un accompagnement personnalisé et des exercices pratiques."
    },
    {
      question: "Quels sont les prérequis pour le programme de mentoring ?",
      answer: "Le programme est ouvert à tous les membres de Codex qui cherchent activement un poste de Werkstudent. Il est recommandé d'avoir des compétences techniques de base et de maîtriser au moins l'anglais ou l'allemand pour la communication professionnelle."
    },
    {
      question: "Le programme de mentoring est-il gratuit ?",
      answer: "Oui, le programme de mentoring est gratuit pour tous les membres de Codex. Nous croyons en l'accessibilité de l'accompagnement professionnel pour tous les étudiants."
    }
  ],
  contact: [
    {
      question: "Comment puis-je contacter Codex ?",
      answer: "Vous pouvez nous contacter par email à teamcodex.infos@gmail.com ou via notre page LinkedIn : https://www.linkedin.com/company/codex-cmr/. Nous sommes basés à Dortmund, en Allemagne."
    },
    {
      question: "Quel est l'email de contact de Codex ?",
      answer: "Notre adresse email est teamcodex.infos@gmail.com. N'hésitez pas à nous écrire pour toute question, suggestion ou demande d'information."
    },
    {
      question: "Où puis-je suivre l'actualité de Codex ?",
      answer: "Vous pouvez suivre Codex sur LinkedIn (https://www.linkedin.com/company/codex-cmr/) et sur notre chaîne YouTube pour les replays des workshops. Toutes les actualités sont également partagées dans notre groupe WhatsApp réservé aux membres."
    },
    {
      question: "Combien de temps faut-il pour recevoir une réponse ?",
      answer: "Nous nous efforçons de répondre à toutes les demandes dans les 48 heures. Pour les questions urgentes, n'hésitez pas à nous contacter directement par email."
    },
    {
      question: "Puis-je visiter Codex en personne ?",
      answer: "Codex organise régulièrement des événements et workshops à Dortmund. Les informations sur les événements en présentiel sont partagées dans notre groupe WhatsApp et sur nos réseaux sociaux. Contactez-nous pour plus d'informations sur les prochains événements."
    }
  ]
};

