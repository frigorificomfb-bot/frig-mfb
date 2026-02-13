export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
