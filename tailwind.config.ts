import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenColor: "#C2EFD4",
        greenColorText: "#224F34",
        greenColorBG: "#224F34",
      },
      width: {
        w100: '30rem',
      },
      height: {
        h100: '30rem',
      }
    },
  },
  plugins: [],
};
export default config;
