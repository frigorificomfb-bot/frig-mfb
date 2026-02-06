import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Title({ children }: Props) {
  return (
    <h2 className="text-3xl font-bold text-gray-900">
      {children}
    </h2>
  );
}
