import { About } from "@/components/About";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-primaryBackground flex justify-center items-center flex-col overflow-hidden mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
