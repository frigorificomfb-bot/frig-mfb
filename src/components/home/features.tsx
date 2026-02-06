import Container from "../layout/Container";
import Section from "../ui/section";
import Title from "../ui/title";


export default function Features() {
  return (
    <Section>
      <Container>
        <Title>Diferenciais</Title>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div>Qualidade</div>
          <div>Rastreabilidade</div>
          <div>Sustentabilidade</div>
        </div>
      </Container>
    </Section>
  );
}
