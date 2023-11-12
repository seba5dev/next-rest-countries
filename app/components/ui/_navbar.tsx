import Link from "next/link";
import ThemeSwitch from "./themes/_themeSwitch";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-10 py-5 shadow">
      <Link href="/" className="font-bold cursor-pointer">Where in the world?</Link>
      <ThemeSwitch />
    </nav>
  );
}
