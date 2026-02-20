interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  link?: string;
  className?: string;

  // ✅ opcionais (não quebram nada)
  titleClassName?: string;
  contentClassName?: string;
}

export default function Card({
  title,
  description,
  icon,
  image,
  link,
  className = "",
  titleClassName = "",
  contentClassName = "",
}: CardProps) {
  const cardContent = (
    <>
      {image && (
        <div className="mb-4 w-full h-36 rounded-lg overflow-hidden bg-gray-300 flex items-center justify-center">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      {icon && !image && (
        <div className="mb-6 flex justify-center text-4xl sm:text-5xl">{icon}</div>
      )}

      {/* ✅ continua igual, mas agora você pode sobrescrever */}
      <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${titleClassName}`}>
        {title}
      </h3>

      <p
        className={`mx-auto w-full max-w-[32ch] text-base leading-relaxed ${contentClassName}`}
      >
        {description}
      </p>
    </>
  );

  const baseClasses =
    "p-8 sm:p-10 bg-white rounded-2xl shadow-md ring-1 ring-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center h-full";

  if (link) {
    return (
      <a href={link} className={`${baseClasses} block ${className}`}>
        {cardContent}
      </a>
    );
  }

  return <div className={`${baseClasses} ${className}`}>{cardContent}</div>;
}
