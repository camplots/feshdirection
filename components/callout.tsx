import { cn } from 'cn'

export function Callout({
  label,
  children,
  className,
  tone = 'copper',
}: {
  label: string
  children: React.ReactNode
  className?: string
  tone?: 'copper' | 'oxblood'
}) {
  return (
    <aside
      className={cn(
        'relative border-l-[3px] bg-paper-deep p-6 md:p-7',
        tone === 'copper' ? 'border-copper' : 'border-oxblood',
        className
      )}
    >
      <span
        className={cn(
          'absolute top-0 left-0 -translate-x-[3px] -translate-y-1/2 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-paper',
          tone === 'copper' ? 'bg-copper' : 'bg-oxblood'
        )}
      >
        {label}
      </span>
      <div className="mt-2 text-[15px] leading-relaxed text-ink">{children}</div>
    </aside>
  )
}
