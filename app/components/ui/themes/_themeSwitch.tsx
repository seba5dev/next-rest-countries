"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="flex items-center gap-x-2 font-medium"
      onClick={toggleTheme}
    >
      {theme === "light" ? <FaRegMoon /> : <FaMoon />}
      Dark Mode
    </button>
  );
};

export default ThemeSwitch;
