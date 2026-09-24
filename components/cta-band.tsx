import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'

export function CtaBand({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
}) {
  return (
    <section className="relative overflow-hidden border-t-4 border-copper bg-ink-deep bg-ledger-dark">
      <div className="relative mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow tone="copper" className="[&>span:last-child]:text-copper-soft">
              {eyebrow}
            </Eyebrow>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] text-paper text-stamp-light md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-paper/70">{description}</p>
          </div>
          <Link
            href={ctaHref}
            className="group flex shrink-0 items-center gap-3 border border-ink/10 bg-copper px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-ink shadow-[6px_6px_0_0_var(--copper-deep)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_0_var(--copper-deep)]"
          >
            {ctaLabel}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
