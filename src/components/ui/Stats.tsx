interface StatsProps {
  stats: {
    number: string;
    label: string;
  }[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-4xl md:text-5xl font-extrabold text-primary">
              {stat.number}
            </p>
            <p className="mt-2 text-sm md:text-base font-medium text-black">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
