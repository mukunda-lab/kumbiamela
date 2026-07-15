"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function PlatformCard({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="glass-card flex w-full max-w-sm flex-col items-center gap-4 rounded-2xl p-6"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-medium tracking-wide underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
      >
        {label}
      </a>
      <div className="h-[480px] w-full overflow-hidden rounded-xl">
        {children}
      </div>
    </motion.div>
  );
}

export default function StreamingSection() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-6"
    >
      <PlatformCard label="bandcamp" href="https://kumbiamela.bandcamp.com/album/la-cumbia-del-gur">
        <iframe
          style={{ border: 0, width: "100%", height: "100%" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2272158302/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
          title="Kumbia Mela - Bandcamp"
        />
      </PlatformCard>

      <PlatformCard label="spotify" href="https://open.spotify.com/artist/67x6rlX7jojlosimUP0djl">
        <iframe
          style={{ width: "100%", height: "100%", border: 0 }}
          src="https://open.spotify.com/embed/artist/67x6rlX7jojlosimUP0djl?utm_source=generator"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Kumbia Mela - Spotify"
        />
      </PlatformCard>

      <PlatformCard label="apple music" href="https://music.apple.com/us/artist/kumbia-mela/1534471092">
        <iframe
          allow="autoplay *; encrypted-media *;"
          style={{ width: "100%", height: "100%", border: 0, background: "transparent" }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/artist/kumbia-mela/1534471092"
          title="Kumbia Mela - Apple Music"
        />
      </PlatformCard>
    </motion.div>
  );
}
