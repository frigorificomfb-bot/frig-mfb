interface StatsProps {
  stats: {
    number: string;
    label: string;
  }[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D32F2F] mb-2 sm:mb-3 md:mb-4">
            {stat.number}
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-medium leading-snug">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
