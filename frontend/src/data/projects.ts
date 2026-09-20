export type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  liveUrl?: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    index: "01",
    title: "Portfolio personal",
    description:
      "Portfolio inmersivo construido para presentar proyectos, habilidades y proceso creativo mediante una experiencia visual orientada al scroll.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
    repositoryUrl: "https://github.com/johiortiz/johiortiz-portfolio",
    image: "/images/projects/portfolio-preview.webp",
    imageAlt: "Vista previa del portfolio personal de Johi Ortiz",
  },
  {
    id: "logistics-crud",
    index: "02",
    title: "Logistics CRUD",
    description:
      "Aplicación web para gestionar servicios logísticos mediante operaciones de creación, consulta, actualización y eliminación de datos.",
    technologies: ["React", "Django REST", "Tailwind CSS", "PostgreSQL"],
    repositoryUrl: "https://github.com/johiortiz",
    image: "/images/projects/logistics-preview.webp",
    imageAlt: "Vista previa de una aplicación de gestión logística",
  },
  {
    id: "c-projects",
    index: "03",
    title: "C Systems Projects",
    description:
      "Colección de proyectos de bajo nivel centrados en memoria, parsing, procesos, concurrencia, sincronización y testing.",
    technologies: ["C", "Makefile", "Linux", "pthread", "Valgrind"],
    repositoryUrl: "https://github.com/johiortiz",
    image: "/images/projects/c-projects-preview.webp",
    imageAlt: "Vista previa de proyectos de programación en C",
  },
];