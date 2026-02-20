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
}: TestimonialProps) {
  return (
    <div className="bg-primary text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-center">

      <p className="italic text-base md:text-lg leading-relaxed mb-6">
        "{content}"
      </p>

      <div className="space-y-1">
        <h4 className="text-lg md:text-xl font-bold">
          {author}
        </h4>

        <p className="text-white/80 text-sm">
          {role}
        </p>

        <p className="text-white/70 text-sm">
          {location}
        </p>
      </div>

    </div>
  );
}
