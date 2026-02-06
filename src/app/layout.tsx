import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export const metadata = {
  title: "Frigorífico MFB",
  description: "Qualidade, rastreabilidade e sustentabilidade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
