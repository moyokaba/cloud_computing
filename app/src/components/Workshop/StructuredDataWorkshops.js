import { workshopData } from '@/components/Workshop/workshopData';
import Script from 'next/script';

export default function StructuredDataWorkshops() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": workshopData.map((workshop, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": workshop.name,
        "description": workshop.description,
        "provider": {
          "@type": "Organization",
          "name": "Codex Association",
          "sameAs": "https://www.codex-cmr.com"
        },
        "teaches": workshop.skills.join(", ")
      }
    }))
  };

  return (
    <Script id="workshops-schema" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
}