"use client";
import { useState, useEffect } from "react";

const loadingMessages = [
  "> loading_fsd_architecture...",
  "> mounting_lucid_glass_nav...",
  "> compiling_profile_buffer...",
];

export default function Loading() {
  const [activeMessage, setActiveMessage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    const timeoutID = setTimeout(() => {
      setActiveMessage(loadingMessages[randomIndex]);
    }, 1);

    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <div
      className="font-mono text-xs py-50 w-full flex flex-col justify-center items-center"
      aria-live="polite"
    >
      <div className="border border-slate-800 bg-[#090d16] p-5 shadow-2xl max-w-sm w-full">
        <h2 className="text-emerald-400 font-semibold tracking-wide uppercase border-b border-slate-800 pb-2 mb-4">
          SYSTEM_INIT
        </h2>

        <p className="tracking-wide capitalize animate-pulse">
          {activeMessage || "> initializing_runtime_environment..."}
        </p>
      </div>
    </div>
  );
}
