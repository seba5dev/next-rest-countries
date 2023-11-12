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
        darkBlue: "#2b3945", // Dark Mode Elements
        veryDarkBlue1: "#202c37", // Dark Mode Background
        veryDarkBlue2: "#111517", // Light Mode Text
        darkGray: "#858585", // Light Mode Input
        veryLightGray: "#fafafa", // Light Mode Background
      },
      fontSize: {
        home: "14px",
        details: "16px",
      },
    }
  },
  plugins: [],
};
export default config;
