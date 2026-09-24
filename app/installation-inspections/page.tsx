import type { Metadata } from 'next'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { Eyebrow } from '@/components/eyebrow'
import { PullQuote } from '@/components/pull-quote'
import { Callout } from '@/components/callout'
import { RelatedReading } from '@/components/related-reading'
import { ReportList, ReportP, ReportTwoCol } from '@/components/report-prose'

export const metadata: Metadata = {
  title: 'Installation Inspections — Watts Better',
  description:
    'A licensed electrical inspector independently assesses your completed solar or battery installation for compliance, workmanship, safety and functioning.',
}

const inspected = [
  {
    title: 'Panel condition',
    body: 'Visually assessed for correct placement, secure mounting, visible installation or shipping damage, and general condition. Where thermal imaging is used, the report can identify panels operating outside expected thermal ranges.',
  },
  {
    title: 'Inverter',
    body: 'Model, capacity, firmware version, operating status and available monitoring information. Where monitoring data is available, early generation can be compared with expected output for the system.',
  },
  {
    title: 'Mounting and structure',
    body: 'Mounting rails, clamps, roof penetration points, sealing, structural installation, and alignment with manufacturer requirements and applicable standards.',
  },
  {
    title: 'Wiring and connections',
    body: 'DC string cables, MC4 connectors, DC isolators, AC isolators, inverter-to-switchboard connections, secure connections, and required labelling.',
  },
  {
    title: 'Generation performance',
    body: 'Where data is available, early generation is compared with expected output for rated system capacity, location, orientation, and operating conditions.',
  },
  {
    title: 'Compliance status',
    body: 'Assessed against applicable requirements, including relevant Australian Standards and inverter connection requirements. The report records the areas assessed and provides clear evidence of the inspection outcome.',
  },
]

export default function InstallationInspectionsPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <PageHero eyebrow="Product" fileNumber="IS-01" title="Don't hope. Insist.">
          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div className="flex flex-col gap-5">
              <ReportP>
                A solar or battery installation should not simply be assumed to be compliant
                because the system has been switched on.
              </ReportP>
              <ReportP>
                The Clean Energy Regulator&apos;s latest solar-battery inspection results show
                that Queensland had the highest share of substandard installations among the
                states included in the report. Across all inspected battery systems, 62.28% were
                rated substandard.
              </ReportP>
            </div>
            <div className="border border-rule bg-card p-8">
              <p className="font-display text-6xl leading-none text-copper md:text-7xl">62.28%</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                of inspected battery systems rated substandard by the Clean Energy Regulator —
                technically non-compliant, although safe to remain in operation.
              </p>
            </div>
          </div>
        </PageHero>

        <Section>
          <div className="grid gap-10 md:grid-cols-[0.8fr_1fr]">
            <div>
              <Eyebrow>Why this matters</Eyebrow>
              <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
                A completed installation can look fine from the ground while important details
                remain unseen.
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <ReportP>
                Independent inspection provides documented assurance that the installation has
                been:
              </ReportP>
              <ReportList
                items={[
                  'Installed properly',
                  'Checked for applicable compliance requirements',
                  'Assessed for safety',
                  'Reviewed for workmanship',
                  'Tested for functioning',
                  'Recorded in a formal report',
                ]}
              />
              <PullQuote>
                You should not have to assume the installation is fine. You should have evidence.
              </PullQuote>
            </div>
          </div>
        </Section>

        {/* What's inspected */}
        <Section bg="paper-dark" className="!py-0">
          <div className="py-16 md:py-24">
            <Eyebrow>What&apos;s inspected</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight text-ink md:text-4xl">
              A licensed electrical inspector independently assesses the accessible parts of your
              installation.
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
              <Image
                src="/images/inspection-panel.png"
                alt="Line-art illustration of a switchboard and inverter being inspected with a magnifying glass"
                width={560}
                height={560}
                className="w-full border border-rule"
              />
              <div className="grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2">
                {inspected.map((item) => (
                  <div key={item.title} className="bg-paper p-6">
                    <h3 className="font-display text-lg text-ink">{item.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* What you receive + process */}
        <Section>
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <Eyebrow>What you receive</Eyebrow>
              <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
                A formal, independent report.
              </h2>
              <div className="mt-6">
                <ReportList
                  items={[
                    'The areas inspected',
                    'The assessment findings',
                    'Relevant photographs or photographic evidence',
                    'Any matters requiring attention',
                    'The overall inspection outcome',
                  ]}
                />
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                The purpose of the report is to give you a clear record of the completed
                installation.
              </p>
            </div>
            <ol className="flex flex-col gap-0 divide-y divide-rule border-y border-rule">
              {[
                { title: 'Your installation is completed', body: 'The installer completes the site work, commissioning, and required documentation.' },
                { title: 'The inspection is arranged', body: 'Where you have proceeded with an installer introduced through Watts Better, we arrange the independent inspection.' },
                { title: 'The installation is assessed', body: 'A licensed electrical inspector assesses the accessible installation and its operation within the agreed inspection scope.' },
                { title: 'You receive the report', body: 'The report is delivered to you so you have documented evidence of what was inspected and the outcome.' },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-5 py-5">
                  <span className="font-mono text-xs text-copper">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display text-base text-ink">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        <Section bg="paper-dark">
          <ReportTwoCol
            leftTitle="The installer remains responsible for"
            leftItems={[
              'The site assessment',
              'The final system design',
              'Equipment selection',
              'Installation',
              'Certification',
              'Network requirements',
              'Rectification of installation issues',
            ]}
            rightTitle="The inspection does not replace"
            rightItems={[
              "The installer's responsibilities",
              'Required electrical certification',
              'Network approval',
              'State or territory electrical-safety requirements',
              'Government inspection or compliance programs',
            ]}
          />
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            The independent inspection provides a separate assessment of the completed
            installation. The Clean Energy Regulator&apos;s inspection program itself is designed
            to complement, not replace, state and territory electrical-safety programs.
          </p>
        </Section>

        <Section>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <Eyebrow>Why TechSafe</Eyebrow>
              <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
                Watts Better arranges inspections through TechSafe Australia.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                TechSafe provides independent electrical inspection services across domestic and
                commercial installations, with licensed electrical inspectors and experience in:
              </p>
              <div className="mt-5">
                <ReportList
                  items={[
                    'Electrical safety checks',
                    'Compliance reporting',
                    'Solar and battery-related inspections',
                    'Thermal imaging',
                    'Switchboards',
                    'Generators',
                    'New connections',
                    'High-voltage and specialist installations',
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <ReportP>
                TechSafe&apos;s inspection reporting includes the items assessed, defects or
                issues identified where applicable, and photographic evidence.
              </ReportP>
              <ReportP>
                TechSafe has also undertaken electrical inspection work for government and
                regulatory programs, including Queensland solar and storage inspection activity.
              </ReportP>
              <Callout label="No additional cost to you" tone="copper">
                If you proceed with an installer introduced through Watts Better, the independent
                inspection is arranged at no additional cost to you. The installer pays Watts
                Better an introducer fee. Part of that fee funds the independent inspection and
                report.
              </Callout>
            </div>
          </div>
        </Section>

        <Section bg="paper-dark">
          <Eyebrow>The standard is simple</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-2xl leading-tight text-ink md:text-3xl">
            You should know:
          </h2>
          <div className="mt-6 max-w-2xl">
            <ReportList
              items={[
                'Who is responsible for the installation',
                'Who is checking the completed work',
                'What was inspected',
                'Whether the system is functioning as expected',
                'Whether anything requires attention',
                'Where to find the evidence',
              ]}
            />
          </div>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            A completed solar or battery system should be more than switched on.
          </p>
          <p className="mt-2 font-display text-2xl font-semibold text-ink">
            It should be independently assessed.
          </p>
        </Section>

        <p className="mx-auto max-w-[1400px] border-b border-rule px-5 py-8 text-xs leading-relaxed text-ink-soft/70 md:px-8">
          The Queensland and national inspection findings referenced on this page are drawn from
          the Clean Energy Regulator&apos;s published solar-battery inspection results. The
          figures relate to inspected systems within the regulator&apos;s inspection program and
          are not a survey of every installation.
        </p>

        <RelatedReading keys={['the-industry', 'how-we-are-paid', 'the-report']} />
      </main>
      <SiteFooter />
    </div>
  )
}
