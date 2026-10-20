import { site, urls } from "@/lib/content";
import { SiteLink } from "@/components/SiteLink";

export function Hero() {
  const [roleLead, ...roleRest] = site.role.split(" · ");

  return (
    <section aria-labelledby="hero-heading" className="scroll-mt-20">
      <div className="mx-auto grid w-full max-w-page grid-cols-1 items-start px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-x-16">
        <div className="min-w-0 lg:col-span-7">
          <h1
            id="hero-heading"
            className="font-serif text-[clamp(4.5rem,8vw,8rem)] leading-[0.88] tracking-tight text-balance text-foreground"
          >
            {site.name}
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl italic leading-snug text-pretty text-foreground sm:text-2xl">
            {roleLead}
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">{roleRest.join(" · ")}</span>
          </p>
        </div>
        <div className="mt-10 min-w-0 lg:col-span-5 lg:mt-24">
          <p className="max-w-prose text-lg leading-8 text-pretty text-muted">
            {site.hero}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <SiteLink
              href={urls.linkedin}
              ariaLabel="Rory Schofield on LinkedIn"
            >
              LinkedIn
            </SiteLink>
            <SiteLink href={urls.github} ariaLabel="Rory Schofield on GitHub">
              GitHub
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}
