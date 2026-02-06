import Container from "../layout/Container";
import Section from "../ui/section";


export default function Stats() {
  return (
    <Section>
      <Container>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <strong className="text-3xl">+20</strong>
            <p>Anos de experiência</p>
          </div>
          <div>
            <strong className="text-3xl">100%</strong>
            <p>Rastreabilidade</p>
          </div>
          <div>
            <strong className="text-3xl">Alta</strong>
            <p>Qualidade</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
