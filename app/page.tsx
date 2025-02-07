import { Contact } from "@/components/Contact";
import { Experiences } from "@/components/Experiences";
import { Intro } from "@/components/Intro";
import { Profile } from "@/components/Profile";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className={`relative bg-primaryBackground flex justify-center items-center flex-col overflow-hidden mx-auto`}>
      {/* <Navbar /> */}
      <Intro />
      <Profile />
      <Experiences />
      <Projects />
      <Contact />
    </main>
  );
}
