import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
};

export function Button({ children, variant = "primary", className, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={clsx(
        "px-4 py-2 rounded font-medium text-sm transition",
        {
          primary: "bg-[var(--color-primary)] text-black hover:bg-[var(--color-primary-dark)]",
          outline:
            "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black",
          ghost:
            "text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-gray-light)]",
        }[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
