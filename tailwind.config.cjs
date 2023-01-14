/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    extend: {
      backgroundImage: {
        demo_img: "url('/src/assets/image/demo-photo1.jpg')",
        using_phone: "url('/src/assets/image/using_phone.jpg')",
      },
      animation: {
        flicker: "flicker 20s infinite",
      },
      keyframes: {
        flicker: {
          "0%": {
            opacity: "0.1",
          },
          "15%": {
            opacity: "0.3",
          },
          "20%": {
            opacity: "0.1",
          },
          "21%": {
            opacity: "0.4",
          },
          "28%": {
            opacity: "0.1",
          },
          "29%": {
            opacity: "0.4",
          },
          "30%": {
            opacity: "0.4",
          },
          "35%": {
            opacity: "0.3",
          },
          "70%": {
            opacity: "0.2",
          },
          "80%": {
            opacity: "0.3",
          },
          "100%": {
            opacity: "0.3",
          },
        },
      },
      colors: {
        white: "#ffffff",
        light: "#f1f3f2",
        primary: "#0b6af8",
        dark: "#141414",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
