"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "outline" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm min-h-[40px]",
  md: "px-6 py-3 text-base min-h-[48px]",
  lg: "px-7 py-4 text-base min-h-[56px]",
};

const base =
  "group relative inline-flex items-center justify-center gap-2 font-medium rounded-full tracking-tight transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] focus-visible:ring-[var(--color-accent)] overflow-hidden";

function variantClasses(v: Variant) {
  switch (v) {
    case "primary":
      return "bg-[var(--color-accent)] text-[var(--color-dark)] hover:bg-[var(--color-accent-2)] shadow-[0_10px_30px_-10px_rgba(200,169,110,0.6)] hover:shadow-[0_18px_40px_-10px_rgba(200,169,110,0.8)] hover:-translate-y-0.5";
    case "outline":
      return "border border-[var(--color-accent)] text-[var(--color-accent)] bg-transparent hover:bg-[var(--color-accent)] hover:text-[var(--color-dark)]";
    case "ghost":
      return "bg-transparent text-[var(--color-text)] hover:text-[var(--color-accent)]";
    case "dark":
      return "bg-[var(--color-dark)] text-[var(--color-text-inv)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]";
  }
}

type CommonProps = { variant?: Variant; size?: Size; className?: string };
type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };
type Props = ButtonProps | AnchorProps;

export const Button = forwardRef<HTMLElement, Props>(function Button(
  { variant = "primary", size = "md", className = "", children, ...rest },
  ref
) {
  const cls = `${base} ${sizes[size]} ${variantClasses(variant)} ${className}`;

  if ((rest as AnchorProps).as === "a") {
    const { as: _as, ...anchorRest } = rest as AnchorProps;
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} className={cls} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { as: _as, ...btnRest } = rest as ButtonProps;
  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={cls} {...btnRest}>
      {children}
    </button>
  );
});

export default Button;
