import { stackData } from "../model/stackData";

export default function TechStack() {
  return (
    <section
      id="stack"
      aria-describedby="stack-heading"
      className="py-10 md:py-15 lg:py-28 w-full scroll-mt-20"
    >
      <h2
        id="stack-heading"
        className="text-2xl font-black tracking-tight pb-15 uppercase text-white font-sans"
      >
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-t border-l border-ayu-border bg-[#030712] shadow-2xl">
        <div
          role="region"
          aria-label="Frontend Technologies"
          className="flex flex-col justify-start group md:col-span-6 md:row-span-2 p-6 bg-ayu-bg border-r border-b border-ayu-border transition-colors duration-300 hover:bg-[#f29718]/15 hover:border-[#f29718]/30"
        >
          <h3 className="block font-mono text-xs uppercase tracking-widest text-[#5c6773] mb-6">
            [core_frontend]
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto w-full font-mono text-center">
            {stackData.coreFrontend.map((item) => (
              <li
                className="border border-ayu-function p-2 w-full text-ayu-function cursor-default transition-colors duration-300 hover:border-white hover:text-white"
                key={item.name}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div
          role="region"
          aria-label="Engineering Focus"
          className="group md:col-span-6 p-6 bg-ayu-bg border-r border-b border-ayu-border rounded-none transition-colors duration-300 hover:bg-emerald-950/50 hover:border-emerald-500/40"
        >
          <h3 className="block font-mono text-xs uppercase tracking-widest text-[#5c6773] mb-6">
            [engineering_focus]
          </h3>

          <ul className="flex flex-col gap-4 justify-center my-auto w-full font-sans font-black text-xl text-white uppercase tracking-tight">
            {stackData.engineeringFocus.map((item) => (
              <li
                className="flex items-center gap-4 cursor-default"
                key={item.name}
              >
                <span
                  aria-hidden="true"
                  className="block w-2 h-2 rounded-none bg-emerald-400 animate-pulse shrink-0"
                />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          role="region"
          aria-label="Backend Technologies"
          className="group flex flex-col justify-start p-6 bg-ayu-bg border-r border-b border-ayu-border md:col-span-6 lg:col-span-3 transition-colors duration-300 hover:bg-[#39bae6]/15 hover:border-[#39bae6]/30"
        >
          <h3 className="block font-mono text-xs uppercase tracking-widest text-[#5c6773] mb-6">
            [backend_infrastructure]
          </h3>

          <ul className="grid grid-cols-2 gap-x-2 gap-y-3 my-auto w-full font-mono text-sm">
            {stackData.backendInfrastructure.map((item) => (
              <li
                className="text-ayu-function cursor-default transition-colors duration-300 hover:text-white whitespace-nowrap"
                key={item.name}
              >
                <span aria-hidden="true" className="select-none">
                  &gt;
                </span>{" "}
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div
          role="region"
          aria-label="System Environment Variables"
          className="group flex flex-col justify-start p-6 bg-ayu-bg border-r border-b border-ayu-border md:col-span-12 lg:col-span-3 transition-colors duration-300 hover:bg-[#a37acc]/20 hover:border-[#a37acc]/30"
        >
          <h3 className="block font-mono text-xs uppercase tracking-widest text-[#5c6773] mb-6">
            [environment_and_local]
          </h3>

          <div className="grid grid-cols-2 gap-0 border-t border-l border-ayu-border my-auto w-full font-mono text-sm text-center">
            <div className="flex flex-col gap-1 border-r border-b border-ayu-border p-3 bg-[#0c1322]/20 transition-colors duration-300 group-hover/cell:bg-[#0c1322]">
              <span className="text-ayu-tag text-xs tracking-wider">
                LANG_UK
              </span>
              <span className="text-white font-bold">NATIVE</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-b border-ayu-border p-3 bg-[#0c1322]/20 transition-colors duration-300 group-hover/cell:bg-[#0c1322]">
              <span className="text-ayu-tag text-xs tracking-wider">
                LANG_EN
              </span>
              <span className="text-white font-bold">B2</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-b border-ayu-border p-3 bg-[#0c1322]/20 transition-colors duration-300 group-hover/cell:bg-[#0c1322]">
              <span className="text-ayu-tag text-xs tracking-wider">VCS</span>
              <span className="text-white font-bold">GIT</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-b border-ayu-border p-3 bg-[#0c1322]/20 transition-colors duration-300 group-hover/cell:bg-[#0c1322]">
              <span className="text-ayu-tag text-xs tracking-wider">HOST</span>
              <span className="text-white font-bold">VERCEL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
