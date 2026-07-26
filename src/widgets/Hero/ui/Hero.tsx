import { X } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-label="Developer Workspace Overview"
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto lg:pt-[15dvh] pb-15"
    >
      <div className="relative z-10 w-full">
        <h1 className="text-5xl md:text-6xl uppercase mb-2">Dmytro Farbun</h1>
        <p className="font-mono text-lg font-bold text-[#e6b450]">
          Junior Fullstack Developer
        </p>

        <p className="leading-relaxed max-w-md mt-4 mb-8">
          Fullstack Developer with hands-on experience building modern web
          applications using React, Next.js, Node.js, and TypeScript. Focused on
          responsive interfaces, clean architecture, and practical problem
          solving.
        </p>

        <a
          href="#projects"
          className="block md:max-w-fit font-mono font-bold text-center text-ayu-function bg-transparent border border-emerald-500 hover:border-emerald-400 hover:scale-110 active:scale-90 px-6 py-3 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#f29718] focus-visible:ring-offset-2 focus-visible:ring-offset-ayu-bg"
        >
          exploreProjects()
          <span className="text-ayu-text">;</span>
        </a>
      </div>

      <div className="relative z-10 w-full pb-1 bg-ayu-bg border-2 border-ayu-panel shadow-2xl">
        <div className="flex justify-between items-center h-10 bg-[#0c132268]">
          <span className="text-xs flex items-center gap-3 w-fit h-full bg-ayu-bg px-4 py-2 border-t border-ayu-function">
            developer.config.ts{" "}
            <span>
              <X className="w-3" />
            </span>
          </span>

          <div className="flex gap-2 mr-5">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </div>

        <pre className="font-mono text-sm select-text m-0">
          <code className="block">
            <ol className="list-none [counter-reset:item] flex flex-col pr-2 gap-y-0.5 p-0 m-0">
              <li className="grid grid-cols-[25px_1fr] gap-x-4 items-start">
                <div
                  className="text-right text-slate-600 select-none"
                  aria-hidden="true"
                >
                  1
                </div>
                <div className="whitespace-pre-wrap wrap-break-word">
                  <span className="text-ayu-keyword">import</span>&nbsp;
                  <span className="text-ayu-function">{"{"}</span> a11y{" "}
                  <span className="text-ayu-function">{"}"}</span>{" "}
                  <span className="text-ayu-keyword">from</span>&nbsp;
                  <span className="text-ayu-string">
                    &quot;@standards/aria-semantic&quot;
                  </span>
                  ;
                </div>
              </li>

              <li className="grid grid-cols-[25px_1fr] gap-x-4 items-start">
                <div
                  className="text-right text-slate-600 select-none"
                  aria-hidden="true"
                >
                  2
                </div>
                <div className="whitespace-pre-wrap wrap-break-word">
                  <span className="text-ayu-keyword">import</span>&nbsp;
                  <span className="text-ayu-function">{"{"}</span> seo{" "}
                  <span className="text-ayu-function">{"}"}</span>{" "}
                  <span className="text-ayu-keyword">from</span>&nbsp;
                  <span className="text-ayu-string">
                    &quot;@web/optimization&quot;
                  </span>
                  ;
                </div>
              </li>

              <li className="grid grid-cols-[25px_1fr] gap-x-4 items-start min-h-6">
                <div
                  className="text-right text-slate-600 select-none"
                  aria-hidden="true"
                >
                  3
                </div>
                <div></div>
              </li>

              <li className="grid grid-cols-[25px_1fr] gap-x-4 items-start">
                <div
                  className="text-right text-slate-600 select-none"
                  aria-hidden="true"
                >
                  4
                </div>
                <div className="whitespace-pre-wrap wrap-break-word">
                  <span className="text-ayu-keyword">export const </span>{" "}
                  profile = <span className="text-ayu-function">{"{"}</span>
                </div>
              </li>

              <li className="grid grid-cols-[25px_1fr] gap-x-4 items-start">
                <div
                  className="text-right text-slate-600 select-none"
                  aria-hidden="true"
                >
                  5
                </div>
                <div className="whitespace-pre-wrap wrap-break-word">
                  &nbsp;&nbsp; core: <span className="text-[#9767ff]">[</span>
                  <span className="text-ayu-string">
                    &quot;Next.js 16&quot;
                  </span>
                  ,{" "}
                  <span className="text-ayu-string">&quot;React 19&quot;</span>,{" "}
                  <span className="text-ayu-string">
                    &quot;TypeScript&quot;
                  </span>
                  <span className="text-[#9767ff]">]</span>,
                </div>
              </li>

              <li className="grid grid-cols-[25px_1fr] gap-x-4 items-start">
                <div
                  className="text-right text-slate-600 select-none"
                  aria-hidden="true"
                >
                  6
                </div>
                <div className="whitespace-pre-wrap wrap-break-word">
                  &nbsp;&nbsp; styles: <span className="text-[#9767ff]">[</span>
                  <span className="text-ayu-string">
                    &quot;Tailwind CSS&quot;
                  </span>
                  ,{" "}
                  <span className="text-ayu-string">
                    &quot;CSS modules&quot;
                  </span>
                  <span className="text-[#9767ff]">]</span>,
                </div>
              </li>

              <li className="grid grid-cols-[25px_1fr] gap-x-4 items-start">
                <div
                  className="text-right text-slate-600 select-none"
                  aria-hidden="true"
                >
                  7
                </div>
                <div className="whitespace-pre-wrap wrap-break-word">
                  &nbsp;&nbsp; backend:{" "}
                  <span className="text-[#9767ff]">[</span>
                  <span className="text-ayu-string">
                    &quot;Node.js&quot;
                  </span>,{" "}
                  <span className="text-ayu-string">
                    &quot;Prisma ORM&quot;
                  </span>
                  ,{" "}
                  <span className="text-ayu-string">
                    &quot;PostgreSQL&quot;
                  </span>
                  <span className="text-[#9767ff]">]</span>,
                </div>
              </li>

              <li className="grid grid-cols-[25px_1fr] gap-x-4 items-start">
                <div
                  className="text-right text-slate-600 select-none"
                  aria-hidden="true"
                >
                  8
                </div>
                <div className="whitespace-pre-wrap wrap-break-word">
                  &nbsp;&nbsp; focus: <span className="text-[#9767ff]">[</span>
                  <span className="text-ayu-string">
                    &quot;Semantic HTML&quot;
                  </span>
                  ,{" "}
                  <span className="text-ayu-string">
                    &quot;ARIA Accessibility&quot;
                  </span>
                  ,{" "}
                  <span className="text-ayu-string">
                    &quot;SEO Optimization&quot;
                  </span>
                  <span className="text-[#9767ff]">]</span>,
                </div>
              </li>

              <li className="grid grid-cols-[25px_1fr] gap-x-4 items-start">
                <div
                  className="text-right text-slate-600 select-none"
                  aria-hidden="true"
                >
                  9
                </div>
                <div className="whitespace-pre-wrap wrap-break-word">
                  &nbsp;&nbsp; specs:{" "}
                  <span className="text-[#9767ff]">{"{"}</span> architecture:{" "}
                  <span className="text-ayu-string">&quot;FSD&quot;</span>,
                  geometry:{" "}
                  <span className="text-ayu-string">
                    &quot;rounded-none&quot;
                  </span>{" "}
                  <span className="text-[#9767ff]">{"}"}</span>,
                </div>
              </li>

              <li className="grid grid-cols-[25px_1fr] gap-x-4 items-start">
                <div
                  className="text-right text-slate-600 select-none"
                  aria-hidden="true"
                >
                  10
                </div>
                <div className="whitespace-pre-wrap wrap-break-word">
                  &nbsp;&nbsp; languages:{" "}
                  <span className="text-[#9767ff]">{"{"}</span> en:{" "}
                  <span className="text-ayu-string">&quot;B2&quot;</span>, uk:
                  <span className="text-ayu-string">&quot;Native&quot;</span>
                  <span className="text-[#9767ff]">{"}"}</span>,
                </div>
              </li>

              <li className="grid grid-cols-[25px_1fr] gap-x-4 items-start">
                <div
                  className="text-right text-slate-600 select-none"
                  aria-hidden="true"
                >
                  11
                </div>
                <div className="whitespace-pre-wrap wrap-break-word">
                  <span className="text-ayu-function">{"}"}</span>;
                </div>
              </li>
            </ol>
          </code>
        </pre>
      </div>

      <div className="absolute top-[10dvh] left-[10%] z-0 w-30 h-30 blur-[120px] bg-ayu-keyword"></div>
      <div className="absolute top-[70dvh] right-[20%] md:top-[28dvh] md:right-[15%] z-0 w-35 h-35 blur-[120px] bg-ayu-string"></div>
    </section>
  );
}
