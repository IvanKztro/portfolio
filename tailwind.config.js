/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        segoe: ['"Segoe UI"', "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "night",
      // {
      //   light: {
      //     primary: "#0082c8",
      //     secondary: "#22367D",
      //     neutral: "#d3deff",
      //     success: "#36D399",
      //     info: "#3ABFF8",
      //     warning: "#FBBD23",
      //     error: "#EC486E",
      //     accent: "#D7E749",
      //     "base-100": "#000000",
      //     "base-200": "#011430",
      //   },
      //   dark: {
      //     primary: "#0082c8",
      //     secondary: "#22367D",
      //     neutral: "#d3deff",
      //     success: "#36D399",
      //     info: "#3ABFF8",
      //     warning: "#FBBD23",
      //     error: "#EC486E",
      //     accent: "#D7E749",
      //     "base-100": "#000000",
      //     "base-200": "#011430",
      //   },
      // },
    ],
  },
};
