import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calculator, FileClock } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Section } from '@/components/section'
import { PageHero } from '@/components/page-hero'
import { RelatedReading } from '@/components/related-reading'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'

export const metadata: Metadata = {
  title: 'Tools — Watts Better',
  description: 'Calculators, guides and resources to help you understand your solar and battery options.',
}

export default function ToolsPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Learn"
          fileNumber="TL-01"
          title="Tools"
          intro="Calculators, guides and resources to help you understand your solar and battery options."
        />

        <Section className="!py-0">
          <div className="grid gap-px overflow-hidden border border-rule bg-rule py-16 sm:grid-cols-2 md:py-24">
            <Link
              href="/calculator"
              className="group flex flex-col justify-between gap-6 bg-paper p-8 transition-colors hover:bg-paper-dark md:p-10"
            >
              <Calculator className="size-6 text-copper" strokeWidth={1.5} />
              <div>
                <h2 className="font-display text-2xl text-ink">The Calculator</h2>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
                  Start your assessment with your energy use.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-copper-deep group-hover:text-copper">
                  Open tool
                  <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>

            <div className="flex flex-col justify-between gap-6 bg-paper p-8 md:p-10">
              <Empty className="border-none p-0 text-left">
                <EmptyHeader className="max-w-none items-start text-left">
                  <EmptyMedia variant="icon">
                    <FileClock strokeWidth={1.5} />
                  </EmptyMedia>
                  <EmptyTitle className="font-display text-2xl font-normal normal-case text-ink">
                    More tools
                  </EmptyTitle>
                  <EmptyDescription className="text-left font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">
                    Awaiting your words
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            </div>
          </div>
        </Section>

        <RelatedReading keys={['blog', 'the-report', 'the-industry']} />
      </main>
      <SiteFooter />
    </div>
  )
}
