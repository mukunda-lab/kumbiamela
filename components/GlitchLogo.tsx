"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 6;
const FRAMES = Array.from(
  { length: FRAME_COUNT },
  (_, i) => `/branding/frames/frame-${i}.webp`
);
const FINAL_FRAME = FRAME_COUNT - 1;

function preload(srcs: string[]) {
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        })
    )
  );
}

export default function GlitchLogo() {
  const [active, setActive] = useState(FINAL_FRAME);
  const [showAllFrames, setShowAllFrames] = useState(false);
  const [glitching, setGlitching] = useState(false);
  const [slice, setSlice] = useState({ x: 0, y: 0, top: 0, bottom: 0 });

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function jitter() {
      setSlice({
        x: (Math.random() - 0.5) * 14,
        y: (Math.random() - 0.5) * 6,
        top: Math.random() * 16,
        bottom: Math.random() * 16,
      });
    }

    function settle() {
      setActive(FINAL_FRAME);
      setGlitching(false);
      setSlice({ x: 0, y: 0, top: 0, bottom: 0 });
    }

    function playSequence(order: number[], holdMs: number, onDone: () => void) {
      let i = 0;
      function step() {
        if (cancelled) return;
        setActive(order[i]);
        jitter();
        i++;
        if (i < order.length) {
          timeouts.push(setTimeout(step, holdMs));
        } else {
          onDone();
        }
      }
      step();
    }

    function scheduleBurst() {
      const delay = 6000 + Math.random() * 5000;
      timeouts.push(
        setTimeout(() => {
          if (cancelled) return;
          setGlitching(true);
          const burst = [
            Math.floor(Math.random() * (FINAL_FRAME - 1)),
            Math.floor(Math.random() * (FINAL_FRAME - 1)),
          ];
          playSequence(burst, 90, () => {
            settle();
            scheduleBurst();
          });
        }, delay)
      );
    }

    preload(FRAMES).then(() => {
      if (cancelled) return;
      setShowAllFrames(true);
      setGlitching(true);
      playSequence([0, 1, 2, 3, 4, FINAL_FRAME], 120, () => {
        settle();
        scheduleBurst();
      });
    });

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const framesToRender = showAllFrames ? FRAMES : [FRAMES[FINAL_FRAME]];

  return (
    <div className="relative w-full" style={{ aspectRatio: "1400 / 376" }}>
      {framesToRender.map((src, idx) => {
        const i = showAllFrames ? idx : FINAL_FRAME;
        const isActive = active === i;
        return (
          <img
            key={src}
            src={src}
            alt={i === FINAL_FRAME ? "Kumbia Mela" : ""}
            aria-hidden={i !== FINAL_FRAME}
            className="absolute inset-0 h-full w-full object-contain"
            style={{
              opacity: isActive ? 1 : 0,
              transform:
                isActive && glitching
                  ? `translate(${slice.x}px, ${slice.y}px)`
                  : "translate(0, 0)",
              clipPath:
                isActive && glitching
                  ? `inset(${slice.top}% 0 ${slice.bottom}% 0)`
                  : "inset(0 0 0 0)",
            }}
          />
        );
      })}
    </div>
  );
}
