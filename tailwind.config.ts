import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        val: {
          red: "#FF4655",
          "red-dark": "#D12A38",
          black: "#0F1923",
          dark: "#090D12",
          card: "#121A24",
          "card-hover": "#172230",
          slate: "#1C2735",
          border: "#253346",
          cyan: "#00F0FF",
          gold: "#F5C042",
          offwhite: "#ECE8E1",
          gray: "#768079",
          emerald: "#00D68F",
        },
      },
      fontFamily: {
        display: ["var(--font-teko)", "Impact", "sans-serif"],
        tactical: ["var(--font-rajdhani)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(rgba(255, 70, 85, 0.15) 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glitch": "glitch 2s infinite",
        "scanline": "scanline 8s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
