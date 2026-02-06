interface ProcessStepProps {
  icon: string;
  title: string;
  description?: string;
}

export default function ProcessStep({
  icon,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#D32F2F] mb-2 sm:mb-3 md:mb-4">
        {title}
      </h3>
      {description && (
        <p className="text-xs sm:text-sm md:text-base text-black leading-relaxed md:leading-loose">{description}</p>
      )}
    </div>
  );
}
