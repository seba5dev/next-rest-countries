import Link from "next/link";
import ThemeSwitch from "./themes/_themeSwitch";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between bg-white px-5 py-5 shadow dark:bg-darkBlue md:px-20">
      <Link href="/" className="cursor-pointer font-bold md:text-xl">
        Where in the world?
      </Link>
      <ThemeSwitch />
    </nav>
  );
}
