import Link from "next/link";

function Button({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  if (href)
    return (
      <Link
        className="flex flex-row items-center justify-center gap-x-2 rounded bg-white px-4 py-1 text-veryDarkBlue2 shadow-md dark:bg-darkBlue dark:text-white"
        href={href}
      >
        {children}
      </Link>
    );

  return (
    <button className="flex flex-row items-center justify-center gap-x-2 rounded bg-white px-4 py-1 text-veryDarkBlue2 shadow-md dark:bg-darkBlue dark:text-white">
      {children}
    </button>
  );
}

export default Button;
