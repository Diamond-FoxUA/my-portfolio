import Hero from "@/widgets/Hero";
import Featured from "@/features/featured/Featured";
import TechStack from "@/features/stack/TechStack";
import Projects from "@/features/projects/Projects";
import ScrollToTop from "@/shared/ui/ScrollToTop";

import { Toaster } from "sonner";


export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Projects />
      <TechStack />

      <ScrollToTop />
      <Toaster richColors position="top-right"/>
    </>
  );
}
