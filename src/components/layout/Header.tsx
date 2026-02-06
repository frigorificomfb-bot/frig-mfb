import Link from "next/link";
import Container from "./Container";



export default function Header() {
  return (
    <header className="border-b">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <strong>Frigorífico MFB</strong>

          <ul className="flex gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sobre-nos">Sobre Nós</Link></li>
            <li><Link href="/sustentabilidade">Sustentabilidade</Link></li>
            <li><Link href="/rastreabilidade">Rastreabilidade</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
