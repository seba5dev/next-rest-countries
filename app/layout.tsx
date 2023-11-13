import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/_navbar";
import ThemeProvider from "./components/ui/themes/_provider";

export const metadata: Metadata = {
  title: "Rest Countries by seba5dev",
  description: "Created by seba5dev, made with Next.js and Tailwind CSS",
};

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} min-h-screen bg-veryLightGray text-veryDarkBlue2 dark:bg-veryDarkBlue1 dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
