import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  background?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function HeroSection({
  title,
  subtitle,
  background = "/hero-carne.png",
  ctaText,
  ctaHref,
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1
          className="
            font-sans font-extrabold tracking-tight
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            text-transparent
            [-webkit-text-stroke:1.5px_white]
          "
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="
              mt-3
              font-sans font-medium tracking-wide
              text-sm sm:text-base md:text-lg
              text-transparent
              [-webkit-text-stroke:1px_white]
            "
          >
            {subtitle}
          </p>
        )}

        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className="
              mt-8
              inline-flex items-center justify-center
              px-7 py-2
              rounded-full
              bg-[#D32F2F]
              text-white
              text-[11px]
              font-bold
              tracking-wide
              shadow-md
              hover:bg-[#B71C1C]
              hover:shadow-lg
              transition-all duration-300
            "
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
