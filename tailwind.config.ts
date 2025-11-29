import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./actions/**/*.{js,ts,jsx,tsx}",
    "./store/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            DEFAULT: "#00b3b3",
            50: "#e6f7f7",
            100: "#ccefef",
            500: "#00b3b3",
            600: "#009999",
            700: "#007f7f",
            900: "#004d4d",
          },
          footer: {
            bg: "#003333",
            text: "#cceeee",
          },
          black: "#000000",
          white: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};

export default config;
