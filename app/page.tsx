import Hero from "@/widgets/Hero";
import TechStack from "@/features/stack/TechStack";
import Projects from "@/features/projects/Projects";
import ScrollToTop from "@/shared/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <TechStack />

      <ScrollToTop />
    </>
  );
}
