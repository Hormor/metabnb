/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A02279",
        secondary: "#434343",
        grey: "#A3A3A3",
      },
      fontFamily: {
        "red-rose": "Red Rose",
      },
      maxWidth: {
        1240: "1240px",
      },
    },
  },
  plugins: [],
};
