interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  location: string;
  image?: string;
}

export default function Testimonial({
  content,
  author,
  role,
  location,
  image,
}: TestimonialProps) {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
      <p className="text-xs sm:text-sm md:text-base text-black mb-4 sm:mb-6 italic leading-relaxed md:leading-loose min-h-16">
        "{content}"
      </p>
      {image && (
        <div className="mb-3 sm:mb-4 flex justify-center">
          <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center text-gray-600 text-xl sm:text-2xl">
            👤
          </div>
        </div>
      )}
      <p className="font-semibold text-[#D32F2F] text-base sm:text-lg md:text-xl">{author}</p>
      <p className="text-xs sm:text-sm text-black mb-1">{role}</p>
      <p className="text-xs text-black">{location}</p>
    </div>
  );
}
