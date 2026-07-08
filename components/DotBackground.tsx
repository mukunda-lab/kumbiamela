export default function DotBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="dot-field animate-driftDots absolute -inset-24 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-kumbia-orange/0 via-kumbia-orangeDark/10 to-kumbia-orangeDark/40" />
    </div>
  );
}
