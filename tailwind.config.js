/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gweb: {
          bg: "#070A08",
          panel: "#0B120E",
          panel2: "#0F1A14",
          text: "#EAF2EC",
          muted: "rgba(234,242,236,0.72)",
          line: "rgba(234,242,236,0.10)",
          green: "#2E6B4D",      // inspirado en tu logo
          green2: "#3A8B62",
        },
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};
