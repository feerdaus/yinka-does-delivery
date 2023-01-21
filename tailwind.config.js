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
        lg: "1306px",
        xl: "1536px",
      },
      colors: {
        primary: "#1D1D1F",
        "pry-light": "#666",
        grey: "#eaeaea80",
        "grey-50": "#eaeaea",
        "grey-100": "#B0B0B0",
        "grey-light": "#fbfbfb",
        green: "#10b981d9",
        "dark-green": "#12996D",
        red: "#EF4444",
        "red-100": "#FEE2E2",
        "dark-red": "#C43B3C",
        "light-red": "#fee2e2d9",
        error: "#F87171",
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
        384: "24rem",
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
