import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contato | Frigorífico MFB",
  description:
    "Entre em contato conosco para dúvidas, parcerias ou informações sobre nossos produtos.",
};

export default function Contato() {
  return (
    <main className="bg-white">
      <HeroSection
        title="Entre em Contato"
        subtitle="Estamos aqui para responder suas dúvidas"
      />

      {/* Informações de Contato */}
      <Section style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "32px", marginBottom: "48px" }}>
          <Card
            icon="📍"
            title="Endereço"
            description="Rodovia BR 010, KM 43 e 44, S/N - Mãe do Rio - PA, 68675-000"
            className="!bg-primary ring-0 hover:shadow-lg h-full"
            titleClassName="!text-white mb-4"
            contentClassName="!text-white/90"
          />

          <Card
            icon="📞"
            title="Telefone"
            description="(91) 3444-1615 | Seg-Sex: 8h às 18h"
            className="!bg-primary ring-0 hover:shadow-lg h-full"
            titleClassName="!text-white mb-4"
            contentClassName="!text-white/90"
          />

          <Card
            icon="📧"
            title="Email"
            description="ruthehelena@hotmail.com"
            className="!bg-primary ring-0 hover:shadow-lg h-full"
            titleClassName="!text-white mb-4"
            contentClassName="!text-white/90"
          />
        </div>
      </Section>


      <Section className="bg-gray-50" style={{ padding: "80px 0" }}>
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header centralizado (só aqui) */}
          <div className="text-center" style={{ marginBottom: "32px" }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Envie sua Mensagem
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed max-w-2xl mx-auto">
              Preencha o formulário abaixo e um de nossos representantes entrará em contato em breve.
            </p>
          </div>

          {/* Form centralizado */}
          <ContactForm />
        </div>
      </Section>


      {/* Departamentos */}
      <Section className="bg-white" style={{ padding: "80px 0" }}>
        <div className="text-center" style={{ marginBottom: "40px" }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Nossos Departamentos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "24px" }}>
          {[
            {
              title: "Vendas",
              email: "ruthehelena@hotmail.com",
              phone: "(91) 3444-1615",
            },
            {
              title: "Rastreabilidade",
              email: "ruthehelena@hotmail.com",
              phone: "(91) 3444-1615",
            },
            {
              title: "Sustentabilidade",
              email: "ruthehelena@hotmail.com",
              phone: "(91) 3444-1615",
            },
            {
              title: "Suporte Técnico",
              email: "ruthehelena@hotmail.com",
              phone: "(91) 3444-1615",
            },
          ].map((dept, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-primary text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center h-full"
            >
              <h4 className="text-lg md:text-xl font-bold mb-4">
                {dept.title}
              </h4>

              <div className="space-y-4 text-sm md:text-base text-white/95">
                <div>
                  <p className="font-semibold">Email</p>
                  <p>{dept.email}</p>
                </div>

                <div>
                  <p className="font-semibold">Telefone</p>
                  <p>{dept.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
