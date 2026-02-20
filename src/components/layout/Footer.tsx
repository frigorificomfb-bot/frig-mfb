import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white w-full flex justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8 border-b border-gray-200">
          {/* Logo & Social */}
          <div>
            <div className="mb-4 sm:mb-6">
              <h3 className="font-bold text-base sm:text-lg text-primary">
                Frigorífico MFB
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-black mb-4 sm:mb-6 leading-relaxed">
              Qualidade e Rastreabilidade em cada corte
            </p>

            <div className="flex gap-4 text-xl">
              <a
                href="https://www.instagram.com/frigorifico_mfb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent hover:scale-110 transition-all duration-200"
                title="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.instagram.com/frigorifico_mfb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent hover:scale-110 transition-all duration-200"
                title="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/frigorifico_mfb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent hover:scale-110 transition-all duration-200"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-primary mb-3 sm:mb-4 uppercase text-xs sm:text-sm">
              Contato
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-black">
              <li>
                <a
                  href="tel:+551134567890"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Telefone
                </a>
                <p className="text-xs sm:text-sm">(91) 3444-1615</p>
              </li>

              <li>
                <a
                  href="mailto:ruthehelena@hotmail.com"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Email
                </a>
                <p className="break-all text-xs">
                  ruthehelena@hotmail.com
                </p>
              </li>
            </ul>
          </div>

          {/* Localização */}
          <div>
            <h4 className="font-semibold text-primary mb-3 sm:mb-4 uppercase text-xs sm:text-sm">
              Localização
            </h4>
            <p className="text-xs sm:text-sm text-black leading-relaxed">
              Rodovia BR 010, KM 43 e 44, S/N
              <br />
              Estrada
              <br />
              Mãe do Rio - PA
              <br />
              68675-000
            </p>
          </div>

          {/* Informações Gerais & Colaboração */}
          <div>
            <h4 className="font-semibold text-primary mb-3 sm:mb-4 uppercase text-xs sm:text-sm">
              Informações Gerais
            </h4>

            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-black mb-4 sm:mb-6">
              <li>
                <Link
                  href="/sobre-nos"
                  className="hover:text-primary transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/rastreabilidade"
                  className="hover:text-primary transition-colors"
                >
                  Rastreabilidade
                </Link>
              </li>
              <li>
                <Link
                  href="/sustentabilidade"
                  className="hover:text-primary transition-colors"
                >
                  Sustentabilidade
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold text-primary mb-2 uppercase text-xs sm:text-sm">
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
        </div>
      </div>
    </footer>
  );
}
