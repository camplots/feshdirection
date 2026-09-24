import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Section } from '@/components/section'
import { Eyebrow } from '@/components/eyebrow'
import { Callout } from '@/components/callout'
import { PullQuote } from '@/components/pull-quote'
import { FaqList } from '@/components/faq-list'
import { RelatedReading } from '@/components/related-reading'
import { ReportList, ReportP, ReportTwoCol } from '@/components/report-prose'

export const metadata: Metadata = {
  title: "How We Are Paid — Watts Better",
  description: 'Who pays Watts Better, and what for.',
}

export default function HowWeArePaidPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Transparency"
          fileNumber="HP-01"
          title="Who pays us. And what for."
          intro="If you request an installer introduction and subsequently proceed with an installation, the installer may pay Watts Better an introducer fee. Part of that fee funds the independent post-install inspection and formal report; Watts Better retains the balance for its advisory and service-coordination work."
        >
          <Callout label="Your details" tone="copper" className="mt-8 max-w-2xl">
            We do not share your information with an installer unless you expressly request an
            introduction.
          </Callout>
        </PageHero>

        <Section className="!py-0">
          <div className="grid gap-14 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
            <Image
              src="/images/paid-ledger.png"
              alt="Line-art illustration of a ledger with a fee split into two portions"
              width={520}
              height={520}
              className="h-fit w-full border border-rule"
            />
            <div className="flex flex-col gap-10">
              <div>
                <Eyebrow>Who pays us</Eyebrow>
                <ReportP>
                  You don&apos;t. Not for the assessment, not for your report, not for the
                  consultation, not for the photo capture.
                </ReportP>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  The installer does — but only if you ask for an introduction, and only if you
                  proceed with that installer.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  If you never request an introduction, nobody pays anything. You keep the report
                  and use it however you like.
                </p>
              </div>
              <div>
                <Eyebrow tone="oxblood">What for</Eyebrow>
                <div className="mt-5 flex flex-col gap-5">
                  <div>
                    <h3 className="font-display text-lg text-ink">Your independent inspection.</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                      A licensed inspector assesses the finished installation and you receive the
                      report. A genuine third-party cost, covered from the fee.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-ink">Your advice.</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                      The assessment, the modelled report, the consultation, and the
                      coordination.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-ink">Your protection.</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                      We introduce one installer, they know an inspection of their work will
                      follow, and we&apos;re the ones arranging it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section bg="paper-dark">
          <Eyebrow>Why the installer pays, not you</Eyebrow>
          <div className="mt-6 max-w-2xl">
            <ReportP>
              An installer&apos;s hardest problem isn&apos;t price. It&apos;s finding a customer
              who already knows what they need.
            </ReportP>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              We solve that before we make an introduction — through the assessment, the report,
              the consultation and the photo capture. A well-briefed customer is worth real money
              to a good installer: fewer wasted visits, fewer design revisions, fewer surprises.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              So they pay for the introduction out of the budget they&apos;d otherwise spend
              finding work. Our approach saved them substantially overall when contrasted to
              default lead cost. It is not an added line on your invoice.
            </p>
          </div>
        </Section>

        <Section>
          <Eyebrow>What we don&apos;t get paid for</Eyebrow>
          <div className="mt-8 max-w-2xl">
            <ReportList
              items={[
                'No manufacturer or distributor commissions. No brand pays us to appear in your report.',
                "No margin on hardware. We don't sell panels, inverters or batteries.",
                "No selling of your details. We don't run a lead network.",
                "No payment per quote. We'd rather you understood the options than collected proposals.",
              ]}
            />
          </div>
        </Section>

        <Section bg="paper-dark">
          <Eyebrow>The awkward question</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-display text-2xl leading-snug text-ink md:text-3xl">
            Can you be independent if the installer pays you?
          </h2>
          <div className="mt-6 max-w-2xl">
            <PullQuote>
              Yes — but if you don&apos;t install, we don&apos;t get paid. We won&apos;t pretend
              that incentive doesn&apos;t exist.
            </PullQuote>
          </div>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            Here&apos;s what we control:
          </p>
          <div className="mt-6 max-w-2xl">
            <ReportList
              items={[
                "The fee doesn't change with the size of your system. We earn the same set amount for each system size regardless of which installer is introduced.",
                "We don't take a second introduction. We can't shop you around for a better fee.",
                'We take nothing from manufacturers or financiers.',
                "The inspector isn't chosen by the installer, and isn't told who referred you.",
                "We'll tell you not to go ahead — including that a battery isn't the right first move. That costs us money, and we'd rather say it than have you find out later.",
              ]}
            />
          </div>
        </Section>

        <Section>
          <Eyebrow>Why only one introduction?</Eyebrow>
          <div className="mt-6 max-w-2xl">
            <ReportP>
              Most comparison services hand your details to several installers and let them
              compete on price. You get three quotes, and the job of working out which one is
              real.
            </ReportP>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              We do the opposite. One installer, chosen against our criteria — licensing, who
              actually performs the work, how customers are supported afterwards, and whether
              they&apos;ll cooperate with an independent inspection of their own work.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              The trade-off, stated plainly: you don&apos;t get competing quotes. What you get
              instead is a benchmark — your report tells you what your home needs, what it should
              cost, and what to ask. You&apos;re checking one quote against something
              independent, not against other quotes.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              You can always walk away, use your own installer, or get other quotes. Requesting
              an introduction commits you to nothing.
            </p>
          </div>

          <div className="mt-10">
            <ReportTwoCol
              leftTitle="No cost to you"
              leftItems={[
                'The assessment and report — no cost to you',
                'The consultation and photo capture — no cost to you',
                'A quote from an introduced installer — no cost to you',
                'Your independent inspection — funded from that fee, no cost to you',
              ]}
              rightTitle="Installer pays"
              rightItems={['You proceed with the installation — the installer pays the introducer fee']}
            />
          </div>
        </Section>

        <Section bg="paper-dark">
          <FaqList
            title="Frequently asked questions"
            items={[
              { q: 'How much is the introducer fee?', a: 'Between $600 and $800 depending on system.' },
              {
                q: 'Will I pay more because of it?',
                a: "It comes out of the installer's margin, not your invoice — their cost of acquiring a briefed customer, replacing marketing spend they'd otherwise carry.",
              },
              { q: "Do you get paid if I don't proceed?", a: 'No.' },
              {
                q: 'Can I use my own installer?',
                a: 'Yes. The report is yours, and nothing requires you to request an introduction.',
              },
              {
                q: 'What happens if you tell me not to install?',
                a: "Nothing. You keep the report and we're paid nothing. That's the point.",
              },
              {
                q: 'Does the inspector know which installer you introduced?',
                a: "No. We pay them a fixed fee, and they don't know who installed the system prior.",
              },
            ]}
          />
        </Section>

        <Section>
          <Eyebrow>The bottom line</Eyebrow>
          <PullQuote>
            You should know who is paying whom, and what they get for it.
          </PullQuote>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            You pay us nothing to understand your options. If you choose to act on that, an
            installer pays us — and part of what they pay covers an independent check of their
            own work.
          </p>
        </Section>

        <RelatedReading keys={['how-introductions-work', 'about-us', 'installation-inspections']} />
      </main>
      <SiteFooter />
    </div>
  )
}
