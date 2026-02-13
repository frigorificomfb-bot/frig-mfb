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
      <Section style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <ImageText
          title="Compromisso com o Planeta"
          content="A sustentabilidade não é apenas um programa, é parte do nosso DNA. Acreditamos que é possível produzir alimentos de alta qualidade em harmonia com o meio ambiente e com a sociedade."
          image="/equipe-frigorifico.jpeg"
          imagePosition="right"
          titleClassName="mb-[40px]"
        />
      </Section>

      {/* Pilares de Sustentabilidade */}
      <Section className="bg-gray-50" style={{ padding: "80px 0" }}>
        <div className="text-center" style={{ marginBottom: "40px" }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">
            Nossos Pilares
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "32px" }}>
          <Card
            icon={<span className="text-4xl">🌍</span>}
            title="Meio Ambiente"
            description="Redução de emissões de carbono, gestão sustentável de resíduos e uso eficiente de recursos naturais."
            className="!bg-primary ring-0 hover:shadow-xl transition-all duration-300 h-full"
            titleClassName="!text-white mb-4"
            contentClassName="!text-white/90"
          />

          <Card
            icon={<span className="text-4xl">👥</span>}
            title="Responsabilidade Social"
            description="Programas comunitários, apoio à agricultura sustentável e compromisso com o bem-estar dos colaboradores."
            className="!bg-primary ring-0 hover:shadow-xl transition-all duration-300 h-full"
            titleClassName="!text-white mb-4"
            contentClassName="!text-white/90"
          />

          <Card
            icon={<span className="text-4xl">🔬</span>}
            title="Inovação Responsável"
            description="Investimento em tecnologias limpas e práticas inovadoras que reduzem o impacto ambiental."
            className="!bg-primary ring-0 hover:shadow-xl transition-all duration-300 h-full"
            titleClassName="!text-white mb-4"
            contentClassName="!text-white/90"
          />
        </div>
      </Section>

      {/* Iniciativas */}
      <Section title="Nossas Iniciativas" style={{ padding: "80px 0" }}>
        {/* Title prop in Section handles mb-40px inside Section component logic (via style, as standardized) */}
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
          <div key={index} style={{ marginBottom: "32px" }}>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">
              {initiative.title}
            </h3>
            <p className="text-sm sm:text-base text-black leading-relaxed md:leading-loose">
              {initiative.description}
            </p>
          </div>
        ))}
      </Section>

      {/* Metas e Compromissos */}
      <Section className="bg-primary text-white" style={{ padding: "80px 0" }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white" style={{ marginBottom: "40px" }}>Nossas Metas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "32px" }}>
          {[
            "Reduzir emissões de carbono em 50% até 2030",
            "Alcançar zero resíduo em aterro até 2028",
            "Aumentar uso de energia renovável para 60% até 2032",
            "100% de rastreabilidade com práticas sustentáveis",
          ].map((meta, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div className="text-3xl font-bold">✓</div>
              <div className="text-white text-lg">{meta}</div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
