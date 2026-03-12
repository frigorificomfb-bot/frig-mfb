import { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ImageText from "@/components/ui/ImageText";

export const metadata: Metadata = {
  title: "Qualidade do Produto | Frigorífico MFB",
  description:
    "Garantia de excelência e segurança alimentar em todas as etapas da nossa produção, da carne para consumo humano aos subprodutos para nutrição animal.",
};

export default function QualidadeDoProduto() {
  return (
    <main className="bg-white">
      <HeroSection
        title="Qualidade do Produto"
        subtitle="Excelência e segurança alimentar em cada etapa de nossa produção"
      />

      {/* Introdução */}
      <Section style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="max-w-5xl mx-auto">
          <ImageText
            title="Nosso Padrão de Excelência"
            content="A qualidade da carne fornecida é um critério inegociável para a nossa empresa. Além da excepcional qualidade, oferecemos total segurança alimentar, assumindo a responsabilidade de ofertar uma proteína segura que promove a saúde e a satisfação dos nossos clientes. Esse compromisso inabalável se estende também aos nossos subprodutos de origem animal (farinhas e sebo), direcionados de forma estrita e segura à indústria de alimentação animal."
            image="/qualidade-frig.png"
            imagePosition="right"
            titleClassName="mb-[40px]"
          />
        </div>
      </Section>

      {/* Sistema de Gestão */}
      <Section className="bg-gray-50" style={{ padding: "80px 0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">
               Sistema de Gestão da Qualidade
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
              Mantemos uma equipe especializada dedicada ao rigor técnico. O processo de beneficiamento
              é acompanhado de ponta a ponta: desde os currais de espera, graxaria e sala de abate até 
              as câmaras frias e expedição final.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "24px" }}>
             <Card
              icon={<span className="text-4xl">👥</span>}
              title="Equipe Técnica"
              description="Contamos com um Médico Veterinário RT e dois técnicos de controle de qualidade responsáveis por acompanhar e inspecionar todo o fluxo."
              className="!bg-primary ring-0 hover:shadow-xl transition-all duration-300 h-full"
              titleClassName="!text-white mb-4"
              contentClassName="!text-white/90"
            />
            <Card
              icon={<span className="text-4xl">🧼</span>}
              title="Higiene e Segurança"
              description="Supervisão diária sobre o uso de EPIs, higiene pessoal dos colaboradores e esterilização dos equipamentos."
              className="!bg-primary ring-0 hover:shadow-xl transition-all duration-300 h-full"
              titleClassName="!text-white mb-4"
              contentClassName="!text-white/90"
            />
             <Card
              icon={<span className="text-4xl">📋</span>}
              title="Processos e POPs"
              description="Avaliações orientadas por Procedimentos Operacionais Padrão (POPs) documentados para mitigar riscos de contaminação física, química e biológica."
              className="!bg-primary ring-0 hover:shadow-xl transition-all duration-300 h-full"
              titleClassName="!text-white mb-4"
              contentClassName="!text-white/90"
            />
             <Card
              icon={<span className="text-4xl">🔎</span>}
              title="Análises Regulares"
              description="Coletas aleatórias e análises físico-químicas e microbiológicas periódicas da água e do produto final para comprovação dos padrões."
              className="!bg-primary ring-0 hover:shadow-xl transition-all duration-300 h-full"
              titleClassName="!text-white mb-4"
              contentClassName="!text-white/90"
            />
          </div>
        </div>
      </Section>

      {/* Áreas de Controle */}
      <Section style={{ padding: "80px 0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center" style={{ marginBottom: "20px" }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary text-center" style={{ marginBottom: "16px" }}>
              Monitoramento Setorial
            </h2>
          </div>

          <div className="space-y-0">
             {/* Bloco 1 */}
             <div className="border-b border-gray-200" style={{ padding: "40px 0" }}>
                <div className="flex items-center" style={{ marginBottom: "24px" }}>
                  <span className="text-5xl md:text-6xl font-extrabold text-primary/20" style={{ width: "80px", flexShrink: 0 }}>
                    01
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">
                    Carnes e Vísceras <span className="text-gray-500 font-medium text-lg block sm:inline sm:ml-2">(Consumo Humano)</span>
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "12px", paddingLeft: "80px" }}>
                    <li className="flex items-start text-sm md:text-base text-gray-700">
                      <span className="text-primary font-bold" style={{ marginRight: "8px" }}>•</span>
                      Inspeção ante-mortem e post-mortem integrada com a equipe ADEPARÁ (SIE).
                    </li>
                    <li className="flex items-start text-sm md:text-base text-gray-700">
                      <span className="text-primary font-bold" style={{ marginRight: "8px" }}>•</span>
                      Monitoramento de pH da carcaça, coloração e sanidade geral do animal.
                    </li>
                    <li className="flex items-start text-sm md:text-base text-gray-700">
                      <span className="text-primary font-bold" style={{ marginRight: "8px" }}>•</span>
                      Rígidos critérios de condenação total/parcial em casos de abcessos, contusões, fraturas ou zoonoses.
                    </li>
                </ul>
              </div>

               {/* Bloco 2 */}
               <div className="border-b border-gray-200" style={{ padding: "40px 0" }}>
                <div className="flex items-center" style={{ marginBottom: "24px" }}>
                  <span className="text-5xl md:text-6xl font-extrabold text-primary/20" style={{ width: "80px", flexShrink: 0 }}>
                    02
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">
                    Farinhas e Sebo <span className="text-gray-500 font-medium text-lg block sm:inline sm:ml-2">(Nutrição Animal)</span>
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "12px", paddingLeft: "80px" }}>
                    <li className="flex items-start text-sm md:text-base text-gray-700">
                      <span className="text-primary font-bold" style={{ marginRight: "8px" }}>•</span>
                      Produção padronizada de farinha de carne/ossos, farinha de sangue e sebo.
                    </li>
                    <li className="flex items-start text-sm md:text-base text-gray-700">
                      <span className="text-primary font-bold" style={{ marginRight: "8px" }}>•</span>
                      Controle efetivo nas etapas de esterilização (cozimento), moagem e prensagem.
                    </li>
                    <li className="flex items-start text-sm md:text-base text-gray-700">
                      <span className="text-primary font-bold" style={{ marginRight: "8px" }}>•</span>
                      Supervisão minuciosa sobre a rotulagem, armazenamento e expedição, garantindo nutrição segura.
                    </li>
                </ul>
              </div>

              {/* Bloco 3 */}
              <div className="border-b border-gray-200" style={{ padding: "40px 0" }}>
                <div className="flex items-center" style={{ marginBottom: "24px" }}>
                  <span className="text-5xl md:text-6xl font-extrabold text-primary/20" style={{ width: "80px", flexShrink: 0 }}>
                    03
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">
                    Cadeia de Frio e Armazenamento
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "12px", paddingLeft: "80px" }}>
                    <li className="flex items-start text-sm md:text-base text-gray-700">
                      <span className="text-primary font-bold" style={{ marginRight: "8px" }}>•</span>
                      Resfriamento rigoroso estipulado entre 0°C a 4°C em todas as estocagens.
                    </li>
                    <li className="flex items-start text-sm md:text-base text-gray-700">
                      <span className="text-primary font-bold" style={{ marginRight: "8px" }}>•</span>
                      Registros ininterruptos de temperatura arquivados em planilhas formais.
                    </li>
                     <li className="flex items-start text-sm md:text-base text-gray-700">
                      <span className="text-primary font-bold" style={{ marginRight: "8px" }}>•</span>
                      Geração autônoma de energia, assegurando a conservação plena no evento de curtas e médias interrupções de fornecimento.
                    </li>
                </ul>
              </div>

          </div>
        </div>
      </Section>

      {/* Bases Normativas */}
      <Section className="bg-gray-50" style={{ padding: "80px 0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
              Bases Normativas e Regulatórias
            </h2>
             <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
              Nosso compromisso com a qualidade é chancelado por constantes auditorias (anuais) e respaldo de entidades oficiais do setor agropecuário e de saúde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Inspeção Integrada",
                description: "Equipes ADEPARÁ com Serviço de Inspeção Estadual (SIE) atuando diariamente e Vigilância Sanitária Municipal."
              },
              {
                title: "RIISPOA",
                description: "Alinhamento prático e formal baseando-se no Decreto Nº 10.468/2020."
              },
              {
                title: "Diretrizes Nacionais do MAPA",
                description: "Assegurados pelas Portarias MAPA N° 558/2022, N° 393/2022 e N° 365/2021."
              },
              {
                title: "Saúde Pública",
                description: "Integração aos controles exigidos pela Portaria GM Nº 888 de 04 de maio de 2021 (Ministério da Saúde)."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center h-full"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Responsável Técnico */}
      <Section style={{ padding: "80px 0" }}>
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/10 w-full flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-6">
              Contato do Responsável Técnico
            </h2>
            <p className="text-gray-700 mb-10 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center">
              As informações fornecidas são tratadas com confidencialidade e utilizadas 
              exclusivamente para avaliação de qualidade e fortalecimento da parceria comercial. 
              Para maiores esclarecimentos:
            </p>
            
            <div className="flex flex-col items-center gap-6 text-center max-w-xl mx-auto w-full">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col items-center gap-4 w-full">
                <span className="text-5xl mb-2">👨‍⚕️</span>
                <div>
                  <p className="text-sm md:text-base text-gray-500 font-semibold uppercase tracking-wider">Médico Veterinário RT</p>
                  <p className="text-primary font-bold text-2xl mt-1">Danillo de Souza Paixão</p>
                  <p className="text-base text-gray-600 mt-1 font-medium">Controle de Qualidade</p>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6 pt-6 border-t border-gray-100 w-full">
                  <a href="mailto:danillowz@hotmaill.com" className="flex items-center justify-center gap-3 text-gray-700 hover:text-primary transition-colors group">
                      <span className="text-2xl group-hover:scale-110 transition-transform">✉️</span>
                      <span className="font-medium text-base">danillowz@hotmaill.com</span>
                  </a>
                  <a href="https://wa.me/5591981974374" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-gray-700 hover:text-primary transition-colors group">
                      <span className="text-2xl group-hover:scale-110 transition-transform">📱</span>
                      <span className="font-medium text-base">(91) 98197-4374</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
