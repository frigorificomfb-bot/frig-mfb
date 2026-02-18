import type { Metadata, Viewport } from "next";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";



export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Frigorífico MFB | Qualidade, Rastreabilidade e Sustentabilidade",
  description:
    "Frigorífico MFB oferece carnes de alta qualidade com rastreabilidade completa e compromisso com sustentabilidade ambiental.",
  keywords: [
    "frigorífico",
    "carnes",
    "rastreabilidade",
    "sustentabilidade",
    "qualidade",
    "processamento de carnes",
  ],
  metadataBase: new URL("https://www.frigorifico-mfb.com.br"),
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.frigorifico-mfb.com.br",
    title: "Frigorífico MFB | Qualidade, Rastreabilidade e Sustentabilidade",
    description:
      "Frigorífico MFB oferece carnes de alta qualidade com rastreabilidade completa e compromisso com sustentabilidade ambiental.",
    siteName: "Frigorífico MFB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frigorífico MFB",
    description:
      "Qualidade, Rastreabilidade e Sustentabilidade em Cada Produto",
  },
  alternates: {
    canonical: "https://www.frigorifico-mfb.com.br",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="language" content="Portuguese" />
        <meta name="author" content="Frigorífico MFB" />
        <meta name="theme-color" content="#D32F2F" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Frigorífico MFB",
              "image": "https://www.frigorifico-mfb.com.br/logo.png", // Imagem placeholder, idealmente o logo real
              "description": "Frigorífico MFB oferece carnes de alta qualidade com rastreabilidade completa e compromisso com sustentabilidade ambiental.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Br 010 KM 43 e 44, S/N",
                "addressLocality": "Mãe do Rio",
                "addressRegion": "PA",
                "postalCode": "01234-000", // CEP placeholder do contato
                "addressCountry": "BR"
              },
              "telephone": "+559134567890",
              "url": "https://www.frigorifico-mfb.com.br",
              "priceRange": "$$", // Faixa de preço (estimado)
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ]
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
