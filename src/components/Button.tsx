import { clsx } from "clsx";

// Slot: pega todas as props e repassa para o primeiro componente passado como children
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button"; // Caso o dev queira usar outra tag

  // py-4 === 16px

  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-200 transition-colors focus:ring-2 ring-white", 
        {} // variações
      )}
    >
      {children}
    </Comp>
  );
}
