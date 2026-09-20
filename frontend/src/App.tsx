import { useRef } from "react";

import { BrokenPortrait } from "./components/sections/BrokenPortrait";
import smoke from "./assets/images/smoke.png";

function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-zinc-100">
      <section
        ref={heroRef}
        id="home"
        aria-labelledby="hero-title"
        className="relative isolate min-h-[100svh] overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20 bg-black"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <img
            src={smoke}
            alt=""
            className="smoke-layer smoke-layer--primary absolute -left-[18%] top-[8%] w-[92%] max-w-none opacity-55 mix-blend-screen sm:-left-[8%] sm:top-[4%] sm:w-[72%] lg:left-[2%] lg:top-[2%] lg:w-[58%]"/>

          <img
            src={smoke}
            alt=""
            className="smoke-layer smoke-layer--secondary absolute -left-[10%] top-[18%] w-[82%] max-w-none rotate-6 opacity-20 mix-blend-screen sm:left-[5%] sm:w-[66%] lg:left-[12%] lg:top-[14%] lg:w-[48%]"
          />
        </div>

        <div className="relative z-20 flex min-h-[100svh] w-full flex-col px-6 pt-8 pb-10 sm:px-10 lg:px-16 xl:px-24">
          <nav
            aria-label="Navegación principal"
            className="ml-auto flex items-center gap-6 text-sm text-zinc-300 sm:gap-8"
          >
            <a
              href="#home"
              className="transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
            >
              Home
            </a>

            <a
              href="#projects"
              className="transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
            >
              Proyectos
            </a>

            <a
              href="#about"
              className="transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
            >
              About
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
            >
              Contacto
            </a>
          </nav>

          <div className="relative flex flex-1 items-center">
            <div className="relative z-20 max-w-xl pt-12 lg:-translate-y-6">
              <p className="mb-5 font-mono text-xs tracking-[0.24em] text-zinc-400 uppercase">
                Full-stack developer · Madrid
              </p>

              <h1
                id="hero-title"
                className="font-mono text-[clamp(4.8rem,11vw,10rem)] font-bold leading-[0.78] tracking-[-0.1em] text-zinc-50"
              >
                Johi
              <div
                aria-hidden="true"
                className="mt-8 h-[3px] w-48 -rotate-1 bg-sky-100 shadow-[0_0_16px_rgba(186,230,253,0.35)] sm:w-64"
              />
                <br />
                Ortiz
              </h1>


            </div>
          </div>

          <a
            href="#projects"
            className="relative z-30 mx-auto flex w-fit flex-col items-center gap-1 font-mono text-[0.65rem] tracking-[0.22em] text-zinc-400 uppercase transition-colors hover:text-sky-100 focus-visible:text-sky-100 focus-visible:outline-none"
          >
            Scroll
            <span
              aria-hidden="true"
              className="text-3xl leading-none text-sky-100"
            >
              ↓
            </span>
          </a>
        </div>

        <BrokenPortrait heroRef={heroRef} />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-40 bg-gradient-to-t from-black via-black/55 to-transparent"
        />
      </section>

      <section
        id="projects"
        className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-center"
      >
        <p className="font-mono text-sm tracking-[0.2em] text-zinc-500 uppercase">
          Próximamente: proyectos
        </p>
      </section>

      <section id="about" className="min-h-screen bg-black" />

      <section id="contact" className="min-h-screen bg-zinc-950" />
    </main>
  );
}

export default App;