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
        <nav className="flex h-16 sm:h-24 md:h-28 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logomfb.png"
              alt="Frigorífico MFB Logo"
              width={180}
              height={60}
              priority
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 lg:gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm lg:text-base text-black hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl md:hidden animate-in slide-in-from-top-2 duration-200 z-50">
            <Container>
              <ul className="flex flex-col py-4 gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-800 hover:text-primary hover:bg-red-50 transition-colors font-medium block py-3 px-4 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        )}
      </Container>
    </header>
  );
}
