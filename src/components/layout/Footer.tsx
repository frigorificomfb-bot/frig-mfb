import Container from "./Container";


export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <Container>
        <div className="py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Frigorífico MFB. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}
