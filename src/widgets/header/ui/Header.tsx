import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-4 px-6 py-4 left-1/2 -translate-x-1/2 w-full max-w-5xl z-50 bg-[#030712]/40 backdrop-blur-md border border-slate-800/40 rounded-4xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
      <nav
        className="flex items-center justify-between"
        aria-label="Main Navigation"
      >
        <Link
          href="/"
          className="font-mono group text-lg font-bold tracking-tight text-white hover:text-ayu-text active:text-ayu-heading transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 px-1"
        >
          df
          <span className="text-emerald-400 ml-0.5 animate-pulse transition-colors duration-300 group-hover:[animation-duration:600ms]">
            _
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
          <li>
            <a
              href="#projects"
              className="hover:text-emerald-400 active:text-emerald-700 transition-colors duration-300"
            >
              &#47;&#47; projects
            </a>
          </li>
          <li>
            <a
              href="#stack"
              className="hover:text-emerald-400 active:text-emerald-700 transition-colors duration-300"
            >
              &#47;&#47; stack
            </a>
          </li>
          <li>
            <a
              href="#roadmap"
              className="hover:text-emerald-400 active:text-emerald-700 transition-colors duration-300"
            >
              &#47;&#47; future-scope
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-emerald-400 active:text-emerald-700 transition-colors duration-300"
            >
              &#47;&#47; stats
            </a>
          </li>
        </ul>

        <div className="flex items-center">
          <a
            className="text-xs font-mono font-semibold tracking-wide uppercase bg-emerald-500/5 hover:bg-emerald-500 active:bg-emerald-700 active:border-emerald-700 text-emerald-400 hover:text-slate-950 border border-emerald-500/30 hover:border-emerald-500 px-4 py-2 transition-colors duration-300"
            href="/Dmytro_Farbun_Fullstack_Developer.pdf"
            download="Dmytro_Farbun_Fullstack_Developer.pdf"
            aria-label="Download PDF Resume File Bundle"
          >
            CV <span className="hidden sm:inline">&nbsp;Download</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
