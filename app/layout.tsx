import { M_PLUS_2 } from "next/font/google";
import Link from "next/link";
import { Icon } from '@iconify/react';

import "./globals.css";
import Header from "@/components/layout/header";
import CookieConsent from "@/components/layout/cookie";

const mPlus2 = M_PLUS_2({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
}

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${mPlus2.className} antialiased min-h-screen bg-white text-black grid grid-rows-[1fr_auto] grid-cols-1`}>
        <CookieConsent></CookieConsent>

        <Header></Header>

        {children}

        <footer className="p-4 bg-black text-white text-neutral-content grid grid-cols-[1fr_1fr]">
          <div>
            <span>© 2025 CoreNion</span>
            <br />
            <Link className="underline text-white mr-2" href="/privacy" target="_blank">Privacy</Link>
            <Link className="underline text-blue-200" href="https://github.com/CoreNion/page" target="_blank">Source Code</Link>
          </div>

          <nav className="grid grid-cols-[repeat(3,auto)] justify-end items-center gap-4">
            <Link href="https://github.com/CoreNion">
              <Icon icon="carbon:logo-github" height="40px"></Icon>
            </Link>
            <Link href="https://x.com/CoreiNion">
              <Icon icon="carbon:logo-x" height="40px"></Icon>
            </Link>

            <button className="bg-yellow-100 text-black rounded-full p-2">
              <Icon icon="carbon:data-analytics" height="25px"></Icon>
            </button>
          </nav>
        </footer>
      </body>
    </html>
  );
}
