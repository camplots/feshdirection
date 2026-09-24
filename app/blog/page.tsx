import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { Eyebrow } from '@/components/eyebrow'
import { RelatedReading } from '@/components/related-reading'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Knowledge — Watts Better',
  description: 'Understanding bills, tariffs, usage patterns, payback, batteries and Queensland specifics.',
}

interface Article {
  title?: string
  date?: string
  excerpt: string
}

interface Category {
  number: string
  title: string
  description: string
  articles: Article[]
}

const categories: Category[] = [
  {
    number: '01',
    title: 'Your numbers',
    description: 'Understanding bills, tariffs, usage patterns and payback.',
    articles: [
      {
        title: 'The 2026 Battery Payback Reality: Why Averages Fail Australian Homeowners',
        date: 'September 2026',
        excerpt:
          'Stop relying on misleading averages. What battery payback really looks like for Australian homeowners, and how to calculate your own.',
      },
      {
        title: 'Your Tariff Can Make or Break Your Solar Return',
        date: 'August 2026',
        excerpt:
          "Time-of-use tariffs charge different rates at different times of day. How your tariff's clock shapes solar value, battery economics, and whether changing plans beats installing equipment.",
      },
      {
        title: 'How to compare solar and battery quotes in Brisbane',
        date: 'September 2026',
        excerpt:
          'The cheapest quote is not always the cheapest system. Compare system size, equipment, assumptions, warranties, installation scope and after-sales support.',
      },
      {
        title: 'Why one installer introduction can be better than three quotes',
        date: 'September 2026',
        excerpt:
          'More quotes do not automatically create more clarity. A useful benchmark can be more valuable than several proposals built on different assumptions.',
      },
      {
        title: 'Same battery, different plan',
        excerpt:
          'Two households can buy the same battery and achieve very different results — and the same household can get different results simply by changing electricity plans.',
      },
    ],
  },
  {
    number: '02',
    title: 'PV and batteries',
    description: 'Understanding system sizing, battery value and solar-only options.',
    articles: [
      {
        title: 'Is a home battery worth it in Brisbane?',
        excerpt:
          'A battery is not automatically the right choice. Your tariff, usage pattern, solar system and evening demand matter more than a national average.',
      },
      {
        title: 'Solar only, battery later, or both?',
        excerpt:
          'A battery can be valuable, but not every home should add one immediately. Compare the pathways before choosing the equipment.',
      },
      {
        title: 'Why some home batteries cost more',
        excerpt:
          'Two batteries can look similar on a quote while creating very different ownership experiences. What the price does and does not include.',
      },
      {
        title: 'Why some solar panels cost so much less',
        excerpt:
          'Lower panel prices have made solar more accessible. But what are you giving up when one panel costs significantly less than another?',
      },
      {
        title: 'Buying a battery today that you can expand tomorrow',
        excerpt:
          '"Start with a smaller battery and add more later" can be sensible — but only if the expansion rules support your likely timeframe.',
      },
      {
        title: "Your roof may limit your battery — here's where bidirectional charging fits",
        excerpt:
          'A battery cannot create more solar energy than your roof allows. If your household needs more stored energy than your roof can produce, bidirectional EV charging may be part of the answer.',
      },
    ],
  },
  {
    number: '03',
    title: 'Queensland',
    description: 'Local rebates, feed-in tariffs, accreditation and Brisbane-specific considerations.',
    articles: [
      {
        excerpt:
          'The Cheaper Home Batteries Program changes its STC factor every six months. Here is what Brisbane homeowners need to understand before relying on a rebate estimate.',
      },
      {
        excerpt:
          'Solar PV and battery work are not the same accreditation category. Here is what homeowners should check before accepting a quote.',
      },
      {
        title: 'How to check who is actually responsible for your solar installation',
        excerpt:
          "A company can advertise solar and batteries without making it obvious who will design, install and sign off the work. Here's how to check.",
      },
    ],
  },
  {
    number: '04',
    title: 'Inspection and quality',
    description: 'Installation standards, documentation, workmanship and independent inspection.',
    articles: [
      {
        excerpt:
          'The Clean Energy Regulator reports that 62.28% of inspected battery installations were rated substandard. That figure needs context.',
      },
    ],
  },
]

export default function BlogPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Learn"
          fileNumber="KN-01"
          title="Knowledge"
          intro="Understanding bills, tariffs, usage patterns, payback, batteries and Queensland specifics."
        />

        {categories.map((category, ci) => (
          <Section key={category.title} bg={ci % 2 === 0 ? 'paper' : 'paper-dark'}>
            <div className="flex flex-col gap-2 border-b border-rule pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>{category.number} · {category.title}</Eyebrow>
                <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
                  {category.title}
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                {category.description}
              </p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
              {category.articles.map((article, i) => (
                <article key={i} className="flex flex-col gap-3 bg-paper p-6">
                  {article.date && (
                    <Badge variant="secondary" className="w-fit font-mono text-[10px] uppercase tracking-[0.1em]">
                      {article.date}
                    </Badge>
                  )}
                  {article.title && (
                    <h3 className="font-display text-lg leading-snug text-ink">{article.title}</h3>
                  )}
                  <p className="text-[13px] leading-relaxed text-ink-soft">{article.excerpt}</p>
                </article>
              ))}
            </div>
          </Section>
        ))}

        <RelatedReading keys={['the-industry', 'the-report', 'tools']} />
      </main>
      <SiteFooter />
    </div>
  )
}
