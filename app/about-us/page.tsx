import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Ban, Eye, MessageSquareText, ReceiptText } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PillButton } from '@/components/concept/pill-button'
import { Marquee, StatCard } from '@/components/concept/blocks'
import { MINT, YELLOW, LAVENDER, NAVY, PEACH, PINK } from '@/components/concept/theme'

export const metadata: Metadata = {
  title: 'About Us — Watts Better',
  description:
    'Seven years of independent solar and battery guidance across Queensland. We help you decide before you buy, and verify after it is installed.',
}

const commitments = [
  {
    icon: Eye,
    title: 'One introduction, if you ask for it.',
    description: "We don't sell your details to a network of installers.",
  },
  {
    icon: MessageSquareText,
    title: 'Clarity first.',
    description: 'A short chat and a photo capture before any introduction, so we work from facts.',
  },
  {
    icon: Ban,
    title: 'Independent verification.',
    description: 'An independent inspector checks the finished install, and you get the report.',
  },
  {
    icon: ReceiptText,
    title: 'A disclosed fee.',
    description:
      'If you proceed with an installer we introduce, they pay an introducer fee — part of which funds your inspection.',
    href: '/how-we-are-paid',
    linkLabel: "How we're paid",
  },
]

const wontDo = [
  'Sell your information.',
  "Tell you a battery is right for your home when it isn't.",
  'Let you rely on an average that has nothing to do with your house.',
]

export default function AboutUs() {
  return (
    <div className="text-black">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b-[3px] border-black" style={{ backgroundColor: LAVENDER }}>
          <div className="relative aspect-[1376/752] w-full">
            <Image
              src="/images/concept-brisbane-local-process.jpg"
              alt="Illustration of the Brisbane skyline and Story Bridge at sunset with a koala and kookaburra in a tree, a home with rooftop solar and a battery, a greenhouse growing vegetables, and diagrams showing solar to inverter to battery to home, and quotes to purchase order to contract"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="border-t-[3px] border-black px-6 py-10 md:px-12 md:py-14" style={{ backgroundColor: YELLOW }}>
            <p className="text-sm font-bold uppercase tracking-[0.2em]">Company</p>
            <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] font-bold uppercase tracking-tight md:text-6xl">
              Seven years. <span style={{ color: PINK }}>Thousands</span> of appointments.
            </h1>
            <p className="mt-5 max-w-xl text-lg font-semibold">
              Independent solar and battery guidance — before you choose, and independently
              inspected after. Based in Brisbane, working across Queensland.
            </p>
          </div>
        </section>

        {/* Why we exist */}
        <section className="grid border-b-[3px] border-black md:grid-cols-2">
          <div className="flex flex-col justify-center gap-5 border-b-[3px] border-black bg-white px-6 py-16 md:border-r-[3px] md:border-b-0 md:px-12 md:py-24">
            <p className="text-sm font-bold uppercase tracking-[0.2em]">Why Watts Better exists</p>
            <h2 className="text-3xl leading-[1.05] font-bold uppercase tracking-tight md:text-4xl">
              Most of the time, it wasn&apos;t done properly.
            </h2>
            <p className="max-w-md text-base leading-relaxed font-medium">
              We&apos;ve sat across the table from enough homeowners to know the pattern. A slick
              proposal, an average payback figure, and no way to tell whether any of it is real.
              Then the panels go on the roof and the homeowner is left working out on their own
              whether the job was done properly.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-5 px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: MINT }}>
            <p className="max-w-md text-base leading-relaxed font-medium">
              That&apos;s why Watts Better exists. Not to sell you solar — to make sure you
              understand what you&apos;re buying before you buy it, and to make sure someone
              independent checks it afterwards.
            </p>
            <PillButton href="/calculator" variant="dark">
              Start your assessment
            </PillButton>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b-[3px] border-black px-6 py-14 md:px-12 md:py-20" style={{ backgroundColor: PEACH }}>
          <p className="text-sm font-bold uppercase tracking-[0.2em]">What we do</p>
          <h2 className="mt-3 max-w-2xl text-3xl leading-[1.05] font-bold uppercase tracking-tight md:text-5xl">
            Solar and home batteries. That&apos;s the whole scope.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed font-medium">
            No hot water, no EV chargers, no heat pumps, no upsells into things you didn&apos;t
            ask about. Depth over breadth — batteries are where the money, the compliance risk
            and the complexity now sit.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <StatCard value="7+" label="Years advising on rooftop solar and home batteries." />
            <StatCard value="1000s" label="Appointments spent seeing what actually separates good installs from bad ones." />
            <StatCard value="0" label="Hardware sold. We're a consultant, not an installer." />
          </div>
        </section>

        <Marquee text="Independent, always." />

        {/* How we work */}
        <section style={{ backgroundColor: NAVY }} className="border-b-[3px] border-black">
          <div className="px-6 py-14 text-white md:px-12 md:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8AEFC1]">How we work</p>
            <h2 className="mt-3 max-w-2xl text-3xl leading-[1.05] font-bold uppercase tracking-tight md:text-5xl">
              Four commitments, kept the same way every time.
            </h2>
          </div>
          <div className="grid border-t-[3px] border-black sm:grid-cols-2">
            {commitments.map((item, i) => (
              <div
                key={item.title}
                className={`flex flex-col gap-4 border-black p-7 text-white md:p-10 ${
                  i % 2 === 0 ? 'md:border-r-[3px]' : ''
                } ${i < commitments.length - (commitments.length % 2 === 0 ? 2 : 1) ? 'border-b-[3px]' : ''}`}
              >
                <item.icon className="size-6 text-[#F5F65A]" strokeWidth={2} />
                <h3 className="text-lg font-bold uppercase tracking-wide">{item.title}</h3>
                <p className="max-w-sm text-sm leading-relaxed font-medium text-white/80">
                  {item.description}
                </p>
                {item.href && (
                  <Link
                    href={item.href}
                    className="mt-1 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide underline"
                  >
                    {item.linkLabel}
                    <ArrowRight className="size-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* What we won't do */}
        <section className="border-b-[3px] border-black px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: PINK }}>
          <p className="text-sm font-bold uppercase tracking-[0.2em]">What we won&apos;t do</p>
          <ul className="mt-8 flex flex-col gap-6 md:gap-8">
            {wontDo.map((line) => (
              <li
                key={line}
                className="flex items-start gap-4 border-b-[3px] border-black pb-6 last:border-b-0 last:pb-0 md:gap-6"
              >
                <span className="mt-1.5 text-2xl font-bold">—</span>
                <p className="text-2xl leading-snug font-bold uppercase tracking-tight md:text-3xl">
                  {line}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Final CTA */}
        <section className="flex flex-col items-start gap-6 px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: YELLOW }}>
          <h2 className="max-w-2xl text-4xl leading-[1.05] font-bold uppercase tracking-tight md:text-6xl">
            Questions? Let&apos;s talk.
          </h2>
          <p className="max-w-lg text-lg font-medium">
            Book a 15-minute call for open, independent advice — no sales script.
          </p>
          <PillButton href="/contact-us" variant="dark">
            Book a chat
          </PillButton>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
