import { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ImageText from "@/components/ui/ImageText";

export const metadata: Metadata = {
  title: "Rastreabilidade | Frigorífico MFB",
  description:
    "Conheça nosso sistema completo de rastreabilidade que garante transparência total do rebanho ao consumidor.",
};

export default function Rastreabilidade() {
  return (
    <main className="bg-white">
      <HeroSection
        title="Rastreabilidade Completa"
        subtitle="Transparência total da origem ao consumidor final"
      />

      {/* O que é Rastreabilidade */}
      <Section style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <ImageText
          title="Transparência Total da Origem ao Consumidor"
          content="A rastreabilidade é o núcleo de nossa operação. Significa que cada produto pode ser rastreado em todas as etapas, desde o rebanho de origem até a mesa do consumidor. Este compromisso garante total segurança alimentar, qualidade máxima e transparência, dando ao consumidor confiança absoluta no que está consumindo."
          imagePosition="right"
          titleClassName="mb-[40px]"
        />
      </Section>

      {/* Cadeia de Rastreamento */}
      <Section title="Nossa Cadeia de Rastreamento" className="bg-gray-50 text-center" style={{ padding: "80px 0" }}>
        <div className="space-y-4" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {[
            {
              step: "01",
              title: "Origem do Rebanho",
              description:
                "Identificação e documentação completa de cada animal desde seu nascimento, com registro de saúde e alimentação.",
            },
            {
              step: "02",
              title: "Transporte Seguro",
              description:
                "Transporte rastreado com GPS e registro de condições de bem-estar animal durante todo o trajeto.",
            },
            {
              step: "03",
              title: "Processamento",
              description:
                "Cada etapa do processamento é registrada, incluindo inspeção veterinária, higiene e qualidade.",
            },
            {
              step: "04",
              title: "Embalagem",
              description:
                "Produtos embalados com código de rastreamento exclusivo e data de validade garantida.",
            },
            {
              step: "05",
              title: "Distribuição",
              description:
                "Rastreamento de distribuição com registro de temperatura e condições de armazenamento.",
            },
            {
              step: "06",
              title: "Consumidor",
              description:
                "Consumidor final pode escanear código QR para acessar histórico completo do produto.",
            },
          ].map((phase, index) => (
            <div key={index} className="flex gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-gray-200 last:border-b-0">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-full bg-primary text-white font-bold text-sm sm:text-base">
                  {phase.step}
                </div>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-1 sm:mb-2">
                  {phase.title}
                </h3>
                <p className="text-xs sm:text-base text-black leading-relaxed">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tecnologia */}
      <Section className="bg-gray-50" style={{ padding: "80px 0" }}>
        {/* Título centralizado */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary" style={{ marginBottom: "40px" }}>
          Tecnologia de Rastreamento
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "32px" }}>
          <Card
            icon="📡"
            title="Qualidade do produto"
            description="Responsável Tecnico especializado em qualidade do produto."
            className="!bg-primary ring-0 hover:shadow-lg h-full"
            titleClassName="!text-white mb-4"
            contentClassName="!text-white/90"
          />

          <Card
            icon="💾"
            title="Banco de Dados"
            description="Sistema integrado com registros de todas as operações e certificações."
            className="!bg-primary ring-0 hover:shadow-lg h-full"
            titleClassName="!text-white mb-4"
            contentClassName="!text-white/90"
          />
        </div>
      </Section>

      {/* Conformidade */}
      <Section className="bg-primary text-white" style={{ padding: "80px 0" }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center" style={{ marginBottom: "40px" }}>Padrões e Certificações</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left max-w-4xl mx-auto">
          {[
            "ISO 22000 - Segurança Alimentar",
            "ISO 14001 - Gestão Ambiental",
            "MAPA - Conformidade Nacional",
            "Certificação de Bem-estar Animal",
          ].map((cert, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4">
              <div className="text-2xl sm:text-3xl flex-shrink-0">✓</div>
              <div className="text-lg">{cert}</div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
