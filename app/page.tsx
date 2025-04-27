import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hoppies from "./components/Hoppies";
import Projects from "./components/Projects";

import { WordLoader } from "./components/WordLoader";
import Works from "./components/Works";

export default function Home() {
  return (
    <main className="w-full h-full ">
      <div className="flex flex-col gap-20 first:gap-0">
        <WordLoader wordDuration={300} />
        <Hero />
        <Works />
        <Projects />
        <Experience />
        <Hoppies />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
