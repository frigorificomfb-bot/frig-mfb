interface ServiceCardProps {
  number: string | number;
  title: string;
  description: string;
  image?: string;
  reversed?: boolean;
}

export default function ServiceCard({
  number,
  title,
  description,
  image,
  reversed = false,
}: ServiceCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

      {/* Image */}
      <div className={`flex justify-center ${reversed ? "md:order-last" : ""}`}>
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
        <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary/20 leading-none">
          {number}
        </div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mt-2 mb-4">
          {title}
        </h3>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
