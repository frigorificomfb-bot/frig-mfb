import { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ImageText from "@/components/ui/ImageText";
import Stats from "@/components/ui/Stats";

export const metadata: Metadata = {
  title: "Sobre Nós | Frigorífico MFB",
  description:
    "Conheça a história, missão e valores do Frigorífico MFB - qualidade e sustentabilidade desde 1998.",
};

export default function SobreNos() {
  return (
    <main className="bg-white">
      <HeroSection
        title="Sobre Frigorífico MFB"
        subtitle="Construindo excelência desde 1998"
      />

      {/* Nossa História */}
      <Section>
        <ImageText
          title="Nossa Jornada"
          content="O Frigorífico MFB foi fundado em 1998 com uma visão clara: fornecer carnes de excelente qualidade com total transparência e responsabilidade ambiental. Ao longo de mais de duas décadas, evoluímos desde uma estrutura pequena até nos tornarmos referência no segmento. Cada etapa do crescimento foi marcada pelo comprometimento com qualidade, inovação e sustentabilidade."
          imagePosition="right"
        />
      </Section>

      {/* Estatísticas */}
      <Section className="bg-gray-50">
        <Stats
          stats={[
            { number: "25+", label: "Anos de Tradição" },
            { number: "500+", label: "Clientes Atendidos" },
            { number: "1000+", label: "Toneladas/Ano" },
            { number: "100%", label: "Rastreabilidade" },
          ]}
        />
      </Section>

      {/* Missão Visão Valores */}
      <Section title="QUEM SOMOS">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Nossa Missão"
            description="Fornecer carnes de excelente qualidade com total transparência, rastreabilidade e compromisso com a sustentabilidade ambiental e social."
            icon="🎯"
          />
          <Card
            title="Nossa Visão"
            description="Ser a principal referência em qualidade e sustentabilidade no processamento de carnes, reconhecida por excelência operacional e inovação."
            icon="👁️"
          />
          <Card
            title="Nossos Valores"
            description="Qualidade, Integridade, Sustentabilidade, Inovação, Responsabilidade e Excelência em cada ação e decisão."
            icon="💎"
          />
        </div>
      </Section>

      {/* Diferencial Competitivo */}
      <Section className="bg-gray-50" title="DIFERENCIAIS">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: "📋",
              title: "Rastreabilidade Total",
              description:
                "Cada produto é rastreável do rebanho ao consumidor final, garantindo total segurança e transparência.",
            },
            {
              icon: "✅",
              title: "Certificações Internacionais",
              description:
                "Nossas instalações atendem aos mais rigorosos padrões de segurança alimentar e ambiental internacionais.",
            },
            {
              icon: "🌱",
              title: "Práticas Sustentáveis",
              description:
                "Investimento contínuo em tecnologias limpas e práticas que minimizam nosso impacto ambiental.",
            },
            {
              icon: "👥",
              title: "Equipe Especializada",
              description:
                "Profissionais altamente treinados e comprometidos com a excelência em cada etapa do processo.",
            },
          ].map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </Section>

      {/* Compromisso Final */}
      <section className="bg-[#D32F2F] text-white w-screen flex justify-center py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-white">
              Nosso Compromisso
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose text-white mb-4 sm:mb-6 md:mb-8">
              Dedicados à excelência, trabalhamos em estreita colaboração com
              clientes para alcançar resultados excepcionais. Comunicação,
              confiança e qualidade são fundamentais em nossa abordagem.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose text-white">
              Acreditamos que cada cliente merece o melhor, e é por isso que não
              comprometemos em nenhuma das nossas etapas de produção.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
