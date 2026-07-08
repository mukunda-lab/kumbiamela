"use client";

import { useEffect, useRef } from "react";

const SPACING = 40;
const DOT_RADIUS = 2;
const FIELD_RADIUS = 150;
const REPEL_STRENGTH = 7.5;
const SPRING = 0.045;
const DAMPING = 0.82;
const REST_THRESHOLD = 0.05;

type Dot = {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export default function DotBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let dots: Dot[] = [];
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const mouse = { x: -9999, y: -9999, active: false };

    function buildDots() {
      dots = [];
      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const ox = i * SPACING;
          const oy = j * SPACING;
          dots.push({ ox, oy, x: ox, y: oy, vx: 0, vy: 0 });
        }
      }
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildDots();
      ensureRunning();
    }

    if (reduceMotion) {
      const draw = () => {
        ctx!.clearRect(0, 0, width, height);
        ctx!.fillStyle = "rgba(0, 25, 255, 0.55)";
        for (const d of dots) {
          ctx!.beginPath();
          ctx!.arc(d.ox, d.oy, DOT_RADIUS, 0, Math.PI * 2);
          ctx!.fill();
        }
      };
      const staticResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas!.width = width * dpr;
        canvas!.height = height * dpr;
        canvas!.style.width = `${width}px`;
        canvas!.style.height = `${height}px`;
        ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
        buildDots();
        draw();
      };
      staticResize();
      window.addEventListener("resize", staticResize);
      return () => window.removeEventListener("resize", staticResize);
    }

    let frame: number;
    let running = false;
    const fieldRadiusSq = FIELD_RADIUS * FIELD_RADIUS;

    function tick() {
      ctx!.clearRect(0, 0, width, height);

      let maxDisplacement = 0;

      for (const d of dots) {
        let ax = (d.ox - d.x) * SPRING;
        let ay = (d.oy - d.y) * SPRING;

        if (mouse.active) {
          const mdx = d.x - mouse.x;
          const mdy = d.y - mouse.y;
          const distSq = mdx * mdx + mdy * mdy;
          if (distSq < fieldRadiusSq) {
            const dist = Math.sqrt(distSq) || 0.001;
            const falloff = 1 - dist / FIELD_RADIUS;
            const force = falloff * falloff * REPEL_STRENGTH;
            ax += (mdx / dist) * force;
            ay += (mdy / dist) * force;
          }
        }

        d.vx = (d.vx + ax) * DAMPING;
        d.vy = (d.vy + ay) * DAMPING;
        d.x += d.vx;
        d.y += d.vy;

        const displacement = Math.hypot(d.x - d.ox, d.y - d.oy);
        if (displacement > maxDisplacement) maxDisplacement = displacement;
        const glow = Math.min(displacement / FIELD_RADIUS, 1);
        const alpha = 0.45 + glow * 0.5;
        const radius = DOT_RADIUS + glow * 1.6;

        ctx!.fillStyle = `rgba(${Math.round(30 + glow * 90)}, ${Math.round(
          60 + glow * 60
        )}, 255, ${alpha})`;
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (!mouse.active && maxDisplacement < REST_THRESHOLD) {
        running = false;
        return;
      }

      frame = requestAnimationFrame(tick);
    }

    function ensureRunning() {
      if (running || document.hidden) return;
      running = true;
      frame = requestAnimationFrame(tick);
    }

    function onPointerMove(e: PointerEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      ensureRunning();
    }

    function onPointerLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function onVisibilityChange() {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
      } else {
        ensureRunning();
      }
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("blur", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-kumbia-orange/0 via-kumbia-orangeDark/10 to-kumbia-orangeDark/40" />
      <div
        className="absolute inset-0 bg-[url('/noise-static.webp')] bg-repeat mix-blend-overlay"
        style={{ opacity: 0.12 }}
      />
    </div>
  );
}
