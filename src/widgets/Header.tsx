"use client";

import { useState } from "react";
import Link from "next/link";

import NavList from "./NavList";
import NavBtn from "@/shared/ui/NavBtn";
import ContactBtn from "@/features/contact/ui/ContactBtn";
import ContactModal from "@/features/contact/ui/ContactModal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isFiverr = process.env.NEXT_PUBLIC_PLATFORM_MODE == "fiverr";

  return (
    <>
      <header
        className={`fixed top-4 px-6 py-4 left-1/2 -translate-x-1/2 w-full max-w-5xl z-50 bg-[#030712]/40 backdrop-blur-md border border-slate-800/40 rounded-4xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]`}
      >
        <nav
          className="flex items-center justify-between"
          aria-label="Main Navigation"
        >
          <NavBtn
            aria-label="Home - Go to top"
            className="font-mono group text-lg font-bold tracking-tight text-white hover:text-ayu-text active:text-ayu-heading transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 px-1"
          >
            df
            <span className="text-emerald-400 ml-0.5 animate-pulse transition-colors duration-300 group-hover:[animation-duration:600ms]">
              _
            </span>
          </NavBtn>

          <NavList />

          {isFiverr ? (
            <div className="flex items-center gap-5">
              <Link
                className="hidden md:block text-xs font-mono font-semibold tracking-wide uppercase bg-ayu-keyword/5 hover:bg-ayu-keyword active:bg-ayu-keyword/50 active:border-keyword text-ayu-keyword hover:text-slate-950 border border-keyword/30 hover:border-ayu-keyword px-4 py-2 transition-colors duration-300"
                href="https://github.com/Diamond-FoxUA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
              >
                GitHub
              </Link>

              <Link
                className="text-xs font-mono font-semibold tracking-wide uppercase bg-emerald-500/5 hover:bg-emerald-500 active:bg-emerald-700 active:border-emerald-700 text-emerald-400 hover:text-slate-950 border border-emerald-500/30 hover:border-emerald-500 px-4 py-2 transition-colors duration-300"
                href={process.env.NEXT_PUBLIC_PLATFORM_LINK || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fiverr (opens in a new tab)"
              >
                HIRE ME ON FIVERR
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-5">
              <ContactBtn handleClick={() => setIsModalOpen(true)} />
              <Link
                className="text-xs font-mono font-semibold tracking-wide uppercase bg-emerald-500/5 hover:bg-emerald-500 active:bg-emerald-700 active:border-emerald-700 text-emerald-400 hover:text-slate-950 border border-emerald-500/30 hover:border-emerald-500 px-4 py-2 transition-colors duration-300"
                href="https://raw.githubusercontent.com/Diamond-FoxUA/cv/main/Dmytro_Farbun_Fullstack_Developer.pdf"
                download="Dmytro_Farbun_Fullstack_Developer.pdf"
                aria-label="Download PDF Resume File Bundle"
              >
                CV <span className="hidden sm:inline">&nbsp;Download</span>
              </Link>
            </div>
          )}
        </nav>
      </header>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
