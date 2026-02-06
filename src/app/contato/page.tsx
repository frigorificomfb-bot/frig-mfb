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
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card
            icon="📍"
            title="Endereço"
            description="Br 010 KM 43 e 44, S/N - Mãe Do Rio - PA, 01234-000"
          />
          <Card
            icon="📞"
            title="Telefone"
            description="(91) 3456-7890 | (91) 3456-7891 Seg-Sex: 8h às 18h"
          />
          <Card
            icon="📧"
            title="Email"
            description="contato@frigorifico-mfb.com.br | vendas@frigorifico-mfb.com.br"
          />
        </div>
      </Section>

      {/* Formulário */}
      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D32F2F] mb-4">
              Envie sua Mensagem
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
              Preencha o formulário abaixo e um de nossos representantes entrará em contato em breve.
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>

      {/* Departamentos */}
      <Section title="Nossos Departamentos">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Vendas",
              email: "vendas@frigorifico-mfb.com.br",
              phone: "(11) 3456-7890",
            },
            {
              title: "Rastreabilidade",
              email: "rastreabilidade@frigorifico-mfb.com.br",
              phone: "(11) 3456-7891",
            },
            {
              title: "Sustentabilidade",
              email: "sustentabilidade@frigorifico-mfb.com.br",
              phone: "(11) 3456-7892",
            },
            {
              title: "Suporte Técnico",
              email: "suporte@frigorifico-mfb.com.br",
              phone: "(11) 3456-7893",
            },
          ].map((dept, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 md:p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#D32F2F] mb-3 sm:mb-4">
                {dept.title}
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-black">
                <p>
                  <strong>Email:</strong> <br />
                  {dept.email}
                </p>
                <p>
                  <strong>Telefone:</strong> <br />
                  {dept.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Mapa e Localização (Placeholder) */}
      <Section className="bg-gray-50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D32F2F] mb-8 text-center">
          Nossa Localização
        </h2>
        <div className="rounded-lg overflow-hidden border border-gray-200 h-64 sm:h-80 md:h-96 bg-gray-200 flex items-center justify-center">
          <p className="text-sm sm:text-base text-black">
            Mapa (integrar Google Maps aqui)
          </p>
        </div>
      </Section>
    </main>
  );
}
