interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`w-screen flex justify-center py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D32F2F] mb-3 sm:mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl leading-relaxed">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
