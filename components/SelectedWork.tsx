import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-page px-5 pt-16 sm:px-8 sm:pt-20">
        <h2
          id="work-heading"
          className="text-base font-medium uppercase tracking-[0.14em] text-ink"
        >
          Selected Work
        </h2>
        <p className="mt-4 max-w-prose text-lg leading-8 text-muted">
          {"A few of the products and prototypes I've built."}
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-16 pb-16 sm:mt-16 sm:pb-20 lg:gap-28">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={String(index + 1).padStart(2, "0")}
          />
        ))}
      </div>
    </section>
  );
}
