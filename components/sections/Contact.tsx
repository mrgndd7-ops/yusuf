"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAGroup from "@/components/ui/CTAGroup";
import { CONTACT } from "@/lib/constants";

export function Contact() {
  return (
    <section id="iletisim" className="bg-[var(--color-dark)] section-py">
      <div className="container-x flex flex-col items-center text-center gap-8">
        <SectionTitle title={CONTACT.title} subtitle={CONTACT.subtitle} invert />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <CTAGroup />
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
