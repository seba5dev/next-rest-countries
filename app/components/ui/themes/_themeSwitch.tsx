"use client";

import { useTheme } from "next-themes";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="flex items-center gap-x-2" onClick={toggleTheme}>
      {theme === "light" ? (
        <>
          <FaRegSun />
          Light Mode
        </>
      ) : (
        <>
          <FaRegMoon />
          Dark Mode
        </>
      )}
    </button>
  );
};

export default ThemeSwitch;
