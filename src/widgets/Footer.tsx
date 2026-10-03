"use client";

import { useState, useEffect } from "react";
import SocialLinks from "@/shared/ui/SocialLinks";

const getPingStyle = (ping: string | number) => {
  if (typeof ping === "string") return "text-ayu-tag";
  if (ping < 200) return "text-emerald-500";
  if (ping < 500) return "text-ayu-function";
  return "text-ayu-special";
};

export default function Footer() {
  const [ping, setPing] = useState<number | string>("...");
  const pingStyle = getPingStyle(ping);

  useEffect(() => {
    const [entry] = performance.getEntriesByType("navigation");

    if (entry) {
      const navigation = entry as PerformanceNavigationTiming;
      const loadTime = Math.round(navigation.responseStart);

      requestAnimationFrame(() => {
        setPing(loadTime > 0 ? loadTime : 10);
      });
    } else {
      requestAnimationFrame(() => setPing(15));
    }
  }, []);

  return (
    <footer className="text-ayu-text font-mono text-sm tracking-wider w-full border-t border-slate-700">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row md:px-6 py-8 md:justify-between gap-10 items-center mx-auto">
        <div className="flex gap-5">
          <p>
            &copy;{new Date().getFullYear()}
            <span className="sr-only"> D.F. All rights reserved.</span>
          </p>
          <p aria-hidden="true" className="text-slate-500">
            df. all_systems_nominal
          </p>
        </div>

        <SocialLinks />

        <div aria-hidden="true" className="flex items-center gap-2">
          <span className="block w-2 h-2 bg-emerald-400 animate-pulse"></span>
          <p className="text-emerald-500 tracking-wider uppercase font-bold border-r pr-2 border-slate-500">
            SYS_ONLINE
          </p>
          <p className="uppercase">
            Ping: <span className={`${pingStyle} font-bold`}>{ping}ms</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
