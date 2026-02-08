interface ImageTextProps {
  title: string;
  content: string;
  image?: string;
  imagePosition?: "left" | "right";
  buttonText?: string;
  buttonHref?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export default function ImageText({
  title,
  content,
  image,
  imagePosition = "right",
  buttonText,
  buttonHref,
  titleClassName = "",
  contentClassName = "",
}: ImageTextProps) {

  const imageEl = (
    <div className="flex justify-center md:justify-end">
      <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-md">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-auto block"
          />
        )}
      </div>
    </div>
  );

  const contentEl = (
    <div>
      <h2
        className={`
          text-4xl md:text-5xl font-extrabold text-[#D32F2F] mb-6
          ${titleClassName}
        `}
      >
        {title}
      </h2>

      <p
        className={`
          text-base sm:text-lg text-black leading-loose
          ${contentClassName}
        `}
      >
        {content}
      </p>

      {buttonText && buttonHref && (
        <a
          href={buttonHref}
          className="mt-8 inline-block px-6 py-3 bg-[#D32F2F] text-white font-semibold rounded-lg hover:bg-[#B71C1C] transition-colors"
        >
          {buttonText}
        </a>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
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
