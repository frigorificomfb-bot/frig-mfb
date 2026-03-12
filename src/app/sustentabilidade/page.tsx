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
        <div className="max-w-5xl mx-auto">
          <ImageText
            title="Compromisso com o Planeta"
            content="A sustentabilidade não é apenas um programa, é parte do nosso DNA. Acreditamos que é possível produzir alimentos de alta qualidade em harmonia com o meio ambiente e com a sociedade."
            image="/compromisso-com-o-planeta.jpg"
            imagePosition="right"
            titleClassName="mb-[40px]"
          />
        </div>
      </Section>

      {/* Pilares de Sustentabilidade */}
      <Section className="bg-gray-50" style={{ padding: "80px 0" }}>
        <div className="max-w-5xl mx-auto">
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
        </div>
      </Section>

      {/* SIPAT - Introdução */}
      <Section style={{ padding: "80px 0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary text-center" style={{ marginBottom: "24px" }}>
              Nossas Iniciativas
            </h2>
            <p className="text-sm text-primary font-semibold uppercase tracking-wider" style={{ marginBottom: "16px" }}>
              SIPAT — Semana Interna de Prevenção de Acidentes do Trabalho
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed" style={{ textAlign: "center" }}>
              A SIPAT é uma obrigação legal prevista na Norma Regulamentadora nº 5 (NR-5), que trata da CIPA
              (Comissão Interna de Prevenção de Acidentes). Ela deve ser realizada anualmente em todas as empresas
              que possuem CIPA, com o objetivo de conscientizar os trabalhadores sobre segurança, saúde e prevenção de acidentes.
            </p>
          </div>
        </div>
      </Section>

      {/* SIPAT - Importância */}
      <Section className="bg-gray-50" style={{ padding: "80px 0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center">
              Importância da SIPAT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px" }}>
            {[
              {
                icon: "🛡️",
                title: "Redução de Acidentes",
                description: "Informa e sensibiliza os colaboradores sobre riscos e práticas seguras no ambiente de trabalho.",
              },
              {
                icon: "❤️",
                title: "Promoção da Saúde",
                description: "Inclui temas como saúde mental, ergonomia, alimentação saudável e combate ao estresse.",
              },
              {
                icon: "📋",
                title: "Cumprimento Legal",
                description: "Atende à exigência da NR-5 e evita multas e sanções para a empresa.",
              },
              {
                icon: "🤝",
                title: "Clima Organizacional",
                description: "Demonstra preocupação da empresa com o bem-estar dos funcionários.",
              },
              {
                icon: "🏥",
                title: "Prevenção de Doenças",
                description: "Orienta sobre postura, uso correto de EPIs, pausas e ginástica laboral.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center flex flex-col items-center h-full"
              >
                <span className="text-4xl" style={{ marginBottom: "16px" }}>{item.icon}</span>
                <h3 className="text-lg font-bold text-primary" style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SIPAT - Atividades */}
      <Section style={{ padding: "80px 0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center" style={{ marginBottom: "20px" }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center" style={{ marginBottom: "16px" }}>
              Nossas Atividades
            </h2>
          </div>

          <div className="space-y-0">
            {[
              {
                number: "01",
                title: "Palestras",
                items: [
                  "Prevenção de acidentes de trabalho",
                  "Uso correto de EPIs (Equipamentos de Proteção Individual)",
                  "Saúde mental e combate ao estresse",
                  "Alimentação saudável e prevenção de doenças crônicas",
                  "Prevenção de LER/DORT",
                  "Primeiros socorros",
                ],
              },
              {
                number: "02",
                title: "Dinâmicas e Jogos",
                items: [
                  "Quiz sobre segurança (com premiação)",
                  "Simulação de evacuação de emergência",
                  "Montagem de cenários de risco para identificação pelos colaboradores",
                  "Gincana de perguntas e respostas sobre saúde e segurança",
                ],
              },
              {
                number: "03",
                title: "Demonstrações Práticas",
                items: [
                  "Como usar extintores de incêndio",
                  "Demonstração de primeiros socorros (RCP, desengasgo, etc.)",
                  "Uso correto de luvas, botas, máscaras e óculos de proteção",
                ],
              },
              {
                number: "04",
                title: "Atividades de Bem-Estar",
                items: [
                  "Ginástica laboral",
                  "Sessão de alongamento",
                  "Massagem rápida (parceria com clínicas)",
                  "Aferição de pressão arterial e glicemia",
                ],
              },
              {
                number: "05",
                title: "Exposição de Materiais",
                items: [
                  "Cartazes, banners e vídeos educativos",
                  "Exposição de EPIs antigos e novos",
                  "Mural de casos reais para aprendizado coletivo",
                ],
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="border-b border-gray-200"
                style={{ padding: "40px 0" }}
              >
                {/* Número + Título */}
                <div className="flex items-center" style={{ marginBottom: "24px" }}>
                  <span
                    className="text-5xl md:text-6xl font-extrabold text-primary/20"
                    style={{ width: "80px", flexShrink: 0 }}
                  >
                    {activity.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">
                    {activity.title}
                  </h3>
                </div>

                {/* Itens alinhados com o título */}
                <ul
                  className="grid grid-cols-1 sm:grid-cols-2"
                  style={{ gap: "12px", paddingLeft: "80px" }}
                >
                  {activity.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm md:text-base text-gray-700">
                      <span className="text-primary font-bold" style={{ marginRight: "8px" }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Principais Órgãos Envolvidos */}
      <Section className="bg-gray-50" style={{ padding: "80px 0" }}>
        <div className="text-center flex flex-col items-center max-w-5xl mx-auto" style={{ marginBottom: "30px" }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary text-center" style={{ marginBottom: "24px" }}>
            Principais Órgãos Envolvidos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            Atuamos em conformidade com os mais rigorosos padrões e órgãos reguladores
            para garantir segurança, qualidade e legalidade em todas as etapas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              org: "SEMAS/PA",
              name: "Secretaria de Estado de Meio Ambiente e Sustentabilidade",
              items: ["Licenciamento ambiental (LP, LI, LO)"],
            },
            {
              org: "ADEPARÁ",
              name: "Agência de Defesa Agropecuária do Estado do Pará",
              items: ["Serviço de Inspeção Estadual (SIE)"],
            },
            {
              org: "MAPA",
              name: "Ministério da Agricultura e Pecuária",
              items: ["Serviço de Inspeção Federal (SIF)"],
            },
            {
              org: "Prefeitura Municipal",
              items: [
                "Zoneamento",
                "Alvará de construção",
                "Alvará de funcionamento",
                "ISS",
              ],
            },
            {
              org: "Vigilância Sanitária",
              name: "Municipal",
              items: [
                "Licença sanitária",
                "Fiscalização de condições higiênico-sanitárias",
              ],
            },
            {
              org: "Corpo de Bombeiros",
              name: "Militar do Pará",
              items: ["Projeto e certificado de segurança contra incêndio (AVCB)"],
            },
            {
              org: "IBAMA",
              name: "(se aplicável)",
              items: [
                "Questões ambientais federais específicas",
                "Fauna e áreas sensíveis",
              ],
            },
            {
              org: "CRMV-PA",
              name: "Conselho Regional de Medicina Veterinária",
              items: [
                "Registro e fiscalização dos médicos-veterinários responsáveis técnicos",
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center h-full"
            >
              <h3 className="text-xl font-bold text-primary mb-2">{item.org}</h3>
              {item.name && (
                <p className="text-sm font-semibold text-gray-700 mb-3 border-b-2 border-gray-100 pb-2 w-full">
                  {item.name}
                </p>
              )}
              <ul className="space-y-2 mt-2 w-full">
                {item.items.map((subItem, idx) => (
                  <li key={idx} className="text-sm text-gray-600 block">
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
