import Image from "next/image";
import { projectLinkLabel, type Project, type ProjectLink } from "@/lib/content";
import { SiteLink } from "@/components/SiteLink";

type CardLink = ProjectLink & { variant: "primary" | "accent" };

const pageInset =
  "pl-[max(1.25rem,calc((100%-1400px)/2+1.25rem))] pr-5 sm:pl-[max(2rem,calc((100%-1400px)/2+2rem))] sm:pr-8";
const pageInsetEnd =
  "pl-5 pr-[max(1.25rem,calc((100%-1400px)/2+1.25rem))] sm:pl-8 sm:pr-[max(2rem,calc((100%-1400px)/2+2rem))]";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: string;
}) {
  const links = projectLinks(project);

  if (!project.image || project.image.compact) {
    return (
      <article className="border-t border-line pt-8 sm:pt-10">
        <div
          className={`mx-auto w-full max-w-page ${
            project.image
              ? "grid items-center gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:gap-x-14"
              : "flex flex-col gap-4 px-5 sm:flex-row sm:items-end sm:justify-between sm:gap-12 sm:px-8"
          }`}
        >
          <div className={project.image ? "min-w-0 lg:col-span-6" : "min-w-0 max-w-3xl"}>
            <ProjectTitle index={index} name={project.name} size="compact" />
            <p className="mt-4 max-w-prose text-lg leading-8 text-pretty text-muted">
              {project.description}
            </p>
            <ProjectLinks projectName={project.name} links={links} />
          </div>
          {project.image ? (
            <div className="min-w-0 lg:col-span-6">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                sizes="(min-width: 1024px) 480px, 100vw"
                className="h-auto w-full border border-line lg:ml-auto lg:block lg:max-h-[30rem] lg:max-w-[21.55rem]"
              />
            </div>
          ) : null}
        </div>
      </article>
    );
  }

  const imageOnRight = project.image.placement === "right";
  const highlightsId = `${slug(project.name)}-highlights`;

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">
      <div
        className={
          imageOnRight
            ? `order-2 bg-stone py-8 sm:py-10 lg:col-span-6 lg:flex lg:items-center lg:py-12 lg:pl-10 ${pageInsetEnd}`
            : "order-2 flex items-center justify-center bg-ink px-8 py-10 lg:order-1 lg:col-span-5 lg:py-14"
        }
      >
        <div className={imageOnRight ? "w-full" : "w-full max-w-[20rem]"}>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes={
              imageOnRight
                ? "(min-width: 1024px) 760px, 100vw"
                : "(min-width: 1024px) 320px, 80vw"
            }
            className="h-auto w-full"
          />
        </div>
      </div>

      <div
        className={
          imageOnRight
            ? `order-1 py-2 lg:col-span-6 lg:py-12 lg:pr-10 ${pageInset}`
            : `order-1 py-8 lg:order-2 lg:col-span-7 lg:py-14 lg:pl-14 ${pageInsetEnd}`
        }
      >
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-ink">
          {project.category}
        </p>
        <ProjectTitle index={index} name={project.name} size="feature" />
        <p className="mt-5 max-w-prose text-lg leading-8 text-pretty text-muted">
          {project.description}
        </p>
        <ProjectLinks projectName={project.name} links={links} />
        <p id={highlightsId} className="mt-8 text-base font-medium text-foreground">
          Highlights
        </p>
        <ul aria-labelledby={highlightsId} className="mt-3 space-y-3">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-base leading-7 text-muted"
            >
              <span
                aria-hidden="true"
                className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-ink"
              />
              <span className="min-w-0">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ProjectTitle({
  index,
  name,
  size,
}: {
  index: string;
  name: string;
  size: "feature" | "compact";
}) {
  const type =
    size === "feature"
      ? "font-serif text-[clamp(3.5rem,6.5vw,6rem)] leading-[0.92] tracking-tight"
      : "font-serif text-4xl leading-tight tracking-tight sm:text-5xl";

  return (
    <div className="mt-3 flex min-w-0 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
      <span aria-hidden="true" className={`${type} shrink-0 text-quiet`}>
        {index}
      </span>
      <h3 className={`${type} min-w-0 text-balance text-foreground`}>{name}</h3>
    </div>
  );
}

function ProjectLinks({
  projectName,
  links,
  className = "",
}: {
  projectName: string;
  links: CardLink[];
  className?: string;
}) {
  if (links.length === 0) return null;

  return (
    <div className={className}>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        {links.map((link) => (
          <SiteLink
            key={link.label}
            href={link.href}
            variant={link.variant}
            ariaLabel={projectLinkLabel(projectName, link.label)}
          >
            {link.label}
          </SiteLink>
        ))}
      </div>
      {projectName === "Roof Inspector" ? (
        <p className="mt-1.5 text-xs leading-4 text-muted">
          First load may take up to 60 seconds while the prototype starts.
        </p>
      ) : null}
    </div>
  );
}

function projectLinks(project: Project): CardLink[] {
  return [
    { ...project.primaryLink, variant: "primary" as const },
    ...project.secondaryLinks.slice(0, 1).map((link) => ({
      ...link,
      variant: "accent" as const,
    })),
  ].filter((link) => link.href.trim().length > 0);
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
