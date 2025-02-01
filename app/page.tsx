import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-primaryBackground flex justify-center items-center flex-col overflow-hidden mx-auto">
      <Navbar />
      <div className="w-full h-screen">
        <Hero />
      </div>
    </main>
  );
}
