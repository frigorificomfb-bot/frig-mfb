import type { Metadata, Viewport } from "next";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";

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
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
