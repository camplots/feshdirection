import type { Metadata } from 'next'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { Eyebrow } from '@/components/eyebrow'
import { PullQuote } from '@/components/pull-quote'
import { Callout } from '@/components/callout'
import { ComparisonBars } from '@/components/comparison-bars'
import { RelatedReading } from '@/components/related-reading'
import { ReportP, ReportToc } from '@/components/report-prose'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Empty, EmptyDescription, EmptyTitle } from '@/components/ui/empty'

export const metadata: Metadata = {
  title: 'The Industry — Watts Better',
  description:
    'Record battery installations — and a regulator finding problems with most of the systems it inspects.',
}

const toc = [
  { id: 'compliance-picture', label: 'The compliance picture' },
  { id: 'incentive-clock', label: 'The incentive clock' },
  { id: 'queensland', label: 'In Queensland specifically' },
  { id: 'why-batteries', label: 'Why batteries, not panels' },
  { id: 'how-sold', label: 'How people get sold to' },
  { id: 'whats-changing', label: "What's changing" },
  { id: 'what-it-means', label: 'What it means for you' },
  { id: 'sources', label: 'Sources' },
]

const stcSchedule = [
  { period: 'January – April 2026', factor: '8.4' },
  { period: 'May – December 2026', factor: '6.8' },
  { period: 'January – June 2027', factor: '5.7' },
  { period: 'July – December 2027', factor: '5.2' },
  { period: '… to December 2030', factor: '2.1' },
]

const changing = [
  {
    title: 'The regulator is acting',
    body: 'In one quarter (April–June 2026) the CER suspended 21 companies from the scheme, and it is expanding its inspection program. New photo evidence requirements took effect on 1 March 2026 specifically to lift labelling compliance.',
  },
  {
    title: 'Accreditation moved',
    body: 'Solar Accreditation Australia took over installer accreditation from the Clean Energy Council on 29 May 2024. It has separate classes for grid-connected PV, grid-connected battery systems, and stand-alone systems — and a solar accreditation does not qualify someone to install a battery.',
  },
  {
    title: 'The battery standard got harder',
    body: 'Amendment 1 to AS/NZS 5139 became mandatory on 19 December 2025, changing location, clearance and ventilation requirements for battery systems.',
  },
  {
    title: 'Inverter connections tightened',
    body: 'AS/NZS 4777.1:2024 has applied to new low-voltage inverter connections since 23 February 2025.',
  },
  {
    title: 'Consumer protection exists',
    body: "The New Energy Tech Consumer Code now covers 2,000+ approved sellers — though it's voluntary, and not every seller has signed up.",
  },
  {
    title: 'Products can still be recalled',
    body: 'In November 2025, one approved battery controller was recalled on electrical safety grounds — a reminder that "on the approved list" is a starting point, not a guarantee.',
  },
]

export default function TheIndustryPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Learn"
          fileNumber="IND-01"
          title="What the numbers say."
          intro="Record battery installations — and a regulator finding problems with most of the systems it inspects."
        >
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border border-rule bg-card p-7">
              <p className="text-[15px] leading-relaxed text-ink">
                Home batteries installed in the twelve months from 1 July 2025 — 13.58 GWh of
                storage, across households and small businesses.
              </p>
            </div>
            <div className="border border-rule bg-card p-7">
              <p className="font-display text-5xl leading-none text-copper">62.28%</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                of inspected battery installations rated substandard by the Clean Energy
                Regulator — technically non-compliant, though safe to remain in operation.
              </p>
            </div>
          </div>
        </PageHero>

        <Section bg="paper-dark">
          <PullQuote>
            The era of the battery as a premium add-on is over. It&apos;s now the main event. At
            the same time, the regulator that oversees the rebate is finding problems with a
            majority of the installations it inspects. Both of those are true.
          </PullQuote>
        </Section>

        <Section className="!py-0">
          <div className="flex gap-16 py-16 md:py-24">
            <ReportToc items={toc} />
            <div className="min-w-0 flex-1">
              {/* Compliance picture */}
              <section id="compliance-picture" className="scroll-mt-28">
                <Eyebrow>The compliance picture</Eyebrow>
                <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
                  The Clean Energy Regulator inspects a statistically significant sample of
                  battery installations that claim the federal rebate.
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
                  As at 30 June 2026, it had inspected 3,425 — 718 of them in Queensland.
                </p>

                <div className="mt-8">
                  <ComparisonBars
                    items={[
                      {
                        label: 'Substandard (technical non-compliance)',
                        value: 62.28,
                        tone: 'copper',
                        note: 'Must be rectified by the installer. Safe to remain in operation.',
                      },
                      {
                        label: 'Unsafe',
                        value: 0.76,
                        tone: 'oxblood',
                        note: 'Rectified before the system can be switched back on.',
                      },
                      {
                        label: 'Adequate',
                        value: 36.95,
                        tone: 'ink-soft',
                        note: 'Meets the required standards.',
                      },
                    ]}
                  />
                </div>

                <div className="mt-10">
                  <Callout label="The regulator's words" tone="oxblood">
                    <p>
                      &ldquo;Substandard&rdquo; does not mean the whole system is a dud.
                      Typically, it is one or two items found in the installation that does not
                      affect performance but may affect those working on or around the system in
                      future.
                    </p>
                    <p className="mt-3">
                      The CER also cautions that it&apos;s early days: &ldquo;It&apos;s too early
                      to draw strong conclusions about the rate of technical compliance under the
                      scheme.&rdquo;
                    </p>
                    <p className="mt-3">
                      Queensland&apos;s rate is the highest of the states the report covers.
                    </p>
                  </Callout>
                </div>

                <div className="mt-8">
                  <PullQuote cite="Clean Energy Regulator">
                    No installation had a problem with the battery itself. Every issue was
                    non-compliant installation practice and substandard workmanship.
                  </PullQuote>
                </div>

                <p className="mt-8 text-[15px] leading-relaxed text-ink-soft">
                  The most common failure isn&apos;t exotic. It&apos;s labelling:
                </p>
                <ol className="mt-5 flex flex-col gap-4">
                  {[
                    'Warning labels at the main switchboard and any intermediate distribution board',
                    'Correct labelling of backed-up circuits — the ones still live when the main switch is off',
                    'The green reflective "ES" label that tells emergency services a battery is on site',
                  ].map((item, i) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="font-mono text-xs text-copper">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-[15px] leading-relaxed text-ink">{item}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
                  Then: incorrectly configured or missing RCDs, insufficient mechanical and fire
                  protection, and inadequate overcurrent protection for inverter circuits.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  None of this is visible in a photo of a tidy-looking install. All of it matters
                  to the electrician who works on your switchboard in ten years — and to the
                  firefighter who arrives at your house at 2am.
                </p>
              </section>

              {/* Incentive clock */}
              <section id="incentive-clock" className="mt-16 scroll-mt-28 border-t border-rule pt-12">
                <Eyebrow>The incentive clock</Eyebrow>
                <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
                  The federal Cheaper Home Batteries Program is the main subsidy for storage in
                  Australia.
                </h2>
                <ReportP>
                  It&apos;s delivered through STCs, and its value steps down twice a year on a
                  published schedule:
                </ReportP>

                <div className="mt-6 border border-rule">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Period</TableHead>
                        <TableHead className="text-right">STC factor</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {stcSchedule.map((row) => (
                        <TableRow key={row.period}>
                          <TableCell>{row.period}</TableCell>
                          <TableCell className="text-right font-mono">{row.factor}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
                  Since 1 May 2026, the discount is also tiered by capacity. Support is strongest
                  on the first 14 kWh of usable storage, and falls away sharply above that.
                </p>

                <div className="mt-6">
                  <Callout label="The practical consequence" tone="copper">
                    The same battery costs more every six months. Waiting isn&apos;t neutral —
                    it&apos;s a decision with a price on it.
                  </Callout>
                </div>
              </section>

              {/* Queensland */}
              <section id="queensland" className="mt-16 scroll-mt-28 border-t border-rule pt-12">
                <Eyebrow>In Queensland specifically</Eyebrow>
                <div className="mt-6 flex flex-col gap-4">
                  <ReportP>
                    The former state Battery Booster program closed in May 2024. There is no
                    standalone Queensland battery rebate today.
                  </ReportP>
                  <ReportP>
                    The Queensland Government&apos;s Supercharged Solar for Renters scheme
                    (opened December 2025) offers landlords up to $3,500 to install solar on a
                    rental property.
                  </ReportP>
                  <ReportP>
                    Home Energy Support offers up to $2,500 to eligible concession-card holders.
                  </ReportP>
                  <ReportP>
                    The legacy 44-cent Solar Bonus Scheme feed-in tariff ends on 1 July 2028.
                  </ReportP>
                </div>
              </section>

              {/* Why batteries */}
              <section id="why-batteries" className="mt-16 scroll-mt-28 border-t border-rule pt-12">
                <Eyebrow>Why batteries, not panels, are now the story</Eyebrow>
                <ReportP>
                  For most of the last decade, solar paid for itself through a combination of
                  self-consumption and feed-in tariffs. Feed-in tariffs have collapsed. Retailers
                  now pay roughly 3–8 cents per kWh for exported solar, while peak grid
                  electricity costs 30–45 cents.
                </ReportP>
                <div className="mt-6">
                  <Callout label="The battery argument" tone="oxblood">
                    That gap — roughly six to one — is the entire battery argument. A battery
                    earns its keep by displacing the most expensive power you&apos;d otherwise
                    buy.
                  </Callout>
                </div>
                <ReportP>
                  Which is why the household matters more than the hardware. A battery sized to
                  a low-usage home earns back less, amortises over fewer cycles, and takes longer
                  to pay off. Averages hide that. Your bill doesn&apos;t.
                </ReportP>
              </section>

              {/* How people get sold to */}
              <section id="how-sold" className="mt-16 scroll-mt-28 border-t border-rule pt-12">
                <Eyebrow>How people get sold to</Eyebrow>
                <ReportP>
                  Solar is a high-value, once-a-decade purchase made by people who&apos;ve never
                  bought one before — which makes it a magnet for poor practice.
                </ReportP>
                <div className="mt-8 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2">
                  <div className="bg-paper p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-copper">
                      Referral marketplaces
                    </p>
                    <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed text-ink-soft">
                      <li>You submit one enquiry</li>
                      <li>The service sells it to installers, sometimes several at once</li>
                      <li>The service is paid per lead regardless of whether the work is any good</li>
                      <li>The installer&apos;s cost of acquiring you gets built into the price you&apos;re quoted</li>
                    </ul>
                  </div>
                  <div className="bg-paper p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-oxblood">
                      Direct sales
                    </p>
                    <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed text-ink-soft">
                      <li>In-home appointments</li>
                      <li>Rebate-deadline urgency</li>
                      <li>A quote prepared on the spot</li>
                    </ul>
                  </div>
                </div>
                <ReportP>
                  Consumer advocates have documented the recurring problems: a lazy,
                  one-size-fits-all quote; an offer well below the going rate that usually means
                  cheaper components; a &ldquo;free eligibility check&rdquo; that&apos;s really a
                  lead-capture form; and baiting with quality equipment before swapping it for
                  something cheaper at signing.
                </ReportP>
                <ReportP>
                  None of that is universal — there are excellent installers using both models.
                  But the failure modes are consistent enough to be worth knowing before anyone
                  knocks on your door.
                </ReportP>
              </section>

              {/* What's changing */}
              <section id="whats-changing" className="mt-16 scroll-mt-28 border-t border-rule pt-12">
                <Eyebrow>What&apos;s changing</Eyebrow>
                <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
                  The industry is being tightened up, which is good news for homeowners who know
                  what to look for:
                </h2>
                <div className="mt-8 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2">
                  {changing.map((item, i) => (
                    <div key={item.title} className="bg-paper p-6">
                      <span className="font-mono text-xs text-copper">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="mt-2 font-display text-lg text-ink">{item.title}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* What it means for you */}
              <section id="what-it-means" className="mt-16 scroll-mt-28 border-t border-rule pt-12">
                <Eyebrow>What it means for you</Eyebrow>
                <ReportP>Four things follow from all of the above:</ReportP>
                <Empty className="mt-6 border border-dashed border-rule bg-paper-dark p-8">
                  <EmptyTitle className="font-mono text-xs text-copper">01</EmptyTitle>
                  <EmptyDescription className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">
                    Awaiting your words
                  </EmptyDescription>
                </Empty>
              </section>

              {/* Sources */}
              <section id="sources" className="mt-16 scroll-mt-28 border-t border-rule pt-12">
                <Eyebrow>Sources</Eyebrow>
                <ul className="mt-6 flex flex-col gap-3 text-[13px] leading-relaxed text-ink-soft">
                  <li>Clean Energy Regulator — Solar battery inspection results report, last updated 21 August 2026</li>
                  <li>Clean Energy Regulator — Cheaper Home Batteries Program solar battery requirements, and quarterly compliance updates</li>
                  <li>Department of Climate Change, Energy, the Environment and Water — Cheaper Home Batteries STC factor schedule</li>
                  <li>Queensland Government / Queensland Treasury — Supercharged Solar for Renters; Solar Bonus Scheme</li>
                  <li>Solar Accreditation Australia — accreditation classes and requirements; AS/NZS 5033, 4777.1, 5139</li>
                  <li>CHOICE — buying solar: what to watch for</li>
                </ul>
                <p className="mt-6 text-xs text-ink-soft/70">
                  Last updated: 19th September 2026 — this page is reviewed as the regulator
                  publishes new inspection results and as incentive settings change.
                </p>
              </section>
            </div>
          </div>
        </Section>

        <RelatedReading keys={['installation-inspections', 'blog', 'how-we-are-paid']} />
      </main>
      <SiteFooter />
    </div>
  )
}
