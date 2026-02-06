"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/sobre-nos", label: "Sobre Nós" },
    { href: "/sustentabilidade", label: "Sustentabilidade" },
    { href: "/rastreabilidade", label: "Rastreabilidade" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <Container>
        <nav className="flex h-20 sm:h-24 md:h-28 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/logomfb.webp"
              alt="Frigorífico MFB Logo"
              width={200}
              height={60}
              className="h-8 sm:h-10 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-4 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm lg:text-base text-black hover:text-[#D32F2F] transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D32F2F] rounded p-1"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#D32F2F] transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#D32F2F] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#D32F2F] transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-3 sm:py-4 border-t border-gray-200 animate-in fade-in duration-200">
            <ul className="flex flex-col gap-2 sm:gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm sm:text-base text-black hover:text-[#D32F2F] transition-colors font-medium block py-2 px-2 rounded hover:bg-red-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
