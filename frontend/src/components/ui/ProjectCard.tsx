import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group grid overflow-hidden border border-white/10 bg-zinc-950 transition-colors duration-500 hover:border-white/30 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)]">
      <div className="relative min-h-72 overflow-hidden border-b border-white/10 bg-zinc-900 lg:min-h-full lg:border-r lg:border-b-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(186,230,253,0.18),transparent_38%),radial-gradient(circle_at_75%_80%,rgba(255,255,255,0.08),transparent_42%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_35%,rgba(255,255,255,0.06)_36%,transparent_37%)] bg-[length:14px_14px] opacity-60" />

        <span className="absolute left-5 top-5 font-mono text-xs tracking-[0.22em] text-zinc-500">
          {project.index}
        </span>

        <div className="absolute inset-x-5 bottom-5">
          <p className="font-mono text-xs tracking-[0.2em] text-sky-100/70 uppercase">
            Case study
          </p>

          <h3 className="mt-2 text-3xl font-medium tracking-tight text-zinc-100 sm:text-4xl">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-col p-6 sm:p-8">
        <p className="max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
          {project.description}
        </p>

        <ul
          aria-label={`Tecnologías de ${project.title}`}
          className="mt-8 flex flex-wrap gap-2"
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="border border-white/10 px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.13em] text-zinc-400 uppercase"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-5 font-mono text-xs tracking-[0.16em] uppercase">
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-300 transition-colors hover:text-sky-100 focus-visible:text-sky-100 focus-visible:outline-none"
          >
            GitHub ↗
          </a>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 transition-colors hover:text-sky-100 focus-visible:text-sky-100 focus-visible:outline-none"
            >
              Live site ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}