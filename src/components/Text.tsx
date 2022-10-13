import { clsx } from "clsx";

// Slot: pega todas as props e repassa para o primeiro componente passado como children
import { Slot } from "@radix-ui/react-slot";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

export function Text({ size = "md", children, asChild }: TextProps) {
  const Comp = asChild ? Slot : "span"; // Caso o dev queira usar outra tag

  return (
    <Comp
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sd": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
