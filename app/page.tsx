import Sidebar from "./components/layout/Sidebar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Technologies from "./components/sections/Technologies";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Sidebar />
      {/* <main className="ml-48 mx-auto w-full max-w-5xl px-4 sm:px-8 lg:px-12"> */}
      <main className="ml-48 mx-auto  px-[clamp(1rem,4vw,3rem)]">
        <Hero />
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}