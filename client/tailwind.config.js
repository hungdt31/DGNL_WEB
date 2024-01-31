/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-pattern": "url('./src/assets/bg.jpg')",
      },
      colors: {
        "cyan-text": "rgb(21, 59, 74)",
      },
      keyframes: {
        slideBottom: {
          "0%": {
            transform: "translateY(-40px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        slideTop: {
          "0%": {
            transform: "translateY(40px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
