"use client";

import GradualBlur from "./GradualBlur";

export default function EdgeBlur() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-56 overflow-hidden">
      <GradualBlur
        target="parent"
        position="bottom"
        height="100%"
        strength={3}
        divCount={6}
        curve="bezier"
        exponential
        opacity={1}
        zIndex={1}
      />
      <div
        className="absolute inset-0 bg-[url('/noise.gif')] bg-repeat mix-blend-overlay"
        style={{ opacity: 0.2, zIndex: 2 }}
      />
    </div>
  );
}
