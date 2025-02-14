import type { Config } from "tailwindcss";

export default {
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
        'alin': {
          gold: '#EEB507',
          'gold-light': '#FFD447',
          'gold-dark': '#C99400',
          black: '#1A1A1A',
          gray: '#4A4A4A',
          white: '#FFFFFF',
          accent: '#2563EB',
          success: '#22C55E',
          warning: '#F59E0B',
          error: '#EF4444'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
