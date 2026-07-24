import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center flex flex-col justify-between items-center w-fit border border-slate-700 p-5 my-50 mx-auto">
      <h2 className="text-red-400 font-semibold tracking-wider uppercase mb-3">
        [!] Emergency_System_Scope
      </h2>

      <h1 className="font-mono text-ayu-text font-semibold uppercase tracking-wide mb-4">
        Error_Code: <span className="text-ayu-keyword">404</span>{" "}
        (ROUTE_NOT_FOUND)
      </h1>

      <Link
        className="inline-flex h-9 items-center justify-center bg-red-500/10 hover:bg-red-500 border border-red-500/40 text-red-400 hover:text-slate-950 font-bold uppercase tracking-wider text-[11px] px-4 transition-all duration-200 active:scale-[0.98]"
        href="/"
      >
        return_to_main_thread
      </Link>
    </div>
  );
}
