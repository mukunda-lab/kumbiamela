"use client";

import { motion } from "framer-motion";

export default function VideoSection({
  title,
  youtubeId,
  align = "left",
}: {
  title: string;
  youtubeId: string;
  align?: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col items-center gap-6 ${
        align === "right" ? "md:flex-row-reverse" : "md:flex-row"
      } md:items-center md:justify-center`}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/30"
      >
        <div className="relative aspect-[4/3] w-full bg-black">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&cc_load_policy=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
      <p className="text-2xl font-medium sm:text-3xl">{title}</p>
    </motion.div>
  );
}
