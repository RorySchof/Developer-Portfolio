import { site, urls } from "@/lib/content";
import { SiteLink } from "@/components/SiteLink";
import { Section } from "@/components/Section";

export function Contact() {
  return (
    <Section id="contact" title="Let's build something." intro={site.contactIntro}>
      <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-10">
        <li>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-12 items-center font-serif text-2xl text-foreground underline decoration-ink/35 underline-offset-[6px] transition-colors hover:text-ink hover:decoration-ink sm:text-3xl"
          >
            {site.email}
          </a>
        </li>
        <li>
          <SiteLink href={urls.linkedin} ariaLabel="Rory Schofield on LinkedIn">
            LinkedIn
          </SiteLink>
        </li>
        <li>
          <SiteLink href={urls.github} ariaLabel="Rory Schofield on GitHub">
            GitHub
          </SiteLink>
        </li>
      </ul>
    </Section>
  );
}
