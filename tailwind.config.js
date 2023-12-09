/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
        awesome: ["Font Awesome 5 Free"],
        mulish: ['"Mulish"', "sans-serif"],
      },
      colors: {
        "lime-350": "#82b440",
        "lime-450": "#6f9a37",
        "lime-550": "#7aa93c",
        "blueGray-950": "#120a21",
        "amber-450": "#ffa920",
        "amber-550": "#f29500",
      },
      boxShadow: {
        "main-header": "0px 4px 18px 0px rgba(0,0,0,0.0784313725)",
      },
      animation: {
        drop: "0.3s linear 0s 1 normal none running link-icon2",
      },
      keyframes: {
        "link-icon2": {
          "0%": {
            transform: "translateY(0)",
            opacity: 1,
          },
          "49%": {
            transform: "translateY(20px)",
            opacity: 0,
          },
          "50%": {
            transform: "translateY(-20px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-3d")({ legacy: true })],
};
