/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-text": "hsl(229, 25%, 31%)",
        "score-text": "hsl(229, 64%, 46%)",
        "header-outline": "hsl(217, 16%, 45%)",
        "play-button-text": "hsl(349, 71%, 52%)",
      },
    },
    fontFamily: {
      sans: ["Barlow Semi Condensed", "Sans"],
    },
    screens: {
      xs: "200px",
      sm: "475px",
      md: "880px",
      lg: "1440px",
      xl: "1280px",
    },
  },
  plugins: [],
};
