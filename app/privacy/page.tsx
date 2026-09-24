import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { Eyebrow } from '@/components/eyebrow'
import { RelatedReading } from '@/components/related-reading'
import { ReportList, ReportP, ReportSection } from '@/components/report-prose'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Privacy Policy — Watts Better',
  description: 'How Watts Better collects, uses, stores and shares personal information.',
}

export default function PrivacyPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <PageHero eyebrow="Legal" fileNumber="LG-01" title="Privacy policy" intro="Last updated: [insert date]" />

        <Section className="!py-0">
          <div className="py-16 md:py-24">
            <Tabs defaultValue="privacy">
              <TabsList variant="line" className="border-b border-rule">
                <TabsTrigger
                  value="privacy"
                  className="font-mono text-xs uppercase tracking-[0.12em] data-active:text-copper"
                >
                  Privacy Policy
                </TabsTrigger>
                <TabsTrigger
                  value="terms"
                  className="font-mono text-xs uppercase tracking-[0.12em] data-active:text-copper"
                >
                  Terms of Use
                </TabsTrigger>
              </TabsList>

              <TabsContent value="privacy" id="privacy" className="mt-10 max-w-3xl">
                <ReportSection id="p-1" title="1. About this policy" first>
                  <ReportP>Watts Better respects your privacy.</ReportP>
                  <ReportP>
                    This Privacy Policy explains how Watts Better collects, uses, stores and
                    shares personal information when you use our website, complete an energy
                    analysis, upload an electricity bill, provide photographs, book a chat or
                    request an installer introduction.
                  </ReportP>
                  <ReportP>Watts Better provides independent guidance about:</ReportP>
                  <ReportList
                    items={[
                      'Solar photovoltaic systems',
                      'Home batteries',
                      'Electricity usage',
                      'Tariffs',
                      'Solar and battery options',
                      'Installer questions',
                      'Independent post-installation inspection',
                    ]}
                  />
                  <ReportP>
                    Watts Better does not install solar or batteries and does not sell solar
                    panels, inverters or batteries.
                  </ReportP>
                  <ReportP>
                    Legal entity: [insert legal entity name] · ABN: [insert ABN] · Business
                    address: [insert address] · Privacy contact: [insert privacy email address]
                  </ReportP>
                  <ReportP>
                    We handle personal information in accordance with applicable Australian
                    privacy laws, including the Privacy Act 1988 (Cth) and the Australian Privacy
                    Principles where they apply.
                  </ReportP>
                </ReportSection>

                <ReportSection id="p-2" title="2. What information we collect">
                  <ReportP>
                    Depending on how you use Watts Better, we may collect the following
                    information.
                  </ReportP>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-oxblood">Contact information</p>
                  <ReportList items={['Name', 'Email address', 'Telephone number', 'Preferred contact method', 'Appointment details']} />
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-oxblood">Property information</p>
                  <ReportList
                    items={[
                      'Property address',
                      'Property type',
                      'Roof information',
                      'Meter and switchboard information',
                      'Existing solar information',
                      'Existing battery information',
                      'Installation access information',
                    ]}
                  />
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-oxblood">Energy information</p>
                  <ReportList
                    items={[
                      'Electricity bills',
                      'Electricity usage',
                      'Tariff details',
                      'Supply charges',
                      'Feed-in tariff information',
                      'Retailer information',
                      'Solar generation information',
                      'Export information',
                      'Consumption patterns',
                      'Information about future energy needs',
                    ]}
                  />
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-oxblood">
                    Photographs and visual information
                  </p>
                  <ReportP>If you complete the Photo Capture, we may collect photographs of:</ReportP>
                  <ReportList
                    items={[
                      'Meter boxes',
                      'Switchboards',
                      'Inverters',
                      'Batteries',
                      'Battery locations',
                      'Roof areas',
                      'Roof equipment',
                      'Shading or obstructions',
                      'Property access areas',
                    ]}
                  />
                  <ReportP>
                    Photographs may contain image metadata, such as the date, time or location at
                    which the image was taken.
                  </ReportP>
                  <ReportP>Please avoid including unnecessary personal information in photographs, such as:</ReportP>
                  <ReportList
                    items={[
                      'Identity documents',
                      'Account numbers',
                      'Personal correspondence',
                      'Other people',
                      'Private belongings',
                      'Information unrelated to the assessment',
                    ]}
                  />
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-oxblood">
                    Assessment and communication information
                  </p>
                  <ReportList
                    items={[
                      'Information entered into the energy assessment',
                      'Notes from a 15-minute chat',
                      'Questions you ask',
                      'Records of emails, telephone calls and other communications',
                      'Installer preferences',
                      'Information you approve for sharing',
                    ]}
                  />
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-oxblood">Technical information</p>
                  <ReportP>When you use the website, we may collect:</ReportP>
                  <ReportList
                    items={[
                      'IP address',
                      'Browser type',
                      'Device type',
                      'Operating system',
                      'Approximate location',
                      'Pages visited',
                      'Time and date of visits',
                      'Website interaction information',
                      'Cookie and analytics information',
                    ]}
                  />
                  <ReportP>
                    We do not intentionally collect sensitive information unless you choose to
                    provide it.
                  </ReportP>
                </ReportSection>

                <ReportSection id="p-3" title="3. How we collect information">
                  <ReportP>We may collect information:</ReportP>
                  <ReportList
                    items={[
                      'Directly from you',
                      'When you complete the assessment',
                      'When you upload an electricity bill',
                      'When you enter information manually',
                      'When you upload photographs',
                      'When you book a 15-minute chat',
                      'During or after a consultation',
                      'When you request an installer introduction',
                      'When you contact us',
                      'Through cookies and website analytics',
                      'From service providers assisting us with bookings, hosting or communications',
                      'From an installer or inspection provider where you have requested us to coordinate a service',
                    ]}
                  />
                  <ReportP>
                    We may also collect publicly available business information when assessing or
                    vetting an installer, including licensing, accreditation, business
                    registration and company information.
                  </ReportP>
                </ReportSection>

                <ReportSection id="p-4" title="4. Why we collect your information">
                  <ReportP>We collect and use your information to:</ReportP>
                  <ReportList
                    items={[
                      'Generate your personalised energy report',
                      'Analyse your electricity usage',
                      'Compare solar PV and battery options',
                      'Explain tariff and energy-use patterns',
                      'Prepare for a 15-minute chat',
                      'Answer your questions',
                      'Guide the Photo Capture',
                      'Clarify your existing solar or battery system',
                      'Determine whether an installer introduction may be appropriate',
                      'Make an installer introduction if you expressly request one',
                      'Share only the information you approve with that installer',
                      'Arrange an independent post-installation inspection where applicable',
                      'Provide an inspection report',
                      'Coordinate communications between you and relevant service providers',
                      'Maintain business and service records',
                      'Improve the website and assessment process',
                      'Analyse aggregated and de-identified usage patterns',
                      'Prevent fraud, misuse or security incidents',
                      'Meet legal, regulatory and insurance requirements',
                      'Send service-related communications',
                      'Send marketing communications where permitted and where you have consented, or where otherwise permitted by law',
                    ]}
                  />
                </ReportSection>

                <ReportSection id="p-5" title="5. Bill data and photographs">
                  <ReportP>
                    Electricity bills and photographs of electrical equipment can contain
                    information about your household and property.
                  </ReportP>
                  <ReportP>We use this information only for the purposes explained in this policy, including:</ReportP>
                  <ReportList
                    items={[
                      'Energy analysis',
                      'Report preparation',
                      'Consultation',
                      'Photo Capture review',
                      'Installer introduction, where requested',
                      'Inspection coordination, where applicable',
                    ]}
                  />
                  <ReportP>
                    We do not use your bill or photographs to make a final electrical, structural
                    or engineering decision.
                  </ReportP>
                  <ReportP>The bill-based analysis is indicative.</ReportP>
                  <ReportP>The Photo Capture does not replace:</ReportP>
                  <ReportList
                    items={[
                      'A site assessment',
                      'Electrical certification',
                      'Structural assessment',
                      'Network approval',
                      'Installer responsibility',
                      'Independent inspection',
                    ]}
                  />
                </ReportSection>

                <ReportSection id="p-6" title="6. When we share your information">
                  <ReportP>
                    <strong className="text-ink">We do not sell your personal information.</strong>{' '}
                    Watts Better does not sell your personal information to a network of
                    installers or lead marketplace.
                  </ReportP>
                  <ReportP>
                    We do not share your details with an installer unless you expressly request an
                    introduction.
                  </ReportP>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-oxblood">Installer introduction</p>
                  <ReportP>If you request an installer introduction, we may share the information you approve, which may include:</ReportP>
                  <ReportList
                    items={[
                      'Name',
                      'Contact details',
                      'Property address',
                      'Energy report',
                      'Electricity usage information',
                      'Solar information',
                      'Battery information',
                      'Photo Capture images',
                      'Your stated preferences',
                      'Information relevant to preparing a quote',
                    ]}
                  />
                  <ReportP>
                    We will explain what information is proposed to be shared before the
                    introduction is made.
                  </ReportP>
                  <ReportP>You may decline to share particular information.</ReportP>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-oxblood">Independent inspection provider</p>
                  <ReportP>If an independent inspection is arranged, we may share relevant information with the inspection provider, which may include:</ReportP>
                  <ReportList
                    items={[
                      'Name',
                      'Property address',
                      'Installation details',
                      'Installer details',
                      'Solar and battery equipment information',
                      'Relevant photographs',
                      'Commissioning information',
                      'Information needed to arrange access',
                      'Information needed to prepare the inspection report',
                    ]}
                  />
                  <ReportP>
                    The inspection provider will be required to handle your information for the
                    inspection and reporting service.
                  </ReportP>
                  <ReportP>
                    Current inspection provider: [insert legal name of inspection provider, if
                    confirmed]
                  </ReportP>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-oxblood">Service providers</p>
                  <ReportP>We may share information with service providers that help us operate Watts Better, including:</ReportP>
                  <ReportList
                    items={[
                      'Website hosting providers',
                      'Assessment and report platforms',
                      'File storage providers',
                      'Email and communication providers',
                      'Appointment scheduling providers',
                      'Customer relationship management providers',
                      'Analytics providers',
                      'Information security providers',
                      'Professional advisers',
                      'Legal, accounting and insurance advisers',
                    ]}
                  />
                  <ReportP>
                    We require service providers to handle information appropriately and only for
                    the services they provide to us.
                  </ReportP>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-oxblood">Legal and regulatory disclosure</p>
                  <ReportP>We may disclose information where reasonably necessary:</ReportP>
                  <ReportList
                    items={[
                      'To comply with the law',
                      'To respond to a lawful request',
                      "To protect a person's safety",
                      'To investigate fraud or misuse',
                      'To protect our legal rights',
                      'To respond to a regulator, court or government authority',
                      'To enforce our terms or agreements',
                    ]}
                  />
                </ReportSection>

                <ReportSection id="p-7" title="7. Overseas service providers">
                  <ReportP>Some service providers we use may store or process information outside Australia.</ReportP>
                  <ReportP>Potential locations may include:</ReportP>
                  <ReportList
                    items={[
                      '[insert countries used by hosting provider]',
                      '[insert countries used by email provider]',
                      '[insert countries used by booking or assessment provider]',
                    ]}
                  />
                  <ReportP>
                    Before publishing this policy, Watts Better should identify the actual
                    providers and countries involved.
                  </ReportP>
                  <ReportP>
                    Where applicable, we take reasonable steps to ensure overseas recipients
                    handle personal information in a manner consistent with Australian privacy
                    requirements.
                  </ReportP>
                </ReportSection>

                <ReportSection id="p-8" title="8. Cookies and analytics">
                  <ReportP>Watts Better may use cookies and similar technologies to:</ReportP>
                  <ReportList
                    items={[
                      'Keep the website functioning',
                      'Remember preferences',
                      'Improve the assessment process',
                      'Understand how visitors use the website',
                      'Measure the performance of content',
                      'Detect technical issues',
                      'Improve security',
                      'Measure marketing activity, where applicable',
                    ]}
                  />
                  <ReportP>
                    Analytics providers may collect information about your device, browser,
                    approximate location and interactions with the website.
                  </ReportP>
                  <ReportP>
                    You may be able to control cookies through your browser or a website consent
                    tool.
                  </ReportP>
                  <ReportP>
                    Analytics and cookie providers: [insert actual providers, such as Google
                    Analytics, Vercel Analytics or other services]
                  </ReportP>
                </ReportSection>

                <ReportSection id="p-9" title="9. Direct marketing">
                  <ReportP>We may send you service-related communications, including:</ReportP>
                  <ReportList
                    items={[
                      'Assessment confirmations',
                      'Report notifications',
                      'Appointment reminders',
                      'Installer-introduction updates',
                      'Inspection updates',
                      'Important service information',
                    ]}
                  />
                  <ReportP>We will only send marketing communications where:</ReportP>
                  <ReportList items={['You have consented; or', 'The communication is otherwise permitted by law.']} />
                  <ReportP>Marketing emails will include an unsubscribe option.</ReportP>
                  <ReportP>You may opt out of marketing communications at any time by:</ReportP>
                  <ReportList
                    items={['Using the unsubscribe link', 'Contacting us at [insert email]', 'Replying to the relevant message']}
                  />
                  <ReportP>
                    Opting out of marketing will not stop essential service communications
                    relating to a report, appointment, introduction or inspection.
                  </ReportP>
                </ReportSection>

                <ReportSection id="p-10" title="10. How we use automated modelling">
                  <ReportP>Watts Better uses automated modelling and calculations to analyse information such as:</ReportP>
                  <ReportList
                    items={[
                      'Energy usage',
                      'Tariffs',
                      'Solar options',
                      'Battery options',
                      'Indicative savings',
                      'Indicative payback',
                      'System scenarios',
                    ]}
                  />
                  <ReportP>
                    The output is indicative and depends on the information provided and the
                    assumptions used.
                  </ReportP>
                  <ReportP>The modelling does not make a final decision about:</ReportP>
                  <ReportList
                    items={[
                      'Whether your home is electrically suitable',
                      'Whether your roof is structurally suitable',
                      'Whether a system can be installed',
                      "Whether an installer's design is compliant",
                      'Whether you should purchase a system',
                    ]}
                  />
                  <ReportP>
                    The final system design and installation decision remain the responsibility
                    of the appropriately qualified installer.
                  </ReportP>
                </ReportSection>

                <ReportSection id="p-11" title="11. How we store and protect information">
                  <ReportP>We take reasonable steps to protect personal information from:</ReportP>
                  <ReportList
                    items={[
                      'Misuse',
                      'Interference',
                      'Loss',
                      'Unauthorised access',
                      'Unauthorised modification',
                      'Unauthorised disclosure',
                    ]}
                  />
                  <ReportP>Security measures may include:</ReportP>
                  <ReportList
                    items={[
                      'Access controls',
                      'Password protection',
                      'Encryption where appropriate',
                      'Secure hosting',
                      'Restricted staff and contractor access',
                      'Multi-factor authentication where available',
                      'Monitoring and security procedures',
                      'Secure deletion or destruction',
                    ]}
                  />
                  <ReportP>No method of transmission or storage is completely secure.</ReportP>
                  <ReportP>
                    You should avoid sending information that is not necessary for your
                    assessment.
                  </ReportP>
                </ReportSection>

                <ReportSection id="p-12" title="12. How long we keep information">
                  <ReportP>We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including:</ReportP>
                  <ReportList
                    items={[
                      'Providing the assessment and report',
                      'Managing consultations',
                      'Coordinating introductions',
                      'Arranging inspections',
                      'Handling complaints or warranty-related questions',
                      'Meeting legal and insurance requirements',
                      'Protecting our legal rights',
                      'Maintaining appropriate business records',
                    ]}
                  />
                  <ReportP>Our current retention schedule is:</ReportP>
                  <ReportList
                    items={[
                      'Assessment and report data: [insert period]',
                      'Electricity bills: [insert period]',
                      'Property photographs: [insert period]',
                      'Consultation notes: [insert period]',
                      'Installer-introduction records: [insert period]',
                      'Inspection records and reports: [insert period]',
                      'Marketing consent records: [insert period]',
                    ]}
                  />
                  <ReportP>
                    When information is no longer required, we will take reasonable steps to
                    securely delete, destroy or de-identify it.
                  </ReportP>
                </ReportSection>

                <ReportSection id="p-13" title="13. Access to your information">
                  <ReportP>You may request access to the personal information Watts Better holds about you.</ReportP>
                  <ReportP>You may also ask us to correct information that is inaccurate, incomplete or out of date.</ReportP>
                  <ReportP>Requests should be sent to: Privacy contact: [insert privacy email]</ReportP>
                  <ReportP>Please include:</ReportP>
                  <ReportList
                    items={[
                      'Your name',
                      'Contact details',
                      'The information requested',
                      'Any relevant assessment or appointment details',
                      'A description of the correction requested, if applicable',
                    ]}
                  />
                  <ReportP>We may need to verify your identity before responding.</ReportP>
                </ReportSection>

                <ReportSection id="p-14" title="14. Correcting your information">
                  <ReportP>If information we hold is inaccurate or incomplete, you may ask us to correct it.</ReportP>
                  <ReportP>This may include:</ReportP>
                  <ReportList
                    items={[
                      'Name',
                      'Contact details',
                      'Property address',
                      'Energy information',
                      'Installer-introduction information',
                      'Inspection information',
                    ]}
                  />
                  <ReportP>
                    If we have already shared incorrect information with an installer or service
                    provider, we will take reasonable steps to notify them of the correction where
                    appropriate.
                  </ReportP>
                </ReportSection>

                <ReportSection id="p-15" title="15. Privacy complaints">
                  <ReportP>If you have a concern about how Watts Better has handled your personal information, please contact us first.</ReportP>
                  <ReportP>Privacy complaints: [insert privacy email]</ReportP>
                  <ReportP>Please include:</ReportP>
                  <ReportList
                    items={['Your name', 'The nature of the concern', 'Relevant dates', 'Any supporting information', 'The outcome you are seeking']}
                  />
                  <ReportP>We will acknowledge and investigate complaints within a reasonable timeframe.</ReportP>
                  <ReportP>
                    If you are not satisfied with our response, or if we do not respond within a
                    reasonable timeframe, you may contact the Office of the Australian
                    Information Commissioner.
                  </ReportP>
                  <ReportP>OAIC: oaic.gov.au · Telephone: 1300 363 992</ReportP>
                </ReportSection>

                <ReportSection id="p-16" title="16. Data breaches">
                  <ReportP>We maintain procedures for identifying, assessing and responding to suspected data breaches.</ReportP>
                  <ReportP>
                    If a data breach occurs that is likely to result in serious harm, we will take
                    the steps required under applicable Australian privacy laws, including the
                    Notifiable Data Breaches scheme where applicable.
                  </ReportP>
                  <ReportP>This may include:</ReportP>
                  <ReportList
                    items={[
                      'Investigating the incident',
                      'Containing the incident',
                      'Assessing the potential harm',
                      'Notifying affected individuals',
                      'Notifying the OAIC',
                      'Taking steps to reduce the risk of further harm',
                    ]}
                  />
                </ReportSection>

                <ReportSection id="p-17" title="17. Information about other people">
                  <ReportP>
                    You should only provide personal information or photographs of another person
                    where you are authorised to do so.
                  </ReportP>
                  <ReportP>For example, do not upload:</ReportP>
                  <ReportList
                    items={[
                      "Another person's electricity bill",
                      'Photographs showing another person without permission',
                      'Personal documents belonging to someone else',
                      'Personal information that is not needed for the assessment',
                    ]}
                  />
                  <ReportP>
                    If another person is a joint homeowner or account holder, make sure they
                    understand that their information may be used for the assessment and related
                    services.
                  </ReportP>
                </ReportSection>

                <ReportSection id="p-18" title="18. Children">
                  <ReportP>Watts Better is not directed at children.</ReportP>
                  <ReportP>
                    We do not knowingly collect personal information from children for the
                    purpose of providing our services.
                  </ReportP>
                  <ReportP>
                    If you believe a child has provided personal information to us, contact
                    [insert privacy email].
                  </ReportP>
                </ReportSection>

                <ReportSection id="p-19" title="19. Links to other websites">
                  <ReportP>Our website may contain links to external websites, including:</ReportP>
                  <ReportList
                    items={[
                      'Government registers',
                      'Accreditation searches',
                      'Electricity providers',
                      'Installer websites',
                      'Inspection providers',
                      'Educational resources',
                    ]}
                  />
                  <ReportP>
                    We are not responsible for the privacy practices or content of external
                    websites. You should review the privacy policy of any external website
                    before submitting information.
                  </ReportP>
                </ReportSection>

                <ReportSection id="p-20" title="20. Changes to this policy">
                  <ReportP>We may update this Privacy Policy from time to time.</ReportP>
                  <ReportP>Updates may be made when:</ReportP>
                  <ReportList
                    items={[
                      'Our services change',
                      'We introduce a new assessment or report feature',
                      'We use a new service provider',
                      'Privacy laws change',
                      'Our data practices change',
                      'We improve the clarity of this policy',
                    ]}
                  />
                  <ReportP>
                    The updated policy will be published on this page with a revised
                    &ldquo;Last updated&rdquo; date.
                  </ReportP>
                </ReportSection>

                <ReportSection id="p-21" title="21. Contact us">
                  <ReportP>
                    For privacy questions, access requests, correction requests or complaints,
                    contact:
                  </ReportP>
                  <ReportP>
                    Watts Better · Legal entity: [insert legal entity name] · ABN: [insert ABN] ·
                    Address: [insert registered or business address] · Email: [insert privacy
                    email] · Telephone: [insert telephone number, if applicable]
                  </ReportP>
                </ReportSection>
              </TabsContent>

              <TabsContent value="terms" id="terms" className="mt-10 max-w-3xl">
                <p className="text-sm text-ink-soft">Last updated: [DATE]</p>

                <ReportSection id="t-1" title="1. About these terms">
                  <ReportP>
                    These terms govern your use of this website and our services. By using the
                    site or our services, you agree to them. If you do not agree, please do not
                    use them.
                  </ReportP>
                  <ReportP>[Legal entity name] · [ABN] · [Contact]</ReportP>
                </ReportSection>

                <ReportSection id="t-2" title="2. What we are — and what we are not">
                  <ReportP>
                    We provide independent advisory and coordination services for rooftop solar
                    and home battery systems.
                  </ReportP>
                  <ReportP>
                    We are not an installer, retailer, manufacturer or financier. We do not
                    design or install systems, and we do not sell solar or battery equipment.
                  </ReportP>
                  <ReportP>
                    We are not a provider of financial, legal, taxation or credit advice, and
                    nothing we provide is a substitute for it.
                  </ReportP>
                  <ReportP>
                    We do not provide engineering, electrical or structural certification. The
                    installer, not Watts Better, is responsible for the site assessment, the
                    final system design, equipment selection, installation, certification,
                    network requirements and rectification of installation issues.
                  </ReportP>
                </ReportSection>

                <ReportSection id="t-3" title="3. Our service">
                  <ReportP>
                    (a) Assessment and report. Generated from the information you provide. It is
                    indicative only — it is not a quote, not a system design, and not a site
                    survey.
                  </ReportP>
                  <ReportP>
                    (b) Consultation and photo capture. A short consultation and a guided photo
                    capture. These provide clarity; they are not an assessment of your property by
                    a qualified installer.
                  </ReportP>
                  <ReportP>(c) Introduction. If you request it, we may make one introduction to an installer.</ReportP>
                  <ReportP>
                    (d) Independent inspection. Where you proceed with an installer introduced
                    through us, we arrange an independent inspection after installation.
                  </ReportP>
                </ReportSection>

                <ReportSection id="t-4" title="4. Your responsibilities">
                  <ReportP>
                    You agree to provide accurate and complete information; to use the site
                    lawfully; and to submit only photographs you are entitled to provide.
                  </ReportP>
                </ReportSection>

                <ReportSection id="t-5" title="5. The report is indicative and not a guarantee">
                  <ReportP>
                    Savings, payback and performance figures are estimates based on your inputs,
                    current tariffs and incentives as at the date of your report. Tariffs change,
                    incentives step down and are subject to program rules, and actual outcomes
                    depend on site conditions, the final design, installation quality, your
                    behaviour and the weather. We do not guarantee any particular level of
                    savings, production or payback.
                  </ReportP>
                </ReportSection>

                <ReportSection id="t-6" title="6. Introductions">
                  <ReportP>We make one introduction only, and only if you request it.</ReportP>
                  <ReportP>Requesting an introduction does not commit you to anything.</ReportP>
                  <ReportP>We do not warrant the installer&apos;s work, pricing, timelines or outcomes.</ReportP>
                  <ReportP>
                    Your contract for the supply and installation of any system is between you
                    and the installer. We are not a party to it.
                  </ReportP>
                  <ReportP>
                    If you proceed with an installer introduced through us, the installer pays us
                    an introducer fee. A portion of that fee funds the independent inspection, and
                    the balance covers our advice and coordination. This is explained further on
                    our How We Are Paid page.
                  </ReportP>
                </ReportSection>

                <ReportSection id="t-7" title="7. Independent inspection">
                  <ReportP>
                    The inspection is carried out by a third-party inspector engaged by us. Our
                    current partner is TechSafe Australia.
                  </ReportP>
                  <ReportP>
                    The inspection assesses the accessible parts of your installation within the
                    agreed scope. It is not a full technical audit and may not identify every
                    issue.
                  </ReportP>
                  <ReportP>
                    The inspection does not replace the installer&apos;s responsibilities,
                    required electrical certification, network approval, state or territory
                    electrical-safety requirements, or any government inspection or compliance
                    program.
                  </ReportP>
                  <ReportP>
                    We do not warrant that an inspection will identify all defects or
                    non-compliances.
                  </ReportP>
                </ReportSection>

                <ReportSection id="t-8" title="8. Fees and payment">
                  <ReportP>
                    The assessment, report and consultation are provided at no charge to you
                    [SLOT: confirm]. If you proceed with an installer introduced through us, they
                    pay us an introducer fee. [SLOT: if you offer a standalone paid inspection,
                    state the fee here.]
                  </ReportP>
                </ReportSection>

                <ReportSection id="t-9" title="9. Australian Consumer Law">
                  <ReportP>
                    Nothing in these terms excludes, restricts or modifies any guarantee, right or
                    remedy you have under the Australian Consumer Law (Schedule 2 to the
                    Competition and Consumer Act 2010 (Cth)) that cannot lawfully be excluded,
                    restricted or modified.
                  </ReportP>
                </ReportSection>

                <ReportSection id="t-10" title="10. Liability">
                  <ReportP>
                    Subject to clause 9, and to the extent permitted by law: our services are
                    provided with due care and skill, but we are not liable for indirect or
                    consequential loss; and our total liability to you is limited to [SLOT: e.g.
                    resupply of the service, or the value of the introducer fee]. Nothing in
                    these terms limits liability that cannot be limited by law.
                  </ReportP>
                </ReportSection>

                <ReportSection id="t-11" title="11. Intellectual property">
                  <ReportP>
                    Your report is provided for your personal use. You may not resell or republish
                    it.
                  </ReportP>
                </ReportSection>

                <ReportSection id="t-12" title="12. Privacy">
                  <ReportP>Our handling of your personal information is described in our Privacy Policy above.</ReportP>
                </ReportSection>

                <ReportSection id="t-14" title="14. Disputes and complaints">
                  <ReportP>Please contact us first via our Contact page so we can attempt to resolve any issue.</ReportP>
                </ReportSection>

                <ReportSection id="t-15" title="15. Governing law">
                  <ReportP>
                    These terms are governed by the laws of Queensland, Australia, and the courts
                    of Queensland have jurisdiction.
                  </ReportP>
                </ReportSection>

                <ReportSection id="t-16" title="16. Changes to these terms">
                  <ReportP>
                    We may update these terms. Continued use of the site or services after an
                    update constitutes acceptance.
                  </ReportP>
                </ReportSection>
              </TabsContent>
            </Tabs>
          </div>
        </Section>

        <RelatedReading keys={['how-we-are-paid', 'contact-us', 'about-us']} />
      </main>
      <SiteFooter />
    </div>
  )
}
