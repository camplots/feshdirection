import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PillButton } from '@/components/concept/pill-button'
import { Marquee, StepList } from '@/components/concept/blocks'
import { MINT, YELLOW, LAVENDER, NAVY, PEACH } from '@/components/concept/theme'

const steps = [
  { number: '01', title: 'Calculate', description: 'See how your home uses energy.' },
  { number: '02', title: 'Understand', description: 'See what your results mean.' },
  { number: '03', title: 'Clarify', description: 'Book a call with us for extra guidance.' },
  { number: '04', title: 'Choose', description: 'Access an installer if elected.' },
  { number: '05', title: 'Verify', description: 'Get an independent inspection after install.' },
]

export default function Home() {
  return (
    <div className="text-black">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b-[3px] border-black">
          <div className="relative aspect-[4/3] w-full md:aspect-[16/9]">
            <Image
              src="/images/concept-hero-warehouse-canyon.jpg"
              alt="Illustration of a pink sun over a pastel purple sky, a building with a rooftop covered in solar panels perched on a canyon edge, surrounded by oversized teal flowers and freestanding solar panel arrays"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end gap-5 bg-gradient-to-t from-black/60 via-black/15 to-transparent px-6 py-10 md:px-12 md:py-16">
              <h1 className="max-w-2xl text-4xl leading-[1.05] font-bold uppercase tracking-tight text-white md:text-6xl">
                Solar, made clear.
              </h1>
              <p className="max-w-md text-base font-semibold text-white/90 md:text-lg">
                Independent guidance before you choose a system, and an independent inspection
                after it&apos;s installed.
              </p>
              <PillButton href="/calculator" variant="light">
                Explore your options
              </PillButton>
            </div>
          </div>
          <div
            className="flex flex-wrap items-center justify-between gap-4 border-t-[3px] border-black px-6 py-4 md:px-12"
            style={{ backgroundColor: YELLOW }}
          >
            <p className="text-sm font-bold uppercase tracking-wide">
              Not sure where to start? See what a real report looks like.
            </p>
            <Link href="/the-report" className="text-sm font-bold uppercase tracking-wide underline">
              See a sample report
            </Link>
          </div>
        </section>

        {/* Bold statement */}
        <section className="grid border-b-[3px] border-black md:grid-cols-2" style={{ backgroundColor: PEACH }}>
          <div className="flex flex-col justify-center gap-6 border-b-[3px] border-black px-6 py-16 md:border-r-[3px] md:border-b-0 md:px-12 md:py-24">
            <h2 className="max-w-lg text-4xl leading-[1.05] font-bold uppercase tracking-tight md:text-5xl">
              A quote gives you a price. Not a plan.
            </h2>
            <p className="max-w-md text-lg font-semibold">
              Understand what you&apos;re actually comparing before you choose.
            </p>
          </div>
          <div className="relative min-h-[240px] overflow-hidden md:min-h-full">
            <Image
              src="/images/concept-solar-field-horizon.jpg"
              alt="Illustration of an endless field of solar panels stretching toward a pink sun at the horizon under a purple sky"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Navy / inspection panel */}
        <section className="grid border-b-[3px] border-black md:grid-cols-2" style={{ backgroundColor: NAVY }}>
          <div className="relative min-h-[280px] border-b-[3px] border-black md:min-h-[420px] md:border-r-[3px] md:border-b-0">
            <Image
              src="/images/concept-inspection-neon-data.jpg"
              alt="Neon-outline illustration of a magnifying glass inspecting a solar panel report, connected to a glowing circuit chip, charts, and a map of inspection sites"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 px-6 py-16 text-white md:px-12 md:py-24">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8AEFC1]">System status</p>
            <h2 className="text-4xl leading-[1] font-bold uppercase tracking-tight md:text-5xl">
              Don&apos;t hope. <span style={{ color: YELLOW }}>Insist.</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed font-medium text-white/85">
              We arrange an independent inspection to check the compliance, workmanship, safety,
              and functioning of your installation — then hand the report to you.
            </p>
            <PillButton href="/installation-inspections" variant="light">
              How it works
            </PillButton>
          </div>
        </section>

        {/* Five stages list */}
        <section className="border-b-[3px] border-black" style={{ backgroundColor: LAVENDER }}>
          <div className="px-6 py-14 md:px-12 md:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em]">The five stages</p>
            <h2 className="mt-3 max-w-2xl text-3xl leading-[1.05] font-bold uppercase tracking-tight md:text-5xl">
              Comprehensive inspections. Standard.
            </h2>
          </div>
          <StepList steps={steps} />
        </section>

        {/* Playful figures + CTA split */}
        <section className="grid border-b-[3px] border-black md:grid-cols-2">
          <div
            className="flex flex-col items-start justify-center gap-5 border-b-[3px] border-black px-6 py-16 md:border-r-[3px] md:border-b-0 md:px-12 md:py-24"
            style={{ backgroundColor: YELLOW }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em]">Comparing quotes?</p>
            <h3 className="text-3xl leading-[1.05] font-bold uppercase tracking-tight md:text-4xl">
              Talk to a human, not a sales script.
            </h3>
            <p className="max-w-sm text-base font-medium">
              Book a 15-minute call for open, independent advice.
            </p>
            <PillButton href="/contact-us" variant="dark">
              Book a chat
            </PillButton>
          </div>
          <div className="relative min-h-[320px] overflow-hidden md:min-h-full">
            <Image
              src="/images/concept-talk-to-human-solar-village.jpg"
              alt="Illustration of a small pastel-colored house with a solar roof and an electric car parked outside, surrounded by rows of tilted solar panel arrays under a pink sun and pastel purple, yellow, and orange clouds"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <Marquee text="Stop guessing. Start verifying." />

        {/* Who pays / disclosure */}
        <section className="grid border-b-[3px] border-black md:grid-cols-[0.7fr_1fr]" style={{ backgroundColor: LAVENDER }}>
          <div className="border-b-[3px] border-black px-6 py-14 md:border-r-[3px] md:border-b-0 md:px-12 md:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em]">Transparency</p>
            <h2 className="mt-4 text-3xl leading-tight font-bold uppercase tracking-tight md:text-4xl">
              Who pays us. And what for.
            </h2>
          </div>
          <div className="px-6 py-14 md:px-12 md:py-20">
            <p className="text-base leading-relaxed font-medium">
              If you ask us to make an installer introduction and proceed with that installer,
              they pay Watts Better an introducer fee. Part of it funds your independent
              inspection; the rest covers our advice and coordination.
            </p>
            <p className="mt-4 text-base leading-relaxed font-medium">
              We never share your details unless you ask us to.
            </p>
            <Link
              href="/how-we-are-paid"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide underline"
            >
              Read the full breakdown
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="grid border-b-[3px] border-black md:grid-cols-2" style={{ backgroundColor: MINT }}>
          <div className="flex flex-col items-start justify-center gap-6 border-b-[3px] border-black px-6 py-16 md:border-r-[3px] md:border-b-0 md:px-12 md:py-24">
            <h2 className="max-w-lg text-4xl leading-[1.05] font-bold uppercase tracking-tight md:text-5xl">
              Start with your energy use.
            </h2>
            <p className="max-w-md text-lg font-medium">
              A quick assessment to help you understand your solar and battery options.
            </p>
            <PillButton href="/calculator" variant="dark">
              Start assessment
            </PillButton>
          </div>
          <div className="relative min-h-[260px] overflow-hidden md:min-h-full">
            <Image
              src="/images/concept-greenhouse-dome.jpg"
              alt="Illustration of a solar-powered geodesic greenhouse dome full of plants, surrounded by oversized teal flowers under a pink sun and orange sky"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
