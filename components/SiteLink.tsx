import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "quiet" | "outline" | "accent";

const variants: Record<Variant, string> = {
  primary:
    "inline-flex min-h-12 items-center gap-2.5 border border-ink bg-ink px-4 py-2.5 text-base font-medium leading-none text-white transition-colors hover:bg-background hover:text-ink",
  secondary:
    "inline-flex min-h-12 items-center text-base font-medium text-foreground underline decoration-foreground/25 underline-offset-[6px] transition-colors hover:decoration-foreground",
  quiet:
    "inline-flex h-8 items-center text-sm text-muted underline decoration-transparent underline-offset-[5px] transition-colors hover:text-foreground hover:decoration-line",
  outline:
    "inline-flex h-11 items-center justify-center border border-line bg-surface px-4 text-sm font-medium text-foreground transition-colors hover:border-foreground/30",
  accent:
    "inline-flex min-h-12 items-center gap-1.5 text-base font-medium text-ink underline decoration-ink/35 underline-offset-[7px] transition-colors hover:text-ink-hover hover:decoration-ink",
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function linkClass(variant: Variant, className = "") {
  return `${variants[variant]} ${className}`.trim();
}

export function SiteLink({
  href,
  children,
  variant = "secondary",
  ariaLabel,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  ariaLabel?: string;
  className?: string;
}) {
  const classes = linkClass(variant, className);
  const available = href.trim().length > 0;
  const showArrow = variant === "primary" || variant === "accent";

  if (!available) {
    return (
      <span className={classes} title="URL not added yet">
        {children}
        {showArrow ? <ExternalArrow /> : null}
      </span>
    );
  }

  const external = isExternalHref(href);

  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {showArrow && external ? <ExternalArrow /> : null}
    </a>
  );
}

function ExternalArrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M4 10 L10 4 M5.5 4 H10 V8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
