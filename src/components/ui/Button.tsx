import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors inline-block text-center text-sm sm:text-base md:text-lg";

  const variants = {
    primary: "bg-primary text-white hover:bg-accent active:bg-primary-active",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-red-50 active:bg-red-100",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white active:bg-accent active:border-accent",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
