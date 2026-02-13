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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      
      {/* Image */}
      <div className="flex justify-center">
        <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-72 object-cover"
            />
          ) : (
            <div className="h-72 bg-gray-200 flex items-center justify-center text-gray-500">
              Imagem
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-xl">
        <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#D32F2F]/20 leading-none">
          {number}
        </div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#D32F2F] mt-2 mb-4">
          {title}
        </h3>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
