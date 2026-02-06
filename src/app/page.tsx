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

      {/* Seção: O que fazemos */}
      <Section title="O QUE FAZEMOS">
        <ImageText
          title="Movidos pela excelência"
          content="No centro da nossa missão está um profundo compromisso com a excelência e a satisfação dos clientes. Nossa equipe trabalha incansavelmente para fornecer soluções cuidadosas, garantindo que cada detalhe reflita qualidade. Acreditamos em criar experiências significativas através de serviços personalizados e atenção aos detalhes."
          buttonText="SAIBA MAIS"
          buttonHref="/sobre-nos"
          imagePosition="right"
        />
      </Section>

      {/* Seção: Nossos Pilares */}
      <Section
        title="EXPLORE NOSSO MUNDO"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon="🏆"
            title="Qualidade Garantida"
            description="Produzimos carnes de alta qualidade, seguindo rigorosos padrões internacionais de higiene e processamento, garantindo produtos premium para sua mesa."
          />
          <Card
            icon="🔍"
            title="Rastreabilidade Total"
            description="Cada produto pode ser rastreado desde a origem do rebanho até o consumidor final, garantindo total transparência e segurança alimentar."
          />
          <Card
            icon="🌱"
            title="Sustentabilidade"
            description="Práticas ambiental e socialmente responsáveis fazem parte do nosso crescimento, priorizando o bem-estar do planeta e das comunidades."
          />
        </div>
      </Section>

      {/* Seção: Estatísticas */}
      <Section
        title="SOLUÇÕES FEITAS PARA SUAS NECESSIDADES"
        className="bg-white"
      >
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
      <Section title="PROCESSO">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <ProcessStep
            icon="🐄"
            title="Abate"
            description="Processo humanizado com máximos padrões de bem-estar animal"
          />
          <ProcessStep
            icon="🔪"
            title="Processamento"
            description="Técnicas modernas de processamento garantindo máxima qualidade"
          />
          <ProcessStep
            icon="📦"
            title="Comercialização"
            description="Distribuição eficiente com rastreabilidade completa"
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
            image=""
          />
          <ServiceCard
            number="02"
            title="Atendimento"
            description="Nosso atendimento especializado busca compreender suas necessidades específicas. Oferecemos suporte técnico completo e orientação profissional em todas as etapas."
            image=""
          />
          <ServiceCard
            number="03"
            title="Processamento"
            description="Utilizamos tecnologia de ponta para garantir processamento eficiente e seguro. Nossa estrutura moderna permite máxima produtividade mantendo qualidade."
            image=""
          />
          <ServiceCard
            number="04"
            title="Rastreabilidade"
            description="Sistema completo de rastreamento do rebanho ao consumidor final. Transparência total com tecnologia blockchain e código QR para verificação."
            image=""
          />
        </div>
      </Section>

      {/* Seção: Depoimentos */}
      <Section
        title="ATENDIMENTO EXCEPCIONAL"
        subtitle="Ouça da boca de quem confía em nosso trabalho"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <section className="bg-[#D32F2F] text-white w-screen flex justify-center py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-white">
            Quer Conhecer Nossos Produtos?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto text-white leading-relaxed md:leading-loose">
            Entre em contato conosco para conhecer nossas soluções em qualidade,
            rastreabilidade e sustentabilidade. Nossa equipe está pronta para
            ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
            <Button href="/contato" variant="secondary">
              Entrar em Contato
            </Button>
            <Button href="/rastreabilidade" variant="outline">
              Saiba Sobre Rastreabilidade
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
