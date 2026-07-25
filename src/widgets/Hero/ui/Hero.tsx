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

        <div className="font-mono text-sm flex gap-4 pl-2 pt-3">
          <div className="text-right">
            1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br /><br />9<br />
            <br />10<br /><br />11<br />
          </div>

          <div>
            <p className="block w-full">
              <span className="text-ayu-keyword">import</span>&nbsp;
              <span className="text-ayu-function">&#123;</span> a11y{" "}
              <span className="text-ayu-function">&#125;</span>{" "}
              <span className="text-ayu-keyword">from</span>
              &nbsp;
              <span className="text-ayu-string">
                &quot;@standards/aria-semantic&quot;
              </span>
              ; <br />
              <span className="text-ayu-keyword">import</span>&nbsp;
              <span className="text-ayu-function">&#123;</span> seo{" "}
              <span className="text-ayu-function">&#125;</span>{" "}
              <span className="text-ayu-keyword">from</span>{" "}
              <span className="text-ayu-string">
                &quot;@web/optimization&quot;
              </span>
              ; <br />
              <br />
              <span className="text-ayu-keyword">export const </span> profile ={" "}
              <span className="text-ayu-function">&#123;</span>
            </p>

            <ul>
              <li>
                &nbsp;&nbsp; core: <span className="text-[#9767ff]">&#91;</span>
                <span className="text-ayu-string">
                  &quot;Next.js 14&quot;
                </span>,{" "}
                <span className="text-ayu-string">
                  <span>&quot;</span>React 18&quot;
                </span>
                ,{" "}
                <span className="text-ayu-string">&quot;TypeScript&quot;</span>
                <span className="text-[#9767ff]">&#93;</span>, <br />
              </li>
              <li>
                &nbsp;&nbsp; styles:{" "}
                <span className="text-[#9767ff]">&#91;</span>
                <span className="text-ayu-string">
                  &quot;Tailwind CSS&quot;
                </span>
                ,
                <span className="text-ayu-string">&quot;CSS modules&quot;</span>
                <span className="text-[#9767ff]">&#93;</span>, <br />
              </li>
              <li>
                &nbsp;&nbsp; backend:{" "}
                <span className="text-[#9767ff]">&#91;</span>
                <span className="text-ayu-string">&quot;Node.js&quot;</span>,
                <span className="text-ayu-string">&quot;Prisma ORM&quot;</span>,
                <span className="text-ayu-string">&quot;PostgreSQL&quot;</span>
                <span className="text-[#9767ff]">&#93;</span>, <br />
              </li>
              <li>
                &nbsp;&nbsp; focus:{" "}
                <span className="text-[#9767ff]">&#91;</span>
                <span className="text-ayu-string">
                  &quot;Semantic HTML&quot;
                </span>
                ,
                <span className="text-ayu-string">
                  &quot;ARIA Accessibility&quot;
                </span>
                ,
                <span className="text-ayu-string">
                  &quot;SEO Optimization&quot;
                </span>
                <span className="text-[#9767ff]">&#93;</span>, <br />
              </li>
              <li>
                &nbsp;&nbsp; specs:{" "}
                <span className="text-[#9767ff]">&#123;</span> architecture:{" "}
                <span className="text-ayu-string">&quot;FSD&quot;</span>,
                geometry:{" "}
                <span className="text-ayu-string">&quot;rounded-none&quot;</span>{" "}
                <span className="text-[#9767ff]">&#125;</span>, <br />
              </li>
              <li>
                &nbsp;&nbsp; languages:
                <span className="text-[#9767ff]">&#123;</span> en:{" "}
                <span className="text-ayu-string">&quot;B2&quot;</span>, uk:
                <span className="text-ayu-string">&quot;Native&quot;</span>
                <span className="text-[#9767ff]">&#125;</span>, <br />
              </li>
            </ul>
            &#125;
          </div>
        </div>
      </div>

      <div className="absolute top-[10dvh] left-[10%] z-0 w-30 h-30 blur-[120px] bg-ayu-keyword"></div>
      <div className="absolute top-[70dvh] right-[20%] md:top-[28dvh] md:right-[15%] z-0 w-35 h-35 blur-[120px] bg-ayu-string"></div>
    </section>
  );
}
