"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Icon } from '@iconify/react';

export default function Header() {
  const [isMobile, setIsMobile] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);;

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed z-50 top-0 left-0 right-0 bg-white text-black border border-gray-300 shadow m-5 rounded-full grid grid-cols-[repeat(2,auto)] items-center justify-between">
      <Link className="font-bold text-xl pl-5 py-3" href="/">CoreNion</Link>

      {
        isMobile && (
            <button className="cursor-pointer transition-all duration-300 hover:bg-slate-200 p-3 rounded-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon icon="carbon:menu" height="1.5em"></Icon>
            </button>
        )
      }

      <nav
        className={ isMobile ?
          `absolute top-10 right-0 w-min bg-white border border-gray-300 shadow m-1 rounded-2xl grid overflow-hidden
           transition-all duration-300 ease-in-out
              ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"}`
          :"flex justify-end gap-3 pr-5 py-3"}>
        <Link className="max-md:px-5 max-md:py-3 transition-all duration-300 max-sm:hover:bg-slate-200" href="/archivtter">Archivtter</Link>
        <Link className="max-md:px-5 max-md:py-3 transition-all duration-300 max-sm:hover:bg-slate-200" href="/trucker">FileTrucker</Link>
        <Link className="max-md:px-5 max-md:py-3 transition-all duration-300 max-sm:hover:bg-slate-200" href="/leasy">Leasy</Link>
      </nav>
    </header>
  );
}