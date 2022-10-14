import { clsx } from "clsx";

// Slot: pega todas as props e repassa para o primeiro componente passado como children
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"; // Caso o dev queira usar outra tag

  // py-4 === 16px

  return (
    <Comp
      className={clsx(
        "py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-200 transition-colors focus:ring-2 ring-white",
        {}, // variações
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
