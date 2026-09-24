import type { Metadata } from 'next'
import { Mail, MessageSquareText, Phone } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { YELLOW, LAVENDER, MINT } from '@/components/concept/theme'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'

export const metadata: Metadata = {
  title: 'Contact Us — Watts Better',
  description: "Questions about solar or batteries? Need help understanding your options? We're here to help.",
}

export default function ContactUsPage() {
  return (
    <div className="text-black">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="border-b-[3px] border-black px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: YELLOW }}>
          <p className="text-sm font-bold uppercase tracking-[0.2em]">Company</p>
          <h1 className="mt-3 max-w-2xl text-4xl leading-[1.05] font-bold uppercase tracking-tight md:text-6xl">
            Contact us
          </h1>
          <p className="mt-5 max-w-xl text-lg font-semibold">
            Questions about solar or batteries? Need help understanding your options? We&apos;re
            here to help.
          </p>
        </section>

        {/* Form + callouts */}
        <section className="grid border-b-[3px] border-black md:grid-cols-[1fr_0.7fr]">
          <form className="border-b-[3px] border-black bg-white px-6 py-14 md:border-r-[3px] md:border-b-0 md:px-12 md:py-20">
            <FieldGroup>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="name" className="text-sm font-bold uppercase tracking-wide text-black">
                    Name
                  </FieldLabel>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your full name"
                    required
                    className="rounded-none border-[3px] border-black px-4 py-3 shadow-none focus-visible:ring-0 focus-visible:border-black"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email" className="text-sm font-bold uppercase tracking-wide text-black">
                    Email
                  </FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className="rounded-none border-[3px] border-black px-4 py-3 shadow-none focus-visible:ring-0 focus-visible:border-black"
                  />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="postcode" className="text-sm font-bold uppercase tracking-wide text-black">
                  Postcode (optional)
                </FieldLabel>
                <Input
                  id="postcode"
                  name="postcode"
                  inputMode="numeric"
                  placeholder="4000"
                  className="rounded-none border-[3px] border-black px-4 py-3 shadow-none focus-visible:ring-0 focus-visible:border-black"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="message" className="text-sm font-bold uppercase tracking-wide text-black">
                  Message
                </FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Awaiting your words"
                  required
                  className="rounded-none border-[3px] border-black px-4 py-3 shadow-none focus-visible:ring-0 focus-visible:border-black"
                />
              </Field>
            </FieldGroup>
            <Button
              type="submit"
              size="lg"
              className="mt-8 h-12 w-full rounded-full border-[3px] border-black bg-black px-6 text-sm font-bold uppercase tracking-wide text-white shadow-none hover:bg-white hover:text-black sm:w-auto"
            >
              Send message
            </Button>
          </form>

          <div className="flex flex-col">
            <div className="flex flex-col gap-4 border-b-[3px] border-black px-6 py-10 md:px-12 md:py-14" style={{ backgroundColor: LAVENDER }}>
              <p className="text-sm font-bold uppercase tracking-[0.2em]">Prefer to talk?</p>
              <span className="flex items-start gap-3 text-[15px] leading-relaxed font-medium">
                <Phone className="mt-0.5 size-4 shrink-0" strokeWidth={2.5} />
                Book a 15-minute chat before you commit to anything.
              </span>
              <span className="flex items-start gap-3 text-[15px] leading-relaxed font-medium">
                <Mail className="mt-0.5 size-4 shrink-0" strokeWidth={2.5} />
                We reply from a real inbox, not a ticket queue.
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-4 px-6 py-10 md:px-12 md:py-14" style={{ backgroundColor: MINT }}>
              <p className="text-sm font-bold uppercase tracking-[0.2em]">What happens next</p>
              <span className="flex items-start gap-3 text-[15px] leading-relaxed font-medium">
                <MessageSquareText className="mt-0.5 size-4 shrink-0" strokeWidth={2.5} />
                Every message gets a considered reply — no installer sees your details until you
                ask us to introduce one.
              </span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
