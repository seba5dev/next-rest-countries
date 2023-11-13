import type { Config } from "tailwindcss";

const config: Config = {
  // Dark mode by class
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Override Tailwind's default font weights
    fontWeight: {
      normal: "300",
      medium: "600",
      bold: "800",
    },
    extend: {
      colors: {
        darkBlue: "hsl(209, 23%, 22%)", // Dark Mode Elements
        veryDarkBlue1: "hsl(207, 26%, 17%)", // Dark Mode Background
        veryDarkBlue2: "hsl(200, 15%, 8%)", // Light Mode Text
        darkGray: "hsl(0, 0%, 52%)", // Light Mode Input
        veryLightGray: "hsl(0, 0%, 98%)", // Light Mode Background
      },
      fontSize: {
        home: "14px",
        details: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
