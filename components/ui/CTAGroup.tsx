"use client";

import { Phone, MessageCircle } from "lucide-react";
import Button from "./Button";
import { SITE, CONTACT } from "@/lib/constants";

type Props = {
  layout?: "row" | "column";
};

export function CTAGroup({ layout = "row" }: Props) {
  const dirCls =
    layout === "row"
      ? "flex flex-col sm:flex-row gap-3 sm:gap-4"
      : "flex flex-col gap-3";

  return (
    <div className={dirCls}>
      <Button
        as="a"
        href={`tel:${SITE.phone}`}
        variant="primary"
        size="lg"
        aria-label={`${CONTACT.callLabel} ${SITE.phoneDisplay}`}
      >
        <Phone size={18} aria-hidden />
        {CONTACT.callLabel}
      </Button>
      <Button
        as="a"
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        size="lg"
        aria-label="WhatsApp ile yazın"
      >
        <MessageCircle size={18} aria-hidden />
        {CONTACT.whatsappLabel}
      </Button>
    </div>
  );
}

export default CTAGroup;
