import { site, urls } from "@/lib/content";
import { SiteLink } from "@/components/SiteLink";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-page flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-muted">© 2026 {site.name}</p>
        <ul className="flex items-center gap-6">
          <li>
            <SiteLink
              href={urls.github}
              variant="quiet"
              ariaLabel="Rory Schofield on GitHub"
            >
              GitHub
            </SiteLink>
          </li>
          <li>
            <SiteLink
              href={urls.linkedin}
              variant="quiet"
              ariaLabel="Rory Schofield on LinkedIn"
            >
              LinkedIn
            </SiteLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
