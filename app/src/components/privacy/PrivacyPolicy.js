// Static date to prevent hydration mismatch (update when policy changes)
const LAST_UPDATED = "5 janvier 2026";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Politique de Confidentialité</h1>
      
      <div className="prose prose-lg max-w-none">
        <p>
          Dernière mise à jour: {LAST_UPDATED}
        </p>
        
        <h2>1. Introduction</h2>
        <p>
          Chez Codex, nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. 
          Cette politique de confidentialité vous informe sur la façon dont nous traitons vos données personnelles 
          lorsque vous visitez notre site web et vous informe de vos droits en matière de protection des données.
        </p>
        
        <h2>2. Les données que nous collectons</h2>
        <p>
          Nous pouvons collecter, utiliser, stocker et transférer différents types de données personnelles vous concernant, notamment:
        </p>
        <ul>
          <li><strong>Données d&apos;identité</strong>: prénom, nom, nom d&apos;utilisateur ou identifiant similaire.</li>
          <li><strong>Données de contact</strong>: adresse e-mail et numéros de téléphone.</li>
          <li><strong>Données techniques</strong>: adresse IP, données de connexion, type et version du navigateur, 
          fuseau horaire et localisation, types et versions de plug-ins, système d&apos;exploitation et plateforme.</li>
          <li><strong>Données d&apos;utilisation</strong>: informations sur la façon dont vous utilisez notre site web.</li>
        </ul>
        
        <h2>3. Comment nous utilisons vos données</h2>
        <p>
          Nous utilisons vos données personnelles uniquement lorsque la loi nous y autorise. Le plus souvent, nous utiliserons vos données personnelles dans les circonstances suivantes:
        </p>
        <ul>
          <li>Lorsque nous devons exécuter le contrat que nous sommes sur le point de conclure ou que nous avons conclu avec vous.</li>
          <li>Lorsque cela est nécessaire pour nos intérêts légitimes (ou ceux d&apos;un tiers) et que vos intérêts et droits fondamentaux ne l&apos;emportent pas sur ces intérêts.</li>
          <li>Lorsque nous devons nous conformer à une obligation légale ou réglementaire.</li>
        </ul>
        
        <h2>4. Partage de données</h2>
        <p>
          Nous pouvons partager vos données personnelles avec les parties suivantes:
        </p>
        <ul>
          <li>Les fournisseurs de services qui nous fournissent des services d&apos;administration informatique et système.</li>
          <li>Les conseillers professionnels, notamment les avocats, les banquiers, les auditeurs et les assureurs.</li>
          <li>Les autorités fiscales, les autorités de régulation et autres autorités.</li>
        </ul>
        
        <h2>5. Sécurité des données</h2>
        <p>
          Nous avons mis en place des mesures de sécurité appropriées pour empêcher que vos données personnelles ne soient 
          accidentellement perdues, utilisées ou consultées de manière non autorisée, modifiées ou divulguées.
        </p>
        
        <h2>6. Conservation des données</h2>
        <p>
          Nous ne conserverons vos données personnelles que le temps nécessaire à la réalisation des objectifs pour lesquels 
          nous les avons collectées, y compris pour satisfaire à toute exigence légale, comptable ou de déclaration.
        </p>
        
        <h2>7. Vos droits légaux</h2>
        <p>
          Dans certaines circonstances, vous avez des droits en vertu des lois sur la protection des données concernant vos données personnelles, notamment:
        </p>
        <ul>
          <li>Demander l&apos;accès à vos données personnelles.</li>
          <li>Demander la correction de vos données personnelles.</li>
          <li>Demander l&apos;effacement de vos données personnelles.</li>
          <li>S&apos;opposer au traitement de vos données personnelles.</li>
          <li>Demander la limitation du traitement de vos données personnelles.</li>
          <li>Demander le transfert de vos données personnelles.</li>
          <li>Droit de retirer son consentement.</li>
        </ul>
        
        <h2>8. Contact</h2>
        <p>
          Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de 
          protection de la vie privée, veuillez nous contacter.
        </p>
      </div>
    </div>
  );
} 