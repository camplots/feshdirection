import { ChevronDown } from 'lucide-react'
import { NAVY } from '@/components/concept/theme'

export function Marquee({ text }: { text: string }) {
  return (
    <section
      className="overflow-hidden border-b-[3px] border-black py-5"
      style={{ backgroundColor: NAVY }}
      aria-hidden="true"
    >
      <div className="flex animate-[marquee_22s_linear_infinite] gap-8 whitespace-nowrap text-2xl font-bold uppercase tracking-tight text-white will-change-transform">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="flex items-center gap-8">
            {text}
            <span style={{ color: '#F5F65A' }}>★</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

export function StepList({
  steps,
  bg,
}: {
  steps: { number: string; title: string; description: string }[]
  bg?: string
}) {
  return (
    <ul className="border-t-[3px] border-black" style={bg ? { backgroundColor: bg } : undefined}>
      {steps.map((step, i) => (
        <li
          key={step.number}
          className={`flex items-center justify-between gap-4 border-black px-6 py-5 md:px-12 ${
            i !== steps.length - 1 ? 'border-b-[3px]' : ''
          }`}
        >
          <div className="flex items-center gap-5">
            <span className="text-lg font-bold tabular-nums">{step.number}</span>
            <div>
              <p className="text-lg font-bold uppercase tracking-wide">{step.title}</p>
              <p className="hidden text-sm font-medium text-black/70 md:block">{step.description}</p>
            </div>
          </div>
          <ChevronDown className="size-5 shrink-0" strokeWidth={2.5} />
        </li>
      ))}
    </ul>
  )
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-[3px] border-black bg-white p-7">
      <p className="text-5xl font-bold tabular-nums md:text-6xl">{value}</p>
      <p className="mt-3 text-sm leading-relaxed font-semibold">{label}</p>
    </div>
  )
}

export function ChecklistCard({
  title,
  items,
  bg = '#fff',
}: {
  title: string
  items: string[]
  bg?: string
}) {
  return (
    <div className="border-[3px] border-black p-7" style={{ backgroundColor: bg }}>
      <p className="text-sm font-bold uppercase tracking-[0.2em]">{title}</p>
      <ul className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed font-medium">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-black" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function FaqBlock({
  items,
}: {
  items: { q: string; a: string }[]
}) {
  return (
    <div className="border-t-[3px] border-black">
      {items.map((item, i) => (
        <div
          key={item.q}
          className={`px-6 py-6 md:px-12 ${i !== items.length - 1 ? 'border-b-[3px] border-black' : ''}`}
        >
          <p className="text-lg font-bold uppercase tracking-wide">{item.q}</p>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed font-medium">{item.a}</p>
        </div>
      ))}
    </div>
  )
}
