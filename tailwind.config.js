/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        dribble: {
          "0%, 60%, 75%, 90%, 100%": {
            transitionTimingFunction:
              "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
          },
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -3000px, 0)",
          },
          "60%": {
            opacity: "0.5",
            transform: "translate3d(0, 55px, 0)",
          },
          "75%": {
            opacity: "1",
            transform: "translate3d(0, -25px, 0)",
          },
          "90%": {
            transform: "translate3d(0, 10px, 0)",
          },
          "95%": {
            transform: "translate3d(0, 5px, 0)",
          },
          "100%": {
            transform: "none",
          },
        },
      },
      animation: {
        dribble: "dribble 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
