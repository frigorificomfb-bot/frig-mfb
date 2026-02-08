import { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ImageText from "@/components/ui/ImageText";

export const metadata: Metadata = {
  title: "Sustentabilidade | Frigorífico MFB",
  description:
    "Conheça nossos programas e comprometimentos com sustentabilidade ambiental e responsabilidade social.",
};


export default function Sustentabilidade() {
  return (
    <main className="bg-white">
      <HeroSection
        title="Sustentabilidade"
        subtitle="Comprometidos com um futuro mais responsável"
      />

      {/* Introdução */}
      <Section>
        <ImageText
          title="Compromisso com o Planeta"
          content="A sustentabilidade não é apenas um programa..."
          image="/compromisso-com-o-planeta.jpg"
          imagePosition="right"
        />
      </Section>

      {/* Pilares de Sustentabilidade */}
      <Section className="bg-gray-50" title="Nossos Pilares">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon="🌍"
            title="Meio Ambiente"
            description="Redução de emissões de carbono, gestão sustentável de resíduos e uso eficiente de recursos naturais."
          />
          <Card
            icon="👥"
            title="Responsabilidade Social"
            description="Programas comunitários, apoio a agricultura sustentável e compromisso com bem-estar dos colaboradores."
          />
          <Card
            icon="🔬"
            title="Inovação Responsável"
            description="Investimento em tecnologias limpas e práticas inovadoras que reduzem impacto ambiental."
          />
        </div>
      </Section>

      {/* Iniciativas */}
      <Section title="Nossas Iniciativas">
        {[
          {
            title: "Programa de Reuso de Água",
            description:
              "Sistema avançado de tratamento e reuso de água que reduz consumo em 40% comparado à média da indústria.",
          },
          {
            title: "Gestão de Resíduos",
            description:
              "Aproveitamento integral de biodegradáveis e reciclagem de materiais, com zero resíduo em aterro sanitário.",
          },
          {
            title: "Energia Renovável",
            description:
              "Instalação de painéis solares que cobrem 30% do consumo energético de nossas operações.",
          },
          {
            title: "Parcerias Comunitárias",
            description:
              "Programa de capacitação para agricultores familiares focando em práticas sustentáveis.",
          },
        ].map((initiative, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#D32F2F] mb-3">
              {initiative.title}
            </h3>
            <p className="text-sm sm:text-base text-black leading-relaxed md:leading-loose">
              {initiative.description}
            </p>
          </div>
        ))}
      </Section>

      {/* Metas e Compromissos */}
      <Section className="bg-[#D32F2F] text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-white">Nossas Metas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Reduzir emissões de carbono em 50% até 2030",
            "Alcançar zero resíduo em aterro até 2028",
            "Aumentar uso de energia renovável para 60% até 2032",
            "100% de rastreabilidade com práticas sustentáveis",
          ].map((meta, index) => (
            <div key={index} className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div className="text-white">{meta}</div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
