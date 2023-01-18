/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        10: "0.625rem",
      },
      fontSize: {
        base: ["16px", "24px"],
        "3.5xl": "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        lg: "1280px",
        xl: "1536px",
      },
      colors: {
        primary: "#1D1D1F",
        "pry-light": "#666",
        grey: "#eaeaea80",
        "grey-50": "#eaeaea",
        green: "#10b981d9",
        "dark-green": "#12996D",
      },
      lineHeight: {
        30: "1.875rem",
        50: "3.125rem",
        54: "3.375rem",
        57: "3.59375rem",
        60: "3.75rem",
        74: "4.625rem",
      },
      maxWidth: {
        200: "12.5rem",
        250: "15.625rem",
        320: "20rem",
        348: "21.75rem",
        480: "30rem",
        560: "35rem",
        576: "36rem",
        720: "45rem",
        768: "48.2rem",
        823: "51.4375rem",
      },
      minWidth: {
        250: "15.625rem",
        384: "24rem",
      },
      spacing: {
        56: "3.5rem",
        135: "8.4375rem",
        543: "33.9375rem",
        640: "40rem",
        700: "43.75rem",
      },
    },
  },
  plugins: [],
};
