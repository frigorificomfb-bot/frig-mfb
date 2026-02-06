import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white w-screen flex justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8 border-b border-gray-200">
          {/* Logo & Social */}
          <div>
            <div className="mb-4 sm:mb-6">
              <h3 className="font-bold text-base sm:text-lg text-[#D32F2F]">Frigorífico MFB</h3>
            </div>
            <p className="text-xs sm:text-sm text-black mb-4 sm:mb-6 leading-relaxed">
              Qualidade e Rastreabilidade em cada corte
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://instagram.com"
                className="text-[#D32F2F] hover:text-[#B71C1C] transition-colors text-lg sm:text-xl"
                title="Instagram"
              >
                📸
              </a>
              <a
                href="https://facebook.com"
                className="text-[#D32F2F] hover:text-[#B71C1C] transition-colors text-lg sm:text-xl"
                title="Facebook"
              >
                f
              </a>
              <a
                href="https://linkedin.com"
                className="text-[#D32F2F] hover:text-[#B71C1C] transition-colors text-lg sm:text-xl"
                title="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-[#D32F2F] mb-3 sm:mb-4 uppercase text-xs sm:text-sm">
              Contato
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-black">
              <li>
                <a
                  href="tel:+551134567890"
                  className="hover:text-[#D32F2F] transition-colors font-medium"
                >
                  Telefone
                </a>
                <p className="text-xs sm:text-sm">(11) 3456-7890</p>
              </li>
              <li>
                <a
                  href="mailto:contato@frigorifico-mfb.com.br"
                  className="hover:text-[#D32F2F] transition-colors font-medium"
                >
                  Email
                </a>
                <p className="break-all text-xs">
                  contato@frigorifico-mfb.com.br
                </p>
              </li>
            </ul>
          </div>

          {/* Localização */}
          <div>
            <h4 className="font-semibold text-[#D32F2F] mb-3 sm:mb-4 uppercase text-xs sm:text-sm">
              Localização
            </h4>
            <p className="text-xs sm:text-sm text-black leading-relaxed">
              Av. Industrial, 1000
              <br />
              Distrito Industrial
              <br />
              São Paulo - SP
              <br />
              01234-567
            </p>
          </div>

          {/* Informações Gerais & Colaboração */}
          <div>
            <h4 className="font-semibold text-[#D32F2F] mb-3 sm:mb-4 uppercase text-xs sm:text-sm">
              Informações Gerais
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-black mb-4 sm:mb-6">
              <li>
                <Link
                  href="/sobre-nos"
                  className="hover:text-[#D32F2F] transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/rastreabilidade"
                  className="hover:text-[#D32F2F] transition-colors"
                >
                  Rastreabilidade
                </Link>
              </li>
              <li>
                <Link
                  href="/sustentabilidade"
                  className="hover:text-[#D32F2F] transition-colors"
                >
                  Sustentabilidade
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold text-[#D32F2F] mb-2 uppercase text-xs sm:text-sm">
              Colaboração
            </h4>
            <p className="text-xs sm:text-sm text-black">
              Recebemos propostas de colaboração e parcerias
            </p>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="py-4 sm:py-6 text-center border-t border-gray-200">
          <p className="text-xs sm:text-sm text-black mb-1">
            © {currentYear} Frigorífico MFB. Todos os direitos reservados.
          </p>
          <p className="text-xs text-black">
            Qualidade, Rastreabilidade e Sustentabilidade
          </p>
        </div>
      </div>
    </footer>
  );
}
