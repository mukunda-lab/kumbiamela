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
        glitch: ["var(--font-rubik-glitch)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
