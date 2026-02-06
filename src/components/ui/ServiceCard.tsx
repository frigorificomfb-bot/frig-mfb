interface ServiceCardProps {
  number: string | number;
  title: string;
  description: string;
  image?: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
      {/* Image */}
      <div className="bg-gray-300 rounded-lg h-48 sm:h-64 md:h-72 lg:h-96 flex items-center justify-center text-gray-600">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <p className="text-sm sm:text-base">Imagem</p>
        )}
      </div>

      {/* Content */}
      <div>
        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#D32F2F] mb-2 sm:mb-3 md:mb-4 leading-none">
          {number}
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#D32F2F] mb-2 sm:mb-3 md:mb-4">
          {title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black leading-relaxed md:leading-loose">{description}</p>
      </div>
    </div>
  );
}
