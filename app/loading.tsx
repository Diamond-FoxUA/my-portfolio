"use client";
import { useState, useEffect } from "react";

const loadingMessages = [
  "> loading_fsd_architecture...",
  "> mounting_lucid_glass_nav...",
  "> compiling_profile_buffer...",
  "> initializing_runtime_environment...",
];

export default function Loading() {
  const [activeMessage, setActiveMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * loadingMessages.length);
      setActiveMessage(loadingMessages[randomIndex]);
    }, 0);
  }, []);

  return (
    <div
      className="font-mono text-xs py-50 w-full flex flex-col justify-center items-center"
      role="status"
      aria-label="Loading"
    >
      <div
        aria-hidden="true"
        className="border border-slate-800 bg-[#090d16] p-5 shadow-2xl max-w-sm w-full"
      >
        <h2 className="text-emerald-400 font-semibold tracking-wide uppercase border-b border-slate-800 pb-2 mb-4">
          SYSTEM_INIT
        </h2>

        <p className="tracking-wide capitalize animate-pulse">
          {activeMessage}
        </p>
      </div>
    </div>
  );
}
