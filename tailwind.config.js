/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "scissors-gradient": "hsl(39, 89%, 49%) to hsl(40, 84%, 53%)",
        "paper-gradient": "hsl(230, 89%, 62%) to hsl(230, 89%, 65%)",
        "rock-gradient": "hsl(349, 71%, 52%) to hsl(349, 70%, 56%)",
        "lizard-gradient": "hsl(261, 73%, 60%) to hsl(261, 72%, 63%)",
        cyan: "hsl(189, 59%, 53%) to hsl(189, 58%, 57%)",

        // Neutral
        "dark-text": "hsl(229, 25%, 31%)",
        "score-text": "hsl(229, 64%, 46%)",
        "header-outline": "hsl(217, 16%, 45%)",

        // background
        "radial-gradient": "hsl(214, 47%, 23%) to hsl(237, 49%, 15%)",
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
