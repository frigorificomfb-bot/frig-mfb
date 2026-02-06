import { Metadata } from "next";

interface SchemaOrgProps {
  type: "Organization" | "LocalBusiness" | "Product";
  data?: Record<string, any>;
}

export function SchemaOrg({ type, data }: SchemaOrgProps) {
  const schemas: Record<string, any> = {
    Organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Frigorífico MFB",
      url: "https://www.frigorifico-mfb.com.br",
      description:
        "Frigorífico MFB oferece carnes de alta qualidade com rastreabilidade completa e compromisso com sustentabilidade ambiental.",
      logo: "http://localhost:3000/logomfb.webp",
      contact: {
        "@type": "ContactPoint",
        telephone: "+55-11-3456-7890",
        email: "contato@frigorifico-mfb.com.br",
        contactType: "Customer Service",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Industrial, 1000",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        postalCode: "01234-567",
        addressCountry: "BR",
      },
      sameAs: [
        "https://www.facebook.com/frigorifico-mfb",
        "https://www.instagram.com/frigorifico-mfb",
        "https://www.linkedin.com/company/frigorifico-mfb",
      ],
    },
    LocalBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Frigorífico MFB",
      image: "http://localhost:3000/logomfb.webp",
      description:
        "Processamento premium de carnes com rastreabilidade total",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Industrial, 1000",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        postalCode: "01234-567",
        addressCountry: "BR",
      },
      telephone: "+55-11-3456-7890",
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    },
  };

  const schema = schemas[type];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
