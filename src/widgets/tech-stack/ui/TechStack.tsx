import { stackData } from "../model/stackData";

export default function TechStack() {
  // shadow-[0_20px_50px_rgba(0,0,0,0.6)]
  return (
    <section id="stack" aria-describedby="stack-heading" className="pb-15">
      <h2
        id="stack-heading"
        className="text-2xl font-black tracking-tight mb-10"
      >
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <article className="flex flex-col group md:col-span-6 md:row-span-2 p-6 bg-[#242936] shadow-2xl">
          <h3 className="block font-mono text-sm uppercase tracking-widest text-ayu-heading mb-6">
            [core_frontend]
          </h3>

          <ul className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4 my-auto ">
            {stackData.coreFrontend.map((item) => (
              <li
                className="font-mono text-center text-ayu-function hover:text-emerald-400 border border-ayu-function hover:border-emerald-400 p-2 w-full cursor-default transition-colors duration-300"
                key={item.name}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </article>

        <article className="group md:col-span-6 p-6 bg-[#242936] shadow-2xl">
          <h3 className="block font-mono text-sm uppercase tracking-widest text-ayu-heading mb-6">
            [engineering_focus]
          </h3>

          <ul className="flex flex-wrap lg:flex-nowrap items-center gap-3 font-mono font-extrabold text-xl text-white uppercase tracking-tight my-3">
            {stackData.engineeringFocus.map((item) => (
              <li className="flex items-center gap-4" key={item.name}>
                <span className="block w-2 h-2 rounded-none bg-emerald-400 animate-pulse shrink-0" />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="group md:col-span-3 p-4 bg-[#242936] shadow-2xl">
          <h3 className="block font-mono text-sm uppercase tracking-widest text-ayu-heading mb-6">
            [backend_infrastructure]
          </h3>

          <ul>
            {stackData.backendInfrastructure.map((item) => (
              <li
                className="font-mono text-ayu-function hover:text-emerald-400 transition-colors duration-300 cursor-default"
                key={item.name}
              >
                &#62; {item.name}
              </li>
            ))}
          </ul>
        </article>

        <article className="group flex flex-col justify-between md:col-span-3 p-4 bg-[#242936] shadow-2xl">
          <h3 className="block text-center font-mono text-sm uppercase tracking-widest text-ayu-heading">
            [environment_and_local]
          </h3>

          <div className="font-mono text-sm text-center grid grid-cols-2 gap-1 border-t border-l border-slate-800 mt-5 md:my-auto">
            <div className="flex flex-col gap-1 border-r border-b border-slate-800 p-3 bg-[#0c1322]/30">
              <span className="text-ayu-tag">LANG_UK</span>
              <span className="text-ayu-function">NAT</span>
            </div>
            <div className="flex flex-col gap-1 text-center border-r border-b border-slate-800 p-3 bg-[#0c1322]/30">
              <span className="text-ayu-tag">LANG_EN</span>
              <span className="text-ayu-function">B2</span>
            </div>
            <div className="flex flex-col gap-1 text-center border-r border-b border-slate-800 p-3 bg-[#0c1322]/30">
              <span className="text-ayu-tag">VCS</span>
              <span className="text-ayu-function">GIT</span>
            </div>
            <div className="flex flex-col gap-1 text-center border-r border-b border-slate-800 p-3 bg-[#0c1322]/30">
              <span className="text-ayu-tag">HOST</span>
              <span className="text-ayu-function">VERCEL</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
