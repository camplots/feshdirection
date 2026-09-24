import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Eyebrow } from '@/components/eyebrow'

export const metadata: Metadata = {
  title: 'The Calculator — Watts Better',
  description: 'Start your assessment with your energy use.',
}

export default function CalculatorPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <div className="border-b border-rule bg-paper">
          <div className="mx-auto max-w-[1400px] px-5 pt-10 pb-6 md:px-8">
            <Eyebrow>Start your assessment</Eyebrow>
          </div>
        </div>
        <div className="mx-auto max-w-[1400px] px-0 py-0 md:px-8 md:py-10">
          <div className="h-[900px] w-full overflow-hidden border-0 border-rule bg-paper md:border">
            <iframe
              src="https://4p6j5dq8mm.zite.so/"
              title="Watts Better calculator"
              className="size-full"
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
