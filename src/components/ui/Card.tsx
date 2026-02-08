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
        <div className="mb-4 w-full h-36 rounded-lg overflow-hidden bg-gray-300 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {icon && !image && (
        <div className="mb-4 flex justify-center text-3xl">
          {icon}
        </div>
      )}

      {/* 🔥 Sem cor fixa */}
      <h3 className="text-base sm:text-lg font-bold mb-3">
        {title}
      </h3>

      {/* 🔥 Sem cor fixa */}
      <p className="mx-auto w-full max-w-[36ch] text-sm leading-snug">
        {description}
      </p>
    </>
  );

  const baseClasses =
    "p-5 bg-white rounded-xl shadow-sm ring-1 ring-black/5 hover:shadow-md transition-all duration-300 text-center flex flex-col items-center";

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
