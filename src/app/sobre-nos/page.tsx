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
      <Section className="bg-white" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <ImageText
          title="Nossa Jornada"
          content="O Frigorífico MFB foi fundado com uma visão clara: fornecer carnes de excelente qualidade com total transparência e responsabilidade ambiental. Ao longo de mais de duas décadas, evoluímos desde uma estrutura pequena até nos tornarmos referência no segmento. Cada etapa do crescimento foi marcada pelo comprometimento com qualidade, inovação e sustentabilidade."
          imagePosition="right"
          titleClassName="text-center mb-[40px]"
          contentClassName="text-center max-w-4xl mx-auto leading-relaxed"
        />
      </Section>

      {/* Estatísticas */}
      <Section className="bg-gray-50" style={{ padding: "80px 0" }}>
        <Stats
          stats={[
            { number: "10+", label: "Anos de Tradição" },
            { number: "5000+", label: "Clientes Atendidos" },
            { number: "1000+", label: "Toneladas/Ano" },
            { number: "98%", label: "Satisfação do Cliente" },
          ]}
        />
      </Section>

      {/* Vídeo Institucional */}
      <Section className="bg-white" style={{ padding: "80px 0" }}>
        <div className="w-full flex flex-col items-center justify-center text-center">
          <div style={{ marginBottom: "40px" }} className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary w-full text-center">
              Conheça Nossa Operação
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto mt-4 leading-relaxed text-center">
              Veja de perto como funciona nosso processo de produção com tecnologia de ponta e equipe especializada.
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/9" }}>
              <video
                controls
                className="w-full h-full object-cover bg-black"
                poster="/producao-linha-01.jpeg"
              >
                <source src="/video-institucional.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>
        </div>
      </Section>

      {/* Missão Visão Valores */}
      <Section title="QUEM SOMOS" className="text-center" style={{ padding: "80px 0" }}>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "32px" }}>
          <Card
            title="Nossa Missão"
            description="Fornecer carnes de excelente qualidade com total transparência, rastreabilidade e compromisso com a sustentabilidade ambiental e social."
            icon="🎯"
            className="
            !bg-primary !text-white ring-0 shadow-lg h-full
            [&_h3]:!text-white [&_p]:!text-white/90
          "
          />

          <Card
            title="Nossa Visão"
            description="Ser a principal referência em qualidade e sustentabilidade no processamento de carnes, reconhecida por excelência operacional e inovação."
            icon="👁️"
            className="
            !bg-primary !text-white ring-0 shadow-lg h-full
            [&_h3]:!text-white [&_p]:!text-white/90
          "
          />

          <Card
            title="Nossos Valores"
            description="Qualidade, Integridade, Sustentabilidade, Inovação, Responsabilidade e Excelência em cada ação e decisão."
            icon="💎"
            className="
            !bg-primary !text-white ring-0 shadow-lg h-full
            [&_h3]:!text-white [&_p]:!text-white/90
          "
          />
        </div>
      </Section>



      {/* Diferencial Competitivo */}
      <Section
        title="DIFERENCIAIS"
        className="bg-gray-50 text-center"
        style={{ padding: "80px 0" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8" style={{ gap: "32px" }}>
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
            <Card
              key={index}
              {...item}
              className="
                !bg-primary !text-white ring-0 shadow-lg h-full
                [&_h3]:!text-white
                [&_p]:!text-white/90
              "
            />
          ))}
        </div>
      </Section>


      {/* Compromisso Final */}
      <section className="bg-primary text-white w-full flex justify-center" style={{ padding: "80px 0" }}>
        <div className="w-full max-w-4xl px-6 text-center">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight" style={{ marginBottom: "40px" }}>
            Nosso Compromisso
          </h2>

          <div className="space-y-5">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/95">
              Dedicados à excelência, trabalhamos em estreita colaboração com clientes
              para alcançar resultados excepcionais. Comunicação, confiança e qualidade
              sustentam a nossa atuação.
            </p>

            <p className="text-base sm:text-lg md:text-xl font-semibold">
              Cada cliente merece o melhor — e nós entregamos isso em cada etapa da produção.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
