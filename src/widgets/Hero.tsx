import EditorInfo from "./EditorInfo";
import NavBtn from "@/shared/ui/NavBtn";

export default function Hero() {
  const isFiverr = process.env.NEXT_PUBLIC_PLATFORM_MODE === "fiverr";

  return (
    <section
      id="hero"
      aria-label="Developer Workspace Overview"
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 w-full pt-[5dvh] lg:pt-[15dvh] pb-10 md:py-15 lg:pb-28 scroll-mt-28"
    >
      <div className="relative z-10 w-full">
        <h1 className="text-5xl md:text-6xl uppercase mb-2">Dmytro Farbun</h1>
        <p className="font-mono text-lg font-bold text-[#e6b450]">
          {isFiverr ? "Fullstack Web Developer" : "Junior Fullstack Developer"}
        </p>

        <p className="leading-relaxed max-w-md mt-4 mb-8">
          Fullstack Developer with hands-on experience
          building modern web applications using React, Next.js, Node.js, and
          TypeScript. Focused on responsive interfaces, clean architecture, and
          practical problem solving.
          {isFiverr && (
            <em className="block pt-5 not-italic">
              Available for custom fullstack development and API integrations.
            </em>
          )}
        </p>

        <NavBtn
          aria-label="Explore Featured Project"
          sectionId="featured"
          className="block md:max-w-fit font-mono font-bold text-center text-ayu-function bg-transparent border border-emerald-500 hover:border-emerald-400 hover:scale-110 active:scale-90 px-6 py-3 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#f29718] focus-visible:ring-offset-2 focus-visible:ring-offset-ayu-bg cursor-pointer"
        >
          <span aria-hidden="true">exploreFeatured()</span>
          <span aria-hidden="true" className="text-ayu-text">
            ;
          </span>
        </NavBtn>
      </div>

      <EditorInfo />

      <div className="absolute top-[10dvh] left-[10%] z-0 w-30 h-30 blur-[120px] bg-ayu-keyword"></div>
      <div className="absolute top-[70dvh] right-[20%] md:top-[28dvh] md:right-[15%] z-0 w-35 h-35 blur-[120px] bg-ayu-string"></div>
    </section>
  );
}
