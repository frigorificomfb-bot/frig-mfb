interface ImageTextProps {
  title: string;
  content: string;
  image?: string;
  imagePosition?: "left" | "right";
  buttonText?: string;
  buttonHref?: string;
}

export default function ImageText({
  title,
  content,
  image,
  imagePosition = "right",
  buttonText,
  buttonHref,
}: ImageTextProps) {
  const imageEl = (
    <div className="bg-gray-300 rounded-lg h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden flex items-center justify-center">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <p className="text-gray-600">Imagem</p>
      )}
    </div>
  );

  const contentEl = (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D32F2F] mb-4 sm:mb-6 md:mb-8">
        {title}
      </h2>
      <p className="text-base sm:text-lg text-black leading-relaxed md:leading-loose mb-6 md:mb-8">{content}</p>
      {buttonText && buttonHref && (
        <a
          href={buttonHref}
          className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-[#D32F2F] text-white font-semibold rounded-lg hover:bg-[#B71C1C] active:bg-[#A01818] transition-colors text-sm sm:text-base md:text-lg"
        >
          {buttonText}
        </a>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
      {imagePosition === "left" ? (
        <>
          {imageEl}
          {contentEl}
        </>
      ) : (
        <>
          {contentEl}
          {imageEl}
        </>
      )}
    </div>
  );
}
