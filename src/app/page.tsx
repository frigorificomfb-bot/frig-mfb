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

    <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageText
            title="Movidos pela excelência"
            titleClassName="text-3xl md:text-4xl font-bold leading-tight"
            content={`Na essência do Frigorífico MFB está um compromisso inegociável com a excelência. Cada etapa do nosso processo é conduzida com rigor técnico, atenção aos detalhes e profundo respeito pelo cliente. Nossa equipe atua com dedicação constante para entregar soluções cuidadosas e produtos que refletem qualidade superior.

      Mais do que produzir carnes, criamos experiências marcadas por confiança, transparência e padrão elevado. Acreditamos que excelência não é um objetivo — é um princípio que orienta cada decisão.`}
            contentClassName="leading-snug"
            buttonText="SAIBA MAIS"
            buttonHref="/sobre-nos"
            image="/compromisso-com-o-planeta.jpg"
            imagePosition="right"
          />
          
        </div>
      </Section>


     {/* Seção: Nossos Pilares */}
<Section className="bg-gray-50">
  <h2 className="text-center text-2xl md:text-3xl font-extrabold text-[#D32F2F] mb-10">
    EXPLORE NOSSO MUNDO
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <Card
      icon="🏆"
      title="Qualidade Garantida"
      description="Produzimos carnes de alta qualidade, seguindo rigorosos padrões internacionais de higiene e processamento, garantindo produtos premium para sua mesa."
      className="!bg-[#D32F2F] !text-white ring-0 hover:shadow-lg"
      titleClassName="!text-white"
      contentClassName="!text-white/90"
    />

    <Card
      icon="🔍"
      title="Rastreabilidade Total"
      description="Cada produto pode ser rastreado desde a origem do rebanho até o consumidor final, garantindo total transparência e segurança alimentar."
      className="!bg-[#D32F2F] !text-white ring-0 hover:shadow-lg"
      titleClassName="!text-white"
      contentClassName="!text-white/90"
    />

    <Card
      icon="🌱"
      title="Sustentabilidade"
      description="Práticas ambiental e socialmente responsáveis fazem parte do nosso crescimento, priorizando o bem-estar do planeta e das comunidades."
      className="!bg-[#D32F2F] !text-white ring-0 hover:shadow-lg"
      titleClassName="!text-white"
      contentClassName="!text-white/90"
    />
  </div>
</Section>




      {/* Seção: Estatísticas */}
      <Section className="bg-white">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D32F2F] mb-10">
          SOLUÇÕES FEITAS PARA SUAS NECESSIDADES
        </h2>

        <Stats
          stats={[
            { number: "500+", label: "Cabeças por Mês" },
            { number: "100%", label: "Rastreabilidade" },
            { number: "25+", label: "Anos de Experiência" },
            { number: "98%", label: "Satisfação do Cliente" },
          ]}
        />
      </Section>


      {/* Seção: Processo */}
      <Section title="PROCESSO" className="text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <ProcessStep
            icon="🐄"
            title="Abate"
            description="Processo humanizado com máximos padrões de bem-estar animal"
            className="bg-[#D32F2F] text-white"
          />
          <ProcessStep
            icon="🔪"
            title="Processamento"
            description="Técnicas modernas de processamento garantindo máxima qualidade"
            className="bg-[#D32F2F] text-white"
          />
          <ProcessStep
            icon="📦"
            title="Comercialização"
            description="Distribuição eficiente com rastreabilidade completa"
            className="bg-[#D32F2F] text-white"
          />
        </div>
      </Section>


      {/* Seção: Serviços Numerados */}
      <Section className="bg-gray-50">
        <div className="space-y-16 md:space-y-20">
          <ServiceCard
            number="01"
            title="Qualidade"
            description="Dedicated to providing exceptional service with a focus on quality. Our commitment to excellence drives every decision we make. We believe in creating lasting relationships through personalized attention to detail."
            image="/qualidade-frig.png"
          />
          <ServiceCard
            number="02"
            title="Atendimento"
            description="Nosso atendimento especializado busca compreender suas necessidades específicas. Oferecemos suporte técnico completo e orientação profissional em todas as etapas."
            image="/atendimento-frig.jpg"
          />
          <ServiceCard
            number="03"
            title="Processamento"
            description="Utilizamos tecnologia de ponta para garantir processamento eficiente e seguro. Nossa estrutura moderna permite máxima produtividade mantendo qualidade."
            image="/processamento-frig.jpg"
          />
          <ServiceCard
            number="04"
            title="Rastreabilidade"
            description="Sistema completo de rastreamento do rebanho ao consumidor final. Transparência total com tecnologia blockchain e código QR para verificação."
            image="/rastreabilidade-frig.jpg"
          />
        </div>
      </Section>

      {/* Seção: Depoimentos */}
      <Section
        className="bg-white"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D32F2F]">
            ATENDIMENTO EXCEPCIONAL
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Ouça da boca de quem confía em nosso trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Testimonial
            content="Suporte confiável projetado para fornecer soluções rápidas e eficazes. A qualidade da carne é excepcional."
            author="Cliente Satisfeito"
            role="Distribuidor"
            location="Mato Grosso"
          />
          <Testimonial
            content="Serviços inovadores que trazem qualidade e rastreabilidade para a nossa mesa. Recomendo muito!"
            author="Parceiro Comercial"
            role="Supermercado"
            location="Brasil"
          />
          <Testimonial
            content="A rastreabilidade é excelente, nossos clientes confiam muito nos produtos. Ótima parceria!"
            author="Varejista"
            role="Boutique de Carnes"
            location="São Paulo"
          />
          <Testimonial
            content="Profissional, comprometido e com máxima qualidade. Frigorífico MFB é referência no mercado."
            author="Restaurante Premium"
            role="Chefe de Cozinha"
            location="Minas Gerais"
          />
        </div>
      </Section>


      {/* CTA Final */}
   <section className="bg-[#D32F2F] text-white w-full flex justify-center py-16">
      <div className="w-full max-w-7xl px-6 text-center">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Quer Conhecer Nossos Produtos?
        </h2>

        <p className="text-base md:text-lg mb-8 whitespace-nowrap">
          Entre em contato conosco para conhecer nossas soluções em qualidade, rastreabilidade e sustentabilidade. Nossa equipe está pronta para ajudar.
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
