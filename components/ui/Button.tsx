"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm min-h-[40px]",
  md: "px-6 py-3 text-base min-h-[48px]",
  lg: "px-8 py-4 text-base min-h-[56px]",
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-md tracking-tight transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent)]";

function variantClasses(v: Variant) {
  switch (v) {
    case "primary":
      return "bg-[var(--color-accent)] text-[var(--color-dark)] hover:brightness-90";
    case "outline":
      return "border border-[var(--color-accent)] text-[var(--color-accent)] bg-transparent hover:bg-[var(--color-accent)] hover:text-[var(--color-dark)]";
    case "ghost":
      return "bg-transparent text-[var(--color-text-inv)] hover:text-[var(--color-accent)]";
  }
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

type Props = ButtonProps | AnchorProps;

export const Button = forwardRef<HTMLElement, Props>(function Button(
  { variant = "primary", size = "md", className = "", children, ...rest },
  ref
) {
  const cls = `${base} ${sizes[size]} ${variantClasses(variant)} ${className}`;

  if ((rest as AnchorProps).as === "a") {
    const { as: _as, ...anchorRest } = rest as AnchorProps;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={cls}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  const { as: _as, ...btnRest } = rest as ButtonProps;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={cls}
      {...btnRest}
    >
      {children}
    </button>
  );
});

export default Button;
