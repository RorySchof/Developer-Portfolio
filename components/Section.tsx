import type { ReactNode } from "react";

export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-page px-5 py-16 sm:px-8 sm:py-20">
        <h2
          id={headingId}
          className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl"
        >
          {title}
        </h2>
        {intro ? (
          <p className="mt-4 max-w-prose text-lg leading-8 text-muted">
            {intro}
          </p>
        ) : null}
        <div className={intro ? "mt-10" : "mt-8"}>{children}</div>
      </div>
    </section>
  );
}
