interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Section({
  title,
  subtitle,
  children,
  className = "",
  style,
}: SectionProps) {
  return (
    <section
      className={`relative w-full flex justify-center ${className}`}
      style={style}
    >
      <div className="w-full max-w-[1400px] px-[24px] sm:px-[40px] lg:px-[64px]">
        {title && (
          <div style={{ marginBottom: "40px" }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary" style={{ marginBottom: "30px" }}>
              {title}
            </h2>
            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );

}

