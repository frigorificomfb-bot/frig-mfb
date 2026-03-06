import { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ImageText from "@/components/ui/ImageText";
import Stats from "@/components/ui/Stats";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Qualidade da Carne | Frigorífico MFB",
  description:
    "Conheça os critérios, controles e processos de qualidade da carne adotados pelo Frigorífico MFB, com foco em segurança alimentar, conformidade e excelência operacional.",
};

export default function QualidadeDaCarne() {
  return (
    <main className="bg-white">
      <HeroSection
        title="Qualidade da Carne"
        subtitle="Critérios, controles e processos que garantem segurança e excelência"
      />

      {/* Contexto e Objetivo */}
      <Section
        className="bg-white"
        style={{ paddingTop: "120px", paddingBottom: "80px" }}
      >
        <ImageText
          title="Contexto e Objetivo"
          content={`A qualidade da carne fornecida é um fator crítico para o negócio, impactando diretamente a segurança alimentar, a satisfação dos clientes e a conformidade regulatória. Esta página reúne informações essenciais sobre os critérios, processos e controles de qualidade adotados pelo Frigorífico MFB.

Nosso objetivo é apresentar, de forma clara e organizada, como conduzimos a gestão da qualidade, o monitoramento dos produtos, os controles de temperatura, o tratamento de não conformidades e o cumprimento das normas aplicáveis, fortalecendo a confiança e a parceria comercial.`}
          image="/producao-linha-01.jpeg"
          imagePosition="right"
          titleClassName="text-3xl md:text-4xl font-bold leading-tight"
          contentClassName="leading-relaxed"
        />
      </Section>

      {/* Informações Gerais */}
      <Section className="bg-gray-50" style={{ padding: "80px 0" }}>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            INFORMAÇÕES GERAIS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "32px" }}>
          <Card
            icon="📅"
            title="Data"
            description="24/02/2026"
            className="!bg-primary !text-white ring-0 shadow-lg h-full"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
          />
          <Card
            icon="👤"
            title="Solicitante"
            description="Danilo, Veterinário e responsável pela qualidade do produto"
            className="!bg-primary !text-white ring-0 shadow-lg h-full"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
          />
          <Card
            icon="🏢"
            title="Destinatário"
            description="Frigorífico Bezerra"
            className="!bg-primary !text-white ring-0 shadow-lg h-full"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
          />
        </div>
      </Section>

      {/* Estatísticas / Destaques */}
      <Section className="bg-white" style={{ padding: "80px 0" }}>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            PILARES DA QUALIDADE
          </h2>
        </div>

        <Stats
          stats={[
            { number: "100%", label: "Foco em Segurança Alimentar" },
            { number: "24/7", label: "Monitoramento de Processos" },
            { number: "Rigor", label: "Controle de Qualidade" },
            { number: "Total", label: "Compromisso com Conformidade" },
          ]}
        />
      </Section>

      {/* Sistema de Gestão da Qualidade */}
      <Section title="SISTEMA DE GESTÃO DA QUALIDADE" className="text-center" style={{ padding: "80px 0" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "32px" }}>
          <Card
            icon="📋"
            title="Sistemas e Certificações"
            description="Apresentação dos sistemas de gestão da qualidade e segurança de alimentos adotados, como HACCP, ISO 22000, FSSC 22000 e BPF, além dos certificados vigentes quando aplicáveis."
            className="!bg-primary !text-white ring-0 shadow-lg h-full"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
          />

          <Card
            icon="👥"
            title="Equipe e Estrutura"
            description="Descrição da equipe dedicada à Qualidade e Segurança de Alimentos, sua estrutura organizacional e responsabilidades dentro do processo produtivo."
            className="!bg-primary !text-white ring-0 shadow-lg h-full"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
          />

          <Card
            icon="🎓"
            title="Treinamento Contínuo"
            description="Programa de capacitação contínua para colaboradores, com foco em boas práticas, segurança de alimentos, conformidade regulatória e padronização operacional."
            className="!bg-primary !text-white ring-0 shadow-lg h-full"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
          />

          <Card
            icon="✅"
            title="Compromisso com Excelência"
            description="A qualidade é tratada como princípio de operação, orientando o controle de processos, a prevenção de riscos e a melhoria contínua."
            className="!bg-primary !text-white ring-0 shadow-lg h-full"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
          />
        </div>
      </Section>

      {/* Controle de Qualidade da Carne */}
      <Section className="bg-gray-50" style={{ padding: "80px 0" }}>
        <ImageText
          title="Controle de Qualidade da Carne"
          content={`O controle de qualidade da carne considera parâmetros fundamentais como pH, cor, temperatura, textura, rendimento e demais critérios técnicos relevantes para cada produto ou corte.

As especificações técnicas são definidas formalmente para orientar os padrões de aceitação e rejeição de lotes, assegurando consistência, segurança e conformidade em todas as etapas do processo.`}
          image="/qualidade-carne.jpeg"
          imagePosition="left"
          titleClassName="text-3xl md:text-4xl font-bold leading-tight"
          contentClassName="leading-relaxed"
        />
      </Section>

      {/* Temperatura e Armazenamento */}
      <Section title="CONTROLE DE TEMPERATURA E ARMAZENAMENTO" className="text-center" style={{ padding: "80px 0" }}>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "32px" }}>
          <Card
            icon="❄️"
            title="Resfriamento e Estocagem"
            description="Definição e controle das faixas de temperatura adotadas nas etapas de resfriamento, armazenagem e conservação dos produtos."
            className="!bg-primary !text-white ring-0 shadow-lg h-full"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
          />
          <Card
            icon="🌡️"
            title="Monitoramento Contínuo"
            description="Acompanhamento contínuo das temperaturas com registro sistemático de dados, garantindo rastreabilidade e pronta atuação em caso de desvios."
            className="!bg-primary !text-white ring-0 shadow-lg h-full"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
          />
          <Card
            icon="🚚"
            title="Transporte Controlado"
            description="Controle térmico durante o transporte, preservando a integridade, a segurança alimentar e o padrão de qualidade até a entrega."
            className="!bg-primary !text-white ring-0 shadow-lg h-full"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
          />
        </div>
      </Section>

      {/* Não conformidades e reclamações */}
      <Section className="bg-white" style={{ padding: "80px 0" }}>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            NÃO CONFORMIDADES E RECLAMAÇÕES
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            Procedimentos estruturados para registro, tratamento, análise e prevenção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "32px" }}>
          <Card
            icon="📝"
            title="Registro de Não Conformidades"
            description="As ocorrências internas são registradas de forma estruturada para investigação, definição de ações corretivas e monitoramento de recorrência."
            className="!bg-primary !text-white ring-0 shadow-lg h-full"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
          />
          <Card
            icon="💬"
            title="Tratamento de Reclamações"
            description="Existe procedimento formal para recebimento, análise e resposta às reclamações de clientes, com foco em resolução eficaz e melhoria contínua."
            className="!bg-primary !text-white ring-0 shadow-lg h-full"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
          />
          <Card
            icon="🚨"
            title="Plano de Recall"
            description="Plano formal de recall e rastreabilidade para atuação rápida em situações críticas, com testes periódicos quando aplicáveis."
            className="!bg-primary !text-white ring-0 shadow-lg h-full"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
          />
        </div>
      </Section>

      {/* Normas e Auditorias */}
      <Section className="bg-gray-50" style={{ padding: "80px 0" }}>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            NORMAS E AUDITORIAS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "32px" }}>
          <Card
            icon="⚖️"
            title="Legislações e Normativas"
            description="Atendimento às legislações e normativas aplicáveis, incluindo MAPA, ANVISA, SIF, regulamentos de exportação, Boas Práticas de Fabricação e exigências dos serviços de inspeção."
            className="!bg-primary !text-white ring-0 shadow-lg h-full"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
          />
          <Card
            icon="🔎"
            title="Auditorias"
            description="Realização de auditorias por órgãos oficiais e clientes, com acompanhamento de requisitos regulatórios, evidências documentais e oportunidades de melhoria."
            className="!bg-primary !text-white ring-0 shadow-lg h-full"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
          />
        </div>
      </Section>

{/* Formato de Resposta */}
<Section className="bg-white" style={{ padding: "80px 0" }}>
  <div className="flex justify-center">
    <div className="max-w-3xl text-center px-6">

      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        Formato de Resposta e Anexos
      </h2>

      <p className="text-lg leading-relaxed text-gray-700">
        As informações podem ser organizadas em relatório escrito,
        preferencialmente em Word ou PDF, conforme as seções
        apresentadas nesta página.
      </p>

      <p className="text-lg leading-relaxed text-gray-700 mt-4">
        Como anexos, podem ser incluídos certificados, procedimentos,
        laudos de análise, especificações técnicas, imagens, fotos
        e registros de monitoramento, sempre que disponíveis.
      </p>

    </div>
  </div>
</Section>

      {/* Contato */}
        <Section
        title="CONTATO PARA ESCLARECIMENTOS"
        className="text-center"
        style={{ padding: "80px 0" }}
        >
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl justify-center">

            <Card
            icon="👤"
            title="Responsável"
            description="Nome, cargo, e-mail e telefone/WhatsApp podem ser informados nesta seção para facilitar o contato e eventuais esclarecimentos adicionais."
            className="!bg-primary !text-white ring-0 shadow-lg h-full text-center"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
            />

            <Card
            icon="🔒"
            title="Confidencialidade"
            description="As informações fornecidas serão tratadas com confidencialidade e utilizadas exclusivamente para avaliação de qualidade e fortalecimento da parceria comercial."
            className="!bg-primary !text-white ring-0 shadow-lg h-full text-center"
            titleClassName="!text-white"
            contentClassName="!text-white/90"
            />

        </div>
        </Section>

      {/* CTA Final */}
      <section
        className="bg-primary text-white w-full flex justify-center"
        style={{ padding: "80px 0" }}
      >
        <div className="w-full max-w-5xl px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ marginBottom: "30px" }}
          >
            Precisa de mais informações?
          </h2>

          <p
            className="text-lg text-white"
            style={{ marginBottom: "30px" }}
          >
            Nossa equipe está preparada para fornecer detalhes complementares,
            documentos e esclarecimentos sobre os processos de qualidade da carne.
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