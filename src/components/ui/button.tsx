import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  ...props
}: Props) {
  const base = "px-6 py-3 font-medium rounded";
  const styles = {
    primary: "bg-green-800 text-white",
    secondary: "bg-yellow-600 text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props} />
  );
}
