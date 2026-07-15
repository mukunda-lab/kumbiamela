"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function VideoSection({
  title,
  youtubeId,
}: {
  title: string;
  youtubeId: string;
}) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-4"
    >
      <p className="font-glitch text-center text-2xl leading-relaxed tracking-wide sm:text-3xl">
        {title}
      </p>

      <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/30">
        <div className="relative aspect-[4/3] w-full bg-black">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&cc_load_policy=0&autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Reproducir ${title}`}
              className="video-thumb absolute inset-0 h-full w-full cursor-pointer"
            >
              <img
                src={thumbnail}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <img
                src={thumbnail}
                alt=""
                aria-hidden
                className="glitch-layer glitch-layer-cyan absolute inset-0 h-full w-full object-cover"
              />
              <img
                src={thumbnail}
                alt=""
                aria-hidden
                className="glitch-layer glitch-layer-pink absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25 transition-colors" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-kumbia-orange shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
