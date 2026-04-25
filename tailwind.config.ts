import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        jost: ["var(--font-jost)", "sans-serif"],
        vazir: ["var(--font-vazir)", "sans-serif"],
      },
      colors: {
        navy: {
          50: "#eef2ff",
          100: "#dce8ff",
          200: "#b9d2ff",
          300: "#85b0ff",
          400: "#4b83ff",
          500: "#1a54f5",
          600: "#0d3beb",
          700: "#0d2ed8",
          800: "#0f28b0",
          900: "#02060f",
          950: "#010410",
        },
        brand: {
          blue: "#3b82f6",
          cyan: "#06b6d4",
          glow: "rgba(59, 130, 246, 0.4)",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.7)" },
        },
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)",
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            primary: { DEFAULT: "#3b82f6", foreground: "#ffffff" },
            background: "#020b18",
            foreground: "#e2e8f0",
          },
        },
        light: {
          colors: {
            primary: { DEFAULT: "#2563eb", foreground: "#ffffff" },
            background: "#f8faff",
            foreground: "#0f172a",
          },
        },
      },
    }) as any,
  ],
};

export default config;
