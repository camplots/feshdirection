import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Section } from '@/components/section'
import { Eyebrow } from '@/components/eyebrow'
import { Callout } from '@/components/callout'
import { ProcessStepper } from '@/components/process-stepper'
import { RelatedReading } from '@/components/related-reading'
import { ReportList, ReportP } from '@/components/report-prose'

export const metadata: Metadata = {
  title: 'How Introductions Work — Watts Better',
  description:
    'After reviewing your results, Watts Better can arrange one installer introduction and only share the information you specifically approve.',
}

const steps = [
  { number: '01', title: 'You review your results', description: 'You use the calculator, review your results, and consider the questions you want to ask.' },
  { number: '02', title: 'You request an introduction', description: 'You tell us that you would like to speak with an installer.' },
  { number: '03', title: 'You approve the information shared', description: 'You choose what information the installer receives.' },
  { number: '04', title: 'We arrange one introduction', description: 'We connect you with one installer we are prepared to introduce.' },
  { number: '05', title: 'The installer assesses your property', description: 'The installer conducts the site assessment and prepares the final design and quote.' },
]

export default function HowIntroductionsWorkPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Process"
          fileNumber="IN-01"
          title="One introduction. If you request."
          intro="After reviewing your results, you may decide that you would like to speak with an installer. If so, Watts Better can help arrange one introduction and only share the information you specifically approve."
        />

        <Section className="!py-0">
          <div className="grid gap-14 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
            <div className="flex flex-col gap-12">
              <div>
                <Eyebrow>Start with your results</Eyebrow>
                <h2 className="mt-5 font-display text-2xl text-ink md:text-3xl">
                  Before requesting an introduction, you can use Watts Better to understand:
                </h2>
                <div className="mt-6">
                  <ReportList
                    items={[
                      'How your home uses energy',
                      'Your tariff and usage pattern',
                      'Your existing solar or battery position',
                      'The solar and battery options worth exploring',
                      'The questions to take into the quoting process',
                    ]}
                  />
                </div>
                <ReportP>
                  You can review your results without requesting an installer introduction.
                </ReportP>
              </div>

              <div>
                <Eyebrow tone="oxblood">Who we&apos;ll consider introducing</Eyebrow>
                <h2 className="mt-5 font-display text-2xl text-ink md:text-3xl">
                  We do not introduce every business that sells solar.
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  Before we consider an introduction, we look at:
                </p>
                <div className="mt-6">
                  <ReportList
                    items={[
                      'The business identity',
                      'Relevant licensing',
                      'Who performs the installation work',
                      'How customers are supported afterward',
                      'Whether the business can stand behind its work',
                      'Whether it is prepared to cooperate with independent inspection',
                    ]}
                  />
                </div>
                <ReportP>
                  The installer remains responsible for the final system design, installation,
                  certification, and customer service.
                </ReportP>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Image
                src="/images/introductions-path.png"
                alt="Diagram of many paths converging into a single considered introduction"
                width={560}
                height={420}
                className="w-full border border-rule"
              />
              <Callout label="Your details" tone="copper">
                We do not share your details unless you specifically request us to.
              </Callout>
              <Callout label="You decide what happens next" tone="oxblood">
                <div>
                  <ReportList
                    items={[
                      'Whether to request an introduction',
                      'When to request it',
                      'What information to share',
                      'Whether to speak with the installer',
                      'Whether to accept the quote',
                      'Whether to proceed with an installation',
                    ]}
                  />
                </div>
              </Callout>
            </div>
          </div>
        </Section>

        <Section bg="paper-dark">
          <Eyebrow>What the installer does</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight text-ink md:text-4xl">
            The installer handles the technical process, including:
          </h2>
          <div className="mt-8 max-w-2xl">
            <ReportList
              items={[
                'Assessing your property',
                'Confirming what can be installed',
                'Preparing the final system design',
                'Selecting the equipment',
                'Providing the quote',
                'Explaining the installation',
                'Completing the installation',
                'Providing the required certification and documentation',
              ]}
            />
          </div>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            Watts Better does not complete the final system design or installation.
          </p>
        </Section>

        <Section>
          <Eyebrow>How an introduction works</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight text-ink md:text-4xl">
            Six steps, in order, every time.
          </h2>
          <div className="mt-10">
            <ProcessStepper steps={steps} />
          </div>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-copper-deep">06 · </span>
            You decide whether to proceed. Requesting an introduction does not commit you to an
            installation, a quote, or a purchase.
          </p>
        </Section>

        <Section bg="paper-dark">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <Eyebrow>Independent inspection after installation</Eyebrow>
              <p className="mt-5 text-[15px] leading-relaxed text-ink">
                If you proceed with an installer introduced through Watts Better, we arrange an
                independent inspection after installation at no additional cost to you.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                The inspection assesses the completed installation for:
              </p>
              <div className="mt-4">
                <ReportList
                  items={[
                    'Compliance',
                    'Workmanship',
                    'Safety',
                    'Functioning',
                    'Early performance, where data is available',
                  ]}
                />
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-ink">
                You receive the independent inspection report.
              </p>
              <Link
                href="/installation-inspections"
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-copper-deep hover:text-copper"
              >
                How the inspection works
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <Callout label="How we're paid" tone="oxblood">
              <p>
                If you ask us to make an installer introduction and then proceed with that
                installer, they will pay Watts Better an introducer fee.
              </p>
              <p className="mt-4">
                Part of that fee funds the independent inspection and report. The rest covers our
                advice and coordination.
              </p>
              <Link
                href="/how-we-are-paid"
                className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-oxblood hover:text-oxblood-deep"
              >
                See the full breakdown
                <ArrowRight className="size-3.5" />
              </Link>
            </Callout>
          </div>
        </Section>

        <Section className="text-center">
          <Eyebrow className="justify-center">Final action</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
            If you would like to speak with an installer, request an introduction and choose what
            information you would like us to share.
          </h2>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center gap-3 border border-ink bg-ink px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ink/85"
          >
            Request an introduction
            <ArrowRight className="size-4" />
          </Link>
        </Section>

        <RelatedReading keys={['the-report', 'how-we-are-paid', 'installation-inspections']} />
      </main>
      <SiteFooter />
    </div>
  )
}
