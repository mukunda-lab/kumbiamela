"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-col items-center gap-2 px-6 pb-12 pt-24 text-center text-sm text-white/60"
    >
      <p>Kumbia Mela — Jorge Sarmiento</p>
      <p>&copy; {new Date().getFullYear()}</p>
    </motion.footer>
  );
}
