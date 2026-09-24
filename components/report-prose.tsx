import { cn } from 'cn'

export function ReportSection({
  id,
  title,
  children,
  first = false,
}: {
  id: string
  title: string
  children: React.ReactNode
  first?: boolean
}) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-28 border-t border-rule pt-12 first:mt-0 first:border-t-0 first:pt-0', 'mt-16')}
    >
      <h2 className="font-display text-2xl leading-tight text-ink md:text-3xl">{title}</h2>
      <div className="mt-6 flex flex-col gap-5">{children}</div>
    </section>
  )
}

export function ReportP({ children }: { children: React.ReactNode }) {
  return <p className="text-[15px] leading-relaxed text-ink-soft md:text-base">{children}</p>
}

export function ReportLead({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-xl font-medium leading-snug text-ink md:text-2xl">{children}</p>
  )
}

export function ReportList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft md:text-base">
          <span className="mt-2.5 size-1 shrink-0 bg-copper" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ReportTwoCol({
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
}: {
  leftTitle: string
  leftItems: string[]
  rightTitle: string
  rightItems: string[]
}) {
  return (
    <div className="grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2">
      <div className="bg-paper p-6 md:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-oxblood">{leftTitle}</p>
        <ul className="mt-5 flex flex-col gap-3">
          {leftItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] text-ink">
              <span className="mt-1 text-oxblood">+</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-paper-dark p-6 md:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">{rightTitle}</p>
        <ul className="mt-5 flex flex-col gap-3">
          {rightItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] text-ink-soft">
              <span className="mt-1">–</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

interface TocItem {
  id: string
  label: string
}

export function ReportToc({ items }: { items: TocItem[] }) {
  return (
    <nav aria-label="Report contents" className="sticky top-24 hidden max-h-[calc(100vh-8rem)] w-60 shrink-0 overflow-y-auto lg:block">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">Contents</p>
      <ol className="mt-5 flex flex-col gap-3 border-l border-rule pl-4">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-[13px] leading-snug text-ink-soft transition-colors hover:text-copper"
            >
              <span className="mr-1.5 font-mono text-[11px] text-copper-soft">
                {String(i + 1).padStart(2, '0')}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
