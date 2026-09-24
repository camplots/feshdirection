import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Eyebrow } from '@/components/eyebrow'

interface Faq {
  q: string
  a: React.ReactNode
}

export function FaqList({
  title = 'Common questions',
  items,
}: {
  title?: string
  items: Faq[]
}) {
  return (
    <div>
      <Eyebrow>Questions on file</Eyebrow>
      <h2 className="mt-4 font-display text-2xl font-semibold text-ink md:text-3xl">{title}</h2>
      <Accordion className="mt-8 border-t border-rule">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-rule py-1">
            <AccordionTrigger className="py-5 font-display text-lg font-normal text-ink hover:no-underline">
              <span className="mr-4 font-mono text-xs text-copper">
                {String(i + 1).padStart(2, '0')}
              </span>
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 pl-9 text-[15px] leading-relaxed text-ink-soft">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
