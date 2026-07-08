import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kumbia: {
          orange: "#FF2E00",
          orangeDark: "#D62600",
          blue: "#0019FF",
          cream: "#FFF6EE",
        },
      },
      fontFamily: {
        display: ["var(--font-el-messiri)", "serif"],
      },
      keyframes: {
        driftDots: {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "160px 160px" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        driftDots: "driftDots 14s linear infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
