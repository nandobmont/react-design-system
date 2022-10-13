import { clsx } from "clsx";

// Slot: pega todas as props e repassa para o primeiro componente passado como children
import { Slot } from "@radix-ui/react-slot";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

export function Heading({ size = "md", children, asChild }: HeadingProps) {
  const Comp = asChild ? Slot : "h2"; // Caso o dev queira usar outra tag

  return (
    <Comp
      className={clsx("text-gray-100 font-sans font-bold", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
