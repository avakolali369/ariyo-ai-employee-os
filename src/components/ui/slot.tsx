import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";

type SlotProps = {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
};

export function Slot({ children, className, ...props }: SlotProps) {
  if (!isValidElement(children)) {
    return null;
  }

  const child = children as ReactElement<{ className?: string }>;
  const nextClassName = [child.props.className, className]
    .filter(Boolean)
    .join(" ");

  return cloneElement(child, {
    ...props,
    className: nextClassName || undefined,
  });
}
