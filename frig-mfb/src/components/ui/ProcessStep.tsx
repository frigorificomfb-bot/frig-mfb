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
    <div className={`p-6 rounded-2xl shadow-sm ${className}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}
