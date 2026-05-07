import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "img-comparison-slider": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & { class?: string },
        HTMLElement
      >;
    }
  }
}

export {};
