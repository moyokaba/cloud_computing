// Static date to prevent hydration mismatch (update when terms change)
const LAST_UPDATED = "5 janvier 2026";

export default function TermsOfUse() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Conditions d&apos;Utilisation</h1>
      
      <div className="prose prose-lg max-w-none">
        <p>
          Dernière mise à jour: {LAST_UPDATED}
        </p>
        
        <h2>1. Acceptation des conditions</h2>
        <p>
          En accédant et en utilisant le site web de Codex, vous acceptez d&apos;être lié par ces conditions d&apos;utilisation, 
          toutes les lois et réglementations applicables, et vous acceptez que vous êtes responsable du respect des 
          lois locales applicables. Si vous n&apos;acceptez pas l&apos;une de ces conditions, vous êtes interdit d&apos;utiliser ou 
          d&apos;accéder à ce site. Les matériaux contenus dans ce site web sont protégés par le droit d&apos;auteur et le droit des marques.
        </p>
        
        <h2>2. Licence d&apos;utilisation</h2>
        <p>
          La permission est accordée de télécharger temporairement une copie des matériaux (informations ou logiciels) 
          sur le site web de Codex pour une visualisation transitoire personnelle et non commerciale uniquement. 
          Il s&apos;agit de l&apos;octroi d&apos;une licence, et non d&apos;un transfert de titre, et sous cette licence, vous ne pouvez pas:
        </p>
        <ul>
          <li>Modifier ou copier les matériaux;</li>
          <li>Utiliser les matériaux à des fins commerciales ou pour toute présentation publique (commerciale ou non commerciale);</li>
          <li>Tenter de décompiler ou de désosser tout logiciel contenu sur le site web de Codex;</li>
          <li>Supprimer tout droit d&apos;auteur ou autres notations de propriété des matériaux; ou</li>
          <li>Transférer les matériaux à une autre personne ou &quot;miroir&quot; les matériaux sur tout autre serveur.</li>
        </ul>
        
        <h2>3. Avis de non-responsabilité</h2>
        <p>
          Les matériaux sur le site web de Codex sont fournis &quot;tels quels&quot;. Codex ne donne aucune garantie, 
          expresse ou implicite, et décline et nie par la présente toutes les autres garanties, y compris, 
          sans limitation, les garanties implicites ou les conditions de qualité marchande, d&apos;adéquation à un 
          usage particulier, ou de non-violation de la propriété intellectuelle ou autre violation des droits.
        </p>
        
        <h2>4. Limitations</h2>
        <p>
          En aucun cas, Codex ou ses fournisseurs ne seront responsables de tout dommage (y compris, sans limitation, 
          les dommages pour perte de données ou de profit, ou en raison d&apos;une interruption d&apos;activité) découlant de 
          l&apos;utilisation ou de l&apos;incapacité d&apos;utiliser les matériaux sur le site web de Codex, même si Codex ou un 
          représentant autorisé de Codex a été notifié oralement ou par écrit de la possibilité de tels dommages.
        </p>
        
        <h2>5. Exactitude des matériaux</h2>
        <p>
          Les matériaux apparaissant sur le site web de Codex pourraient inclure des erreurs techniques, typographiques 
          ou photographiques. Codex ne garantit pas que les matériaux de son site web sont exacts, complets ou à jour. 
          Codex peut apporter des modifications aux matériaux contenus sur son site web à tout moment sans préavis.
        </p>
        
        <h2>6. Liens</h2>
        <p>
          Codex n&apos;a pas examiné tous les sites liés à son site web et n&apos;est pas responsable du contenu de ces sites liés. 
          L&apos;inclusion de tout lien n&apos;implique pas l&apos;approbation par Codex du site. L&apos;utilisation de tout site web lié est 
          aux risques et périls de l&apos;utilisateur.
        </p>
        
        <h2>7. Modifications</h2>
        <p>
          Codex peut réviser ces conditions d&apos;utilisation de son site web à tout moment sans préavis. En utilisant ce site web, 
          vous acceptez d&apos;être lié par la version alors en vigueur de ces conditions d&apos;utilisation.
        </p>
        
        <h2>8. Loi applicable</h2>
        <p>
          Ces conditions sont régies et interprétées conformément aux lois allemandes, et vous vous soumettez irrévocablement 
          à la juridiction exclusive des tribunaux de cette juridiction.
        </p>
        
        <h2>9. Contact</h2>
        <p>
          Si vous avez des questions concernant ces conditions d&apos;utilisation, veuillez nous contacter.
        </p>
      </div>
    </div>
  );
} 