"use client";

import { useState, useEffect } from "react";
import NavBtn from "./NavBtn";
import { ArrowBigUpDash } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavBtn
      aria-label="Go to the top of the page"
      className={`fixed z-50 bottom-[5dvh] md:bottom-[15dvh] right-[5vw] flex justify-center items-center group bg-ayu-bg/80 border-3 border-dashed border-emerald-600 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-130 invisible pointer-events-none"} w-12 h-12 duration-300 cursor-pointer`}
    >
      <ArrowBigUpDash
        aria-hidden="true"
        className="stroke-emerald-500 group-hover:scale-120 duration-300"
      />
    </NavBtn>
  );
}
