import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative overflow-hidden bg-zinc-950 py-24 text-zinc-100 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:3.5rem_3.5rem]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <header className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.55fr)] lg:items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.24em] text-sky-100/70 uppercase">
              01 / Selected work
            </p>

            <h2
              id="projects-title"
              className="mt-5 text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-none tracking-[-0.07em]"
            >
              Proyectos
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-400 sm:text-base lg:justify-self-end">
            Una selección de proyectos construidos para explorar desarrollo
            full-stack, interfaces visuales, automatización y fundamentos de
            software.
          </p>
        </header>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}