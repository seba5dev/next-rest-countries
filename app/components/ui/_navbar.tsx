import Link from "next/link";
import ThemeSwitch from "./themes/_themeSwitch";

export default function Navbar() {
  return (
    <nav className="bg-white flex w-full items-center justify-between px-5 py-5 shadow dark:bg-darkBlue md:px-20">
      <Link href="/" className="md:text-xl cursor-pointer font-bold">
        Where in the world?
      </Link>
      <ThemeSwitch />
    </nav>
  );
}
