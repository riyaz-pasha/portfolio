import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-primaryBackground flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full h-screen">
        <Hero />
      </div>
    </main>
  );
}
