import { technologyGroups } from "@/lib/content";
import { Section } from "@/components/Section";

export function Technologies() {
  return (
    <Section id="technologies" title="Technologies">
      <dl className="grid sm:grid-cols-2 sm:gap-x-16">
        {technologyGroups.map((group) => (
          <div key={group.title} className="border-t border-line py-6 sm:py-7">
            <dt className="text-sm font-medium uppercase tracking-[0.14em] text-ink">
              {group.title}
            </dt>
            <dd>
              <ul className="mt-3 flex flex-wrap items-baseline text-base leading-7 text-foreground">
                {group.items.map((item, index) => (
                  <li key={item} className="whitespace-nowrap">
                    {item}
                    {index < group.items.length - 1 ? (
                      <span aria-hidden="true" className="px-1.5 text-quiet">
                        ·
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
