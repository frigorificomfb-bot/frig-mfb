interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function ProcessStep({
  icon,
  title,
  description,
  className = "",
}: ProcessStepProps) {
  return (
    <div className={`p-8 sm:p-12 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center h-full ${className}`}>
      <div className="text-5xl sm:text-6xl mb-6">{icon}</div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h3>
      <p className="text-base sm:text-lg leading-relaxed max-w-xs opacity-90">{description}</p>
    </div>
  );
}
