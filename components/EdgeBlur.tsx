"use client";

import GradualBlur from "./GradualBlur";

export default function EdgeBlur() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-[10.5rem] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-kumbia-orangeDark/0 to-kumbia-orangeDark/80" />
      <GradualBlur
        target="parent"
        position="bottom"
        height="100%"
        strength={1.8}
        divCount={3}
        curve="bezier"
        exponential
        opacity={1}
        zIndex={1}
      />
      <div
        className="absolute inset-0 bg-[url('/noise-static.webp')] bg-repeat mix-blend-overlay"
        style={{
          opacity: 0.2,
          zIndex: 2,
          maskImage: "linear-gradient(to bottom, transparent, black 35%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 35%)",
        }}
      />
    </div>
  );
}
