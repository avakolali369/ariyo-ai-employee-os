import { Slot } from "@/components/ui/slot";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  isLoading?: boolean;
  variant?: ButtonVariant;
  children: ReactNode;
};

export function Button({
  asChild = false,
  children,
  className,
  disabled,
  isLoading = false,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const classes = ["button", `button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Comp
      className={classes}
      aria-busy={isLoading || undefined}
      disabled={!asChild ? disabled || isLoading : undefined}
      type={!asChild ? type : undefined}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </Comp>
  );
}
