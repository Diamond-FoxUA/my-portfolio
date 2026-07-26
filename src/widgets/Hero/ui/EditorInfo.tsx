import { X } from "lucide-react";

export default function EditorInfo() {
  return (
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
                <span className="text-ayu-keyword">export const </span> profile
                = <span className="text-ayu-function">{"{"}</span>
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
                <span className="text-ayu-string">&quot;Next.js 16&quot;</span>,{" "}
                <span className="text-ayu-string">&quot;React 19&quot;</span>,{" "}
                <span className="text-ayu-string">&quot;TypeScript&quot;</span>
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
                <span className="text-ayu-string">&quot;CSS modules&quot;</span>
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
                &nbsp;&nbsp; backend: <span className="text-[#9767ff]">[</span>
                <span className="text-ayu-string">
                  &quot;Node.js&quot;
                </span>,{" "}
                <span className="text-ayu-string">&quot;Prisma ORM&quot;</span>,{" "}
                <span className="text-ayu-string">&quot;PostgreSQL&quot;</span>
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
  );
}
