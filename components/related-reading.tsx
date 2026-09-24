import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { getRelated, type PageKey } from '@/lib/nav'
import { Eyebrow } from '@/components/eyebrow'

export function RelatedReading({ keys, title = 'Continue the file' }: { keys: PageKey[]; title?: string }) {
  const items = getRelated(keys)
  return (
    <section className="border-t border-rule bg-paper-dark">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <Eyebrow>Cross-reference</Eyebrow>
        <h2 className="mt-4 font-display text-2xl font-semibold text-ink md:text-3xl">{title}</h2>
        <div className="mt-10 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col justify-between gap-4 bg-paper p-6 transition-colors hover:bg-paper-dark md:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-copper">
                  {item.tag}
                </span>
                <ArrowUpRight className="size-4 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper" />
              </div>
              <div>
                <p className="font-display text-lg leading-snug text-ink">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
