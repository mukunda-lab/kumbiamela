"use client";

import { motion } from "framer-motion";
import NacIcon from "./NacIcon";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 py-24 text-center">
      <motion.img
        src="/branding/surya.webp"
        alt=""
        width={500}
        height={462}
        initial={{ opacity: 0, y: -20, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4 h-auto w-80 sm:w-96"
      />

      <motion.h1
        initial={{ opacity: 0, filter: "blur(6px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[420px] sm:max-w-[560px] md:max-w-[680px]"
      >
        <img
          src="/nombres.webp"
          alt="Kumbia Mela"
          width={720}
          height={480}
          className="h-auto w-full"
        />
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        className="mt-8 h-px w-24 origin-center bg-white/80 sm:w-40"
      />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="mt-8 max-w-xl text-lg text-white/90 sm:text-xl"
      >
        Proyecto solista de Jorge Sarmiento. La cumbia se encuentra con los
        mantras de la India: bajos tropicales y vibraciones espirituales.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="mt-12 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ rotate: [-20, 20, -20] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="text-pink-400"
        >
          <NacIcon className="h-24 w-auto" />
        </motion.div>
        <img
          src="/branding/parlante2.webp"
          alt=""
          width={500}
          height={441}
          className="animate-vibrate h-auto w-56"
        />
      </motion.div>
    </section>
  );
}
