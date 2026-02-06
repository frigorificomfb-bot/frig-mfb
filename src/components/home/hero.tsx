import Container from "../layout/Container";
import Button from "../ui/button";
import Section from "../ui/section";

export default function Hero() {
  return (
    <Section>
      <Container>
        <h1 className="text-4xl font-bold mb-4">
          Qualidade, rastreabilidade e confiança
        </h1>

        <p className="mb-6 max-w-xl">
          Compromisso com excelência em cada etapa do processo.
        </p>

        <Button>Conheça mais</Button>
      </Container>
    </Section>
  );
}
