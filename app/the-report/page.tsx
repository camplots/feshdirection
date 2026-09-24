import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Section } from '@/components/section'
import { Eyebrow } from '@/components/eyebrow'
import { PullQuote } from '@/components/pull-quote'
import { FaqList } from '@/components/faq-list'
import { RelatedReading } from '@/components/related-reading'
import {
  ReportLead,
  ReportList,
  ReportP,
  ReportSection,
  ReportToc,
  ReportTwoCol,
} from '@/components/report-prose'

export const metadata: Metadata = {
  title: 'The Report — Watts Better',
  description:
    'Watts Better turns your electricity bill into a clear, personalised report so you can understand your solar and battery options before speaking with an installer.',
}

const toc = [
  { id: 'clearer-starting-point', label: 'A clearer starting point' },
  { id: 'energy-profile', label: 'Your energy profile' },
  { id: 'tariff', label: 'Your tariff' },
  { id: 'solar-options', label: 'Your solar options' },
  { id: 'battery-options', label: 'Your battery options' },
  { id: 'options-compared', label: 'Your options compared' },
  { id: 'questions', label: 'Your questions' },
  { id: 'assumptions', label: 'Your assumptions' },
  { id: 'chat-clarifies', label: 'The chat clarifies the home' },
  { id: 'photo-capture', label: 'Photo capture' },
  { id: 'introduction', label: 'One introduction' },
  { id: 'after-installation', label: 'After installation' },
  { id: 'common-questions', label: 'Common questions' },
]

export default function TheReportPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Product"
          fileNumber="RP-01"
          title="See the full picture."
        >
          <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="flex flex-col gap-5">
              <ReportP>
                Your electricity bill contains useful information about how your home uses
                power, when electricity costs the most and where solar or battery storage may
                help.
              </ReportP>
              <ReportP>
                Watts Better turns that information into a clear, personalised report so you can
                understand your options before speaking with an installer.
              </ReportP>
              <PullQuote>
                The report explains the numbers. The chat clarifies the home. The introduction is
                your choice.
              </PullQuote>
            </div>
            <Image
              src="/images/report-scan.png"
              alt="Line-art illustration of a report document with usage charts"
              width={560}
              height={420}
              className="w-full border border-rule"
            />
          </div>
        </PageHero>

        <Section className="!py-0">
          <div className="flex gap-16 py-16 md:py-24">
            <ReportToc items={toc} />
            <div className="min-w-0 flex-1">
              <ReportSection id="clearer-starting-point" title="A clearer starting point" first>
                <ReportP>Most solar conversations begin with a system size.</ReportP>
                <ReportList
                  items={['How many panels?', 'What size battery?', 'What will it cost?']}
                />
                <ReportP>
                  Those questions cannot be answered properly without first understanding how
                  your home uses electricity.
                </ReportP>
                <ReportP>
                  Your report starts with your energy information and explains what it may mean
                  for solar PV and home battery options.
                </ReportP>
                <ReportP>It does not assume that:</ReportP>
                <ReportList
                  items={[
                    'The largest system is the best system',
                    'Every home needs a battery',
                    'A generic payback figure applies to your household',
                    "An installer's first recommendation is automatically the right one",
                  ]}
                />
                <ReportLead>It gives you a clearer starting point.</ReportLead>
              </ReportSection>

              <ReportSection id="energy-profile" title="Your energy profile">
                <ReportP>
                  Your report explains how your home uses electricity and when that usage
                  occurs.
                </ReportP>
                <ReportP>It considers the relationship between:</ReportP>
                <ReportList
                  items={[
                    'Daily energy use',
                    'Daytime consumption',
                    'Evening consumption',
                    'Peak-period usage',
                    'Grid imports',
                    'Solar generation, where information is available',
                    'Energy exported to the grid',
                  ]}
                />
                <ReportP>
                  The important question is not only how much electricity your home uses.
                </ReportP>
                <ReportLead>It is when your home needs it.</ReportLead>
              </ReportSection>

              <ReportSection id="tariff" title="Your tariff">
                <ReportP>The cost of electricity depends on when it is used.</ReportP>
                <ReportP>
                  Your report explains the tariff information available from your bill and how
                  it affects the value of solar and battery storage.
                </ReportP>
                <ReportP>It may identify:</ReportP>
                <ReportList
                  items={[
                    'Higher-cost usage periods',
                    'Lower-cost usage periods',
                    'Supply charges',
                    'Feed-in credits',
                    'The value of using solar directly',
                    'The potential value of storing solar for later use',
                  ]}
                />
                <ReportP>
                  A battery may be more useful in one household than another, even when both
                  homes use a similar amount of electricity.
                </ReportP>
                <ReportLead>The tariff and usage pattern matter.</ReportLead>
              </ReportSection>

              <ReportSection id="solar-options" title="Your solar options">
                <ReportP>
                  The report considers solar PV pathways based on your available energy
                  information.
                </ReportP>
                <ReportP>It may compare different system sizes and explain the potential effect on:</ReportP>
                <ReportList
                  items={[
                    'Solar generation',
                    'Grid imports',
                    'Solar self-consumption',
                    'Exported energy',
                    'Estimated savings',
                    'Indicative payback',
                    'Longer-term value',
                  ]}
                />
                <ReportP>
                  The final system design still needs to be confirmed by an installer after
                  assessing your property.
                </ReportP>
              </ReportSection>

              <ReportSection id="battery-options" title="Your battery options">
                <ReportP>A battery is not automatically the right choice.</ReportP>
                <ReportP>
                  The report considers whether your usage pattern creates a reasonable
                  opportunity to store solar during the day and use it later when grid
                  electricity is more expensive.
                </ReportP>
                <ReportP>Where a battery appears suitable, the report explains why.</ReportP>
                <ReportP>
                  Where solar-only or battery-ready solar appears stronger, it says so.
                </ReportP>
                <ReportLead>A battery should earn its place in the recommendation.</ReportLead>
              </ReportSection>

              <ReportSection id="options-compared" title="Your options compared">
                <ReportP>
                  Your report compares different solar PV and home battery pathways and
                  identifies the options that appear most relevant to your circumstances.
                </ReportP>
                <ReportP>These may include:</ReportP>
                <ReportList
                  items={[
                    'Solar PV only',
                    'Solar PV with a home battery',
                    'A smaller solar system',
                    'A larger solar system',
                    'Battery-ready solar',
                    'Adding a battery later',
                    'No immediate equipment change',
                  ]}
                />
                <ReportP>The options are considered against factors such as:</ReportP>
                <ReportList
                  items={[
                    'Upfront cost',
                    'Estimated savings',
                    'Self-consumption',
                    'Indicative payback',
                    'Battery utilisation',
                    'Exported energy',
                    'Longer-term value',
                  ]}
                />
                <ReportP>
                  The report is not designed to make every household buy more equipment.
                </ReportP>
                <ReportLead>It is designed to show which options deserve further consideration.</ReportLead>
              </ReportSection>

              <ReportSection id="questions" title="Your questions">
                <ReportP>Your report gives you questions to take into an installer conversation, including:</ReportP>
                <ReportList
                  items={[
                    'What system size is actually justified by my usage?',
                    'Is the battery sized to my evening demand?',
                    'What tariff has been used in the modelling?',
                    'What happens if my feed-in tariff changes?',
                    'Is the battery on the approved product list?',
                    'Does the installer hold the relevant battery accreditation?',
                    'Is a switchboard upgrade included?',
                    'What assumptions support the claimed payback?',
                    'What is included in the installation price?',
                    'What happens if the final design differs from the proposal?',
                  ]}
                />
              </ReportSection>

              <ReportSection id="assumptions" title="Your assumptions">
                <ReportP>Every analysis has limits.</ReportP>
                <ReportP>Your report identifies the assumptions used, including:</ReportP>
                <ReportList
                  items={[
                    'The bill period analysed',
                    'The tariff information available',
                    'Solar generation assumptions',
                    'Battery assumptions',
                    'Estimated system performance',
                    'Information that still needs to be confirmed',
                    'Matters requiring an installer site assessment',
                  ]}
                />
                <ReportLead>
                  You should be able to see not only the result, but also what sits behind it.
                </ReportLead>
              </ReportSection>

              <ReportSection id="chat-clarifies" title="The report is the start. The chat clarifies the home.">
                <ReportP>Your bill can tell us a great deal.</ReportP>
                <ReportP>
                  It can show when your home uses electricity, what you pay for it and whether
                  solar or battery storage may improve the position.
                </ReportP>
                <ReportP>But it cannot confirm everything about your property.</ReportP>
                <ReportP>It cannot reliably confirm:</ReportP>
                <ReportList
                  items={[
                    'Available roof space',
                    'Roof condition',
                    'Detailed orientation and shading',
                    'Meter box condition',
                    'Switchboard configuration',
                    'Existing inverter condition',
                    'Existing battery brand or model',
                    'Battery location',
                    'Cable routes',
                    'Structural requirements',
                    'Whether the proposed system can be safely installed',
                  ]}
                />
                <ReportP>That is why the next step is a 15-minute chat with me.</ReportP>
                <ReportP>During the chat, we can:</ReportP>
                <ReportList
                  items={[
                    'Walk through your report',
                    'Explain the main findings',
                    'Discuss whether solar, a battery or both appear worth exploring',
                    'Talk through your existing system, if you have one',
                    'Identify anything that needs clarification',
                    'Explain what the bill cannot show',
                    'Guide you through the Photo Capture',
                    'Answer your questions before you decide what happens next',
                  ]}
                />
                <ReportP>This is not an installer sales appointment.</ReportP>
                <ReportP>It is not a commitment to buy anything.</ReportP>
                <PullQuote>
                  The report explains the numbers. The chat clarifies the home. The introduction
                  is your choice.
                </PullQuote>
              </ReportSection>

              <ReportSection id="photo-capture" title="Photo capture. Clarity before introduction.">
                <ReportP>
                  After reviewing your report and speaking with me, you may be asked to complete
                  a short Photo Capture.
                </ReportP>
                <ReportP>
                  The purpose is to clarify the physical information that your bill cannot
                  provide.
                </ReportP>
                <ReportP>Depending on your circumstances, this may include photographs of:</ReportP>
                <ReportList
                  items={[
                    'Your meter box',
                    'Your switchboard',
                    'Your existing inverter',
                    'Your existing battery',
                    'Battery location',
                    'Equipment labels',
                    'Roof space',
                    'Roof type',
                    'Visible shading or obstructions',
                  ]}
                />
                <ReportP>The Photo Capture is not an installer site assessment.</ReportP>
                <ReportP>
                  It does not replace the installer&apos;s responsibility to assess your property
                  and prepare the final system design.
                </ReportP>
                <ReportLead>
                  It simply helps establish a more informed starting point before you decide
                  whether to request an installer introduction.
                </ReportLead>
              </ReportSection>

              <ReportSection id="introduction" title="One introduction — if you request.">
                <ReportP>
                  Once you have reviewed your report, spoken with me and completed the relevant
                  Photo Capture, you decide what happens next.
                </ReportP>
                <ReportP>You may:</ReportP>
                <ReportList
                  items={[
                    'Continue researching',
                    'Use the report with your own installer',
                    'Ask further questions',
                    'Decide not to proceed',
                    'Request one considered installer introduction',
                  ]}
                />
                <ReportP>
                  We do not share your information with an installer unless you expressly
                  request an introduction.
                </ReportP>
                <ReportLead>
                  Requesting an introduction does not commit you to an installation, a quote or a
                  purchase.
                </ReportLead>
              </ReportSection>

              <ReportSection id="after-installation" title="What happens after installation">
                <ReportP>
                  If you proceed with an installer introduced through Watts Better, we arrange an
                  independent post-installation inspection.
                </ReportP>
                <ReportP>
                  The inspection provides a separate assessment of the completed installation and
                  gives you a formal report.
                </ReportP>
                <ReportP>The stages are different:</ReportP>
                <ReportList
                  items={[
                    'The Report explains your energy numbers.',
                    'The 15-minute chat clarifies the questions those numbers cannot answer.',
                    'The Photo Capture records useful information about the physical starting point.',
                    'The Installer Introduction is made only if you request it.',
                    'The Independent Inspection checks the completed installation afterwards.',
                  ]}
                />
                <div className="mt-4">
                  <ReportTwoCol
                    leftTitle="The report is"
                    leftItems={[
                      'An independent starting point',
                      'A bill-based analysis',
                      'A comparison of solar PV and home battery pathways',
                      'A record of the assumptions used',
                      'A preparation tool for an installer conversation',
                      'A way to identify the questions that still need answering',
                    ]}
                    rightTitle="The report is not"
                    rightItems={[
                      'A final system design',
                      'A site assessment',
                      'An electrical inspection',
                      'A structural assessment',
                      'A formal quote',
                      'Financial advice',
                      'A guarantee of savings or payback',
                      "A replacement for installer certification",
                    ]}
                  />
                </div>
                <ReportP>
                  The installer remains responsible for the final site assessment, system
                  design, equipment selection, installation, certification and network
                  requirements.
                </ReportP>
              </ReportSection>

              <div id="common-questions" className="mt-16 scroll-mt-28 border-t border-rule pt-12">
                <FaqList
                  title="Common questions"
                  items={[
                    {
                      q: 'Do I need to speak with an installer to receive the report?',
                      a: 'No. You can review your report and book a chat without requesting an installer introduction.',
                    },
                    {
                      q: 'Do I have to buy anything?',
                      a: 'No. The report and chat are intended to help you make a more informed decision. You can continue researching, use your own installer or decide not to proceed.',
                    },
                    {
                      q: 'Does the report always recommend a battery?',
                      a: 'No. A battery may be suitable for some households and less suitable for others. If the analysis suggests solar-only or battery-ready solar is the stronger option, the report will explain that.',
                    },
                    {
                      q: 'Can the report confirm whether my roof is suitable?',
                      a: 'No. The report helps identify the energy pathway worth exploring. An installer must still confirm roof condition, available space, shading, structural requirements and installation feasibility.',
                    },
                    {
                      q: 'Why book a 15-minute chat?',
                      a: 'Because a bill explains your energy pattern, but it cannot show the condition or configuration of your home. The chat gives you an opportunity to understand the report, ask questions and prepare the Photo Capture before deciding whether you want an installer introduction.',
                    },
                    {
                      q: 'Will my information be shared with an installer?',
                      a: 'Not unless you expressly request an introduction. You can receive your report, speak with me and complete the Photo Capture without your information being shared with an installer.',
                    },
                    {
                      q: 'Does Watts Better offer other products?',
                      a: 'No. Watts Better focuses on solar PV and home batteries.',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </Section>

        <RelatedReading keys={['how-introductions-work', 'installation-inspections', 'contact-us']} />
      </main>
      <SiteFooter />
    </div>
  )
}
