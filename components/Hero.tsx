"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NacIcon from "./NacIcon";

export default function Hero() {
  const [suryaSpins, setSuryaSpins] = useState(0);

  return (
    <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 py-24 text-center">
      <motion.img
        src="/branding/surya.webp"
        alt=""
        width={500}
        height={462}
        initial={{ opacity: 0, y: -20, filter: "blur(6px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          rotate: suryaSpins * 360,
        }}
        transition={{
          opacity: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          filter: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          rotate: { duration: 0.4, ease: "easeOut" },
        }}
        onClick={() => setSuryaSpins((s) => s + 1)}
        className="mb-4 h-auto w-40 cursor-pointer select-none sm:w-48"
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
          height={486}
          className="h-auto w-full"
        />
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-8 flex flex-col items-center gap-3"
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
