"use client";

import { useEffect, useId, useRef, useState } from "react";
import { navigation, site } from "@/lib/content";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    function onChange() {
      if (media.matches) setOpen(false);
    }

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-page items-center justify-between px-5 sm:h-16 sm:px-8">
        <a
          href="#top"
          className="text-base font-medium tracking-tight text-foreground"
        >
          {site.name}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex h-11 items-center text-base text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-11 items-center px-1 text-base text-foreground md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id={menuId}
          aria-label="Mobile"
          className="border-t border-line md:hidden"
        >
          <ul className="mx-auto w-full max-w-page px-5 py-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex h-12 items-center text-base text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
