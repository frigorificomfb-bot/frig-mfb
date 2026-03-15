import { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ImageText from "@/components/ui/ImageText";
import Stats from "@/components/ui/Stats";
import ProcessStep from "@/components/ui/ProcessStep";
import ServiceCard from "@/components/ui/ServiceCard";
import Testimonial from "@/components/ui/Testimonial";

export const metadata: Metadata = {
  title: "Frigorífico MFB | Qualidade, Rastreabilidade e Sustentabilidade",
  description:
    "Frigorífico MFB oferece carnes de alta qualidade com rastreabilidade completa e compromisso com sustentabilidade. Qualidade premium, transparência total.",
  openGraph: {
    title: "Frigorífico MFB | Qualidade, Rastreabilidade e Sustentabilidade",
    description:
      "Frigorífico MFB oferece carnes de alta qualidade com rastreabilidade completa e compromisso com sustentabilidade.",
    url: "https://www.frigorifico-mfb.com.br",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Qualidade e Rastreabilidade em cada corte"
        subtitle="Construindo o futuro da pecuária"
      />

      {/* 1. Primeira Seção (Texto e Imagem) */}
      <Section className="" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <ImageText
            title="Movidos pela excelência"
            titleClassName="text-3xl md:text-4xl font-bold leading-tight"
            content={`Na essência do Frigorífico MFB está um compromisso inegociável com a excelência. Cada etapa do nosso processo é conduzida com rigor técnico, atenção aos detalhes e profundo respeito pelo cliente. Nossa equipe atua com dedicação constante para entregar soluções cuidadosas e produtos que refletem qualidade superior.

      Mais do que produzir carnes, criamos experiências marcadas por confiança, transparência e padrão elevado. Acreditamos que excelência não é um objetivo — é um princípio que orienta cada decisão.`}
            contentClassName="leading-relaxed"
            buttonText="SAIBA MAIS"
            buttonHref="/sobre-nos"
            image="/equipe-frigorifico.jpeg"
            imagePosition="right"
          />
        </div>
      </Section>


      {/* 2. Seção: Nossos Pilares */}
      <Section className="bg-gray-50" style={{ padding: "80px 0" }}>
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-primary" style={{ marginBottom: "40px" }}>
          EXPLORE NOSSO MUNDO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "32px" }}>
          <Card
            icon="🏆"
            title="Qualidade Garantida"
            description="Produzimos carnes de alta qualidade, seguindo rigorosos padrões internacionais de higiene e processamento, garantindo produtos premium para sua mesa."
            className="!bg-primary !text-white ring-0 hover:shadow-lg h-full"
            titleClassName="!text-white mb-4"
            contentClassName="!text-white/90"
          />

          <Card
            icon="🔍"
            title="Rastreabilidade Total"
            description="Cada produto pode ser rastreado desde a origem do rebanho até o consumidor final, garantindo total transparência e segurança alimentar."
            className="!bg-primary !text-white ring-0 hover:shadow-lg h-full"
            titleClassName="!text-white mb-4"
            contentClassName="!text-white/90"
          />

          <Card
            icon="🌱"
            title="Sustentabilidade"
            description="Práticas ambiental e socialmente responsáveis fazem parte do nosso crescimento, priorizando o bem-estar do planeta e das comunidades."
            className="!bg-primary !text-white ring-0 hover:shadow-lg h-full"
            titleClassName="!text-white mb-4"
            contentClassName="!text-white/90"
          />
        </div>
      </Section>


      {/* 3. Seção: Estatísticas */}
      <Section className="bg-white" style={{ padding: "80px 0" }}>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary" style={{ marginBottom: "40px" }}>
          SOLUÇÕES FEITAS PARA SUAS NECESSIDADES
        </h2>

        <Stats
          stats={[
            { number: "5000+", label: "Cabeças por Mês" },
            { number: "100%", label: "Qualidade do Produto" },
            { number: "10+", label: "Anos de Experiência" },
            { number: "98%", label: "Satisfação do Cliente" },
          ]}
        />
      </Section>


      {/* 4. Seção: Processo */}
      <Section title="PROCESSO" className="text-center" style={{ padding: "80px 0" }}>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "32px" }}>
          <ProcessStep
            icon="🐄"
            title="Abate"
            description="Processo humanizado com máximos padrões de bem-estar animal"
            className="bg-primary text-white h-full"
          />
          <ProcessStep
            icon="🔪"
            title="Processamento"
            description="Técnicas modernas de processamento garantindo máxima qualidade"
            className="bg-primary text-white h-full"
          />
          <ProcessStep
            icon="📦"
            title="Comercialização"
            description="Distribuição eficiente com rastreabilidade completa"
            className="bg-primary text-white h-full"
          />
        </div>
      </Section>


      {/* 5. Seção: Serviços Numerados */}
      <Section className="bg-gray-50" style={{ padding: "80px 0" }}>
        <div className="space-y-[80px]" style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          <ServiceCard
            number="01"
            title="Qualidade"
            description="Nos dedicamos a prestar um serviço excepcional com foco na qualidade. O nosso compromisso com a excelência orienta todas as nossas decisões. Acreditamos na criação de relações duradouras através de uma atenção personalizada aos detalhes."
            image="/producao-carcacas.jpeg"
          />
          <ServiceCard
            number="02"
            title="Atendimento"
            description="Nosso atendimento especializado busca compreender suas necessidades específicas. Oferecemos suporte técnico completo e orientação profissional em todas as etapas."
            image="/atendimento-frig.png"
            reversed={true}
          />
          <ServiceCard
            number="03"
            title="Processamento"
            description="Utilizamos tecnologia de ponta para garantir processamento eficiente e seguro. Nossa estrutura moderna permite máxima produtividade mantendo qualidade."
            image="/producao-linha-01.jpeg"
          />
          <ServiceCard
            number="04"
            title="Rastreabilidade"
            description="Sistema completo de rastreamento do rebanho ao consumidor final. Transparência total para verificação."
            image="/producao-higienizacao.jpeg"
            reversed={true}
          />
        </div>
      </Section>

      {/* 6. Seção: Depoimentos */}
      <Section className="bg-white" style={{ padding: "80px 0" }}>
        <div className="text-center" style={{ marginBottom: "40px" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ATENDIMENTO EXCEPCIONAL
          </h2>
          <p className="text-gray-600 text-lg">
            Ouça da boca de quem confía em nosso trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "32px" }}>
          <Testimonial
            content="Suporte confiável projetado para fornecer soluções rápidas e eficazes. A qualidade da carne é excepcional."
          />
          <Testimonial
            content="Serviços inovadores que trazem qualidade e rastreabilidade para a nossa mesa. Recomendo muito!"
          />
          <Testimonial
            content="A rastreabilidade é excelente, nossos clientes confiam muito nos produtos. Ótima parceria!"
          />
          <Testimonial
            content="Profissional, comprometido e com máxima qualidade. Frigorífico MFB é referência no mercado."
          />
        </div>
      </Section>


      {/* 7. CTA Final */}
      <section className="bg-primary text-white w-full flex justify-center" style={{ padding: "80px 0" }}>
        <div className="w-full max-w-5xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold" style={{ marginBottom: "30px" }}>
            Quer Conhecer Nossos Produtos?
          </h2>

          <p className="text-lg text-white" style={{ marginBottom: "30px" }}>
            Entre em contato conosco para conhecer nossas soluções em qualidade, rastreabilidade e sustentabilidade.
          </p>

          <div className="flex justify-center">
            <Button href="/contato" variant="secondary">
              Entrar em Contato
            </Button>
          </div>

        </div>
      </section>

    </main>
  );
}
