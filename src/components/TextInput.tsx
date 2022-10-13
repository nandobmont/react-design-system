import React, { InputHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: React.ReactNode;
}

export interface TextInputIconProps {
  children: React.ReactNode;
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    // gap-x: distanciamento entre items
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-200">
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root"


function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon"


function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

TextInputInput.displayName = "TextInput.Input"


export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
