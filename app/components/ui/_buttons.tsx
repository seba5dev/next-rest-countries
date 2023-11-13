import Link from "next/link";

const Button = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) =>
  href ? (
    <Link
      className="flex flex-row items-center justify-center gap-x-2 rounded bg-white px-4 py-1 text-veryDarkBlue2 shadow-md dark:bg-darkBlue dark:text-white"
      href={href}
    >
      {children}
    </Link>
  ) : (
    <button className="flex flex-row items-center justify-center gap-x-2 rounded bg-white px-4 py-1 text-veryDarkBlue2 shadow-md dark:bg-darkBlue dark:text-white">
      {children}
    </button>
  );

export default Button;
