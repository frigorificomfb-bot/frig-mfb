interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  link?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  icon,
  image,
  link,
  className = "",
}: CardProps) {
  const cardContent = (
    <>
      {image && (
        <div className="mb-4 w-full h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden bg-gray-300 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {icon && !image && <div className="mb-4 text-4xl sm:text-5xl">{icon}</div>}
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-[#D32F2F]">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-black leading-relaxed md:leading-loose">{description}</p>
    </>
  );

  const baseClasses =
    "p-4 sm:p-6 md:p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300";

  if (link) {
    return (
      <a href={link} className={`${baseClasses} block ${className}`}>
        {cardContent}
      </a>
    );
  }

  return (
    <div className={`${baseClasses} ${className}`}>
      {cardContent}
    </div>
  );
}
