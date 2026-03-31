import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D4A373",
        secondary: "#6B4226",
        accent: "#FEFAE0",
        cream: "#FAF7F2",
        dark: "#3C2A14",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(107, 66, 38, 0.12)",
        glow: "0 0 30px rgba(212, 163, 115, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
