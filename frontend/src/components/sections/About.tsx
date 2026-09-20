const focusAreas = [
  "Frontend development",
  "Full-stack applications",
  "UI / UX design",
  "Automation workflows",
  "AI & data",
];

const profileDetails = [
  {
    label: "Base",
    value: "Madrid, España",
  },
  {
    label: "Rol",
    value: "Junior full-stack developer",
  },
  {
    label: "Disponible para",
    value: "Oportunidades junior y colaboraciones",
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-black py-24 text-zinc-100 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(186,230,253,0.1),transparent_24%),radial-gradient(circle_at_8%_90%,rgba(255,255,255,0.07),transparent_22%)]"
      />

      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <header className="border-b border-white/10 pb-10 sm:pb-12">
          <p className="font-mono text-xs tracking-[0.24em] text-sky-100/70 uppercase">
            01 / About
          </p>
        </header>

        <div className="grid gap-14 pt-14 lg:grid-cols-12 lg:gap-8 lg:pt-20">
          <div className="lg:col-span-8">
            <h2
              id="about-title"
              className="max-w-5xl text-[clamp(3.5rem,8vw,9rem)] font-semibold leading-[0.86] tracking-[-0.075em]"
            >
              Construyo interfaces que se sienten vivas.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-5">
            <p className="max-w-md text-base leading-8 text-zinc-300 sm:text-lg">
              Soy Johi Ortiz, desarrollador full-stack y diseñador web. Combino
              una mirada visual con una base técnica para construir productos
              digitales claros, funcionales y con personalidad.
            </p>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-500 sm:text-base">
              Me interesa entender el problema antes de escribir código:
              estructura, experiencia, accesibilidad, rendimiento y detalle
              visual. Aprendo creando proyectos reales y mejorando cada
              iteración.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {profileDetails.map((detail) => (
            <div key={detail.label} className="bg-black p-6 sm:p-8">
              <p className="font-mono text-[0.65rem] tracking-[0.2em] text-zinc-500 uppercase">
                {detail.label}
              </p>

              <p className="mt-4 text-sm leading-6 text-zinc-200 sm:text-base">
                {detail.value}
              </p>
            </div>
          ))}

          <div className="bg-black p-6 sm:p-8">
            <p className="font-mono text-[0.65rem] tracking-[0.2em] text-zinc-500 uppercase">
              Enfoque
            </p>

            <p className="mt-4 text-sm leading-6 text-zinc-200 sm:text-base">
              Diseño, código y mejora continua
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20">
          <p className="font-mono text-xs tracking-[0.24em] text-sky-100/70 uppercase">
            Áreas de enfoque
          </p>

          <ul className="mt-7 flex flex-wrap gap-3">
            {focusAreas.map((area, index) => (
              <li
                key={area}
                className="flex items-center gap-3 border border-white/10 px-4 py-3 text-sm text-zinc-300 transition-colors duration-300 hover:border-sky-100/40 hover:text-sky-50"
              >
                <span className="font-mono text-[0.65rem] text-sky-100/70">
                  0{index + 1}
                </span>

                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}