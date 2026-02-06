interface HeroSectionProps {
  title: string;
  subtitle?: string;
  background?: string;
}

export default function HeroSection({
  title,
  subtitle,
  background = "bg-[#D32F2F]",
}: HeroSectionProps) {
  return (
    <section className={`${background} text-white w-screen flex justify-center min-h-96 sm:min-h-[500px] md:min-h-[600px] lg:min-h-screen items-center py-12 sm:py-16 md:py-20 lg:py-24`}>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight sm:leading-snug md:leading-normal text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl leading-relaxed md:leading-loose">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
