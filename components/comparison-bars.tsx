import { cn } from 'cn'

interface BarItem {
  label: string
  value: number
  tone: 'copper' | 'oxblood' | 'ink-soft'
  note?: string
}

const toneClass: Record<BarItem['tone'], string> = {
  copper: 'bg-copper',
  oxblood: 'bg-oxblood',
  'ink-soft': 'bg-ink-soft/40',
}

export function ComparisonBars({ items }: { items: BarItem[] }) {
  const max = Math.max(...items.map((i) => i.value))
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <div key={item.label}>
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <span className="text-sm text-ink">{item.label}</span>
            <span className="font-mono text-lg text-ink">{item.value.toFixed(2)}%</span>
          </div>
          <div className="h-2.5 w-full bg-paper-deep">
            <div
              className={cn('h-full', toneClass[item.tone])}
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </div>
          {item.note && <p className="mt-2 text-xs leading-relaxed text-ink-soft">{item.note}</p>}
        </div>
      ))}
    </div>
  )
}
